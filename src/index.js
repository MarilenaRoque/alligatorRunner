import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import OverScene from './Scenes/OverScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import SubmitScore from './Scenes/SubmitScore';
import Model from './Model';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Submit', SubmitScore);
    this.scene.add('Game', GameScene);
    this.scene.add('Over', OverScene);
    this.scene.start('Over');
  }
}

window.game = new Game();