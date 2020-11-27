import 'phaser';

let gameOptions = {
  platformStartSpeed: 350,
  spawnRange: [100, 250],
  platformSizeRange: [80, 250],
  playerGravity: 900,
  jumpForce: 400,
  playerStartPosition: 200,
  jumps: 2
}


 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.spritesheet("player", "assets/player.png", {
        frameWidth: 50,
        frameHeight: 77
    });
  }

  create(){

    this.add.image(400, 300, 'background');


        //Creating animations
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 20
        });

 
                        ///Platform Group and Pool//

        this.platformGroup = this.add.group({

            // once a platform is removed, it's added to the pool
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });

        this.platformPool = this.add.group({

            // once a platform is removed from the pool, it's added to the active platforms group
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        });



        //COIN GROUP AND POOL //

        this.coinGroup = this.add.group({
            key: 'coin',
            repeat: 5,
            setXY: {
                x: 12,
                y: 250,
                stepX: 70
            },

            // once a coin is removed, it's added to the pool
            removeCallback: function(coin){
                coin.scene.coinPool.add(coin)
            }
        });

        this.coinPool = this.add.group({
            
            // once a coin is removed from the pool, it's added to the active coins group
            removeCallback: function(platform){
                coin.scene.coinGroup.add(coin)
            }
        });





        // number of consecutive jumps made by the player
        this.playerJumps = 0;

        // adding a platform to the game, the arguments are platform width and x position
        this.addPlatform(game.config.width, game.config.width / 2);

        // adding the player;
        this.player = this.physics.add.sprite(gameOptions.playerStartPosition, game.config.height / 2, "player");
        this.player.setGravityY(gameOptions.playerGravity);

        

        // setting collisions between the player and the platform group
        this.physics.add.collider(this.player, this.platformGroup, () => {
            if(!this.player.anims.isPlaying){
                this.player.anims.play("run");
            }
        });

        // checking for input
        this.input.on("pointerdown", this.jump, this);
    }

    // the core of the script: platform are added from the pool or created on the fly
    addPlatform(platformWidth, posX){
        let platform;
        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
        }
        else{
            platform = this.physics.add.sprite(posX, game.config.height * 0.8, "platform");
            platform.setImmovable(true);
            platform.setVelocityX(gameOptions.platformStartSpeed * -1);
            this.platformGroup.add(platform);
        }
        platform.displayWidth = platformWidth;
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
    }

    // the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
    jump(){
        if(this.player.body.touching.down || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.player.body.touching.down){
                this.playerJumps = 0;
            }
            this.player.anims.play('jump')
            this.player.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;
        }
        
    }


    update(){

        // game over
        if(this.player.y > game.config.height){
            this.scene.start('Title');
        }
        this.player.x = gameOptions.playerStartPosition;

        // recycling platforms
        let minDistance = game.config.width;
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            minDistance = Math.min(minDistance, platformDistance);
            if(platform.x < - platform.displayWidth / 2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);

        // adding new platforms
        if(minDistance > this.nextPlatformDistance){
            var nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2);
        }


    }
};
