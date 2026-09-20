export class ProbabilityCalculator {

    static MIN_STRENGTH = 0.01;
    static MAX_STRENGTH = 0.99;

    static normalizeStrength(strength) {

        return Math.max(
            this.MIN_STRENGTH,
            Math.min(
                this.MAX_STRENGTH, 
                strength / 100
            )
        );
    }

    static calculateLog5(teamA, teamB) {
        /**
         * (pA - pA × pB) /
         * (pA + pB - 2 × pA × pB)
         */
        const pA = this.normalizeStrength(teamA.strength);
        const pB = this.normalizeStrength(teamB.strength);

        const numerator = pA - (pA * pB);
        const denominator = pA + pB - (2 * pA * pB);

        if (denominator === 0) {
            return 0.5;
        }

        return numerator / denominator;
    }

    static defineOdds(teamA, teamB) {

        const probabilityA = this.calculateLog5(teamA, teamB);

        return { 
            teamA: probabilityA, 
            teamB: 1 - probabilityA 
        };
    }

    static pickWinner(teamA, teamB) {

        const probabilities = this.defineOdds(teamA, teamB);
        
        const randomValue = Math.random();

        if (randomValue < probabilities.teamA) {
            return{
                winner: teamA,
                loser: teamB,
                probabilities
            };
        } 
    
        return{
            winner: teamB,
            loser: teamA,
            probabilities
        };
    }
}