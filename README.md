<h1 align="center">Alligator Runner</h1>


> This is a RPG game developed with Phaser library. 
> At this game the main character has to jump trough platforms collecting as many coins as possible.
> For each coin collected the player increase his/her score.
> At the end of the game, the user can submit his/her score and a leaderboard is displayed, with the top 6 scores.



### You can access a Live Demo [HERE]()

![Screenshot](./assets/logo.png)

## Elements

### Main Character - Alligator Boy

![Screenshot](./assets/player.png)

### Platforms

![Screenshot](./assets/platform.png)

### Coins

![Screenshot](./assets/coin.png)

## Main Scenes

### Menu


> Menu Scene - Where you can navigate trough the options: Play, Options, Instructions and Credits

![Screenshot](./assets/menu.png)


### Game Scene

> Game Scene - Where the game actually starts. Platforms of differents sizes are generated and also randon amonts of coins. User is able to make the character jump trough the platforms using the 'SPACE' key or clicking with the left mouse button. Character is allowed to double jump, but no more than two jumps are allowed. Everytime the character collect a coin (overlaping the coin) the Scoreis increased in 10 units and that should be displayed.

![Screenshot](./assets/game.png)

### Submit

> Submit Scene - When the character finally falls the submit scene is generated. Where the user can submit his score. This Scene has a text box where the user should enter with a username. User should press enter and wait for the submission. 

![Screenshot](./assets/submit.png)

### Leaderboard

> Leaderboard Scene - After the score submission a leaderboard is displayed and if the last submission is at the top 6, it should be included. This scene contains 2 buttons where the user can choose between play again and came back to main Menu.

![Screenshot](./assets/leaderboard.png)

### Instructions

> Instructions - The page contains instructions about how to control the character and also the game goal.

![Screenshot](./assets/instructions.png)

### Credits

> Credits - The scene to acknowledge the developer responsable for the game code.

![Screenshot](./assets/credits.png)

## Built With

- Javascript
- Webpack
- HTML5
- CSS3
- Jest
- Phaser

## Prerequisites

- Using NPM package and JavaScript knoledge to build and test the game.
- You should install Node.js to use the run the server with the dependency used. If you don't have Node you can follow this tutorial to set it on your local machine: [HERE](https://www.w3schools.com/nodejs/default.asp)


## Getting Started

To get a local copy of this project running follow these simple steps.

- Clone this repository
 > `git clone <repo>`
- Navigate to the Repo Folder
- To set Webpack and the dependencies run the command
> `npm install`
- Use your favorite browser to open the index.html file (located at the dist page)

- If you have node.js installed and all the dependencies were installed successfully, you can run the following comand to start the server where the project will run.

> `yarn start`

- Open your the following path using your favorite browser.

> `http://localhost:8000/`

## Running tests

This project contains Built tests using jest. To run the tests on your local machine you can run the following command on the project folder:
 > `yarn test`

 If you want to build customized tests, you should create new files or edit the files inside the tests/ folder.
 The tests files should be always named with the extension .test.js
 To set the watch mode and keep tracking the tests continuously while you build it you can run
> `yarn test-watch`


## Authors

👤 **Marilena Roque**

- Github: [MarilenaRoque](https://github.com/MarilenaRoque)
- Twitter: [@MariRoq88285995](https://twitter.com/MariRoq88285995)
- Linkedin: [roquemarilena](https://www.linkedin.com/in/roquemarilena/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).


## Show your support

Give a ⭐️ if you like this project!