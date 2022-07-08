import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanditMoviesComponent } from './components/fandit-movies/fandit-movies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
    { path: "movie", component: FanditMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
