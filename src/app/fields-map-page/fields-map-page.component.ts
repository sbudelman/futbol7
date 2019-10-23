import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { take } from 'rxjs/operators';

import { FieldsService } from './fields.service';
import { Field } from './field.model';

@Component({
  selector: 'app-fields-map-page',
  templateUrl: './fields-map-page.component.html',
  styleUrls: ['./fields-map-page.component.scss']
})
export class FieldsMapPageComponent implements OnInit, AfterViewInit {
  lat = 40.4078698;
  lng = -3.7096207;
  fields: Field[];
  fieldFocus: Field;
  markers: any[] = [];
  mapProperties = {
       center: new google.maps.LatLng(this.lat, this.lng),
       zoom: 12,
       mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  show = 'list';

  @ViewChild('map', {static: false}) mapElement: any;
  map: google.maps.Map;

  constructor(public fieldsService: FieldsService) { }

  ngOnInit() {
    this.fieldsService.getFields().pipe(take(1)).subscribe(fields => {
      this.fields = fields;

      // NOTE: this code assumes this.map will be initialize before this.fields!
      this.fields.forEach(field => {
        this.markers.push(new google.maps.Marker({
          position: {lat: field.lat, lng: field.lng},
          map: this.map,
          title: field.name
        }))
      });

      this.markerClick();
    })
  }

  ngAfterViewInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
  }

  onMouseEnter(i: number) {
    this.markers[i].setAnimation(google.maps.Animation.BOUNCE);
  }

  onMouseLeave(i: number) {
    this.markers[i].setAnimation(null);
  }

  onClick(i: number) {
    this.focusOnField(this.markers[i], i);
  }

  onGoBack() {
    this.map.setZoom(12);
    this.map.panTo({lat: this.lat, lng: this.lng});
    this.show = 'list';
  }

  private focusOnField(marker: google.maps.Marker, index: number) {
    this.map.setZoom(17);
    this.map.setCenter(marker.getPosition());
    this.fieldFocus = this.fields[index]
    this.show = 'details';
  }

  private markerClick() {
    (<google.maps.Marker[]>this.markers).forEach((marker, index) => {
      marker.addListener('click', () => {
        this.focusOnField(marker, index);
      })
    })
  }



}
