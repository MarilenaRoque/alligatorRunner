import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.add.text(60, 150, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.add.text(40, 280,
      'Made with ♥ by Mari Roque Developer', {
        fontSize: '32px',
        fill: '#fff',
      });

    this.menuButton = new Button(this, 550, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}
