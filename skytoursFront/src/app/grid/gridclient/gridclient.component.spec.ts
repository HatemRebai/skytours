import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridclientComponent } from './gridclient.component';

describe('GridclientComponent', () => {
  let component: GridclientComponent;
  let fixture: ComponentFixture<GridclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
