import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.page.html',
  styleUrls: ['./personnes.page.scss'],
})
export class PersonnesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

export class SegmentButtonExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}



