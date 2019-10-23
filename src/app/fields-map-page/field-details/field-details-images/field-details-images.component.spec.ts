import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDetailsImagesComponent } from './field-details-images.component';

describe('FieldDetailsImagesComponent', () => {
  let component: FieldDetailsImagesComponent;
  let fixture: ComponentFixture<FieldDetailsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDetailsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDetailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
