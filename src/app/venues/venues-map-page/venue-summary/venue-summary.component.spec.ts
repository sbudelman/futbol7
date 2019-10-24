import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueSummaryComponent } from './venue-summary.component';

describe('VenueSummaryComponent', () => {
  let component: VenueSummaryComponent;
  let fixture: ComponentFixture<VenueSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
