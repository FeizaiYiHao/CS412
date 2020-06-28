import { Component, OnInit } from '@angular/core';
import {DistanceS} from '../data/DistanceMock';
import {Distance} from '../data/Distance';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  DistanceList: Distance[] = DistanceS;
  selectedPlace: Distance;
// selectedPersonIndex: number = null;
  constructor() { }

  ngOnInit(): void {
  }

  ShowName(Name: string) {
    this.selectedPlace  = this.DistanceList.find(name => name.To === Name);
  }
}
