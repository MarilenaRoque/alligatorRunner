import 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Over');
  }

  create() {
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
  }
}


