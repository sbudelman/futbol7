import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../../venues-map-page/venue.model';

@Component({
  selector: 'app-venue-detail-info',
  templateUrl: './venue-detail-info.component.html',
  styleUrls: ['./venue-detail-info.component.scss']
})
export class VenueDetailInfoComponent implements OnInit {
  @Input() venue: Venue;

  constructor() { }

  ngOnInit() {
  }

}
