import {Component} from '@angular/core';
import {PlanetCardService} from "./planet-card.service";
import {Router} from "@angular/router";
import {GenderFilterService} from "../../../services/gender-filter.service";

@Component({
  selector: 'sw-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [
    PlanetCardService,
    GenderFilterService
  ]
})
export class PlanetCardComponent {

  constructor(readonly planetCardService: PlanetCardService,
              private router: Router) { }

  toPlanetList() {
    this.router.navigateByUrl('/planet-list')
  }
}
