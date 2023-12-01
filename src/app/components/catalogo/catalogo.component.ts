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

  horror: Result[]=[]

  action: Result[]=[]

  anim: Result[]=[]

  love: Result[]=[]

  responsiveOptions: any[] = [
    {
        breakpoint: '1600px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1450px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1000px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '750px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
    }
];

responsiveOptions2: any[] = [
  {
      breakpoint: '1600px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
  }
];
backgroundImageUrl: string = ''


  constructor(private filmService:FilmService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.film()
    this.Horror()
    this.getAction()
    this.getLove()
    this.anime()
    const id = Number(this.route.snapshot.paramMap.get("id"))

  }

  film(){
    this.filmService.getFilm(1).subscribe(data=>{
      this.risultati = data.results
    })
  }

  anime(){
    this.filmService.getAnim().subscribe(data=>{
      this.anim = data.results
    })
  }

  getLove(){
    this.filmService.getLove().subscribe(data=>{
      this.love = data.results
    })
  }

  Horror(){
    this.filmService.getHorror().subscribe(data=>{
      this.horror = data.results
    })
  }

  getAction(){
    this.filmService.getAction().subscribe(data=>{
      this.action = data.results
    })
  }

recuperaId(f:any){
    const id = f.id
    this.router.navigate(['/catalogo', id])
    console.log(id)
  }
}
