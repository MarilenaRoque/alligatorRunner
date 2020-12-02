import Phaser from 'phaser';
import Button from '../Objects/Button';
import leaderboard from '../leaderboard';


export default class OverScene extends Phaser.Scene {
  constructor() {
    super('Over');
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(400, 300, 'background');

    this.playButton = new Button(this, 300, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, 550, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');


    const result = leaderboard.getInfo();
    result.then((leaderboardDiv) => {
      this.add.dom(400, 220, leaderboardDiv);
    });
  }
}
