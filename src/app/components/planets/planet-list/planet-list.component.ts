import { Component, OnInit } from '@angular/core';
import {PlanetListService} from "../../../services/planet-list.service";

@Component({
  selector: 'sw-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  constructor(readonly planetListService: PlanetListService) { }

  ngOnInit(): void {
    this.planetListService.init()
  }
}
