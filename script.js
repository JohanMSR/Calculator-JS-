const display = document.getElementById('display');
const buttons = document.getElementsByName('operators');
const audio = new Audio("resources/click-sound.wav");


//const buttons = document.getElementsByTagName("button");
//buttons.setAttribute('id', 'operator-btn-blue');

function sound(){
    audio.playbackRate = 4;
    audio.play();
}

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function changeColorToBlue(){
    for (const boton of buttons) {
        boton.className = "operator-btn-blue";
    }
}
function changeColorToRed(){
    for (const boton of buttons) {
        boton.className = "operator-btn-red";
    }
}
function changeColorToYellow(){
    for (const boton of buttons) {
        boton.className = "operator-btn-yellow";
    }
}
function changeColorToPurple(){
    for (const boton of buttons){
        boton.className = 'operator-btn-purple';
    }
}