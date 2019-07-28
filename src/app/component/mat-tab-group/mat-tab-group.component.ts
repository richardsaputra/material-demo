import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.css']
})
export class MatTabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logChange(index) {
    console.log(index);
  }

}
