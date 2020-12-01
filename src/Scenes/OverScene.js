import Phaser from 'phaser';
import Button from '../Objects/Button';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SltkTgE89OcOt0kPoJmn/scores/';

export default class OverScene extends Phaser.Scene {
  constructor() {
    super('Over');
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(400, 300, 'background');

    this.playButton = new Button(this, 300, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, 550, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');


    const result = this.getInfo();
    result.then((leaderboardDiv) => {
      const textTest = this.add.dom(400, 220, leaderboardDiv);
    });
  }

  getInfo() {
    const promiseRefreshScore = fetch(url, {
      mode: 'cors',
    });
    const leaderboardDiv = promiseRefreshScore.then((response) => response.json()).then((response) => {
      const sorted = response.result.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      return sorted;
    }).then((sorted) => {
      const arrayTop = sorted.slice(0, 6);
      const divLeaderboard = document.createElement('div');
      arrayTop.forEach((score, index) => {
        const p = document.createElement('p');
        p.innerText = `#${index + 1} - ${score.user}  ................. ${score.score}`;
        divLeaderboard.appendChild(p);
      });
      return divLeaderboard;
    });
    return leaderboardDiv;
  }

}
