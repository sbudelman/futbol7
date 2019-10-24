import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../../venues.service';
import { VenuesMapService } from '../../venues-map/venues-map.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {

  constructor(
    public venuesService: VenuesService,
    private venuesMapService: VenuesMapService,
  ) { }

  ngOnInit() {
  }

  onSelectVenue(venueId: string) {
    this.venuesMapService.focusOnVenue(venueId);
  }
}
