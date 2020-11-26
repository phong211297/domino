import { Component } from "@angular/core";
import { SuperPerson } from "./models/super-class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "domino";

  public constructor() {}
}
