import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Joke } from 'src/models';
import { JokeSelectors } from './state/selectors';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  public joke!: Joke;

  public constructor(private _store: Store, private _jokeSelector: JokeSelectors) {
    this._jokeSelector.jokeInfo$.subscribe(joke => this.joke = joke);
   }

}
