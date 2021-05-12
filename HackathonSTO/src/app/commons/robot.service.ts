import { forwardRef, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Robot } from '../model/robot.model';
import { ContentCkeckpointmeet } from './ContentCheckpointmeet.service';

@Injectable({
  providedIn: 'root',
})
export class RobotService implements OnInit{
  public robot: Robot = new Robot(3, 0);
  public questionResponse : any = [];
  public question : any = [];
  constructor(public contentCheckpoint: ContentCkeckpointmeet) {
  }
  ngOnInit(): void {
    this.questionResponse = this.contentCheckpoint.questionReponses
  }

  afficherScoreFinal() {
    Swal.fire({
      icon: 'success',
      title: 'Partie terminée',
      text:
        'Bravo ! Tu as ' +
        this.robot.score +
        ' points et ' +
        this.robot.jourDeSurvie +
        ' jours de vie',
      confirmButtonText:"Retourner à l'accueil",
    })
  }

  async afficherQuestion(number:number) {
    
    // je vais chercher la question 
     this.question = this.contentCheckpoint.getQuestion()
    console.log(this.question)
    const { value: string } = await Swal.fire({
      title: this.question[number].question,
      input: 'select',
      inputOptions: this.question[number].reponses,
      inputPlaceholder: 'Ma super reponse ?',
      showCancelButton: false,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === this.question[number].idValide) {
            Swal.fire('Bravo ! Plus 5 points','','success');
            this.robot.score = this.robot.score + 5;
          } else {
            Swal.fire('Mauvaise réponse !','',"error");
          }
        });
      },
    });
  }

  afficherScorePerd() {
    Swal.fire({
      icon: 'error',
      title: 'Partie terminée',
      text:
        'Tu as ' +
        this.robot.score +
        ' points et ' +
        this.robot.jourDeSurvie +
        ' jours de vie',
      confirmButtonText: 'Ok',
    });
  }
}

