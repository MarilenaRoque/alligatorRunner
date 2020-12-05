import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/sliding.png');
    this.load.audio('bgMusic', ['assets/TownTheme.mp3']);
  }

  create() {

    this.scene.start('Preloader');
  }
}