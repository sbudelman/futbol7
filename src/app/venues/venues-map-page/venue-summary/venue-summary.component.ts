import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Venue } from '../venue.model';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-venue-summary',
  templateUrl: './venue-summary.component.html',
  styleUrls: ['./venue-summary.component.scss']
})
export class VenueSummaryComponent implements OnInit, OnDestroy {
  venue: Venue;

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public venuesService: VenuesService,
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params: any) => {
      this.venue = this.venuesService.getVenueById(params.id)
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }

  openDetail() {
    this.router.navigate(['venues','detail',this.venue.id]);
  }
}
