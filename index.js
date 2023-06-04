//create ball constructor
import Ball from "./ball.js";
import Paddle from './paddle.js';

// Create an update loop
const ball = new Ball (document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
let lastTime = undefined;


function update(time) {
      if (lastTime != null) {
        const delta = time - lastTime;
        // ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);

        if (isLose()) handleLose()
      }
    lastTime = time;
    window.requestAnimationFrame(update);
}

function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
  }
  
  function handleLose() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
      playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
      computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()
    checkForWin() 
  }

  function checkForWin() {
    if (playerScoreElem.textContent === "5") {
      alert("You have won! Play again?")
      window.location.reload();
    } else if 
      (computerScoreElem.textContent === "5") {
      alert("You have lost! Play again?")
      window.location.reload();
   }
  }
  
  document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
  })

  
window.requestAnimationFrame(update);





