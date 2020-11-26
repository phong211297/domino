import { CardMode } from "./../models/card-mode.type";
import { Component, Input, OnInit } from "@angular/core";
import { Card } from "../models/card.model";
import { CardService } from "../services/card.service";
import { ListMode } from "../models/list-mode.type";

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

  // Input card mode
  @Input("cardMode")
  public cardMode: CardMode;

  //#endregion

  //#region Constructor
  public constructor(private cardService: CardService) {}

  //#endregion

  //#region Methods

  public ngOnInit(): void {}

  //#endregion
}
