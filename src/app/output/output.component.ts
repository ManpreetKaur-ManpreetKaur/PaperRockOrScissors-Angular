import {Component} from '@angular/core';
import {GameService} from "../game.service";
import {GameResult} from "../game-result";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  userChoice: string;
  computerChoice: string;
  gameResult: string;

  constructor(private gameService: GameService) {
    this.userChoice = gameService.userChoice;
    this.computerChoice = gameService.computerChoice;
    switch (gameService.gameResult){
      case GameResult.USER_WINS: {
        this.gameResult = "You Won!";
        break;
      }
      case GameResult.COMPUTER_WINS: {
        this.gameResult = "Computer won!";
        break;
      }
      case GameResult.REPLAY: {
        this.gameResult = "Replay";
        break;
      }
      default: {
        this.gameResult = "Unknown";
      }
    }
  }

  replay(){
    this.gameService.reset()
  }
}
