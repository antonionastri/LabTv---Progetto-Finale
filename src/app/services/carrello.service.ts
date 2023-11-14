import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Root2 } from '../model/film-detail';
import { Carrello, CarrelloDTO } from '../model/carrello';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private url = "http://localhost:3000/films-acquistati"

  constructor(private http: HttpClient, private auth:AuthService) { }

  private HttpOptions = {
    headers: new HttpHeaders({
      Authorization:
        "Bearer " + this.auth.getLoggedUser()?.accessToken,
    }),
  };

  nuovoArticolo(model:Carrello):Observable<Carrello>{
    return this.http.post<Carrello>(this.url, model, this.HttpOptions)
    .pipe(
      catchError((error) => {
        console.error('Errore:', error);
        throw error; 
      })
    );
  }

  getArticoli(): Observable<Carrello>{
    return this.http.get<Carrello>(this.url)
  }

}
