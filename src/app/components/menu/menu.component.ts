import { Component, OnInit, ViewChild } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FilmService } from 'src/app/services/film.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrelloComponent } from '../carrello/carrello.component';
import { Carrello } from 'src/app/model/carrello';
import { CarrelloService } from 'src/app/services/carrello.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  items: MegaMenuItem[] | undefined;
  items2: MegaMenuItem[] | undefined;

  faMoon = faMoon;
  faSun = faSun;

  selectedItem: any = null;

  results = []

  badge = true

  films: Carrello[] = [];

  constructor(private themeService:ThemeService, private filmService:FilmService, public authService:AuthService, private router: Router,private route: ActivatedRoute, public carrello:CarrelloService){}

  ngOnInit() {

      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "home"},
          { label: 'Catalogo', icon: 'pi pi-fw pi-desktop', routerLink: "catalogo"},
          { label: 'Contatti', icon: 'pi pi-fw pi-comments', routerLink: "contatti" },
      ];

      this.items2 = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "home"},
        { label: 'Catalogo', icon: 'pi pi-fw pi-desktop', routerLink: "catalogo"},
        { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: "login"},
        { label: 'Registrazione', icon: 'pi pi-fw pi-pencil', routerLink: "register" },
        { label: 'Contatti', icon: 'pi pi-fw pi-comments', routerLink: "contatti" }
    ];

    this.badgeC()

    }

    search($event: AutoCompleteCompleteEvent) {
        this.filmService.getByKeyword($event.query).subscribe(
          dati => this.results = dati.results
        )
    }

    selectID(value:any){
      const id = value.id
      this.router.navigate([`/catalogo/${id}`])
      this.selectedItem = null
      this.results = [];
    } 

    onBlur($event:any) {
      $event.target.value = "";
    }

    logout(){
      this.authService.logout()
      this.router.navigate(["/home"])
    }
  
due(){
  this.logout()
}
   
badgeC(){
  if(this.authService.isUserLogged){
    this.badge = false  }
}

 ///////////////////////////////////////////////////////////
  cambia(theme:string){
    this.themeService.switchTheme(theme)
  }

}


