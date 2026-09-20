export class MajorSimulation {

    constructor ({
        id,
        userTeam
    }) {
        this.id = id;
        this.userTeam = userTeam;

        this.stages = [];

        this.currentStageIndex = 0;

        this.stagePools = {
            stage2: [],
            stage3: []
        };

        this.champion = null;

        this.status = "IN_PROGRESS";

        //UI
        this.lastRoundMatches = [];
        this.lastRoundByes = [];
        this.lastRoundStage = null;
    }

    addStage(stage) {
        this.stages.push(stage);
    }

    getCurrentStage() {
        return this.stages[this.currentStageIndex] ?? null;
    }

    nextStage() {
        if (this.currentStageIndex < this.stages.length - 1) {
            this.currentStageIndex++;
        } 
    }

    setChampion(team) {
        this.champion = team;

        team.status = "CHAMPION";

        this.status = "CHAMPION";
    }

    eliminateUserTeam() {
        this.userTeam.status = "ELIMINATED";

        this.status = "ELIMINATED";
    }
}