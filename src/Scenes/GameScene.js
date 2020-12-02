import Phaser from 'phaser';

const gameOptions = {
  platformStartSpeed: 350,
  spawnRange: [100, 250],
  platformSizeRange: [80, 250],
  playerGravity: 900,
  jumpForce: 400,
  playerStartPosition: 200,
  jumps: 2,
};

const credString = 'Made with ♥ by Mari Roque Developer';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.spritesheet('player', 'assets/player.png', {
      frameWidth: 50,
      frameHeight: 77,
    });
  }

  create() {
    this.add.image(400, 300, 'background');
    this.score = 0;


    // Creating animations
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', { start: 1, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump',
      frames: [{ key: 'player', frame: 0 }],
      frameRate: 20,
    });


    // /Platform Group and Pool//

    this.platformGroup = this.add.group({

      // once a platform is removed, it's added to the pool
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });

    this.platformPool = this.add.group({

      // once a platform is removed from the pool, it's added to the active platforms group
      removeCallback(platform) {
        platform.scene.platformGroup.add(platform);
      },
    });


    // COIN GROUP AND POOL //

    this.coinGroup = this.add.group({

      // once a coin is removed, it's added to the pool
      removeCallback(coin) {
        coin.scene.coinPool.add(coin);
      },
    });

    this.coinPool = this.add.group({

      // once a coin is removed from the pool, it's added to the active coins group
      removeCallback(coin) {
        coin.scene.coinGroup.add(coin);
      },
    });


    // number of consecutive jumps made by the player
    this.playerJumps = 0;

    // adding a platform to the game, the arguments are platform width and x position
    this.addPlatform(800, 800 / 2);

    // adding the player;
    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, 600 / 2, 'player');
    this.player.setGravityY(gameOptions.playerGravity);


    // setting collisions between the player and the platform group
    this.physics.add.collider(this.player, this.platformGroup, () => {
      if (!this.player.anims.isPlaying) {
        this.player.anims.play('run');
      }
    });

    this.physics.add.overlap(this.player, this.coinGroup, this.collectStar, null, this);

    // checking for input
    this.input.on('pointerdown', this.jump, this);
    this.input.keyboard.on('keydown-SPACE', this.jump, this);

    // Creating display for Scores
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000',
    });

    this.creditText = this.add.text(480, 570, credString, {
      fontSize: '15px',
      fill: '#000',
    });
  }

  collectStar(player, coin) {
    this.coinGroup.killAndHide(coin);
    this.coinGroup.remove(coin);
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  // the core of the script: platform are added from the pool or created on the fly


  addCoin(posX) {
    let coin;
    if (this.coinPool.getLength()) {
      coin = this.coinPool.getFirst();
      coin.x = posX;
      coin.active = true;
      coin.visible = true;
      this.coinPool.remove(coin);
    } else {
      coin = this.physics.add.image(posX, 600 * 0.7, 'coin');
      coin.setVelocityX(gameOptions.platformStartSpeed * -1);
      this.coinGroup.add(coin);
    }
  }

  addPlatform(platformWidth, posX) {
    let platform;
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    } else {
      platform = this.physics.add.sprite(posX, 600 * 0.8, 'platform');
      platform.setImmovable(true);
      platform.setVelocityX(gameOptions.platformStartSpeed * -1);
      this.platformGroup.add(platform);
    }
    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0],
      gameOptions.spawnRange[1]);
    const coinAppear = Phaser.Math.Between(0, 10);
    if (coinAppear > 5) {
      this.addCoin(posX);
    }
  }

  // the player jumps when on the ground, or once in the air as long as there are jumps
  // left and the first jump was on the ground
  jump() {
    if (this.player.body.touching.down || (this.playerJumps > 0
       && this.playerJumps < gameOptions.jumps)) {
      if (this.player.body.touching.down) {
        this.playerJumps = 0;
      }
      this.player.anims.play('jump');
      this.player.setVelocityY(gameOptions.jumpForce * -1);
      this.playerJumps += 1;
    }
  }


  update() {
    // game over
    if (this.player.y > 600) {
      this.scene.start('Submit', this.score);
    }
    this.player.x = gameOptions.playerStartPosition;

    // recycling platforms
    let minDistance = 800;
    this.platformGroup.getChildren().forEach((platform) => {
      const platformDistance = 800 - platform.x - platform.displayWidth / 2;
      minDistance = Math.min(minDistance, platformDistance);
      if (platform.x < -platform.displayWidth / 2) {
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    // recycling coins
    this.coinGroup.getChildren().forEach((coin) => {
      if (coin.x < -20) {
        this.coinGroup.killAndHide(coin);
        this.coinGroup.remove(coin);
      }
    }, this);

    // adding new platforms
    if (minDistance > this.nextPlatformDistance) {
      const nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0],
        gameOptions.platformSizeRange[1]);
      this.addPlatform(nextPlatformWidth, 800 + nextPlatformWidth / 2);
    }
  }
}
