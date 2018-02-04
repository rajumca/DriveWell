import { Speed } from './speed';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable()
export class SpeedLimitService {
wayUrl: 'http://nominatim.openstreetmap.org/reverse?format=json&lat=40.488057&lon=-88.899885';
speedLimitUrl: 'http://overpass-api.de/api/interpreter?data=[out:json];way(95244047);out;';
  constructor( private http: HttpClient) { }

  getSpeedLimt():  Observable<Speed> {
   return this.http.get<Speed>('http://overpass-api.de/api/interpreter?data=[out:json];way(95244047);out;');
}
}
