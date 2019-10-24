import { Component, OnInit, ViewChild } from '@angular/core';
import { Venue } from '../venue.model';
import { VenuesService } from '../venues.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-venues-map',
  templateUrl: './venues-map.component.html',
  styleUrls: ['./venues-map.component.scss']
})
export class VenuesMapComponent implements OnInit {
  lat = 40.4078698;
  lng = -3.7096207;
  venues: Venue[];
  venueFocus: Venue;
  markers: any[] = [];
  mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      // rotateControl: false,
      fullscreenControl: false
  };

  @ViewChild('map', {static: false}) mapElement: any;
  map: google.maps.Map;

  constructor(public venuesService: VenuesService) { }

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
  }

  ngAfterViewInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
  }

  onClick(i: number) {
    this.focusOnVenue(this.markers[i], i);
  }

  private focusOnVenue(marker: google.maps.Marker, index: number) {
    this.map.setZoom(17);
    this.map.setCenter(marker.getPosition());
    this.venueFocus = this.venues[index]
  }

  private markerClick() {
    (<google.maps.Marker[]>this.markers).forEach((marker, index) => {
      marker.addListener('click', () => {
        this.focusOnVenue(marker, index);
      })
    })
  }

}
