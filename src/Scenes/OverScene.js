import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Over');
  }

  create() {
    this.playButton = new Button(this, config.width/2, config.height/2 + 190, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, config.width/2, config.height/2 + 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}


