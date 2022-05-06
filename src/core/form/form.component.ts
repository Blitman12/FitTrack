import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfo, Link, PageName } from 'src/models';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormSelectors } from './state/selectors';
import { formActions } from './state';
import { NavActions } from '../navbar/state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


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

  public get genderValue(): AbstractControl | null {
    return this.informationForm.get('gender')
  }

  public get activityLevel(): AbstractControl | null {
    return this.informationForm.get('activityLevel')
  }

  private _basicInfo = {} as BasicInfo;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _appSelectors: FormSelectors
  ) {
    this._appSelectors.basicInfo$.subscribe(info => this._basicInfo = info)
  }

  ngOnInit(): void {
    this.informationForm = this._formBuilder.group({
      weight: [this._basicInfo.weight, Validators.required],
      age: [this._basicInfo.age, Validators.required],
      gender: [this._basicInfo.gender, Validators.required],
      activityLevel: [this._basicInfo.activityLevel, Validators.required],
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
    const gender = this.genderValue?.value
    const activityLevel = this.activityLevel?.value
    this._store.dispatch(formActions.basicInfoUpdate({info: {weight, heightFeet, heightInch, age, gender, activityLevel} as BasicInfo}))
  }
}
