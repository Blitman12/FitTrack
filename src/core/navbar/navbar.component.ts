import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Link, PageName } from 'src/models';
import { NavActions } from './state';
import { NavSelectors } from './state/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isVisible$: Observable<boolean>;
  public pageName$: Observable<PageName>;
  public links: Array<Link> = [
    {
      link: 'bmr',
      pageName: PageName.BMR,
    },
    {
      link: 'bmi',
      pageName: PageName.BMI,
    },
    {
      link: 'tdee',
      pageName: PageName.TDEE
    }
  ];

  constructor(
    _navSelectors: NavSelectors,
    private _router: Router,
    private _store: Store
  ) {
    this.isVisible$ = _navSelectors.isVisible$;
    this.pageName$ = _navSelectors.pageName$;
  }

  ngOnInit(): void {}

  public homeClicked(): void {
    this._router.navigateByUrl('/');
  }

  handleRoute(link: Link) {
    this._router.navigateByUrl(link.link);
    this._store.dispatch(
      NavActions.pageNameChanged({ pageName: link.pageName })
    );
  }
}
