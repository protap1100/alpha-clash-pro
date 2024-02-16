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

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function getTextElementValueById(id , value){
    const elementId = document.getElementById(id);
    elementId.innerText = value;
}

function getElementTextById(id){
    const element = document.getElementById(id);
    const text = element.innerText;
    return text;
}


function getARandomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabet.split('');
    const randomNumber = Math.round(Math.random(alphabets) * 25);
    // const index  =

    const strings = alphabets[randomNumber];
    return strings;
}



