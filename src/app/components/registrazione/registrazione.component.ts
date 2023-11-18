import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterDTO } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  privacyAccepted: boolean = false;
  
  constructor(private authService: AuthService, private router:Router){}

  model = new RegisterDTO()
  errorMessage = ""

register(){
  this.authService.register(this.model)
  .pipe(
    catchError((err: HttpErrorResponse) => {
      this.errorMessage = err.error

      return of (undefined)
    })
  )
  .subscribe(loggedUser =>{
    if(loggedUser)
      this.authService.setLoggedUser(loggedUser)
      this.router.navigate(["/"])
      console.log(loggedUser)
  })
}

}
