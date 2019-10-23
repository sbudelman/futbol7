import { Injectable } from '@angular/core';
import { } from 'googlemaps';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  fieldsSubject = new BehaviorSubject<any[]>([]);
  fields$ = this.fieldsSubject.asObservable();

  constructor(public http: HttpClient) { }

  public getFields(): Observable<any> {
    return this.http.get("./assets/fields.json");
  }

  // Method to get place details from google maps places api. But it charges too much!
  // getFields(map: any) {
  //   let request: any;
  //   let service = new google.maps.places.PlacesService(map);

  //   placeIdList.forEach(placeId => {
  //     setTimeout(() => {

  //       request = {
  //         placeId: placeId,
  //         fields: ['id', 'name', 'formatted_address', 'photo', 'opening_hours',
  //         'rating', 'user_ratings_total', 'formatted_phone_number', 'url']
  //       }
  //       // service.getDetails(request, function(place, status) {
  //       //   console.log(status);
  //       //   console.log(place);
  //       //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //       //     this.fieldsArray.push(place);
  //       //   }
  //       // })

  //     }, 3000);

  //   });
  // }
}
