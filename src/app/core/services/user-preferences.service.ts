import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  user:Object= {};
  constructor(private http: HttpClient) { }
  fetchUserDetails(){
    let headers: HttpHeaders = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    //headers = headers.append('Access-Control-Allow-Origin', '*');
    let details= JSON.parse(localStorage.getItem('UserDetails'));
    return this.http.get(`${environment.userManagementUrl}User/GetUserByUserId/${details.Id}`,
    {'headers':headers})

  }
  fetchWatchHistory(){

    let headers: HttpHeaders = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    //headers = headers.append('Access-Control-Allow-Origin', '*');
    let details= JSON.parse(localStorage.getItem('UserDetails'));
    return this.http.get(`${environment.userManagementUrl}Track/GetWatchHistory/${details.Id}`,{'headers':headers});

  }
  setUserDetails(user){
    this.user=user;
  }
  getUserDetails(){
      return this.user;
  }
  updateUserDetails(user){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    //json parse after stringify is done in order to remove nulls from payload.
    return this.http.post(`${environment.userManagementUrl}User/UpdateUser`,JSON.parse(JSON.stringify(user)),{'headers':headers});
  }

  updateVideoWatch(user){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', '*/*');
    //json parse after stringify is done in order to remove nulls from payload.
    return this.http.post(`${environment.userManagementUrl}Track/TrackUser`, user,{'headers':headers});
  }
}
