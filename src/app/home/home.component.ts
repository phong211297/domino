import { Component, OnInit } from "@angular/core";
import { from, observable, of, throwError } from "rxjs";
import {
  catchError,
  filter,
  mergeMap,
  retry,
  takeUntil,
  takeWhile,
  tap,
} from "rxjs/operators";
import { Card } from "../models/card.model";
import { CardService } from "../services/card-manager.service";
import { GameSetupService } from '../services/game-setup.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  //#region Properties

  // List card
  public listCard: Card[][];

  // Player 1 card
  public player1Cards: Card[];

  // Player 2 card
  public player2Cards: Card[];

  // Player 3 card
  public player3Cards: Card[];

  // Player 4 card
  public player4Cards: Card[];

  // Public list card entry
  public listCardEntry = [];
  //#endregion

  //#region Constructor

  public constructor(protected cardService: CardService, protected gameSetupService: GameSetupService) {

  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {
    // Set up game
    this.gameSetupService.setUpGame();

    // Divine cards
    this.listCard = this.gameSetupService.arrPlayerCards;

    this.player1Cards = this.listCard[0];
    this.player2Cards = this.listCard[1];
    this.player3Cards = this.listCard[2];
    this.player4Cards = this.listCard[3];

    // Make a first move
    const firstCardDispensed = this.gameSetupService.firstCardDispense();

    this.listCardEntry.push(firstCardDispensed);

  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(this.listCardEntry);
  }

  public handleSelectedCard(card: Card): void {
    this.listCardEntry.push(card);

    return;
  }
  //#endregion
}
