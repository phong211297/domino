import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotComponent } from './dot.component';

@NgModule({
  declarations: [DotComponent],
  imports: [
    CommonModule
  ],
  exports: [DotComponent]
})
export class DotModule { }
