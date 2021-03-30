import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailHotelComponent } from './update-detail-hotel.component';

describe('UpdateDetailHotelComponent', () => {
  let component: UpdateDetailHotelComponent;
  let fixture: ComponentFixture<UpdateDetailHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
