import { Injectable } from "@angular/core";
import { Card } from '../models/card.model';

@Injectable({
    providedIn: 'root'
})

export class PlayerCardManagerService {
    //#region Properies

    // Player card list
    private _playerCards: Card[];

    //#endregion

    //#region Constructor

    public constructor() {

    }
    //#endregion

    //#region Inspector

    // Get player card list
    public get playerCards(): Card[] {
        return this._playerCards;
    }

    // Set player card list
    public set playerCards(playerCards: Card[]) {
        this._playerCards = playerCards;
    }

    //#endregion

    //#region Methods

    //#endregion
}