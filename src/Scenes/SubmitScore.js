import 'phaser';
import config from '../Config/config';

export default class SubmitScore extends Phaser.Scene {
  constructor () {
    super('Submit');
  }

  preload () {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(400, 300, 'background');
    var inputText = this.add.dom(config.width/2, config.height/2).createElement('input');
    inputText.type = 'text';
  }
}
