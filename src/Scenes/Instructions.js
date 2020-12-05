import Phaser from 'phaser';
import Button from '../Objects/Button';

const line1 = " Use the 'SPACE' key in your keyboard or click ";
const line2 = 'with left mouse to make the Alligator Boy jump.';
const line3 = 'Alligator Boy is allowed to double jump and his';
const line4 = 'main goal is collect as much coins as possible';
const line5 = 'without falling to the platform.';


export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }


  create() {
    this.add.image(400, 100, 'keyboard');


    this.line1Text = this.add.text(16, 196, line1, {
      fontSize: '27px',
      fill: '#fff',
    });

    this.line2Text = this.add.text(16, 236, line2, {
      fontSize: '27px',
      fill: '#fff',
    });
    this.line3Text = this.add.text(16, 276, line3, {
      fontSize: '27px',
      fill: '#fff',
    });
    this.line4Text = this.add.text(16, 316, line4, {
      fontSize: '27px',
      fill: '#fff',
    });
    this.line5Text = this.add.text(16, 356, line5, {
      fontSize: '27px',
      fill: '#fff',
    });


    this.playButton = new Button(this, 300, 500, 'blueButton1', 'blueButton2', 'Play', 'Game');
    this.menuButton = new Button(this, 550, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}