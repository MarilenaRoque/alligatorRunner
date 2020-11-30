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
  }

  create() {
    let name = '';
    

    let submitInfo = () => {
        let test = document.createElement('h4');
        name = document.getElementById('name').value;
        if (name.length >= 5) {
            leaderboard.addScore(name, this.score);
            this.scene.start('Over');
        } else {
            test.innerText = 'Name is too short';
            let textTest = this.add.dom(400, 220, test);
        }
    }

    this.add.image(400, 300, 'background');

    let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.id = 'name';
    let inputEl = this.add.dom(400, 200, inputText);
    
    let text = document.createElement('h2');
    text.innerText = 'Enter with a Username and press Enter to Submit';
    text.id = 'text';
    let domElement = this.add.dom(400, 300, text);
    this.input.keyboard.on('keydown-' + 'ENTER', submitInfo, this);
    
  }
}
