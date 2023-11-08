import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result, Root } from 'src/app/model/film';
import { Detail, Root2 } from 'src/app/model/film-detail';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit{

  film?: Root2
  sub?: Subscription

  backgroundImageUrl: string = ''


  constructor(private route: ActivatedRoute, private fs: FilmService){}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.resetFilmDetails();

        this.sub = this.fs.getById(id).subscribe(dati => {
          this.film = dati;
          this.backgroundImageUrl = `url(https://image.tmdb.org/t/p/original${this.film.backdrop_path})`;
        });
      }
    });
  }

  resetFilmDetails() {
    this.film = undefined; // Resetta i dettagli del film
    this.backgroundImageUrl = ''; // Resetta l'URL dell'immagine di sfondo
  }
}


  

