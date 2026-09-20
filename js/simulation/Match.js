export class Match {
    
    constructor ({
        id, 
        teamA,
        teamB,
        stage,
        round
    }){
        this.id = id;
        this.teamA = teamA;
        this.teamB = teamB;
        this.stage = stage;
        this.round = round;

        this.teamAProbability = null;
        this.teamBProbability = null;

        this.winner = null;
        this.loser = null;

        this.completed = false;
    }

    setResult(winner, loser, probabilities) {
        this.winner = winner;
        this.loser = loser;

        this.teamAProbability = probabilities.teamA;
        this.teamBProbability = probabilities.teamB;

        this.completed = true;
    }  
}