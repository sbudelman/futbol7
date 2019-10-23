import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-details-images',
  templateUrl: './field-details-images.component.html',
  styleUrls: ['./field-details-images.component.scss']
})
export class FieldDetailsImagesComponent implements OnInit {
  @Input() images: string[];

  constructor() { }

  ngOnInit() {
  }

}
