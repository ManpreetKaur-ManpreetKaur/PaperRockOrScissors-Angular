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
    this.gameResult = GameService.getResult(userChoice,this.computerChoice)
  }

  static getResult(userChoice: Choice, computerChoice: Choice): GameResult {
    switch (userChoice) {
      case Choice.PAPER:
        switch (computerChoice) {
          case Choice.PAPER:
            return GameResult.REPLAY;
          case Choice.ROCK:
            return GameResult.USER_WINS;
          default: // Choice.SCISSORS:
            return GameResult.COMPUTER_WINS;
        }
      case Choice.ROCK:
        switch (computerChoice) {
          case Choice.PAPER:
            return GameResult.COMPUTER_WINS;
          case Choice.ROCK:
            return GameResult.REPLAY;
          default: // Choice.SCISSORS:
            return GameResult.USER_WINS;
        }
      case Choice.SCISSORS: {
        switch (computerChoice) {
          case Choice.PAPER:
            return GameResult.USER_WINS;
          case Choice.ROCK:
            return GameResult.COMPUTER_WINS;
          default: // Choice.SCISSORS:
            return GameResult.REPLAY;
          }
        }
      }
    }

}
