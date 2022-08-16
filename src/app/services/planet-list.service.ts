import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, map} from "rxjs";
import {PlanetDTO} from "../models/planetDTO.interface";

@Injectable({
  providedIn: "root"
})
export class PlanetListService {

  private isInit = false
  private planetDTO$$ = new BehaviorSubject<PlanetDTO>({
    count: 0,
    next: 'https://swapi.dev/api/planets/?page=1',
    previous: null,
    results: []
  })

  readonly planetDTO$ = this.planetDTO$$.asObservable()
  readonly planets$ = this.planetDTO$.pipe(
    map(planetDTO => planetDTO.results)
  )

  constructor(private apiService: ApiService) {}

  init() {
    if(!this.isInit) {
      this.apiService.getPlanets().subscribe(planetDTO => {
        this.planetDTO$$.next(planetDTO)
        this.isInit = true
      })
    }
  }

  nextPage(): void {
    const nextUrl = this.planetDTO$$.getValue()?.next
    if (nextUrl) {
      this.apiService.getPlanets(nextUrl).pipe(
        map(info => this.planetDTO$$.next(info))
      ).subscribe()
    }
  }

  previousPage(): void {
    const prevUrl = this.planetDTO$$.getValue()?.previous
    if (prevUrl) {
      this.apiService.getPlanets(prevUrl).pipe(
        map(info => this.planetDTO$$.next(info))
      ).subscribe()
    }
  }
}
