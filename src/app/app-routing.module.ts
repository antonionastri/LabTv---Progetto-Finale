import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { loggedGuard } from './guards/logged.guard';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

const routes: Routes = [
  {
    path:"", redirectTo:"/home", pathMatch:"full"
  },
  {
    path: "catalogo", component: HomeComponent
  }, 
  {
    path: "catalogo/:id", component: FilmDetailComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegistrazioneComponent
  },
  {
    path: "contatti", component: ContattiComponent
  },
  {
    path: "home", component: CatalogoComponent
  },
  {
    path: "carrello", component: CarrelloComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
