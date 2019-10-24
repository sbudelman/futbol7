import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesListCardComponent } from './venues-list-card.component';

describe('VenuesListCardComponent', () => {
  let component: VenuesListCardComponent;
  let fixture: ComponentFixture<VenuesListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
