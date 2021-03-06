import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Class } from "../models/class";
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  
  URL_API = `${environment.urlBackend}${environment.rutaSalas}/create`;

  selectedRoom: Class = {
    id_user : 0,
    description : "",
    university : "",
    degree : "",
    subject : "",
    starting_time : "",
    ending_time : "",
    price_per_hour : 0,
    is_private : false,
    date : new Date(),
    iTime : new Date(),
    fTime : new Date(),
    guid : '',
     authorised_users : [],
    room_url : ''
  };

  constructor(public http:HttpClient) { }

  createRoom(room: Class){
    return this.http.post(this.URL_API, room);
  }
}
