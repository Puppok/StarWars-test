import {Component, OnDestroy} from '@angular/core';
import {PlanetCardService} from "./planet-card.service";
import {Router} from "@angular/router";
import {GenderFilterService} from "../../../services/gender-filter.service";
import {Resident} from "../../../models/resident.interface";
import {GenderFilterOptions} from "../../../models/gender-filter-options";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'sw-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [
    PlanetCardService,
    GenderFilterService
  ]
})
export class PlanetCardComponent implements OnDestroy{

  residents$ = combineLatest([this.planetCardService.residents$, this.genderFilterService.option$]).pipe(
    map(([residents, genderFilterOptions]) => PlanetCardComponent.filteredResidents(residents, genderFilterOptions))
  )

  constructor(private router: Router,
              readonly planetCardService: PlanetCardService,
              readonly genderFilterService: GenderFilterService) { }

  toPlanetList() {
    this.router.navigateByUrl('/planet-list')
  }

  private static filteredResidents(residents: Resident[], genderFilterOption: GenderFilterOptions): Resident[] {
    let filteredResidents: Resident[] = [...residents]
    switch (genderFilterOption) {
      case GenderFilterOptions.MALE:
        return filteredResidents.filter(resident => resident.gender === 'male')
      case GenderFilterOptions.FEMALE:
        return filteredResidents.filter(resident => resident.gender === 'female')
      case GenderFilterOptions.UNKNOWN:
        return filteredResidents.filter(resident => resident.gender === 'n/a')
    }
    return filteredResidents
  }

  ngOnDestroy() {
    this.genderFilterService.clearOption()
  }
}
