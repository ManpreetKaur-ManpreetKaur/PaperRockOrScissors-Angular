import {Injectable} from '@angular/core';
import {Choice} from "./choice";
import {GameResult} from "./game-result";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  userChoice: Choice = Choice.ROCK
  computerChoice: Choice = Choice.ROCK
  gameResult: GameResult = GameResult.REPLAY

  constructor() {
  }

  private static choices: Choice[] = [Choice.PAPER, Choice.ROCK, Choice.SCISSORS]

  private static randomChoice(): Choice {
    return GameService.choices[Math.floor(3 * Math.random())]
  }

  reset() {
    this.userChoice = Choice.ROCK
    this.computerChoice = Choice.ROCK
    this.gameResult = GameResult.REPLAY
  }

  play(userChoice: Choice) {
    this.userChoice = userChoice
    this.computerChoice = GameService.randomChoice()
    switch (this.userChoice) {
      case Choice.PAPER: {
        switch (this.computerChoice) {
          case Choice.PAPER: {
            this.gameResult = GameResult.REPLAY;
            break;
          }
          case Choice.ROCK: {
            this.gameResult = GameResult.USER_WINS;
            break;
          }
          case Choice.SCISSORS: {
            this.gameResult = GameResult.COMPUTER_WINS;
          }
        }
        break;
      }
      case Choice.ROCK: {
        switch (this.computerChoice) {
          case Choice.PAPER: {
            this.gameResult = GameResult.COMPUTER_WINS;
            break;
          }
          case Choice.ROCK: {
            this.gameResult = GameResult.REPLAY;
            break;
          }
          case Choice.SCISSORS: {
            this.gameResult = GameResult.USER_WINS;
          }
        }
        break;
      }
      case Choice.SCISSORS: {
        switch (this.computerChoice) {
          case Choice.PAPER: {
            this.gameResult = GameResult.USER_WINS;
            break;
          }
          case Choice.ROCK: {
            this.gameResult = GameResult.COMPUTER_WINS;
            break;
          }
          case Choice.SCISSORS: {
            this.gameResult = GameResult.REPLAY;
          }
        }
      }
    }
  }
}
