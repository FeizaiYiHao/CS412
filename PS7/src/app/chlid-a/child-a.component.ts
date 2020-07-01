import { Component, OnInit } from '@angular/core';
import { DistanceService as Distance} from '../distance-serv.service';

@Component({
  selector: 'app-chlid-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit  {
  CurrentDistance: string[];
  from = '';
  to = '';
  IsCached: boolean;

  constructor(private distance: Distance) {}


  // tslint:disable-next-line:typedef
  getDistance() {
    this.distance.getDistance( this.from , this.to).subscribe(
      response => {
        console.log(response );
        this.CurrentDistance = [] ;
        this.CurrentDistance[0] = response['route']['distance'];
        this.CurrentDistance[1] = response['route']['distance'];
        this.IsCached = response['cached']; //similar to current.temp
      }
    );
  }

  ngOnInit(): void {
  }
}
