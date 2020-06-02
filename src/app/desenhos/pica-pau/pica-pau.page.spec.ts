import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicaPauPage } from './pica-pau.page';

describe('PicaPauPage', () => {
  let component: PicaPauPage;
  let fixture: ComponentFixture<PicaPauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicaPauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PicaPauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
