import {Match} from './Match.js';
import {Stage} from './Stage.js';
import { ProbabilityCalculator } from './ProbabilityCalculator.js';
import { MajorSimulation } from './MajorSimulation.js';

export class SimulationEngine {

    constructor(teamFactory) {
        this.teamFactory = teamFactory;
    }

    /* CRIA MAJOR */
    createMajorSimulation(userTeam, opponentTeams) {

        if(opponentTeams.length < 31) {
            throw new Error(
                "A Simulação exige ao menos 31 equipes históricas."
            );
        }

        const opponentPool = opponentTeams.map(
            team => 
                this.teamFactory.buildOpponentTeam(team)
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

    /* SIMULA PARTIDA */
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

        match.setResult(result);

        if(stage.type === "SWISS"){
            this.registerSwissResult(result);
        }

        stage.addMatch(match);

        return match;
    }

    /* SUIÇO */
    //registra resultados
    registerSwissResult({
        winner,
        loser
    }){

        winner.registerWin();
        loser.registerLoss();

        winner.addOpponent(
            loser.id
        );

        loser.addOpponent(
            winner.id
        );

         if (winner.wins >= 3) {
            winner.qualify();
        }

        if (loser.losses >= 3) {
            loser.eliminate();
        }
    }

    //define término
    isSwissComplete(stage){

        return stage.teams.every(
            team => team.wins >= 3 || team.losses >=3
        );
    }

    //cria pares
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
                team => !teamA.hasPlayesAgainst(team.id)
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

    //simula round
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

    //next stage
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

    /* PLAYOFFS */

    //cria estágio de playoffs
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

    //pega nome do round
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

    //simula round indivudual
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
 
   /* Controle de estágios */

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

        simulation.addStage(
            nextStage
        );

        simulation.nextStage();

        return nextStage;
    }

    /*Controle de rounds*/
    simulateNextRound(simulation) {

        if (simulation.status !== "IN_PROGRESS") {
            return null;
        }

        const stage =
            simulation.getCurrentStage();

        if (!stage) {
            return null;
        }

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
        /*
        ============================
        PLAYOFFS
        ============================
        */

        if (stage.type === "PLAYOFF") {

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

            const userStillAlive =
                stage.currentTeams.includes(
                    simulation.userTeam
                );

            if (!userStillAlive) {

                simulation.eliminateUserTeam();
            }

            return matches;
        }

        return null;
    }

    //completa simulação
    simulateMajor(
        simulation
    ) {

        while (
            simulation.status ===
            "IN_PROGRESS"
        ) {

            this.simulateNextRound(
                simulation
            );
        }

        return simulation;
    }

    

    
}