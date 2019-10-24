import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
