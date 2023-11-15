import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { Root2 } from '../model/film-detail';
import { Carrello, CarrelloDTO } from '../model/carrello';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService{

  private url = "http://localhost:3000/films-acquistati"
  
  films: Carrello[]=[]

  value = "0"
  
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
      tap((response: Carrello) => {
        const nuovoId = response.id;
        console.log('ID del nuovo articolo:', nuovoId);
      }),
      catchError((error) => {
        console.error('Errore:', error);
        throw error;
      })
    );
  }

  getArticoli(userId: number): Observable<Carrello[]> {
    const urlWithUserId = `http://localhost:3000/films-acquistati?userId=${userId}`;
    return this.http.get<Carrello[]>(urlWithUserId, this.HttpOptions);
  }

  getFilms(){
    this.getArticoli(this.auth.getLoggedUser()?.user.id as number).subscribe((dati) =>{
      this.films = dati
    this.value = this.films.length.toString()
    }) 
    
  }

  eliminaFilm(film: Carrello): Observable<void> {
    const idFilm = film.id;
    const urlDelete = `${this.url}/${idFilm}`;
  
    return this.http.delete<void>(urlDelete, this.HttpOptions)
      .pipe(
        catchError((error) => {
          console.error('Errore:', error);
          throw error;
        })
      );
  }

}
