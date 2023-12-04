import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result, Root } from '../model/film';
import { Observable, map } from 'rxjs';
import { Detail, ResultVideo, Root2 } from '../model/film-detail';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl =
    'https://api.themoviedb.org/3/movie/popular?language=it-IT&page=';

  private alternativeUrl = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) {}

  private HttpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjRhZjczZTNlZTBmZjUyNTQzYTViMzhlMDdmZTA3MSIsInN1YiI6IjY1MmZiYzYwYTgwMjM2MDExYWM4MWRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCyKL_vKchSzvqGerSsvor3uR_RZF_8ea3n7hy6Amkw',
    }),
  };

  getFilm(page: number): Observable<Root> {
    const word = this.baseUrl + page;
    return this.http.get<Root>(word, this.HttpOptions); 
  }

  getHorror(): Observable<Root>{
    const word = "https://api.themoviedb.org/3/discover/movie?language=it-IT&with_genres=27"
    return this.http.get<Root>(word, this.HttpOptions);
  }

  getAction(): Observable<Root>{
    const word = "https://api.themoviedb.org/3/discover/movie?language=it-IT&with_genres=28"
    return this.http.get<Root>(word, this.HttpOptions);
  }

  getLove(): Observable<Root>{
    const word = "https://api.themoviedb.org/3/discover/movie?language=it-IT&with_genres=10749"
    return this.http.get<Root>(word, this.HttpOptions);
  }

  getAnim(): Observable<Root>{
    const word = "https://api.themoviedb.org/3/discover/movie?language=it-IT&with_genres=16"
    return this.http.get<Root>(word, this.HttpOptions);
  }

  public searchFilm(): Observable<Root[]> {
    const word = this.baseUrl;
    return this.http.get<Root[]>(word, this.HttpOptions);
  }

  getById(id: string): Observable<Root2> {
    const url = `${this.alternativeUrl}${id}?language=it-IT`;

    return this.http.get<Root2>(url, this.HttpOptions);
  }

  getByKeyword(query: any) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=it-IT`;
    return this.http.get<any>(url, this.HttpOptions);
  }

  getTrailer(id:any): Observable<ResultVideo[]>{
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=it-IT`
    return this.http.get<ResultVideo[]>(url, this.HttpOptions)
    .pipe(
      map((data: any) => data.results)
    );
  }

  getFilmAcquistati(page: number): Observable<Root> {
    const word = this.baseUrl + page;
    return this.http.get<Root>(word, this.HttpOptions);
  }

  getCast(id:any){
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`
    return this.http.get<any>(url, this.HttpOptions)
  }
}
