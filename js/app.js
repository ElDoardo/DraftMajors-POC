import { teams } from "./data/teams.js";
import { Draft } from "./domain/Draft.js";
import { TeamEvaluator } from "./domain/TeamEvaluator.js";
import { DraftStatus, PlayerAttribute } from "./domain/enums.js";
import { TeamFactory } from "./simulation/TeamFactory.js";
import { SimulationEngine } from "./simulation/SimulationEngine.js";

//draft elements
const turnDiv = document.getElementById("turn");
const releasedTeamDiv = document.getElementById("releasedTeam");
const myTeamDiv = document.getElementById("myTeam");
const rerollButton = document.getElementById("reroll");
const rerollsDiv = document.getElementById("remainingRerolls");
const startSimulationButton = document.getElementById("startSimulation");
//simulation elements
const draftArea = document.getElementById("draftArea");
const simulationDiv = document.getElementById("simulation");
const simulationStageDiv = document.getElementById("simulationStage");
const simulationUserTeamDiv = document.getElementById("simulationUserTeam");
const simulationResultDiv = document.getElementById("simulationResult");
const standingsDiv = document.getElementById("standings");
const simulateRoundButton = document.getElementById("simulateRound");

//state
const draft = new Draft(teams, 3);
let majorSimulation = null;
let simulationEngine = null;

//start draft
draft.releaseTeam();
render();

//main render
function render() {
    renderTurn();
    renderReleasedTeam();
    renderMyTeam();
    renderReroll();
    renderStartSimulationButton();
    if (majorSimulation) {
        renderSimulation();
    }
}

/* DRAFT */
function renderTurn() {
    if(draft.status === DraftStatus.COMPLETED) {
        turnDiv.textContent = "Draft completo!";
        releasedTeamDiv.innerHTML = "";
        return;
    }

    if (draft.status === DraftStatus.COACH_SELECTION) {
        turnDiv.textContent = "Escolha seu Coach"
        return;
    }

    turnDiv.textContent = `Turno ${draft.turn} - Escolha um Jogador`;
}

//time sorteado
function renderReleasedTeam() {
    releasedTeamDiv.innerHTML = "";

    const releasedTeam = draft.releasedTeam;

    if(!releasedTeam) {
        return;
    }

    const header = document.createElement("div");
    header.className = "released-team-header";

    header.innerHTML = `
        <h2>${releasedTeam.name}</h2>
        <p>${releasedTeam.major}</p>
    `;

    releasedTeamDiv.appendChild(header);

    //players
    if (draft.status === DraftStatus.IN_PROGRESS) {

        releasedTeam.players.forEach(player => {
            const card = createReleasedPlayerCard(player);

            releasedTeamDiv.appendChild(card);
        });

        return;
    }

    //coach
    if (draft.status === DraftStatus.COACH_SELECTION) {

        const coachCard = createReleasedCoachCard(
            releasedTeam.coach
        );

        releasedTeamDiv.appendChild(coachCard);
    }
}

//card do player do time sorteado
function createReleasedPlayerCard(player) {

    const card = document.createElement("div");

    card.className = "player-card";

    const overall = player.getOverall();

    card.innerHTML = player.igl 
    ? `
        <div class="player-card-main">
            <p>
                [${overall.toFixed(0)}] 
                ${player.nickName} || 
                ${player.primaryRole} ou 
                ${player.secondaryRole} 
                (IGL)
            </p>
        <div>
    `
    : `
        <div class="player-card-main">
            <p>
                [${overall.toFixed(0)}] 
                ${player.nickName} || 
                ${player.primaryRole} ou 
                ${player.secondaryRole}
            </p>
        <div>
    `
    const tooltip = createPlayerTooltip(player);

    card.appendChild(tooltip);

    card.addEventListener("click", () => {

        const selected = draft.selectPlayer(player.id);

        if (!selected) {
            return;
        }

        render();
    });

    return card;
}

//tooltip do player
function createPlayerTooltip(player) {

    const tooltip = document.createElement("div");

    tooltip.className = "player-tooltip";

    const attributes = player.getAttributes();

    tooltip.innerHTML = `
        <div class="tooltip-title">
            ${player.nickName}
        </div>

        <div class="tooltip-subtitle">
            ${player.fullName}
        </div>

        <hr>

        <div class="attribute-row">
            <span>Mechanical</span>
            <strong>
                ${attributes[PlayerAttribute.MECHANICAL]}
            </strong>
        </div>

        <div class="attribute-row">
            <span>Tactical</span>
            <strong>
                ${attributes[PlayerAttribute.TACTICAL]}
            </strong>
        </div>

        <div class="attribute-row">
            <span>Presence</span>
            <strong>
                ${attributes[PlayerAttribute.PRESENCE]}
            </strong>
        </div>

        <hr>

        <div class="attribute-row">
            <span>Role</span>
            <strong>
                ${player.primaryRole}
            </strong>
        </div>

        ${
            player.secondaryRole
                ? `
                    <div class="attribute-row">
                        <span>Secondary Role</span>
                        <strong>
                            ${player.secondaryRole}
                        </strong>
                    </div>
                  `
                : ""
        }

        <div class="attribute-row">
            <span>IGL</span>
            <strong>
                ${player.igl ? "Yes" : "No"}
            </strong>
        </div>

        <hr>

        <div class="attribute-row">
            <span>Overall</span>
            <strong>
                ${player.getOverall().toFixed(0)}
            </strong>
        </div>
    `;

    return tooltip;
}

//card do coach do time sorteado
function createReleasedCoachCard(coach) {
    const card = document.createElement("div");

    card.className = "player-card";

    card.innerHTML = `
        <div>
            <p>
                Coach: ${coach.nickName}
            </p>
        </div>
    `;

    const tooltip = createCoachTooltip(coach);

    card.appendChild(tooltip);

    card.addEventListener("click", () => {

        const selected = draft.selectCoach(coach.id);

        if(!selected){
            return;
        }

        render();
    });

    return card;
}

//tooltip do coach
function createCoachTooltip(coach) {
    const tooltip = document.createElement("div");

    tooltip.className = "player-tooltip";

    tooltip.innerHTML = `
        <div class="tooltip-title">
            ${coach.nickName}
        </div>

        <div class="tooltip-subtitle">
            ${coach.fullName}
        </div>

        <hr>

        <div class="attribute-row">
            <span>Especialidade</span>
            <strong>
                ${coach.specialty}
            </strong>
        </div>

        <hr>

        <div class="attribute-row">
            <span>Overall</span>
            <strong>
                ${coach.overall}
            </strong>
        </div>
    `;

    return tooltip;
}

//time draftado
function renderMyTeam() {

    myTeamDiv.innerHTML = "";

    draft.selectedPlayers.forEach(player => {
        const card = createSelectedPlayerCard(player);

        myTeamDiv.appendChild(card);
    });

    if(draft.selectedCoach) {
        const coachCard = createSelectedCoachCard(draft.selectedCoach);

        myTeamDiv.appendChild(coachCard);
    }

    renderMyTeamEvaluation();
}

//card do player do time draftado
function createSelectedPlayerCard(player){
   const card = document.createElement("div");

    card.className = "selected-player-card";

    const evaluation = draft.getMyTeamEvaluation();

    const assignment = getPlayerAssignment(player, evaluation);

    const performedRole = assignment?.role || "N/A";

    const masteryIndicator = assignment?.mastery ? "✓" : "⚠";

    const baseOverall = player.getOverall();

    let displayOverall = baseOverall.toFixed(0);

    if (draft.selectedCoach && evaluation) {
        
        const roleScore = evaluation.roleScore;
        
        const coach = draft.selectedCoach;

        const coachBonus = TeamEvaluator.calcCoachBonus(
            coach, evaluation.roleScore
        );

        const baseAttributes = player.getAttributes();

        const boostedAttribute = TeamEvaluator.SPECIALTY_ATTRIBUTE_MAP[coach.specialty];

        const finalOverall = TeamEvaluator.calcPlayerOverall(player,coach, roleScore);

        const attributeLabel = getAttributeLabel(boostedAttribute);

        displayOverall = `
            ${baseOverall.toFixed(0)}+
            ${coachBonus.toFixed(1)}
            ${attributeLabel} →
            ${finalOverall.toFixed(0)}
        `;
    }

    card.innerHTML = `
        <div>
            <p>
                [${displayOverall}] 
                ${player.nickName} ||
                ${performedRole}
                ${masteryIndicator} 
                ${player.igl ? "|| IGL" : ""}
            </p>
        </div>
    `;

    return card;
}

//role performada pelo player draftado
function getPlayerAssignment(player, evaluation) {
    if (!evaluation.roleAssignments) {
        return null;
    }

    return evaluation.roleAssignments.find(
        assignment => assignment.player.id === player.id
    );
}

//card do coach do time draftado
function createSelectedCoachCard(coach) {
    const card = document.createElement("div");

    card.className = "selected-coach-card";

    card.textContent = `Coach: ${coach.nickName} || ${coach.specialty}`

    return card;
}

//atributo upado pelo coach bonus
function getAttributeLabel(attribute) {
    switch (attribute) {
        case PlayerAttribute.MECHANICAL:
            return "Mech.";

        case PlayerAttribute.TACTICAL:
            return "Tact.";

        case PlayerAttribute.PRESENCE:
            return "Pres.";

        default:
            return "";
    }
}

//score do time draftado
function renderMyTeamEvaluation() {
    
    const evaluation = draft.getMyTeamEvaluation();

    if(!evaluation){
        return;
    }

    const div = document.createElement("div");

    div.className = "team-evaluation";

    div.innerHTML = `
        <h3>Avaliação do Time</h3>
        <p>
            Overall Médio: 
            <strong>
                ${evaluation.overallAvg.toFixed(1)}
            </strong>
            →
            <strong>
                ${evaluation.overallAvgApplied.toFixed(2)}
            </strong>
        </p>
        <p>
            Roles Ocupadas:
            <strong>
                ${evaluation.masteredRoles}/${evaluation.totalRoles}
            </strong>
            →
            <strong>
                ${evaluation.roleScoreApplied}
            </strong>
        </p>
         ${
            draft.selectedCoach
            ? `
                <div class="evaluation-row">

                    <span>
                        Coach Bonus
                    </span>

                    <strong>
                        +${evaluation.coachBonus.toFixed(1)}
                    </strong>

                </div>

                <div class="evaluation-row final-score">

                    <span>Final Score</span>
                    <u>
                        ${evaluation.overallAvgApplied.toFixed(2)} + 
                        ${evaluation.roleScoreApplied} =
                        <strong>
                            ${evaluation.finalScore.toFixed(1)}
                        </strong>
                    </u>
                </div>
                `
            : ""
        }
    `;

    myTeamDiv.appendChild(div);
}

//botão de rodar times/coachs sorteados
function renderReroll() {
    rerollsDiv.textContent = `Rerolls restantes: ${draft.remainingRerolls}`;

    rerollButton.disabled = 
        draft.remainingRerolls === 0 || 
        draft.status === DraftStatus.COMPLETED;
}

rerollButton.onclick = () => {
    draft.reroll();
    render();
}

//botão de começar simulação
function renderStartSimulationButton() {

    if (!startSimulationButton) {
        return;
    }

    const draftCompleted = draft.status === DraftStatus.COMPLETED;

    startSimulationButton.disabled = 
        !draftCompleted || 
        majorSimulation !== null;
}

startSimulationButton.onclick = () => {
    startMajorSimulation();
};

//começar simulação
function startMajorSimulation() {

    const userTeam = TeamFactory.buildUserTeam(
        draft.selectedPlayers,
        draft.selectedCoach,
        "My Team"
    );

    simulationEngine = new SimulationEngine(TeamFactory);

    majorSimulation = simulationEngine.createMajorSimulation(
        userTeam,
        teams
    );

    draftArea.style.display = "none";

    simulationDiv.style.display = "block";

    renderSimulation();
}

//interface da simulação
function renderSimulation() {
    if (!majorSimulation) {
        return;
    }

    simulationDiv.style.display = "block";

    //status
    renderSimulationStatus();

    //estágio
    const stage = majorSimulation.getCurrentStage();

    if(stage){

        simulationStageDiv.innerHTML = `
            <h2>
                ${stage.name}
            </h2>

            ${
                stage.type === "SWISS"
                    ? `
                        <p>
                            Round
                            ${stage.currentRound}
                        </p>
                    `
                    : `
                        <p>
                            ${getPlayoffDisplayName(stage)}
                        </p>
                    `
            }
        `;
    }

    renderSimulationUserTeam();

    renderSimulationResult();

    renderStandings();

    renderSimulationButton();
}

//status da simulação
function renderSimulationStatus() {

    if (majorSimulation.status === "CHAMPION") {

        simulationStageDiv.innerHTML += `
            <h2>
                🏆 Major Champion
            </h2>
        `;
    }

    if (majorSimulation.status === "ELIMINATED") {

        simulationStageDiv.innerHTML += `
            <h2>
                Eliminado
            </h2>
        `;
    }
}

//informações sobre o time do usuário
function renderSimulationUserTeam() {
    const team = majorSimulation.userTeam;

    simulationUserTeamDiv.innerHTML = `
        <div class="simulation-user-team">
            <h3>
                ${team.name}
            </h3>

            <p>
                Strength:
                <strong>
                    ${team.strength.toFixed(0)}
                </strong>
            </p>

            <p>
                Record:
                <strong>
                    ${team.getRecord()}
                </strong>
            </p>

            <p>
                Status:
                <strong>
                    ${team.status}
                </strong>
            </p>
        </div>
    `;
}

//resultado do round
function renderSimulationResult() {
    
   simulationResultDiv.innerHTML = "";

    const userTeam = majorSimulation.userTeam;

    const userMatch = majorSimulation.lastRoundMatches.find(
        match =>
            match.teamA === userTeam ||
            match.teamB === userTeam
    );

    const userBye = majorSimulation.lastRoundByes.includes(
        userTeam
    );


    if (userBye) {

        simulationResultDiv.innerHTML = `
            <div class="round-result">

                <h3>
                    BYE
                </h3>

                <p>
                    Seu time venceu automaticamente.
                </p>

            </div>
        `;

        return;
    }


    if (!userMatch) {
        return;
    }

    const userIsTeamA = userMatch.teamA === userTeam;

    const opponent =
        userIsTeamA
            ? userMatch.teamB
            : userMatch.teamA;

    const userProbability =
        userIsTeamA
            ? userMatch.teamAProbability
            : userMatch.teamBProbability;

    const opponentProbability =
        userIsTeamA
            ? userMatch.teamBProbability
            : userMatch.teamAProbability;

    const won = userMatch.winner === userTeam;

    simulationResultDiv.innerHTML = `
        <div class="round-result">

            <h3>
                ${majorSimulation.lastRoundStage}
                -
                ${userMatch.roundName}
            </h3>

            <p>
                <strong>
                    ${userTeam.name}
                </strong>

                vs

                <strong>
                    ${opponent.name}
                </strong>
            </p>

            <p>
                Your chance:
                <strong>
                    ${(userProbability * 100).toFixed(1)}%
                </strong>
            </p>

            <p>
                Opponent chance:
                <strong>
                    ${(opponentProbability * 100).toFixed(1)}%
                </strong>
            </p>

            <h2>
                ${won ? "WIN!" : "LOSS"}
            </h2>

        </div>
    `;
}

//classificação em tempo real
function renderStandings() {
    const stage = majorSimulation.getCurrentStage();

    standingsDiv.innerHTML = "";

    if(!stage){
        return;
    }

    //fase de grupos
    if(stage.type === "SWISS"){
        const sortedTeams = [...stage.teams].sort(
            (a, b) => {

                if(b.wins !== a.wins){
                    return(b.wins - a.wins);
                }

                return(a.losses - b.losses);
            }
        );

        standingsDiv.innerHTML = `
            <h3>
                Standings
            </h3>
        `;

        sortedTeams.forEach( team => {
            const div = document.createElement("div");

            div.className = team.isUserTeam ? "user-standing" : "standing";

            div.innerHTML = `
                <strong>
                    ${team.name}
                </strong>

                <span>
                    ${team.getRecord()}
                </span>

                <span>
                    ${team.strength.toFixed(1)}
                </span>

                <span>
                    ${team.status}
                </span>
            `;

            standingsDiv.appendChild(div);
        });

        return;
    }

    //playoffs
    standingsDiv.innerHTML = `
        <h3>
            Playoff Contenders
        </h3>
    `;

    stage.currentTeams.forEach((team, index) => {

        const div = document.createElement("div");

        div.className = team.isUserTeam ? "user-standing" : "standing";

        div.innerHTML = `
             <strong>
                ${index + 1}.
                ${team.name}
            </strong>

            <span>
                ${team.strength.toFixed(1)}
            </span>
        `;

        standingsDiv.appendChild(div);
    });
}

//botão de simular rodadas
function renderSimulationButton() {
    
    if (majorSimulation.status !== "IN_PROGRESS") {

        simulateRoundButton.disabled = true;

        simulateRoundButton.textContent = "Acabou";

        return;
    }

    const stage = majorSimulation.getCurrentStage();

    simulateRoundButton.disabled = !stage;

    if (stage.type === "SWISS") {

        simulateRoundButton.textContent = "Simular Rodada";

        return;
    }

    simulateRoundButton.textContent = `Simular ${getPlayoffDisplayName(stage)}`;
}

//nome das rodadas nos playoffs
function getPlayoffDisplayName(stage) {
    
    switch (stage.currentTeams.length) {
        case 8:
            return "Quartas de final";

        case 4:
            return "Semi-final";

        case 2:
            return "A Grande Final";

        default:
            return "Playoffs";
    }
}

simulateRoundButton.onclick = () => {
    if (!majorSimulation || majorSimulation.status !== "IN_PROGRESS") {
        return;
    }

    simulationEngine.simulateNextRound(
        majorSimulation
    );

    renderSimulation();
};