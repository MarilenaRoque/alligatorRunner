import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import leaderboard from '../leaderboard';

let url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SltkTgE89OcOt0kPoJmn/scores/`

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Over');
  }

  preload () {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(400, 300, 'background');

    this.playButton = new Button(this, 350, 500, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.menuButton = new Button(this, 500, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
   

    let result = this.getInfo();
    result.then((leaderboardDiv) => {
      let textTest = this.add.dom(400, 220, leaderboardDiv);
    })
    
    
  }

  getInfo(){
    let promiseRefreshScore = fetch(url, {
        mode: 'cors'
    })
    let leaderboardDiv = promiseRefreshScore.then( function (response) {
        return response.json();
    }).then(function(response) {
        let sorted = response.result.sort((a, b) => {
            if (a.score < b.score) {
              return 1;
            }
            if (a.score > b.score) {
              return -1;
            }
            return 0;
          });
        return sorted;
    }).then(function(sorted) {
      let arrayTop = sorted.slice(0,6)
      let divLeaderboard = document.createElement('div');
      arrayTop.forEach( function(score, index) {
        let p = document.createElement('p');
        p.innerText = `#${index+1} - ${score.user}  ................. ${score.score}`;
        divLeaderboard.appendChild(p)
      });
      return divLeaderboard;
    })
    return leaderboardDiv;
  }

  buildBoard(sorted) {
    let top6 = sorted.slice(0,6)
    console.log(top6)
  }
}


