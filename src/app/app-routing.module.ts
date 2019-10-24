import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListPageComponent } from './game-list-page/game-list-page.component';
import { VenuesMapPageComponent } from './venues/venues-map-page/venues-map-page.component';

const routes: Routes = [
  { path: 'venues',
      loadChildren: () => import('./venues/venues.module').then(m => m.VenuesModule) },
  { path: 'games', component: GameListPageComponent },
  {
    path: '',
    redirectTo: 'venues',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
