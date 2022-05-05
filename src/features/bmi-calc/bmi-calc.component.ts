import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BasicInfo } from 'src/models';
import { appActions } from '../home/state';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})

export class BmiCalcComponent implements OnInit {
  public bmiVal: number = 0;
  public bmiForm = this._formBuilder.group({
    weight: ['', Validators.required],
    height: this._formBuilder.group({
      heightFeet: ['', Validators.required],
      heightInch: ['', Validators.required]
    })
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
    ) { }

  public get weightValue(): AbstractControl | null {
    return this.bmiForm.get('weight')
  }

  public get heightFtValue(): AbstractControl | null {
    return this.bmiForm.get(['height', 'heightFeet'])
  }

  public get heightInValue(): AbstractControl | null {
    return this.bmiForm.get(['height', 'heightInch'])
  }

  ngOnInit(): void {
    this.bmiForm.valueChanges.subscribe(() => this.handleValueChanges())
  }

  handleValueChanges() {
    const weight = this.weightValue?.value
    const heightFeet = this.heightFtValue?.value
    const heightInch = this.heightInValue?.value
    this._store.dispatch(appActions.basicInfoUpdate({info: {weight, heightFeet, heightInch} as BasicInfo}))
  }
  
  bmiCalc() {
    let weight = this.weightValue?.value
    let heightFt = this.heightFtValue?.value
    let heightIn = this.heightInValue?.value 
    let heightCm = 0
    let heightM = 0
    
    weight = weight / 2.2
    heightCm = heightCm + (heightFt * 30.48) + (heightIn * 2.54)
    heightM = heightCm / 100

    let bmi = weight / (Math.pow(heightM, 2))
    this.bmiVal = Math.round(bmi * 10 )/10
  }
}
