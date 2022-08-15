import { Component, OnInit } from '@angular/core';
import {PlanetListService} from "../../../services/planet-list.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  providers: [PlanetListService]
})
export class PlanetListComponent implements OnInit {

  constructor(readonly planetListService: PlanetListService) { }

  ngOnInit(): void {
    this.planetListService.init()
  }

}
