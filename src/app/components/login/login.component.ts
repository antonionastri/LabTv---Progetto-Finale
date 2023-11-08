import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { LoginDTO } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new LoginDTO()
  errorMessage = ""

  constructor (private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.model)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage = err.error

        return of (undefined)
      })
    )
    .subscribe(loggedUser =>{
      if(loggedUser)
        this.authService.setLoggedUser(loggedUser)
        this.router.navigate(["/home"])
        console.log(loggedUser)
    })
  }
  

}
