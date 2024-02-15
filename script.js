// function playGround(){
//     const ground = document.getElementById('playGround');
//     const main = document.getElementById('mainScreen');

//         main.classList.add('hidden');
//         ground.classList.remove('hidden');
// }


function playGround(){
    hideElement('mainScreen');
    addElement('playGround');
    continueGame();
}


function continueGame(){
    // step 1 genarate a random Number
    const alphabet = getARandomAlphabet();
    
    document.getElementById('random-alphabet').innerText = alphabet;

    setBackgroundColorById(alphabet);
}