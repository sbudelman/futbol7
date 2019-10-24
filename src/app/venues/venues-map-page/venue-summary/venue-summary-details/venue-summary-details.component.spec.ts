import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueSummaryDetailsComponent } from './venue-summary-details.component';

describe('VenueSummaryDetailsComponent', () => {
  let component: VenueSummaryDetailsComponent;
  let fixture: ComponentFixture<VenueSummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueSummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
