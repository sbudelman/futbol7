import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../../venue.model';

@Component({
  selector: 'app-venue-summary-details',
  templateUrl: './venue-summary-details.component.html',
  styleUrls: ['./venue-summary-details.component.scss']
})
export class VenueSummaryDetailsComponent implements OnInit {
  @Input() venue: Venue;

  constructor() { }

  ngOnInit() {
  }

}
