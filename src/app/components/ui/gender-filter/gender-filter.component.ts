import {Component, OnDestroy, OnInit} from '@angular/core';
import {GenderFilterOptions} from "../../../models/gender-filter-options";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {GenderFilterService} from "../../../services/gender-filter.service";

@Component({
  selector: 'sw-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss']
})
export class GenderFilterComponent implements OnInit, OnDestroy {

  genderFilterOptions = GenderFilterOptions

  formOption = new FormControl(GenderFilterOptions.NONE)
  formOptionStream = new Subscription()

  constructor(private genderFilterService: GenderFilterService) { }

  ngOnInit(): void {
    this.formOptionStream.add(this.formOption.valueChanges.subscribe(value => {
      this.genderFilterService.updateOption(value)
    }))
  }

  ngOnDestroy(): void {
    this.formOptionStream.unsubscribe()
  }
}
