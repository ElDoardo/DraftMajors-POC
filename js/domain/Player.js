import { Card } from "./Card.js";

export class Player extends Card {
    constructor ({
        id, 
        nickName,
        fullName,
        country,
        mechanical,
        tactical,
        presence,
        primaryRole,
        secondaryRole,
        igl = false
    }) {
        super ({
            id,
            nickName,
            fullName,
            country
        });

        this.mechanical = mechanical;
        this.tactical = tactical;
        this.presence = presence;

        this.primaryRole = primaryRole;
        this.secondaryRole = secondaryRole;
        this.igl = igl;
    }

    getAttributes() {
        return {
            mechanical: this.mechanical,
            tactical: this.tactical,
            presence: this.presence
        };
    }

    getOverall() {
        const attributes = this.getAttributes();

        return (
            attributes.mechanical +
            attributes.tactical +
            attributes.presence
        ) / 3;
    }
}