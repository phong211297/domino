import { Component, Input, OnInit } from "@angular/core";
import { CardMode } from "../models/card-mode.type";
import { Card } from "../models/card.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  //#region Properties

  // Input card
  @Input("card")
  public card: Card;

  // Input vertical
  @Input("cardMode")
  public cardMode: CardMode;

  //#endregion

  //#region Constructor
  public constructor() { }

  //#endregion

  //#region Methods
  public ngOnInit(): void { }
  //#endregion
}
