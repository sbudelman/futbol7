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



@NgModule({
  declarations: [
    VenuesMapPageComponent,
    VenuesMapComponent,
    VenuesListCardComponent,
    VenuesListComponent,
    VenueItemComponent,
    VenueSummaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VenuesRoutingModule
  ]
})
export class VenuesModule { }
