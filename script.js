const display = document.getElementById('display');
const audio = new Audio("resources/click-sound.wav")

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