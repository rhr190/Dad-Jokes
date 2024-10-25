import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private url = 'https://icanhazdadjoke.com';
  private http =  inject(HttpClient);
  constructor() { }
  getJoke(): Observable<any> {
    // return this.http.get(this.url, {headers: {"Content-type": "application/json", "Accept": "application/json"}});
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }

}
