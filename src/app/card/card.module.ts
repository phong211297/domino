import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DotModule } from './dot/dot.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    DotModule
  ],
  exports: [CardComponent]
})

export class CardModule { }
