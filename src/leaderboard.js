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
        let jsonData = promiseAddScore.then( function (response) {
            return response.json();
        });
        return jsonData
    }


    return{ addScore}
})();

export default leaderboard;