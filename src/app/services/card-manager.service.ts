import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";

@Injectable({
  providedIn: "root",
})
export class CardService {
  //#region Properties

  //#endregion

  //#region Constructor
  constructor() { }

  //#endregion

  //#region Methods

  // Get card list
  public getCardList(): Card[] {
    const cardList: Card[] = [];

    for (let i = 0; i <= 6; i++) {
      for (let j = i; j <= 6; j++) {
        cardList.push(new Card(i, j));
      }
    }

    return cardList;
  }

  // Get card list
  public getDuplicatedCardList(): Card[] {
    const cardList: Card[] = [];

    for (let i = 0; i <= 6; i++) {
      for (let j = i; j <= 6; j++) {

        if (i === j) {
          cardList.push(new Card(i, j));
        }
      }
    }

    return cardList;
  }

  // Shuffle card list
  public shuffle(array: Card[]) {
    let currentIndex = array.length;
    let temporaryValue: Card;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Is duplicatd card
  public isDuplicatedCard(card: Card): boolean {
    return card.tail === card.head;
  }

  //#endregion
}
