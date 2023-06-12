import { Component } from '@angular/core';
import { ClickServiceService } from '../click-service.service';

@Component({
  selector: 'click-value-changer',
  templateUrl: './clickvaluechanger.html',
  styleUrls: ['./clickvaluechanger.css'],
  //providers: [ClickServiceService],
})
export class ClickValueChanger {
  constructor(public clickservice: ClickServiceService) {}
  incr() {
    console.log('changer:', this.clickservice);
    this.clickservice.incr();
  }
  decr() {
    console.log('changer:', this.clickservice);
    this.clickservice.decr();
  }
}
