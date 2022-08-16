import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FadeInOutAnimation} from "./route-animations/fade-in-out-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ FadeInOutAnimation ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.url
    else return null
  }
}
