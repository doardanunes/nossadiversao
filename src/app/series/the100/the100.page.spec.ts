import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { The100Page } from './the100.page';

describe('The100Page', () => {
  let component: The100Page;
  let fixture: ComponentFixture<The100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ The100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(The100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
