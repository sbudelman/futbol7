import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesMapPageComponent } from './venues-map-page.component';

describe('VenuesMapPageComponent', () => {
  let component: VenuesMapPageComponent;
  let fixture: ComponentFixture<VenuesMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
