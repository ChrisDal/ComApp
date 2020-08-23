import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActInPage } from './act-in.page';

describe('ActInPage', () => {
  let component: ActInPage;
  let fixture: ComponentFixture<ActInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
