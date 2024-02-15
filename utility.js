function hideElement(hideElement){
    const elementShow = document.getElementById(hideElement);
    elementShow.classList.add('hidden');
}

function addElement(addElement){
    const elementRemove  = document.getElementById(addElement);
    elementRemove.classList.remove('hidden');
}

function playGround(){
    hideElement('mainScreen');
    addElement('playGround');
}