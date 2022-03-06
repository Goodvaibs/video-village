import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authPost(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(`${environment.apiUrl}Auth`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  authPut(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(`${environment.apiUrl}Auth`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  AddUser(payload) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(`${environment.userManagementUrl}User/AddUser`,
    payload,
    {
      headers: headers
    })
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  getUserByCognitoId(cognitoId) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${environment.userManagementUrl}User/GetUserByCognitoId/` + cognitoId,
    {
      headers: headers
    })
      .pipe(map(user => {
        console.log(user);
        localStorage.setItem('UserDetails', JSON.stringify(user));
        return user;
      }));
  }

}
