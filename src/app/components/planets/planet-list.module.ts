import {NgModule} from '@angular/core';
import {PlanetListComponent} from "./planet-list/planet-list.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PlanetInfoComponent} from "./planet-info/planet-info.component";

const routes = [
  {
    path: '',
    component: PlanetListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlanetListComponent,
    PlanetInfoComponent
  ]
})
export class PlanetListModule {
}
