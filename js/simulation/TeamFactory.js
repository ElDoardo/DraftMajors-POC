import {SimulationTeam} from "./SimulationTeam.js";
import {TeamEvaluator} from "../domain/TeamEvaluator.js";

export class TeamFactory {

    static buildUserTeam(players, coach, name = "My Team") {
        
        const evaluation = TeamEvaluator.evaluate(
            players, coach
        );

        return new SimulationTeam({
            id: "user-team",
            name,
            players,
            coach,
            strength: evaluation.finalScore,
            isUserTeam: true
        });
    }

    static buildOpponentTeam(team) {

        const evaluation = TeamEvaluator.evaluate(
            team.players, team.coach
        );

        return new SimulationTeam({
            id: team.id,
            name: team.name,
            players: team.players,
            coach: team.coach,
            strength: evaluation.finalScore,
            isUserTeam: false
        });
    }
}