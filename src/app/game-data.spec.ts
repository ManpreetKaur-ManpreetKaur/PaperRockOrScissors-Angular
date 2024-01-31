import {GameData} from './game-data';
import {Choice} from "./choice";

describe('GameData', () => {
  it('should create an instance', () => {
    expect(new GameData(Choice.ROCK, Choice.SCISSORS)).toBeTruthy();
  });
});
