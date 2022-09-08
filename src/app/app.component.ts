import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  day: any = [];
  month: any = [];
  futureDate: any;
  dateArr: any = [];
  lastDate: any;
  preDate: any;
  constructor() {
    for (var i = 0; i < 14; i++) {
      const date = new Date();
      this.futureDate = new Date(
        date.setDate(date.getDate() + i)
      ).toDateString();
      this.dateArr.push(this.futureDate);
      this.day.push(this.futureDate.slice(0, 3));
      this.month.push(this.futureDate.slice(4, 7));
      // console.log(this.dateArr);
    }
    this.lastDate = this.dateArr[13];
    this.preDate = this.dateArr[0];
  }

  next(value) {
    this.dateArr = [];
    for (let i = 1; i < 15; i++) {
      const date = new Date(value);
      let dates = new Date(date.setDate(date.getDate() + i)).toDateString();
      this.dateArr.push(dates);
      console.log(dates.slice(8,10))
      this.dateArr.slice(8,10)
      // console.log(this.dateArr);
      this.lastDate = this.dateArr[13];
      this.preDate = this.dateArr[0];
    }
  }
  pre(value) {
    this.dateArr = [];
    for (let i = 1; i < 15; i++) {
      const date = new Date(value);
      let dates = new Date(date.setDate(date.getDate() - i)).toDateString();
      this.dateArr.push(dates);
      // console.log(this.dateArr);
      console.log(dates.slice(8,10))
      this.preDate = this.dateArr[13];
      this.lastDate = this.dateArr[0];
    }
  }
}
