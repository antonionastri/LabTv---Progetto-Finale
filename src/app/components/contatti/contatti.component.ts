import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contatti } from 'src/app/model/auth';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private messageService: MessageService){}

  model = new Contatti()


  invio(){
    this.messageService.add({ severity: 'success', summary: 'Inviato!', detail: 'Messaggio inviato' });

    this.model = {
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
      check: false
    };
  }

}
