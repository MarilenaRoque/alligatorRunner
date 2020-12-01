import 'phaser';
import leaderboard from '../leaderboard';

export default class SubmitScore extends Phaser.Scene {
    init(data){
        this.score = data;
    }

  constructor () {
    super('Submit');
  }

  preload () {
    this.load.image('background', 'assets/background.png');
    this.load.image('character', 'assets/over.png');
  }
  

  create() {
    let name = '';
    

    let submitInfo = () => {
        let test = document.createElement('h4');
        name = document.getElementById('name').value;
        if (name.length >= 5) {
            let result = leaderboard.addScore(name, this.score);
            result.then((data) => {
              this.scene.start('Over');
            });
        } else {
            test.innerText = 'Name is too short';
            let textTest = this.add.dom(400, 110, test);
        }
    }

    this.add.image(400, 300, 'background');
    this.add.image(400, 300, 'character');

    let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.id = 'name';
    let inputEl = this.add.dom(400, 400, inputText);
    
    let text = document.createElement('h2');
    text.innerText = 'Enter with a Username and press Enter to Submit';
    text.id = 'text';
    let domElement = this.add.dom(400, 520, text);
    this.input.keyboard.on('keydown-' + 'ENTER', submitInfo, this);
    
  }
}
