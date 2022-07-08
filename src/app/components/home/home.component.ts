import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { PopularMoviesService } from 'src/app/service/popular-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public popularMovies! : Movie[]

  constructor(private popular: PopularMoviesService ) {
popular.getPopularMovies().subscribe(res => {console.log(res)})
   }

  ngOnInit(): void {
    this.getPopularMovies()
  }
   
  getPopularMovies(){
    this.popular.getPopularMovies().subscribe(res => 
      { 
        this.popularMovies = res.results;
      })
  }
}
