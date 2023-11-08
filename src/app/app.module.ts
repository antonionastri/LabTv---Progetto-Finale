import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { PipePipe } from './pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CatalogoComponent,
    LoginComponent,
    RegistrazioneComponent,
    ContattiComponent,
    HomeComponent,
    FilmDetailComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabMenuModule,
    MegaMenuModule,
    InputTextModule,
    DataViewModule,
    AutoCompleteModule,
    StyleClassModule,
    CheckboxModule,
    ButtonModule,
    FontAwesomeModule,
    CarouselModule,
    HttpClientModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    CardModule  
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
