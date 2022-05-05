import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BasicInfo } from 'src/models';
import { appActions } from '../home/state';
import { HomeSelectors } from '../home/state/selectors';
import { BmiSelectors } from './state/selectors';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})

export class BmiCalcComponent implements OnInit {
  public bmiVal: number = 0;


  public bmiForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _appSelectors: HomeSelectors,
    private _bmiSelectors: BmiSelectors
    ) { 
      this._appSelectors.basicInfo$.subscribe(info => this._basicInfo = info);
      this._bmiSelectors.bmiInfo$.subscribe(bmi => this.bmiVal = bmi.bmi)
    }

  public get weightValue(): AbstractControl | null {
    return this.bmiForm.get('weight')
  }

  public get heightFtValue(): AbstractControl | null {
    return this.bmiForm.get(['height', 'heightFeet'])
  }

  public get heightInValue(): AbstractControl | null {
    return this.bmiForm.get(['height', 'heightInch'])
  }

  private _basicInfo = {} as BasicInfo;

  ngOnInit(): void {
    this.bmiForm = this._formBuilder.group({
      weight: [this._basicInfo.weight, Validators.required],
      height: this._formBuilder.group({
        heightFeet: [this._basicInfo.heightFeet, Validators.required],
        heightInch: [this._basicInfo.heightInch, Validators.required]
      })
    })
    this.bmiForm.valueChanges.subscribe(() => this.handleValueChanges())
  }

  handleValueChanges() {
    const weight = this.weightValue?.value
    const heightFeet = this.heightFtValue?.value
    const heightInch = this.heightInValue?.value
    this._store.dispatch(appActions.basicInfoUpdate({info: {weight, heightFeet, heightInch} as BasicInfo}))
  }
}
