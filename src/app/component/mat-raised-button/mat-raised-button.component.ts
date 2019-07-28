import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-raised-button',
  templateUrl: './mat-raised-button.component.html',
  styleUrls: ['./mat-raised-button.component.css']
})
export class MatRaisedButtonComponent implements OnInit {

  toggleBtn: boolean;
  message: String = (this.toggleBtn) ? 'Ready!' : 'Preparing..';
  myFramework: String;
  notifications: number = 2;
  showSpinner: boolean = false;
  spinnerValue: number = 0;
  timer: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  getMessage(toggleBtn) {
    if(!toggleBtn) {
      this.message = 'Preparing..';
    } else {
      this.message = 'Ready!';
    }
  }

  getFramework(framework) {
    this.myFramework = 'I love using ' + framework;
  }

  loadData() {
    this.showSpinner = true;
    this.interval = setInterval(() => {
      if(this.timer < 60) {
        this.timer++;
        this.spinnerValue = this.spinnerValue + (100 / 60);
      } else {
        this.showSpinner = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
