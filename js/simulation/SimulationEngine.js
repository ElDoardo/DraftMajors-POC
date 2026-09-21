import {Match} from './Match.js';
import {Stage} from './Stage.js';
import { ProbabilityCalculator } from './ProbabilityCalculator.js';
import { MajorSimulation } from './MajorSimulation.js';

export class SimulationEngine {

    constructor(teamFactory) {
        this.teamFactory = teamFactory;
    }

/* TORNEIO */
    //engine da simulação do torneio
    simulateMajor(simulation) {

        while (simulation.status === "IN_PROGRESS") {

            this.simulateNextRound(simulation);
        }

        return simulation;
    }  

    //cria torneio
    createMajorSimulation(userTeam, opponentTeams) {

        if(opponentTeams.length < 31) {
            throw new Error(
                "A Simulação exige ao menos 31 equipes históricas."
            );
        }

        const opponentPool = opponentTeams.map(
            team => this.teamFactory.buildOpponentTeam(team)
        );
        
        const stage1Pool = opponentPool.slice(0, 15);

        const stage2Pool = opponentPool.slice(15, 23);

        const stage3Pool = opponentPool.slice(23, 31);


        const stage1 = new Stage ({
            id: crypto.randomUUID(),
            name: "Stage 1",
            type: "SWISS",
            teams: [
                userTeam,
                ...stage1Pool
            ]
        });

        const simulation = new MajorSimulation({
            id: crypto.randomUUID(),
            userTeam
        });

        simulation.addStage(stage1);

        simulation.stagePools.stage2 = stage2Pool;

        simulation.stagePools.stage3 = stage3Pool;

        return simulation;
    }

    //partidas do torneio
    simulateMatch(teamA, teamB, stage, roundName) {

        const match = new Match({
            id: crypto.randomUUID(),
            teamA,
            teamB,
            stage: stage.name,
            round: stage.currentRound,
            roundName
        });

        const result = 
            ProbabilityCalculator.pickWinner(
                teamA, teamB
            );

        match.setResult(
            result.winner, 
            result.loser, 
            result.probabilities
        );

        if(stage.type === "SWISS"){
            this.registerSwissResult(result);
        }

        stage.addMatch(match);

        return match;
    }

    //rounds do torneio
    simulateNextRound(simulation) {

        if (simulation.status !== "IN_PROGRESS") {
            return null;
        }

        const stage =
            simulation.getCurrentStage();

        if (!stage) {
            return null;
        }
        // rounds da fase de grupos suiça
        if (stage.type === "SWISS") {

            const result =
                this.simulateSwissRound(
                    stage
                );

            simulation.lastRoundMatches = result.matches;

            simulation.lastRoundByes = result.byes;

            simulation.lastRoundStage = stage.name;

            if (simulation.userTeam.status === "ELIMINATED") {

                simulation.eliminateUserTeam();

                return result;
            }

            if (stage.completed) {

                this.advanceToNextStage(
                    simulation
                );
            }

            return result;
        }
        // rounds dos playoffs
        if (stage.type === "PLAYOFFS") {

            const matches =
                this.simulatePlayoffRound(
                    stage
                );

            simulation.lastRoundMatches = matches;

            simulation.lastRoundByes = [];

            simulation.lastRoundStage = stage.name;

            if (stage.completed) {

                const champion = stage.currentTeams[0];

                if (champion === simulation.userTeam) {

                    simulation.setChampion(champion);

                } else {

                    simulation.eliminateUserTeam();
                }

                return matches;
            }

            const userStillAlive = stage.currentTeams.includes(
                simulation.userTeam
            );

            if (!userStillAlive) {

                simulation.eliminateUserTeam();
            }

            return matches;
        }

        return null;
    }

    //estágios do torneio
    advanceToNextStage(simulation) {

        const currentStage = simulation.getCurrentStage();

        if (simulation.status !== "IN_PROGRESS") {
            return null;
        }

        if (!currentStage || !currentStage.completed) {
            return null;
        }

        let nextStage = null;

        if (currentStage.name === "Stage 1") {

            nextStage =
                this.createNextSwissStage(
                    simulation,
                    "stage2",
                    2
                );
        }

        else if (currentStage.name === "Stage 2") {

            nextStage =
                this.createNextSwissStage(
                    simulation,
                    "stage3",
                    3
                );
        }

        else if (currentStage.name === "Stage 3") {

            nextStage = this.createPlayoffs(simulation);
        }

        if (!nextStage) {
            return null;
        }

        simulation.addStage(nextStage);

        simulation.nextStage();

        return nextStage;
    }

/* FASE DE GRUPOS */
    //monta pares para fase de grupos
    createSwissPairings(teams){
        const activeTeams = teams
            .filter(team => team.isActive())
            .sort((a,b) => {
                
                if(b.wins !== a.wins){
                    return(b.wins - a.wins);
                }

                if(a.losses !== b.losses){
                    return(a.losses - b.losses);
                }

                return(Math.random() - 0.5);
            });

        const remaining = [...activeTeams];

        const pairings = [];

        while(remaining.length >= 2){
            const teamA = remaining.shift();

            let opponentIndex = remaining.findIndex(
                team => !teamA.hasPlayedAgainst(team.id)
            );

            if(opponentIndex === -1){
                opponentIndex = 0;
            }

            const [teamB] = remaining.splice(opponentIndex,1);

            pairings.push({
                teamA, teamB
            });
        }

        if (remaining.length === 1) {

            const team = remaining[0];

            pairings.push({
                teamA: team,
                teamB: null
            });
        }

        return pairings;
    }

    //rounds da fase de grupos
    simulateSwissRound(stage) {

        stage.nextRound();

        const roundName = `Round ${stage.currentRound}`;

        const pairings = this.createSwissPairings(stage.teams);

        const matches = [];
        const byes = [];

        for (const pairing of pairings) {

            const { teamA, teamB} = pairing;

            if (!teamB) {

                teamA.registerBye();

                if (teamA.wins >= 3) {
                    teamA.qualify();
                }

                stage.addBye(teamA);

                byes.push(teamA);

                continue;
            }

            const match =
                this.simulateMatch(
                    teamA,
                    teamB,
                    stage,
                    roundName
                );

            matches.push(match);
        }

        if (this.isSwissComplete(stage)) {
            stage.complete();
        }

        return {matches, byes};
    }

    //estágios da fase de grupos
    createNextSwissStage(simulation, poolName, stageNumber) {

        const currentStage =
            simulation.getCurrentStage();

        const qualified =
            currentStage.getQualifiedTeams();

        qualified.forEach(team =>
            team.resetRecord()
        );

        const newTeams =
            simulation.stagePools[
                poolName
            ];

        return new Stage({
            id: crypto.randomUUID(),

            name:
                `Stage ${stageNumber}`,

            type: "SWISS",

            teams: [
                ...qualified,
                ...newTeams
            ]
        });
    }

    //resultados da fase de grupos
    registerSwissResult({ winner, loser}){

        winner.registerWin();
        loser.registerLoss();

        winner.addOpponent(loser.id);

        loser.addOpponent(winner.id);

         if (winner.wins >= 3) {
            winner.qualify();
        }

        if (loser.losses >= 3) {
            loser.eliminate();
        }
    }

    //finaliza fase de grupos
    isSwissComplete(stage){

        return stage.teams.every(
            team => team.wins >= 3 || team.losses >=3
        );
    }

/* PLAYOFFS */
    //cria playoffs
    createPlayoffs(simulation) {

        const currentStage = simulation.getCurrentStage();

        const qualified = currentStage.getQualifiedTeams();

        qualified.forEach(team =>
            team.resetRecord()
        );

        return new Stage({
            id: crypto.randomUUID(),
            name: "Playoffs",
            type: "PLAYOFFS",
            teams: qualified
        });
    }

    //nome dos rounds de playoffs 
    getPlayoffRoundName(stage) {

        switch (
            stage.currentTeams.length
        ) {

            case 8:
                return "Quarterfinals";

            case 4:
                return "Semifinals";

            case 2:
                return "Grand Final";

            default:
                return "Playoffs";
        }
    }

    //rounds de playoffs
    simulatePlayoffRound(stage){

        const roundName = this.getPlayoffRoundName(
            stage
        );

        stage.nextRound();

        const currentTeams = [...stage.currentTeams];

        const winners = [];
        const matches = [];

        for (let i = 0; i < currentTeams.length; i += 2) {

            const teamA = currentTeams[i];

            const teamB = currentTeams[i + 1];

            const match =
                this.simulateMatch(
                    teamA,
                    teamB,
                    stage,
                    roundName
                );

            matches.push(match);

            winners.push(match.winner);
        }

        stage.currentTeams = winners;

        if (winners.length === 1) {
            stage.complete();
        }

        return matches;
    }
}