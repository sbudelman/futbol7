import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListPageComponent } from './game-list-page/game-list-page.component';
import { VenuesMapPageComponent } from './venues-map-page/venues-map-page.component';

const routes: Routes = [
  { path: '', component: VenuesMapPageComponent },
  { path: 'games', component: GameListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
