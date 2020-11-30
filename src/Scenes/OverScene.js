import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import leaderboard from '../leaderboard';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Over');
  }

  create() {
    let result = leaderboard.getInfo();
    
    this.playButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, config.width/2, 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}


