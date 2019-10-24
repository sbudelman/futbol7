import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BottomCardComponent } from './ui-kit/bottom-card/bottom-card.component';
import { RatingComponent } from './ui-kit/rating/rating.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BottomCardComponent,
    RatingComponent,

  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,

    BottomCardComponent,
    RatingComponent,
  ]
})
export class SharedModule { }
