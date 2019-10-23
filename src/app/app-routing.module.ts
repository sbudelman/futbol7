import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListPageComponent } from './game-list-page/game-list-page.component';
import { FieldsMapPageComponent } from './fields-map-page/fields-map-page.component';

const routes: Routes = [
  { path: '', component: FieldsMapPageComponent },
  { path: 'games', component: GameListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
