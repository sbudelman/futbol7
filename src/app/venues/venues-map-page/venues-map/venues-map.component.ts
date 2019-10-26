import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Venue } from '../venue.model';
import { VenuesService } from '../venues.service';
import { take } from 'rxjs/operators';
import { VenuesMapService } from './venues-map.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venues-map',
  templateUrl: './venues-map.component.html',
  styleUrls: ['./venues-map.component.scss']
})
export class VenuesMapComponent implements OnInit, OnDestroy {
  lat = 40.3878698;
  lng = -3.7096207;
  venues: Venue[];
  venueFocus: Venue;
  markers: any[] = [];
  mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      // rotateControl: false,
      fullscreenControl: false
  };

  private focusVenueSub: Subscription;

  @ViewChild('map', {static: false}) mapElement: any;
  map: google.maps.Map;

  constructor(
    public venuesService: VenuesService,
    public venuesMapService: VenuesMapService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.venuesService.getVenues().pipe(take(1)).subscribe(venues => {
      this.venues = venues;

      // NOTE: this code assumes this.map will be initialize before this.venues!
      this.venues.forEach(venue => {
        this.markers.push(new google.maps.Marker({
          position: {lat: venue.lat, lng: venue.lng},
          map: this.map,
          title: venue.name
        }))
      });

      this.markerClick();
    })

    this.focusVenueSub = this.venuesMapService.focus$.subscribe(venueId => {
      this.focusOnMarker(this.venues.map(v => v.id).indexOf(venueId));
    })
  }

  ngAfterViewInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
  }

  focusOnVenue(venueId: string) {
    this.venuesMapService.focusOnVenue(venueId);
    this.router.navigate(['venues', venueId]);
  }

  private focusOnMarker(i: number) {
    this.map.setZoom(17);
    this.map.setCenter(this.markers[i].getPosition());
  }

  private markerClick() {
    (<google.maps.Marker[]>this.markers).forEach((marker, i) => {
      marker.addListener('click', () => {
        this.focusOnVenue(this.venues[i].id);
      })
    })
  }

  ngOnDestroy() {
    this.focusVenueSub.unsubscribe();
  }

}
