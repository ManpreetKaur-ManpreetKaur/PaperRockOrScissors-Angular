import {Choice} from "./choice";
import {GameResult} from "./game-result";

export class GameData {
  readonly userChoice: Choice;
  readonly computerChoice: Choice;
  readonly gameResult: GameResult;

  constructor(userChoice: Choice, computerChoice: Choice){
    this.userChoice = userChoice;
    this.computerChoice = computerChoice;
    this.gameResult = GameData.getResult(userChoice,computerChoice);
  }

  private static getResult(userChoice: Choice, computerChoice: Choice): GameResult {
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
