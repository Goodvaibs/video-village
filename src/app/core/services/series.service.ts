import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  //Gets All Series
  public getAllSeries() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Series/GetAll`,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  //Gets series by id
  public getSeriesById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Series/GetById/` + id,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  //Gets All episodes by series id
  public getAllEpisodesById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Series/GetEpisodesBySeasonId/` + id,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  //Gets episodes by id
  public getEpisodeById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.apiUrl}Series/GetEpisodeInfoByEpisodeId/` + id,
    {
      headers: headers
    })
      .pipe(map(movies => {
        console.log(movies);
        return movies;
      }));
  }

  // Get series by filters
  getByFilters(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(`${environment.apiUrl}Series/GetByFilter`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

}
