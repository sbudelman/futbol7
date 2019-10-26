import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VenuesMapPageComponent } from './venues-map-page/venues-map-page.component';
import { VenuesMapComponent } from './venues-map-page/venues-map/venues-map.component';
import { VenuesListCardComponent } from './venues-map-page/venues-list-card/venues-list-card.component';
import { VenuesListComponent } from './venues-map-page/venues-list-card/venues-list/venues-list.component';
import { VenueItemComponent } from './venues-map-page/venues-list-card/venues-list/venue-item/venue-item.component';
import { VenuesRoutingModule } from './venues-routing.module';
import { VenueSummaryComponent } from './venues-map-page/venue-summary/venue-summary.component';
import { VenueSummaryDetailsComponent } from './venues-map-page/venue-summary/venue-summary-details/venue-summary-details.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { VenueDetailInfoComponent } from './venue-detail/venue-detail-info/venue-detail-info.component';
import { DayViewComponent } from './venue-detail/day-view/day-view.component';
import { DayViewGraphComponent } from './venue-detail/day-view/day-view-graph/day-view-graph.component';



@NgModule({
  declarations: [
    VenuesMapPageComponent,
    VenuesMapComponent,
    VenuesListCardComponent,
    VenuesListComponent,
    VenueItemComponent,
    VenueSummaryComponent,
    VenueSummaryDetailsComponent,
    VenueDetailComponent,
    VenueDetailInfoComponent,
    DayViewComponent,
    DayViewGraphComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VenuesRoutingModule
  ]
})
export class VenuesModule { }
