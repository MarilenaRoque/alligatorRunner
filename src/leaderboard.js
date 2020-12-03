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

    const statusPromise = promiseAddScore.then((response) => { 
      if(response.ok) {
        return "Ok"
      } else {
        throw new Error('Something went wrong');
      }
    });
    return statusPromise;
  };

  const getInfo = () => {
    const promiseRefreshScore = fetch(url, {
      mode: 'cors',
    });
    const fetchPromise = promiseRefreshScore.then((response) => response.json());
    const topArray = fetchPromise.then((response) => {
      const sorted = response.result.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      return sorted.slice(0, 6);
    });
    return topArray;
  };


  return { addScore, getInfo };
})();

export default leaderboard;