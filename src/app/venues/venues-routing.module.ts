import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenuesMapPageComponent } from './venues-map-page/venues-map-page.component';
import { VenueSummaryComponent } from './venues-map-page/venue-summary/venue-summary.component';
import { VenuesListCardComponent } from './venues-map-page/venues-list-card/venues-list-card.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';

const routes: Routes = [
  { path: 'venues',
    component: VenuesMapPageComponent,
    children: [
      { path: '', component: VenuesListCardComponent },
      { path: ':id', component: VenueSummaryComponent },
    ]},
  { path: 'venues/detail/:id', component: VenueDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule { }
