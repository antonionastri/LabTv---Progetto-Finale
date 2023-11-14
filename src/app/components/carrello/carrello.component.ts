import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Carrello, CarrelloDTO } from 'src/app/model/carrello';
import { Root } from 'src/app/model/film';
import { Root2 } from 'src/app/model/film-detail';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  films: Carrello | undefined

  constructor(public carrello:CarrelloService){
  }

  ngOnInit(): void {
    this.getFilms()
}


  getFilms(){
    this.carrello.getArticoli().subscribe((dati) =>{this.films = dati})
  }


}

  
