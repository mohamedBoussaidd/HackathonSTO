import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public positionY: any;
  public positionX: any;
  public numberOfDiv: number = 5;

  constructor() {}

  public ChangeDirectory: any;

  ngOnInit(): void {
    this.ChangeDirectory = document.getElementById('bots');
    //reset tableau service
    for (let i = 1; i <= this.numberOfDiv; i++) {
      let element = this.ChangeDirectory.cloneNode(true);
      element.id = 'bot' + i;
      element.style.left = this.getRandomNumber(0, 500) + 'px';

      element.style.top = this.getRandomNumber(0, 500) + 'px';
      element.style.display = 'block';
      document.body.appendChild(element);
      console.log(element.getBoundingClientRect().x);
      console.log(element.getBoundingClientRect().y);
    }
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
