import { 
  catchError,
  Observable,
  of,
  switchMap 
} from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Joke } from 'src/models';
import { JokeResponse } from 'src/models/joke-response';
import { JokeService } from '../joke.service';
import { jokeActions } from '../state';

@Injectable({
  providedIn: 'root',
})
export class JokeResolver implements CanActivate {
  public constructor(private _store: Store, private _jokeService: JokeService) {};
  public canActivate(): Observable<boolean> {
    return this._jokeService.getJoke().pipe(
      switchMap((response) => this.handleJoke(response)),
      catchError(() => of(false))
    );
  }

  private handleJoke(response: JokeResponse) {
    const joke = new Joke();
    joke.punchLine = response.delivery || response.joke;
    joke.title = response.setup;
    this._store.dispatch(jokeActions.jokeLoaded({ joke }));
    return of(true);
  }
}
