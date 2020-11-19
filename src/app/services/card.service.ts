import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  //#region Properties

  //#endregion

  //#region Constructor
  constructor() { }

  //#endregion

  //#region Methods

  // Get card list
  public getCardListAsync(): Card[] {

    const cardList: Card[] = [];

    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        cardList.push(new Card(i, j));
      }
    }

    return cardList;
  }
  //#endregion
}
