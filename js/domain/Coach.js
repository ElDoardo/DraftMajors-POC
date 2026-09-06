import { Card } from "./Card.js";

export class Coach extends Card {
    constructor ({
        id,
        nickName,
        fullName, 
        country,
        overall,
        specialty
    }){
        super ({
            id,
            nickName,
            fullName, 
            country
        });
        this.overall = overall;
        this.specialty = specialty;
    }
}