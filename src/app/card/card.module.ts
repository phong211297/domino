import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DotModule } from './dot/dot.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    DotModule,
    DragDropModule
  ],
  exports: [CardComponent]
})

export class CardModule { }
