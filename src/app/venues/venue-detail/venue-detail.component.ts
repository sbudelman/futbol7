import { Component, OnInit } from '@angular/core';
import { Venue } from '../venues-map-page/venue.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { VenuesService } from '../venues-map-page/venues.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss']
})
export class VenueDetailComponent implements OnInit {
  venue: Venue;

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public venuesService: VenuesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params: any) => {
      this.venue = this.venuesService.getVenueById(params.id)
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
