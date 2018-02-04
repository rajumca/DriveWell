import { Component, OnInit } from '@angular/core';
import { Speed } from './speed';
import { SpeedLimitService } from './speed-limit.service';
@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  providers: [ SpeedLimitService ],
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {
speed: Speed =  {
  id: 1,
  speed : 70,
  location: '',
  lattitude: 0,
  longitude: 0,
  speedLimit: 50,
  speedMessage: '',
  elements: [],
  road: ''
};
  constructor(private speedLimitService: SpeedLimitService) { }

  getSpeedLimit(): void {
    this.speedLimitService.getSpeedLimt().subscribe(speed =>
        this.speed= {
          id: 1,
  speed : 70,
  location:  speed.elements[0].tags['tiger:county'] ,
  lattitude: 0,
  longitude: 0,
  speedLimit:  speed.elements[0].tags.maxspeed,
  speedMessage: '',
  elements: [],
  road: speed.elements[0].tags['tiger:name_base']
        });
  }
  ngOnInit() {
    this.getSpeedLimit();
  }
}