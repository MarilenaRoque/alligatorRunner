const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SltkTgE89OcOt0kPoJmn/scores/';
const fetch = require('node-fetch');


const leaderboard = (() => {
  const addScore = (name, score) => {
    const body = JSON.stringify({
      user: name,
      score,
    });
    const promiseAddScore = fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body,
    });
    const jsonData = promiseAddScore.then((response) => response.json());
    return promiseAddScore;
  };


  return { addScore };
})();

export default leaderboard;