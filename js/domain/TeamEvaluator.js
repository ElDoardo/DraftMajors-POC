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
            return { 
                score: 0, 
                assignments: []
            };
        }

        const occupiedRoles = new Set();
        const masteredRoles = new Set();
        const assignments = [];

        players.forEach(player => {
            const assignment = this.resolvePlayerRole(
                player, 
                occupiedRoles
            );

            if (!assignment) {
                return;
            }

            const { role, mastery } = assignment;

            if (mastery) {
                masteredRoles.add(role);
            }

            assignments.push({
                player,
                role,
                mastery
            });
        });

        const score = (
            masteredRoles.size / 
            this.REQUIRED_ROLES.length
        ) * 100;

        return {
            score,
            assignments
        };
    }

    static resolvePlayerRole(player, occupiedRoles) {
        if (
            this.REQUIRED_ROLES.includes(player.primaryRole) &&
            !occupiedRoles.has(player.primaryRole)
        ) {
            occupiedRoles.add(player.primaryRole);

            return {
                role: player.primaryRole,
                mastery: true
            };
        }

        if (
            this.REQUIRED_ROLES.includes(player.secondaryRole) &&
            !occupiedRoles.has(player.secondaryRole)
        ) {
            occupiedRoles.add(player.secondaryRole);

            return {
                role: player.secondaryRole,
                mastery: true
            };
        }
        
        const availableRoles = this.REQUIRED_ROLES.filter(
            role => !occupiedRoles.has(role)
        );

        if (availableRoles.length === 0) {
            return null;
        }

        const occupiedRole = availableRoles[0];

        occupiedRoles.add(occupiedRole);

        return {
            role: occupiedRole,
            mastery: false
        };
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
                    99.9,
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
            Math.min(100, roleScore)
        ) / 100;

        return (
            bonus *
            overallFactor *
            roleScoreFactor
        );
    }

    static calcFinalScore(players, coach = null) {
        const roleEvaluation = this.calcRoleScore(players);
        const roleScore = roleEvaluation.score;
        const overallAvg =
            this.calcOverallAvg(players, coach, roleScore);

        return (
            (overallAvg * this.OVERALL_WEIGHT) +
            (roleScore * this.ROLES_WEIGHT)
        );
    }

    static evaluate(players, coach = null) {
        const roleEvaluation = this.calcRoleScore(players);
        const roleScore = roleEvaluation.score;
        const roleAssignments = roleEvaluation.assignments;
        const overallAvg = this.calcOverallAvg(players, coach, roleScore);
        const finalScore = this.calcFinalScore(players, coach);
        const coachBonus = this.calcCoachBonus(coach,roleScore);
        const masteredRoles = Math.round(
            (roleScore / 100) *
            this.REQUIRED_ROLES.length
        );


        return {
            overallAvg,
            roleScore,
            masteredRoles,
            totalRoles: this.REQUIRED_ROLES.length,
            roleAssignments,
            coachBonus,
            finalScore
        };
    }
}