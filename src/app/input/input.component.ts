import { Component } from '@angular/core';
import {GameService} from "../game.service";
import {Choice} from "../choice";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  userChoice: Choice = Choice.ROCK;

  constructor(private gameService: GameService) {
  }

  protected readonly Choice = Choice;

  setUserChoice(choice: Choice) {
    console.log("setUserChoice() is called")
    console.log("choice = " + choice)
    this.userChoice = choice;
  }

  play() {
    console.log("play() is called")
    console.log("this.userChoice = " + this.userChoice)
    this.gameService.play(this.userChoice);
  }
}
