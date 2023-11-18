import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Detail, ResultVideo, Root2 } from 'src/app/model/film-detail';
import { FilmService } from 'src/app/services/film.service';
import { CarrelloService } from 'src/app/services/carrello.service';
import { Carrello, CarrelloDTO } from 'src/app/model/carrello';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit{

  film?: Root2
  sub?: Subscription

  backgroundImageUrl: string = ''

  trailer: ResultVideo[]=[]

  showTrailer: boolean = false;

  model?: Carrello

  button = false

  constructor(private route: ActivatedRoute, private fs: FilmService, private sanitizer: DomSanitizer, public carrello:CarrelloService, public auth:AuthService,private messageService: MessageService){}

  showSuccess() {
    this.messageService.add({ severity: 'warn', summary: 'Attenzione', detail: 'Film presente nel carrello' });
}

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
    

    if(!this.auth.isUserLogged){
      this.button = true
    }

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

  aggiungiFilm(title:string, id:number, img:string){

    const filmPresente = this.carrello.films.some(film => film.title === title);

  if(!filmPresente){
    this.model = {
      "userId": this.auth.getLoggedUser()?.user.id!,
      "title":title,
      "img": img,
      "idFilm":id
    }
  
    console.log(this.model)
    this.carrello.getFilms();
    this.carrello.nuovoArticolo(this.model!).subscribe(
      (response) => {
        console.log('Film aggiunto al carrello:', response);
      },
      (error) => {
        console.error("Errore durante l'aggiunta del film al carrello:", error);
      }
    )
  }else{
    this.showSuccess()
  }



  }

}


  

