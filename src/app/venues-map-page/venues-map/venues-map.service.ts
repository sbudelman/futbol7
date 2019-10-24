import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BottomCardService, BottomCardState } from '../../shared/ui-kit/bottom-card/bottom-card.service';

@Injectable({
  providedIn: 'root'
})
export class VenuesMapService {
  private focusSubject = new Subject<string>();
  focus$ = this.focusSubject.asObservable();

  constructor(private bcService: BottomCardService) { }

  focusOnVenue(venueId: string) {
    this.focusSubject.next(venueId);
    this.bcService.changeState(BottomCardState.closed);
  }
}
