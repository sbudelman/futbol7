import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDetailsInfoComponent } from './field-details-info.component';

describe('FieldDetailsInfoComponent', () => {
  let component: FieldDetailsInfoComponent;
  let fixture: ComponentFixture<FieldDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
