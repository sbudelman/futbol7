import { Component, OnInit } from '@angular/core';
import { VenuesMapService } from '../venues-map/venues-map.service';
import { BottomCardService } from '../../shared/ui-kit/bottom-card/bottom-card.service';

@Component({
  selector: 'app-venues-list-card',
  templateUrl: './venues-list-card.component.html',
  styleUrls: ['./venues-list-card.component.scss']
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
