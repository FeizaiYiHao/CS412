import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getDistance(pointA: string, pointB: string)  {
    // returns an observable
    return this.http.post('http://localhost:3000/PS4', {from: pointA , to : pointB});

  }
}
