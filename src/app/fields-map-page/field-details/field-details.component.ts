import { Component, OnInit, Input, Output } from '@angular/core';
import { Field } from '../field.model';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss']
})
export class FieldDetailsComponent implements OnInit {
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }


}
