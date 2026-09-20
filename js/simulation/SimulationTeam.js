export class SimulationTeam {

    constructor ({
        id,
        name, 
        players,
        coach,
        strength,
        isUserTeam = false
    }){
        this.id = id;
        this.name = name;

        this.players = players;
        this.coach = coach;

        this.strength = strength;

        this.isUserTeam = isUserTeam;

        this.wins = 0;
        this.losses = 0;

        this.status = "ACTIVE";

        this.opponents = new Set();
    }

    getRecord() {
        return `${this.wins} - ${this.losses}`;
    }

    registerWin() {
        this.wins++;
    }

    registerLoss() {
        this.losses++;
    }

    isActive() {
        return this.status === "ACTIVE";
    }

    qualify() {
        this.status = "QUALIFIED";
    }

    eliminate() {
        this.status = "ELIMINATED";
    }

    addOpponent(teamId) {
        this.opponents.add(teamId);
    }

    hasPlayedAgainst(teamId) {
        return this.opponents.has(teamId);
    }

    resetRecord(){
        this.wins = 0;
        this.losses = 0;
        this.status = "ACTIVE";
        this.opponents.clear();
    }
}