import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  //Gets movie by id
  public getMovieById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Movie/GetById/` + id,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  //Gets All movies
  public getAllMovies() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Movie/GetAll`,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  // Get movies by filters
  getByFilters(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(`${environment.apiUrl}Movie/GetByFilter`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  // Get movies by filters
  getBySearchFilters(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(`${environment.searchApiUrl}Search/GetByFilter`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  public getSuggestions(value) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.searchApiUrl}Search/GetBykey/` + value,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  public getWatchedMovies() {
    let user = JSON.parse(localStorage.getItem("UserDetails"));
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.userManagementUrl}Track/GetWatchHistory/` + user.Id,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  public getCarouselPosters() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Carousel/GetBanners`,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }



}
