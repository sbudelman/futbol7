import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsMapPageComponent } from './fields-map-page.component';

describe('FieldsMapPageComponent', () => {
  let component: FieldsMapPageComponent;
  let fixture: ComponentFixture<FieldsMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
