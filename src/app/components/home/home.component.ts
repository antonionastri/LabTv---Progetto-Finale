import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/film';
import { AuthService } from 'src/app/services/auth.service';
import { FilmService } from 'src/app/services/film.service';
import { ThemeService } from 'src/app/theme.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  risultati: Result[] = []

  page = 0

  blockedDocument: boolean = true;

  constructor(private themeService:ThemeService, private cd: ChangeDetectorRef, private filmService:FilmService, private router:Router, public authservice:AuthService){}

  ngOnInit(): void {
    this.film()
  }

  film(){
    this.filmService.getFilm(this.page +1).subscribe(dati=>{
      this.risultati = this.risultati.concat(dati.results)
      this.page = dati.page
    })
  }

  altriFilm(){
    this.film()
  }

  cambia(theme:string){
    this.themeService.switchTheme(theme)
  }

  recuperaId(f:any){
    const id = f.id
    this.router.navigate(['/catalogo', id])
    console.log(id)
  }
}

