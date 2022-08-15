import {Injectable} from '@angular/core';
import {catchError, EMPTY, Observable, shareReplay, switchMap, take} from "rxjs";
import {Planet} from "../../../models/planet.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";

@Injectable()
export class PlanetCardService {

  planet$: Observable<Planet> = this.activatedRoute.params.pipe(
    switchMap(params => this.apiService.getPlanet(params['id'])),
    catchError(() => {
      this.router.navigateByUrl('**')
      return EMPTY
    }),
    shareReplay(1)
  )

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,) {
  }

  getPlanet(): Observable<Planet> {
    return this.planet$.pipe(
      take(1)
    )
  }
}
