import { Component, OnInit } from '@angular/core';
import { RobotService } from '../common/robot.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public robot: RobotService) { }

  ngOnInit(): void {
  }

  afficherQuestion(){
    this.robot.afficherQuestion();
  }


  afficherScoreFinal(){  
    this.robot.afficherScoreFinal();
  }

  afficherScorePerd(){
    this.robot.afficherScorePerd();
  }
}
