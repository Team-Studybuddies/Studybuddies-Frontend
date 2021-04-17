import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = '';
  private urlTutor = '';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { 
    this.urlUser = `${environment.urlBackend}/user`,
    this.urlTutor = `${environment.urlBackend}/tutor`
  }

  getUserByGuid(guid:any): Observable<any> {
    let url = this.urlUser + `/${guid}`
    console.log(url)
    return this.http.get(url, { headers: this.httpHeaders })
  }

  getAsignaturaByIdTutor(guid:any): Observable<any> {
    let url = this.urlTutor + `/asignaturas` + `/${guid}`
    return this.http.get(url, { headers: this.httpHeaders })
  }
}
