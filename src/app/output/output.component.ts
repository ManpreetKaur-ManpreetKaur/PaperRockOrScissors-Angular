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

    // this.userChoice = gameService.userChoice;
    // this.computerChoice = gameService.computerChoice;
    // switch (gameService.gameResult){
    //   case GameResult.USER_WINS: {
    //     this.gameResult = "You Won!";
    //     break;
    //   }
    //   case GameResult.COMPUTER_WINS: {
    //     this.gameResult = "Computer won";
    //     break;
    //   }
    //   case GameResult.REPLAY: {
    //     this.gameResult = "Replay";
    //     break;
    //   }
    // }
  }

  replay(){
    this.gameService.reset()
  }

  protected readonly GameResult = GameResult;
}
