import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../field.model';

@Component({
  selector: 'app-field-details-info',
  templateUrl: './field-details-info.component.html',
  styleUrls: ['./field-details-info.component.scss']
})
export class FieldDetailsInfoComponent implements OnInit {
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
