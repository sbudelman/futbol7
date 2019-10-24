import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { VenuesMapService } from '../venues-map/venues-map.service';
import { BottomCardService, BottomCardState } from './bottom-card.service';

@Component({
  selector: 'app-venues-list-card',
  templateUrl: './venues-list-card.component.html',
  styleUrls: ['./venues-list-card.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '86vh'
      })),
      state('closed', style({
        height: '200px'
      })),
      state('backdropOn', style({
        opacity: 1
      })),
      state('backdropOff', style({
        opacity: 0,
        height: 0
      })),
      transition('open => closed', [
        animate('0.15s')
      ]),
      transition('closed => open', [
        animate('0.15s')
      ]),
    ]),
  ]
})
export class VenuesListCardComponent implements OnInit {
  constructor(
    private venuesMapService: VenuesMapService,
    public bcService: BottomCardService,
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.bcService.toggle();
  }

}
