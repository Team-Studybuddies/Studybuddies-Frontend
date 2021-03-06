import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from "@angular/common/http";
import 'rxjs';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public eventEmitter: EventEmitter<any> =  new EventEmitter();
  public principal: User;

  constructor(private http: HttpClient) { }

  storeToken(user: User) {

    let username = user.username;
    let pass = user.password;
    let basicToken = btoa(username + ":" + pass);

    let headers_object = new HttpHeaders().set("Authorization", "Basic " + basicToken);
    return this.http.get('/api/login', { headers: headers_object }).toPromise()
      .then(token => {
        this.getPrincipal().then(user => {
          this.principal = user;
          this.eventEmitter.emit(this.principal);
        });
      });
  }

  logout() {
    let res = this.http.get('/api/logout').toPromise();
    res.then(token => {
      this.principal = {} as User;
      this.eventEmitter.emit(null);
    })
    return res;
  }

  getPrincipal() {
    let query = this.http.get<User>('/api/getPrincipal').toPromise();
    query.then(user => {
      this.principal = user;
    });
    return query;
  }
}
