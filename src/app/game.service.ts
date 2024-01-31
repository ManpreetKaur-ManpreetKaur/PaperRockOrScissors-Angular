import {Injectable} from '@angular/core';
import {Choice} from "./choice";
import {GameData} from "./game-data";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameData: GameData;

  constructor() {
    this.gameData = new GameData(Choice.ROCK, Choice.ROCK);
  }

  private static choices: Choice[] = [Choice.PAPER, Choice.ROCK, Choice.SCISSORS]

  private static getRandomChoice(): Choice {
    return GameService.choices[Math.floor(3 * Math.random())]
  }

  reset() {
    this.gameData = new GameData(Choice.ROCK, Choice.ROCK);
  }

  play(userChoice: Choice) {
    let computerChoice: Choice = GameService.getRandomChoice()
    this.gameData = new GameData(userChoice, computerChoice);
  }
}
