import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Detail, ResultVideo, Root2 } from 'src/app/model/film-detail';
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

  trailer?: ResultVideo[]

  showTrailer: boolean = false;


  constructor(private route: ActivatedRoute, private fs: FilmService, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.resetFilmDetails();
        this.loadTrailer(id)
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


  loadTrailer(id:number) {
    this.fs.getTrailer(id).subscribe(dati => {
      this.trailer = dati;
    });
    
  }

  ButtonshowTrailer(){
    this.showTrailer = true
  }

  getVideo(key:string){
    const videoUrl = `http://www.youtube.com/embed/${key}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }



}


  

