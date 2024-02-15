function hideElement(hideElement){
    const elementShow = document.getElementById(hideElement);
    elementShow.classList.add('hidden');
}

function addElement(addElement){
    const elementRemove  = document.getElementById(addElement);
    elementRemove.classList.remove('hidden');
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function getARandomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabet.split('');
    const randomNumber = Math.round(Math.random(alphabets) * 25);
    // const index  =

    const strings = alphabets[randomNumber];
    return strings;
}



