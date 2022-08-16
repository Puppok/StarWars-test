import {Injectable} from '@angular/core';
import {catchError, EMPTY, Observable, of, shareReplay, switchMap, take, zip} from "rxjs";
import {Planet} from "../models/planet.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Film} from "../models/film.interface";
import {Resident} from "../models/resident.interface";

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

  residents$: Observable<Resident[]> = this.planet$.pipe(
    switchMap(planet => planet.residents.length > 0 ? zip(
      planet.residents.map(url => this.apiService.getResident(url))
    ) : of([]))
  )

  films$: Observable<Film[]> = this.planet$.pipe(
    switchMap(planet => planet.films.length > 0 ? zip(
      planet.films.map(url => this.apiService.getFilm(url))
    ) : of([]))
  )

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,) {}

  getPlanet(): Observable<Planet> {
    return this.planet$.pipe(
      take(1)
    )
  }
}
