import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { GamePostComponent } from './game-list-page/game-post/game-post.component';
import { GameListPageComponent } from './game-list-page/game-list-page.component';
import { FieldsMapPageComponent } from './fields-map-page/fields-map-page.component';
import { FieldCardComponent } from './fields-map-page/field-card/field-card.component';
import { RatingComponent } from './shared/ui-kit/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { FieldDetailsComponent } from './fields-map-page/field-details/field-details.component';
import { FieldDetailsImagesComponent } from './fields-map-page/field-details/field-details-images/field-details-images.component';
import { CategoryRatingComponent } from './fields-map-page/field-details/category-rating/category-rating.component';
import { FieldDetailsInfoComponent } from './fields-map-page/field-details/field-details-info/field-details-info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VenuesMapPageComponent } from './venues-map-page/venues-map-page.component';
import { VenuesMapComponent } from './venues-map-page/venues-map/venues-map.component';
import { VenuesListCardComponent } from './venues-map-page/venues-list-card/venues-list-card.component';
import { VenuesListComponent } from './venues-map-page/venues-list-card/venues-list/venues-list.component';
import { VenueItemComponent } from './venues-map-page/venues-list-card/venues-list/venue-item/venue-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePostComponent,
    GameListPageComponent,
    FieldsMapPageComponent,
    FieldCardComponent,
    RatingComponent,
    FieldDetailsComponent,
    FieldDetailsImagesComponent,
    CategoryRatingComponent,
    FieldDetailsInfoComponent,
    VenuesMapPageComponent,
    VenuesMapComponent,
    VenuesListCardComponent,
    VenuesListComponent,
    VenueItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
