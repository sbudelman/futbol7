import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.scss']
})
export class VenueItemComponent implements OnInit {
  @Input() venue: any;

  constructor() { }

  ngOnInit() {
  }

}
