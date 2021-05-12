import { Component, OnInit } from '@angular/core';
import { RobotService } from '../commons/robot.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public robot: RobotService) { }

  ngOnInit(): void {
  }

  afficherQuestion(number:number){
    this.robot.afficherQuestion(number);
  }


  afficherScoreFinal(){  
    this.robot.afficherScoreFinal();
  }

  afficherScorePerd(){
    this.robot.afficherScorePerd();
  }

  afficheTest(){
    this.robot.afficheTest();
  }
}
