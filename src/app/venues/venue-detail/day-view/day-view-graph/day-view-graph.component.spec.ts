import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewGraphComponent } from './day-view-graph.component';

describe('DayViewGraphComponent', () => {
  let component: DayViewGraphComponent;
  let fixture: ComponentFixture<DayViewGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayViewGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
