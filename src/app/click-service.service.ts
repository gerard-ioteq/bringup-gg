import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn: "root"})
export class ClickServiceService {
  count: number = 10;
  countSubject: Subject<any> = new Subject<any>();
  constructor() {}

  incr() {
    this.countSubject.next(++this.count);
    console.log("service: incr",this.count );
  }
  decr() {
    this.countSubject.next(--this.count);
    console.log("service:decr",this);
  }
  getCountSubject(): Subject<any> {
    return this.countSubject;
  }
}
