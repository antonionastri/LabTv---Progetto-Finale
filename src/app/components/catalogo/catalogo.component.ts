import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/model/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  risultati: Result[] = []

  responsiveOptions: any[] = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];


  constructor(private filmService:FilmService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.film()

    const id = Number(this.route.snapshot.paramMap.get("id"))

  }

  film(){
    this.filmService.getFilm(1).subscribe(data=>{
      this.risultati = data.results
    })
  }

recuperaId(f:any){
    const id = f.id
    this.router.navigate(['/catalogo', id])
    console.log(id)
  }
}
