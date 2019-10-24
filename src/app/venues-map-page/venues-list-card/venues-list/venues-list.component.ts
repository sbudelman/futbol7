import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../../venues.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {

  constructor(
    public venuesService: VenuesService
  ) { }

  ngOnInit() {
  }

}
