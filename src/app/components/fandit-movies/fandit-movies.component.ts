import { Movie } from './../../interfaces/movies';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fandit-movies',
  templateUrl: './fandit-movies.component.html',
  styleUrls: ['./fandit-movies.component.scss']
})
export class FanditMoviesComponent implements OnInit {
movies:Movie[]=[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  getMovies(event: Event) {
    const searchterm = (event.target as HTMLInputElement).value;
    console.log(searchterm)
    this.moviesService.getMovies(searchterm).subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    })
  }

}
