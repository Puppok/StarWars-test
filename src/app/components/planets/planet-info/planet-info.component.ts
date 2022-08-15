import {Component, Input, OnInit} from '@angular/core';
import {Planet} from "../../../models/planet.interface";

@Component({
  selector: 'sw-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  @Input() planet!: Planet

  planetId = ''

  ngOnInit(): void {
    this.planetId = this.planet.url.replace(/[^\d]/g, '')
  }

}
