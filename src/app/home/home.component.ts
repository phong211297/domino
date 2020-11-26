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
import { CardService } from "../services/card.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  //#region Properties

  // List card
  public listCard: Card[];

  // Player 1 card
  public player1Cards: Card[];

  // Player 2 card
  public player2Cards: Card[];

  // Player 3 card
  public player3Cards: Card[];

  // Player 4 card
  public player4Cards: Card[];
  //#endregion

  //#region Constructor

  public constructor(protected cardService: CardService) {}

  //#endregion

  //#region Methods

  public ngOnInit(): void {
    this.listCard = this.cardService.shuffle(this.cardService.getCardList());

    this.player1Cards = this.listCard.splice(0, 7);
    this.player2Cards = this.listCard.splice(0, 7);
    this.player3Cards = this.listCard.splice(0, 7);
    this.player4Cards = this.listCard.splice(0, 7);

    const subscription = of(1, 2, 3, 4, 5)
      .pipe(takeWhile((ele) => ele > 3))
      .subscribe(
        (data) => console.log(data),
        () => {},
        () => {
          console.log("Complete");
        }
      );
  }
  //#endregion
}
