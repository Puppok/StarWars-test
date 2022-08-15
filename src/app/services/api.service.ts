import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanetDTO} from "../models/planetDTO.interface";
import {Planet} from "../models/planet.interface";
import {Film} from "../models/film.interface";
import {Resident} from "../models/resident.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private url = 'https://swapi.dev/api/planets/'

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<PlanetDTO> {
    return this.http.get<PlanetDTO>(this.url)
  }

  getPlanet(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.url + id)
  }

  getResident(url: string): Observable<Resident> {
    return this.http.get<Resident>(url)
  }

  getFilm(url: string):Observable<Film> {
    return this.http.get<Film>(url)
  }
}
