import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'sw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router) { }

  goToPlanetList() {
    this.router.navigateByUrl('/planet-list')
  }
}
