import { Component, OnInit } from '@angular/core';
import { Venue } from './venue.model';
import { take } from 'rxjs/operators';
import { VenuesService } from './venues.service';

@Component({
  selector: 'app-venues-map-page',
  templateUrl: './venues-map-page.component.html',
  styleUrls: ['./venues-map-page.component.scss']
})
export class VenuesMapPageComponent implements OnInit {
  venues: Venue[];

  constructor(
    public venuesService: VenuesService
  ) { }

  ngOnInit() {
    this.venuesService.getVenues().pipe(take(1)).subscribe(venues => {
      this.venues = venues;
    })

  }
}
