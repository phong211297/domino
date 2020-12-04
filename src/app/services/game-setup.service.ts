import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { CardService } from './card-manager.service';

@Injectable({
    providedIn: 'root',
})
export class GameSetupService {

    //#region Properies

    // List all card after divided
    private _listAllCards: Card[];

    // List array cards of players
    private _arrPlayerCards: Card[][];

    //#region

    //#region Inspector

    // Get list all cards
    public get listAllCards(): Card[] {
        return this._listAllCards;
    }

    // Set list all cards
    public set listAllCards(listAllCards: Card[]) {
        this._listAllCards = listAllCards;
    }

    // Get list array cards of players
    public get arrPlayerCards(): Card[][] {
        return this._arrPlayerCards;
    }

    // Set List array cards of players
    public set arrPlayerCards(arrPlayerCards: Card[][]) {
        this._arrPlayerCards = arrPlayerCards;
    }

    //#endregion

    //#region Constructor

    public constructor(protected cardService: CardService) {

        this._arrPlayerCards = [];
    }
    //#endregion

    //#region Methods

    // Set up game combination methods
    public setUpGame(): void {

        // Get List card from init
        const listAllCards: Card[] = this.cardService.getCardList();

        // Shuffle to list play cards
        this._listAllCards = this.cardService.shuffle(listAllCards);

        this.dividedCard();
    }

    // Divide card into player card groups
    public dividedCard(): void {

        const arrPlayerCardsLength = 4;

        for (let i = 0; i < arrPlayerCardsLength; i++) {
            this._arrPlayerCards.push(this._listAllCards.splice(0, 7));
        }

    }

    // first card dispense
    public firstCardDispense(): Card {

        let firstCardDispensed: Card;
        const duplicatedCardList = this.cardService.getDuplicatedCardList();

        const startedCardQueue = [];

        this._arrPlayerCards.forEach((cardList: Card[]) => {

            cardList.forEach((card: Card) => {

                for (const duplicatedCard of duplicatedCardList) {
                    if (card.tail === duplicatedCard.tail && card.head === duplicatedCard.head) {
                        startedCardQueue.push(card);
                    }
                }
            });
        });

        if (!startedCardQueue || !startedCardQueue.length) {
            return;
        }

        const cardMaxPoint = this.collectMaxPoint(startedCardQueue);
        this._arrPlayerCards.forEach((cardList: Card[]) => {

            cardList.forEach((card: Card) => {
                if (card.tail === cardMaxPoint.tail && card.head === cardMaxPoint.head) {
                    firstCardDispensed = card;

                    cardList.splice(cardList.indexOf(card), 1);
                }
            });
        });

        return firstCardDispensed;
    }

    // collect max point card
    public collectMaxPoint(cards: Card[]): Card {
        let maxPoint = 0;
        let cardMaxPoint: Card;
        // loop though the array collect max point
        for (const card of cards) {
            const cardPoint = card.head + card.tail;
            if (cardPoint > maxPoint) {
                maxPoint = cardPoint;
                cardMaxPoint = card;
            }
        }

        return cardMaxPoint;
    }
    //#endregion
}