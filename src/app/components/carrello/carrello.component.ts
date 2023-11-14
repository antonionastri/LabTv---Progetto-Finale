import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Carrello, CarrelloDTO } from 'src/app/model/carrello';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  films: Carrello[]=[]

  constructor(public carrello:CarrelloService, private auth:AuthService){
  }

  ngOnInit(): void {
    this.getFilms()
   
}


  getFilms(){
    this.carrello.getArticoli(this.auth.getLoggedUser()?.user.id as number).subscribe((dati) =>{
      this.films = dati
    console.log(this.films.length)
    }) 
    
  }


}

  
