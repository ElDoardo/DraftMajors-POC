import { TeamEvaluator } from "./TeamEvaluator.js";
import { DraftStatus } from "./enums.js";

export class Draft {
    constructor (teams, rerolls = 3) {
        this.availableTeams = [...teams];

        this.availableCoaches = teams.map(
            team => team.coach
        );

        this.releasedTeam = null;

        this.selectedPlayers = [];

        this.selectedCoach = null;

        this.remainingRerolls = rerolls;

        this.turn = 1;

        this.status = DraftStatus.IN_PROGRESS;
    }

    releaseTeam() {
        if (this.availableTeams.length === 0){
            return null;
        }

        const index = Math.floor(
            Math.random() * this.availableTeams.length
        );

        this.releasedTeam = this.availableTeams.splice(index, 1)[0];

        return this.releasedTeam;
    }

    selectPlayer(playerId) {
        if (this.status !== DraftStatus.IN_PROGRESS) return false;

        if (!this.releasedTeam) return false;

        const player = this.releasedTeam.players.find ( 
            player => player.id === playerId
        );

        if(!player) return false;

        this.selectedPlayers.push(player);

        if(this.selectedPlayers.length === 5){
            this.status = DraftStatus.COACH_SELECTION;
            return true;
        }

        this.turn++;
        this.releaseTeam();

        return true;
    }

    selectCoach(coachId) {
        if (this.status !== DraftStatus.COACH_SELECTION) return false;

        const coach = this.availableCoaches.find(
            coach => coach.id === coachId
        );

        if(!coach) return false;

        this.selectedCoach = coach;
        this.status = DraftStatus.COMPLETED;

        return true;
    }

    reroll() {
        if (this.status === DraftStatus.COMPLETED) return false;

        if(this.remainingRerolls <= 0) return false;

        this.remainingRerolls--;
        this.releaseTeam();

        return true;
    }

    getMyTeam() {
        return{
            players: [...this.selectedPlayers],
            coach: this.selectedCoach
        };
    }

    getMyTeamEvaluation() {
        if(this.selectedPlayers.length === 0){
            return null;
        }

        return TeamEvaluator.evaluate(
            this.selectedPlayers,
            this.selectedCoach
        );
    }
}