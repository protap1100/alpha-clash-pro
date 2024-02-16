// function playGround(){
//     const ground = document.getElementById('playGround');
//     const main = document.getElementById('mainScreen');

//         main.classList.add('hidden');
//         ground.classList.remove('hidden');
// }

function handelKeyboardPress(event) {

  const playerPressed = event.key;

  if(playerPressed === 'Escape'){
    gameOver();
    }

//   console.log("player pressed", playerPressed);
  const currentAlphabetElement = document.getElementById("random-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
//   console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    // With Function
    const currentScore = getValueById("current-score");
    const newScore = currentScore + 1;

    getTextElementValueById("current-score", newScore);

    // const currentScoreElement = getScore('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log("current score", currentScore);

    // const newScore = currentScore + 1;
    // console.log("new score", newScore);
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // with Function
    const currentLife = getValueById("life-score");
    const newLife = currentLife - 1;

    getTextElementValueById("life-score", newLife);

    // const currentLifeElement = document.getElementById("life-score");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // const newLife = currentLife - 1;

    // currentLifeElement.innerHTML = newLife;

    // Ending game when You lost all your life 


    if(newLife === 0){
       gameOver();
        
    }

  }
}

document.addEventListener("keyup", handelKeyboardPress);

function playGround() {
  hideElement("mainScreen");
  hideElement("final-score");
  addElement("playGround");

  //   reset score by id 
  getTextElementValueById('life-score' , 5);
  getTextElementValueById('current-score' , 0);

  continueGame();
}

function continueGame() {
  // step 1 genarate a random Number
  const alphabet = getARandomAlphabet();

  const currentAlphabetElement = document.getElementById("random-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}


function gameOver(){
    hideElement('playGround');
    addElement('final-score');
    // const finalScore = document.getElementById('final-result');
    // finalScore.innerText = getTextElementValueById("current-score", newScore);
    // Update final score 
    const lastScore = document.getElementById('current-score').innerText;
    // console.log(lastScore);
    getTextElementValueById('final-result',lastScore);


    const currentAlphabet = getElementTextById('random-alphabet');
    removeBackgroundColorById(currentAlphabet);

}


