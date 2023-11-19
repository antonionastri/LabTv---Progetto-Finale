import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  backgroundImageUrl: string = ``

  constructor(public carrello:CarrelloService, private auth:AuthService,private messageService: MessageService){
  }

  ngOnInit(): void {
   this.carrello.getFilms();
}

rimuoviDalCarrello(film: Carrello): void {
  this.carrello.eliminaFilm(film).subscribe(() => {
    this.carrello.getFilms();
    this.showSuccess()
  });
}

showSuccess() {
  this.messageService.add({ severity: 'success', summary: 'Film Eliminato', detail: 'Film eliminato correttamente' });
}

}

  
