import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = "https://jmm-spring-api-h2-angular.herokuapp.com/"

const HTTPOPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, HTTPOPTIONS);
  }

  // register(email: string, username: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password
  //   }, HTTPOPTIONS);
  // }
}
