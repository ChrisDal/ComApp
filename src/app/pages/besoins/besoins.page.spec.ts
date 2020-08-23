import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BesoinsPage } from './besoins.page';

describe('BesoinsPage', () => {
  let component: BesoinsPage;
  let fixture: ComponentFixture<BesoinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BesoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
