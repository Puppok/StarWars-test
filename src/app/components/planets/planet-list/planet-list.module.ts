import {NgModule} from '@angular/core';
import {PlanetListComponent} from "./planet-list.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

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
    PlanetListComponent
  ]
})
export class PlanetListModule {
}
