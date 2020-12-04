import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { CardListModule } from "../card-list/card-list.module";
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardListModule, DragDropModule],
  exports: [HomeComponent],
})
export class HomeModule { }
