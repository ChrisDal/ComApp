import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentimentsPage } from './sentiments.page';

describe('SentimentsPage', () => {
  let component: SentimentsPage;
  let fixture: ComponentFixture<SentimentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
