import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Speed} from './speed';
import {SpeedLimitService} from './speed-limit.service';
@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  providers: [SpeedLimitService],
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {
  speed: Speed = {
    id: 1,
    speed: 70,
    location: '',
    lattitude: 0,
    longitude: 0,
    speedLimit: 50,
    speedMessage: '',
    elements: [],
    road: '',
    styleClass: 'normalStyle'
  };
  constructor(private speedLimitService: SpeedLimitService) {}

  getSpeedLimit(): void {
    this.speedLimitService.getSpeedLimt().subscribe(speed =>
      this.speed = {
        id: 1,
        speed: 70,
        location: speed.elements[0].tags['tiger:county'],
        lattitude: 0,
        longitude: 0,
        speedLimit: speed.elements[0].tags.maxspeed.substring(0, 2),
        speedMessage: '',
        elements: [],
        road: speed.elements[0].tags['tiger:name_base'],
        styleClass: 'normalSpeed'
      });
  }

  accelerate() {
    this.speed.speed++;
    if (this.speed.speed > 10 + parseInt(this.speed.speedLimit)) {
      this.speed.styleClass = 'dangerousSpeed';
    } else if (this.speed.speed > 5 + parseInt(this.speed.speedLimit)) {
      this.speed.styleClass = 'overSpeed';
    } else if (this.speed.speed > this.speed.speedLimit) {
      this.speed.styleClass = 'maxSpeed';
    } else {
      this.speed.styleClass = 'normalSpeed';
    }
  }



  ngOnInit() {
    this.getSpeedLimit();
  }
}