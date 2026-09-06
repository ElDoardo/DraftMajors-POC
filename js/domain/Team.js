export class Team {
    constructor ({
        id,
        name,
        major,
        players = [],
        coach
    }) {
        this.id = id;
        this.name = name;
        this.major = major;
        this.players = players;
        this.coach = coach;
    }
}