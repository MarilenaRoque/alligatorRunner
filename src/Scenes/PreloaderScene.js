import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }


  init() {
    this.readyCount = 0;
  }

  preload() {
    const { load } = this;

    // add logo image
    this.add.image(400, 150, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    // load assets needed in our game
    
    load.image('background', 'assets/background.png');
    load.image('blueButton1', 'assets/ui/blue_button02.png');
    load.image('blueButton2', 'assets/ui/blue_button03.png');
    load.image('phaserLogo', 'assets/logo.png');
    load.image('box', 'assets/ui/grey_box.png');
    load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    load.image('background', 'assets/background.png');
    load.image('character', 'assets/over.png');
    load.spritesheet('loadIcon', 'assets/load.png', {
      frameWidth: 100,
      frameHeight: 110,
    });
    load.image('background', 'assets/background.png');
    load.image('platform', 'assets/platform.png');
    load.image('coin', 'assets/coin.png');
    load.spritesheet('player', 'assets/player.png', {
      frameWidth: 50,
      frameHeight: 77,
    });
    load.image('keyboard', 'assets/keys.png');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}