import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { NavSelectors } from './state/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isVisible$: Observable<boolean>;
  constructor(
    private _navSelectors: NavSelectors,
    private _router: Router
    ) { 
    this.isVisible$ = _navSelectors.isVisible$
  }

  ngOnInit(): void {
    // fromRouter.ROUTER_NAVIGATED
  }

  public homeClicked(): void {
    this._router.navigateByUrl('/')
  }

}
