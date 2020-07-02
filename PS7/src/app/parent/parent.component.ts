import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  IsCached: boolean;
  CurrentDistance: string[];

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  passInfo(Distance: string[]){
    this.CurrentDistance = Distance;
  }

  // tslint:disable-next-line:typedef
  passCacheInfo(IsCached: boolean) {
    this.IsCached = IsCached;
  }
}
