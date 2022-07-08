import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
//Components
import { FanditMoviesComponent } from './components/fandit-movies/fandit-movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FanditMoviesComponent,
    MoviesDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
