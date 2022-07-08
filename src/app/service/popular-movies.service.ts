import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../interfaces/Api';


@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {
  
  popularUrl:string="https://api.themoviedb.org/3/movie/popular?api_key=49e58c482163ca8ce39368446b01c772&language=en-US"
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Api> {
    return this.http.get<Api>(this.popularUrl)
  }
}
