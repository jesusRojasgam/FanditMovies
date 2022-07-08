import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Api } from '../interfaces/Api';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url:string='https://api.themoviedb.org/3/search/movie?api_key=49e58c482163ca8ce39368446b01c772&query='
 
  constructor(private http: HttpClient) { }

  getMovies(searchterm:string): Observable<Movie[]>{
    return this.http.get<Api>(this.url + searchterm).pipe(
      map(response => {
        return response.results;
      })
    );
  }
}
