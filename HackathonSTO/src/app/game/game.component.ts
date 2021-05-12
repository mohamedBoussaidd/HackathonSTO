import { Component, HostListener, OnInit } from '@angular/core';

import { RobotService } from '../commons/robot.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public imgRobot: any;
  public positionX: any;
  public positionY: any;
  public divImg: any;
  public key: any;
  constructor(public robot: RobotService) { }

  ngOnInit(): void {
    this.divImg = document.getElementById('div-img');
    this.imgRobot = document.getElementById('img-robot');
    this.positionX = this.imgRobot.getBoundingClientRect().x;
    console.log((this.positionX = this.imgRobot.getBoundingClientRect().x));
    this.positionY = this.imgRobot.getBoundingClientRect().y;
  }

  
  public deplacerRobotBas() {
    // La ligne qui était dans le CSS.
    this.imgRobot.style.marginTop = '100px';
    this.imgRobot.style.width = '100px';
    this.imgRobot.style.height = '100px';
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    // POUR LE DEPLACEMENT VERS LA DROITE
    if (
      this.key == 'ArrowRight' &&
      this.positionX + this.imgRobot.width < this.divImg.offsetWidth
    ) {
      const augmenter = 20;
      this.positionX = this.positionX + augmenter;
      this.imgRobot.style.left = this.positionX + 'px';
    }
    // POUR LE DEPLACEMENT VERS LA GAUCHE
     else if (this.key == 'ArrowLeft' && this.positionX  > 0) {
      const augmenter = 20;
      this.positionX = this.positionX - augmenter;
      this.imgRobot.style.left = this.positionX + 'px';
    } 
    // POUR LE DEPLACEMENT VERS LA BAS
    else if (this.key == 'ArrowDown' && this.positionY + this.imgRobot.height <= this.divImg.offsetHeight) {
      const augmenter = 20;
      this.positionY = this.positionY + augmenter;
      this.imgRobot.style.top = this.positionY + 'px';
    }
    // POUR LE DEPLACEMENT VERS LA HAUT
    else if (this.key == 'ArrowUp' && this.positionY >= 0) {
      const augmenter = 20;
      this.positionY = this.positionY - augmenter;
      this.imgRobot.style.top = this.positionY + 'px';
    } else {
      console.log(this.key);
    }
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

 
}
