import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, Message } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { LoginDTO } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model = new LoginDTO()
  errorMessage = ""

  messages!: Message[]

  constructor (private authService: AuthService, private router: Router, private carrello:CarrelloService){}

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage = err.error
        console.log(err)
        return of (undefined)
      })
    )
    .subscribe(loggedUser =>{
      if(loggedUser){
        this.authService.setLoggedUser(loggedUser)
        this.router.navigate(["/home"])
        console.log(loggedUser)
        this.carrello.getFilms()}
        else{
          this.router.navigate(["/login"])
        }
                

    })

  }

  resetError(){
    this.errorMessage = ""
  }
  

}
