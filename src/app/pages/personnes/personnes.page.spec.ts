import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonnesPage } from './personnes.page';

describe('PersonnesPage', () => {
  let component: PersonnesPage;
  let fixture: ComponentFixture<PersonnesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

import { Component } from '@angular/core';

@Component({
  selector: 'segment-button-example',
  templateUrl: 'segment-button-example.html',
  styleUrls: ['./segment-button-example.css'],
})
export class SegmentButtonExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}