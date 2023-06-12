import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ClickServiceService } from '../click-service.service';

@Component({
  selector: 'click-counter',
  templateUrl: './click-counter.html',
  styleUrls: ['./click-counter.css'],
  //providers: [ClickServiceService],
})

export class ClickCounter implements OnInit {
  private subjectSubscription!: Subject<any>;
  valueDisplayed : number = 10;

  constructor(public clickservice: ClickServiceService) {

  }

  ngOnInit() {
    this.subjectSubscription = this.clickservice.getCountSubject();
    this.subjectSubscription.subscribe({
      next: (value) => { this.valueDisplayed = value; } ,
      error: (error) => { console.warn(error); }
    })
  }

  getCount() {
    console.log('counter:', this.clickservice);
    return this.valueDisplayed;
  }
}
