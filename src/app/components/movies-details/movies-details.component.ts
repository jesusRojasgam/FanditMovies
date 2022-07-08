import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
@Input('movie') movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
