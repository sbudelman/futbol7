import { Injectable } from '@angular/core';
import { } from 'googlemaps';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Venue } from './venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  venuesSubject = new BehaviorSubject<Venue[]>([]);
  venues$ = this.venuesSubject.asObservable();

  constructor(public http: HttpClient) {
   }

  getVenues(): Observable<any> {
    return this.http.get("./assets/fields.json")
      .pipe(tap(venues => this.venuesSubject.next(venues)));
  }

  getVenueById(id: string): Venue {
    let venues = this.venuesSubject.getValue();
    return venues.filter(v => v.id == id)[0];
  }
}
