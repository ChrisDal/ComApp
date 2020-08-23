import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActExtPage } from './act-ext.page';

describe('ActExtPage', () => {
  let component: ActExtPage;
  let fixture: ComponentFixture<ActExtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActExtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActExtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
