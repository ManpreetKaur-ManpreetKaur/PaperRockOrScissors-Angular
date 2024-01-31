import {Component} from '@angular/core';
import {GameService} from "../game.service";
import {GameResult} from "../game-result";
import {GameData} from "../game-data";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  gameData: GameData

  constructor(private gameService: GameService) {
    this.gameData = gameService.gameData;
  }

  replay(): void {
    this.gameService.reset()
  }

  protected readonly GameResult = GameResult;
}
