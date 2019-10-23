import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.scss']
})
export class FieldCardComponent implements OnInit {
  @Input() field: any;

  constructor() { }

  ngOnInit() {
  }

}
