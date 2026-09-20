export class Stage {

    constructor ({
        id,
        name,
        type,
        teams
    }){
        this.id = id;
        this.name = name;
        this.type = type;
        this.teams = teams;

        this.currentRound = 0;

        this.matches = [];

        this.completed = false;
    }

    addMatch(match) {
        this.matches.push(match);
    }

    nextRound() {
        this.currentRound++;
    }

    complete() {
        this.completed = true;
    }

    getActiveTeams() {
        return this.teams.filter(
            team => team.isActive()
        );
    }

    getQualifiedTeams() {
        return this.teams.filter(
            team => team.status === "QUALIFIED"
        );
    }
}