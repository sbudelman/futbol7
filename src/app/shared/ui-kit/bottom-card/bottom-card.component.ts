import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BottomCardService } from './bottom-card.service';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.scss'],
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
export class BottomCardComponent implements OnInit {

  constructor(
    public bcService: BottomCardService
  ) { }

  ngOnInit() {
  }

}
