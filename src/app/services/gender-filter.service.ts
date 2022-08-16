import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenderFilterOptions} from "../models/gender-filter-options";

@Injectable()
export class GenderFilterService {

  private option$$ = new BehaviorSubject(GenderFilterOptions.NONE)
  readonly option$ = this.option$$.asObservable()

  updateOption(data: GenderFilterOptions) {
    return this.option$$.next(data)
  }

  clearOption() {
    this.option$$.next(GenderFilterOptions.NONE)
  }
}
