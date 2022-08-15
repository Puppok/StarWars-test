import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PlanetCardComponent} from "./planet-card.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    component: PlanetCardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlanetCardComponent
  ]
})
export class PlanetCardModule {
}
