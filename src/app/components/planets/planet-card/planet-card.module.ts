import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PlanetCardComponent} from "./planet-card.component";
import {RouterModule} from "@angular/router";
import {GenderFilterModule} from "../../ui/gender-filter/gender-filter.module";

const routes = [
  {
    path: '',
    component: PlanetCardComponent
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GenderFilterModule
    ],
  declarations: [
    PlanetCardComponent
  ]
})
export class PlanetCardModule {
}
