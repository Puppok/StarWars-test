import {Component, OnInit} from '@angular/core';
import {PlanetCardService} from "./planet-card.service";

@Component({
  selector: 'sw-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [PlanetCardService]
})
export class PlanetCardComponent implements OnInit {

  constructor(readonly planetCardService: PlanetCardService) { }

  ngOnInit(): void {
  }

}
