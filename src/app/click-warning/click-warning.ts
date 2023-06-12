import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from '../click-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'click-warning',
  templateUrl: './click-warning.html',
  styleUrls: ['./click-warning.css'],
  //providers: [ClickServiceService]
})
export class ClickWarning implements OnInit {

  private subjectSubscription!: Subject<any>;
  warnClass: string = ".SAFE";
  warnText: string = "Howdy!";
  constructor(private clickservice: ClickServiceService) {
  }

  ngOnInit() {
    this.subjectSubscription = this.clickservice.getCountSubject();
    this.subjectSubscription.subscribe({
      next: ({value}) => {
      if( value < 20 ) { this.warnClass = "SAFE"; this.warnText = "You're at a safe number of clicks.";}
      else if( value < 30 ) { this.warnClass = "WARN"; this.warnText = "You're getting up there aren't ya?";}
      else { this.warnClass = "ALERT"; this.warnText = "EEK TOO MANY"; }
      },
      error: (error) => {console.warn(error);}
    })
  }
  getWarnClass() {
    return this.warnClass;
  }
  getWarnText() {
    this.warnText;
  }
  
}
