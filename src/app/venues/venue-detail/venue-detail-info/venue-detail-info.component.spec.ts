import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailInfoComponent } from './venue-detail-info.component';

describe('VenueDetailInfoComponent', () => {
  let component: VenueDetailInfoComponent;
  let fixture: ComponentFixture<VenueDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
