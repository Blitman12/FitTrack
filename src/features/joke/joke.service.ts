import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { JokeResponse } from "src/models/joke-response";


@Injectable({
    providedIn: 'root'
})
export class JokeService {
    public constructor(private _http:HttpClient){}

    public getJoke() {
        const joke = this._http.get<JokeResponse>('https://v2.jokeapi.dev/joke/Any?safe-mode')
        return joke
    }
}
