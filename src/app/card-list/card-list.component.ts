import { CardMode } from "./../models/card-mode.type";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Card } from "../models/card.model";
import { ListMode } from "../models/list-mode.type";
import { CardService } from '../services/card-manager.service';

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"],
})
export class CardListComponent implements OnInit {
  //#region Properties

  // Card list
  @Input("cardList")
  public cardList: Card[];

  // Input vertical
  @Input("listMode")
  public listMode: ListMode;

  // Input card modeCard
  @Input("cardMode")
  public cardMode: CardMode;

  // Input list card active
  @Input('listActive')
  public shouldListActived: boolean;

  // Input is entry list
  @Input('isEntryList')
  public isEntryList: boolean;

  // Output selected card
  @Output('emitSelectedCard') emitSelectedCard = new EventEmitter<Card>();

  // Selected card
  public selectedCard: Card;

  //#endregion

  //#region Constructor
  public constructor(private cardService: CardService) { }

  //#endregion

  //#region Methods

  public ngOnInit(): void { }

  // Trigger when select card
  public selectCardHandle(card: Card): void {
    if (!this.shouldListActived) {
      return;
    }

    if (this.selectedCard === card) {
      this.cardList.splice(this.cardList.indexOf(this.selectedCard), 1);
      this.emitSelectedCard.emit(this.selectedCard);

      this.selectedCard = null;
      return;
    }

    this.selectedCard = card;
  }

  // Get card mode
  public getCardMode(card: Card): CardMode {
    if (this.isEntryList && this.cardService.isDuplicatedCard(card)) {
      return 'verticle';
    }

    return this.cardMode;
  }
  //#endregion
}
