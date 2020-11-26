import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { CardListModule } from "../card-list/card-list.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardListModule],
  exports: [HomeComponent],
})
export class HomeModule {}
