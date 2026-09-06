import {
    Role,
    PlayerAttribute,
    CoachSpecialty
} from "./enums.js"

export class TeamEvaluator {

    static REQUIRED_ROLES = [
        Role.AWPER,
        Role.ENTRY,
        Role.LURKER,
        Role.SUPPORT,
        Role.RIFLER
    ];

    static OVERALL_WEIGHT = 0.7;
    static ROLES_WEIGHT = 0.3;

    static COACH_BONUS = 5;
    static SPECIALTY_ATTRIBUTE_MAP = {
        [CoachSpecialty.PERFORMANCE]: PlayerAttribute.MECHANICAL,
        [CoachSpecialty.TACTICAL]: PlayerAttribute.TACTICAL,
        [CoachSpecialty.LEADERSHIP]: PlayerAttribute.PRESENCE
    };

    static calcOverallAvg(players, coach = null, roleScore = 0) {
        if (!players || players.length === 0) {
            return 0;
        }

        const total = players.reduce(
            (sum, player) =>
                sum + this.calcPlayerOverall(
                    player,
                    coach,
                    roleScore
                ),
            0
        );
        return total / players.length;
    }

    static calcRoleScore(players) {
        if (!players || players.length === 0) {
            return 0;
        }

        const rolesOccupied = new Set();

        players.forEach(player => {
            const role = this.resolvePlayerRole(player, rolesOccupied);

            if (role) {
                rolesOccupied.add(role);
            }
        });
        
        return (
            rolesOccupied.size /
            this.REQUIRED_ROLES.length
        ) * 100;
    }

    static resolvePlayerRole(player, rolesOccupied) {
        if (
            this.REQUIRED_ROLES.includes(player.primaryRole) &&
            !rolesOccupied.has(player.primaryRole)
        ) {
            return player.primaryRole;
        }

        if (
            this.REQUIRED_ROLES.includes(player.secondaryRole) &&
            !rolesOccupied.has(player.secondaryRole)
        ) {
            return player.secondaryRole;
        }
        
        return null;
    }

    static calcPlayerOverall(player, coach = null, roleScore = 0) {
        const attributes = {
            ...player.getAttributes()
        };

        //coach influence
        if (coach) {
            const attribute = this.SPECIALTY_ATTRIBUTE_MAP[coach.specialty]

            if (attribute) {
                const coachBonus = this.calcCoachBonus(coach, roleScore);

                attributes[attribute] = Math.min(
                    99,
                    attributes[attribute] + coachBonus
                );
            }
        }

        return (
            attributes[PlayerAttribute.MECHANICAL] +
            attributes[PlayerAttribute.TACTICAL] +
            attributes[PlayerAttribute.PRESENCE]
        ) / 3;
    }

    static calcCoachBonus(coach, roleScore) {
        if (!coach) {
            return 0;
        }

        const bonus = this.COACH_BONUS;
        const overallFactor = Math.max(
            0,
            Math.min(99, coach.overall)
        ) / 100;

        const roleScoreFactor = Math.max(
            0,
            Math.min(99, roleScore)
        ) / 100;

        return (
            bonus *
            overallFactor *
            roleScoreFactor
        );
    }

    static calcFinalScore(players, coach = null) {
        const roleScore = this.calcRoleScore(players);
        const overallAvg =
            this.calcOverallAvg(players, coach, roleScore);

        return (
            (overallAvg * this.OVERALL_WEIGHT) +
            (roleScore * this.ROLES_WEIGHT)
        );
    }

    static evaluate(players, coach = null) {
        const roleScore = this.calcRoleScore(players);
        const overallAvg = this.calcOverallAvg(players, coach, roleScore);
        const finalScore = this.calcFinalScore(players, coach);
        const coachBonus = this.calcCoachBonus(coach,roleScore);
        const rolesOccupied = Math.round(
            (roleScore / 100) *
            this.REQUIRED_ROLES.length
        );

        return {
            overallAvg,
            roleScore,
            rolesOccupied,
            totalRoles: this.REQUIRED_ROLES.length,
            coachBonus,
            finalScore
        };
    }
}