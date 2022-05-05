import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfo, Link } from 'src/models';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HomeSelectors } from './state/selectors';
import { appActions } from './state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public links: Array<Link> = [
    {
      title: 'bmr',
      link: 'bmr',
    },
    {
      title: 'bmi',
      link: 'bmi',
    },
  ];

  public informationForm!: FormGroup;

  public get weightValue(): AbstractControl | null {
    return this.informationForm.get('weight')
  }

  public get heightFtValue(): AbstractControl | null {
    return this.informationForm.get(['height', 'heightFeet'])
  }

  public get heightInValue(): AbstractControl | null {
    return this.informationForm.get(['height', 'heightInch'])
  }

  public get ageValue(): AbstractControl | null {
    return this.informationForm.get('age')
  }

  private _basicInfo = {} as BasicInfo;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _appSelectors: HomeSelectors
  ) {
    this._appSelectors.basicInfo$.subscribe(info => this._basicInfo = info)
  }

  ngOnInit(): void {
    this.informationForm = this._formBuilder.group({
      weight: [this._basicInfo.weight, Validators.required],
      age: [this._basicInfo.age, Validators.required],
      height: this._formBuilder.group({
        heightFeet: [this._basicInfo.heightFeet, Validators.required],
        heightInch: [this._basicInfo.heightInch, Validators.required],
      }),
    });
    this.informationForm.valueChanges.subscribe(() => this.handleValueChanges())
  }

  handleValueChanges() {
    const weight = this.weightValue?.value
    const heightFeet = this.heightFtValue?.value
    const heightInch = this.heightInValue?.value
    const age = this.ageValue?.value
    this._store.dispatch(appActions.basicInfoUpdate({info: {weight, heightFeet, heightInch, age}}))
  }

  handleRoute(link: Link) {
    this._router.navigateByUrl(link.link);
  }
}
