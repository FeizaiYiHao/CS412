import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DistanceService as Distance} from '../distance-serv.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-chlid-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit  {
  CurrentDistance: string[];
  from: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  to: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  IsCached: boolean;
  @Output() emitter: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() emitter2: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private distance: Distance) {}


  // tslint:disable-next-line:typedef
  getDistance() {
    this.distance.getDistance(this.from.value , this.to.value).subscribe(
      response => {
        console.log(response );
        this.CurrentDistance = [] ;
        this.CurrentDistance[0] = response['route']['distance'];
        this.CurrentDistance[1] = response['route']['distance'];
        this.IsCached = response['cached'];
        this.emitter.emit(this.CurrentDistance);
        this.emitter2.emit(this.IsCached);
      }
    );
  }

  ngOnInit(): void {
  }
}
