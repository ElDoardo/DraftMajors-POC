import { teams } from "./data/teams.js";
import { Draft } from "./domain/Draft.js";
import { TeamEvaluator } from "./domain/TeamEvaluator.js";
import { DraftStatus, PlayerAttribute } from "./domain/enums.js";

const turnDiv = document.getElementById("turn");
const releasedTeamDiv = document.getElementById("releasedTeam");
const myTeamDiv = document.getElementById("myTeam");
const rerollButton = document.getElementById("reroll");
const rerollsDiv = document.getElementById("remainingRerolls");

const draft = new Draft(teams, 3);

draft.releaseTeam();

render();

function render() {
    renderTurn();
    renderReleasedTeam();
    renderMyTeam();
    renderReroll();
}

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

     if (draft.status === DraftStatus.IN_PROGRESS) {

        releasedTeam.players.forEach(player => {
            const card = createReleasedPlayerCard(player);

            releasedTeamDiv.appendChild(card);
        });

        return;
    }

    if (draft.status === DraftStatus.COACH_SELECTION) {

        const coachCard = createReleasedCoachCard(
            releasedTeam.coach
        );

        releasedTeamDiv.appendChild(coachCard);

        return;
    }

    draft.releasedTeam.players.forEach(player => {
        const overall = player.getOverall();
        const div = document.createElement("div");

        div.className = "player";
        

        div.textContent = player.igl ? 
            ` 
                [${overall}] ${player.nickName} || 
                ${player.primaryRole} ou ${player.secondaryRole} ==> (IGL)
            ` : 
            ` 
                [${overall}] ${player.nickName} || 
                ${player.primaryRole} ou ${player.secondaryRole}
            `;
            
        div.onclick = () => {
            draft.selectPlayer(player.id);
            render();
        };

        releasedTeamDiv.appendChild(div);
    });

    if(draft.status === DraftStatus.COMPLETED) {
        releasedTeamDiv.innerHTML = "";
        return;
    }
}

function createReleasedPlayerCard(player) {

    const card = document.createElement("div");

    card.className = "player-card";

    const overall = player.getOverall();

    card.innerHTML = player.igl ? `
        <div>
            <p>
                [${overall}] ${player.nickName} || 
                ${player.primaryRole} ou ${player.secondaryRole} ==> (IGL)
            </p>
        <div>
    `
    : `
        <div>
            <p>
                [${overall}] ${player.nickName} || 
                ${player.primaryRole} ou ${player.secondaryRole}
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

function createReleasedCoachCard() {
    const coach = draft.releasedTeam.coach;

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

    card.onclick = () => {
        draft.selectCoach(coach.id);
        render();
    };

    return card;
}

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

function createSelectedPlayerCard(player){
   const card = document.createElement("div");

    card.className = "selected-player-card";

    const evaluation = draft.getMyTeamEvaluation();

    const assignment = getPlayerAssignment(player, evaluation);

    const occupiedRole = assignment?.role || "N/A";

    const masteryIndicator = assignment?.mastery ? "✓" : "⚠";

    const baseOverall = player.getOverall();

    let boostedOverall = baseOverall;
    let coachText = "";

    if (draft.selectedCoach) {
        const roleScore = evaluation.roleScore;

        const coachBonus = TeamEvaluator.calcCoachBonus(
            draft.selectedCoach, roleScore
        );

        const baseAttributes = player.getAttributes();

        const boostedAttribute = TeamEvaluator.SPECIALTY_ATTRIBUTE_MAP[
            draft.selectedCoach.specialty
        ];

        const boostedAttributes = {
            ...baseAttributes,
        };

        if (boostedAttribute) {
            boostedAttributes[boostedAttribute] = Math.min(
                99,
                boostedAttributes[boostedAttribute] + coachBonus
            );

            boostedOverall = (
                boostedAttributes[PlayerAttribute.MECHANICAL] +
                boostedAttributes[PlayerAttribute.TACTICAL] +
                boostedAttributes[PlayerAttribute.PRESENCE]
            ) / 3;

            const attributeLabel = getAttributeLabel(boostedAttribute);

            coachText = `+${coachBonus.toFixed(1)} ${attributeLabel}`;
        }
    }

    card.innerHTML = `
        <div>
            <p>
                [${boostedOverall.toFixed(0)}] ${player.nickName} ||
                ${occupiedRole} ${ player.igl ? "(IGL)" : ""}
                ${masteryIndicator} ${coachText ? `|| ${coachText}` : ""}
            </p>
        </div>
    `;

    return card;
}

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

function createSelectedCoachCard(coach) {
    const card = document.createElement("div");

    card.className = "selected-coach-card";

    card.textContent = `Coach: ${coach.nickName} || ${coach.specialty}`

    return card;
}

function getPlayerAssignment(player, evaluation) {
    if (!evaluation.roleAssignments) {
        return null;
    }

    return evaluation.roleAssignments.find(
        assignment => assignment.player.id === player.id
    );
}

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
            Overall: 
            <strong>
                ${evaluation.overallAvg.toFixed(0)}
            </strong>
        </p>
        <p>
            Roles Ocupadas:
            <strong>
                ${evaluation.masteredRoles}/${evaluation.totalRoles}
            </strong>
        </p>
         ${
            draft.selectedCoach
            ? `
                <div class="evaluation-row">
                    <span>Coach Bonus</span>
                    <strong>
                        +${evaluation.coachBonus.toFixed(0)}
                    </strong>
                </div>

                <div class="evaluation-row final-score">
                    <span>Final Score</span>
                    <strong>
                        ${evaluation.finalScore.toFixed(0)}
                    </strong>
                </div>
                `
            : ""
        }
    `;

    myTeamDiv.appendChild(div);
}

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