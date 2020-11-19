import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  //#region Properties

  // Input number of dots
  @Input('dots')
  public dots: number;

  //#region

  //#region Constructor
  public constructor() { }

  //#endregion
  ngOnInit(): void {
  }

}
