let url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SltkTgE89OcOt0kPoJmn/scores/`

const leaderboard = (() => {
    const addScore = (name, score) => {
        const body = JSON.stringify({ 
            "user": name,
            "score": score
        });
        let promiseAddScore = fetch(url, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: body
        })
        promiseAddScore.then( function (response) {
            return response.json();
        })

    }

    const getInfo = () => {
        let promiseRefreshScore = fetch(url, {
            mode: 'cors'
        })
        promiseRefreshScore.then( function (response) {
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
              console.log(sorted);
            return sorted;
        })
    }
    return{ addScore, getInfo}
})();

export default leaderboard;