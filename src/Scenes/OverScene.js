import Phaser from 'phaser';
import Button from '../Objects/Button';
import leaderboard from '../leaderboard';


export default class OverScene extends Phaser.Scene {
  constructor() {
    super('Over');
  }


  create() {
    this.add.image(400, 300, 'background');

    this.playButton = new Button(this, 300, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, 550, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');


    const result = leaderboard.getInfo();
    result.catch(() => {
      this.add.text(250, 200, 'Sorry! Something went wrong :( ', {
        fontSize: '20px',
        fill: '#000',
      });
    });
    result.then((sorted) => {
      const arrayTop = sorted.slice(0, 6);
      const divLeaderboard = document.createElement('div');
      arrayTop.forEach((score, index) => {
        const p = document.createElement('p');
        p.innerText = `#${index + 1} - ${score.user}  ................. ${score.score}`;
        divLeaderboard.appendChild(p);
      });
      return divLeaderboard;
    }).then((leaderboardDiv) => {
      this.add.dom(400, 220, leaderboardDiv);
    });
  }
}
