import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Robot } from '../model/robot.model';

@Injectable({
  providedIn: 'root',
})
export class RobotService {
  public robot: Robot = new Robot(3, 0);
  public questionResponse: any;

  constructor() {}

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
      confirmButtonText: 'Ok',
    });
  }

  /* afficherQuestion(){
  Swal.fire({
  icon: 'question',
  imageUrl:`../assets/img/MarsContact.jpg`,
  title: 'Question',
  text: `${this.robot.score}`,
  showCancelButton:true,
  showDenyButton:true,
  cancelButtonColor:'blue',
  denyButtonColor:"blue",
  confirmButtonColor:"blue",
  confirmButtonText: "Ok",
  cancelButtonText:"OK",
  denyButtonText:"",
  background: "rgba(0,0,0,0.1)",
}).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Bravo!','+5 points','success')
        this.robot.score = this.robot.score + 5;
        this.robot.jourDeSurvie = this.robot.jourDeSurvie + 1;
      } else { 
        Swal.fire('Mauvaise réponse', '', 'error')
        this.robot.jourDeSurvie = this.robot.jourDeSurvie - 1;
      }
    })
  }
*/
  async afficherQuestion() {
    const { value: string } = await Swal.fire({
      title: `Question`,
      input: 'select',
      inputOptions: ['R2', 'R3'],
      inputPlaceholder: 'Ma super reponse ?',
      showCancelButton: false,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === '1') {
            resolve('Bravo !');
            this.robot.score = this.robot.score + 5;
          } else {
            resolve('Mauvaise réponse !');
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
