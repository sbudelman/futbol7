import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum BottomCardState {
  open = "open",
  closed = "closed"
}

@Injectable({
  providedIn: 'root'
})
export class BottomCardService {
  private stateSubject = new BehaviorSubject<BottomCardState>(BottomCardState.open);
  state$ = this.stateSubject.asObservable()

  constructor() { }

  changeState(state: BottomCardState) {
    this.stateSubject.next(state);
  }

  toggle() {
    // Check current state
    const currentState = this.stateSubject.getValue()

    // Define toggle cases
    switch (currentState) {
      case 'open': this.changeState(BottomCardState.closed)

        break;

      case 'closed': this.changeState(BottomCardState.open)

        break;

      default:
        break;
    }
  }
}
