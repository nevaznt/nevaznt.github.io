var counter = 0;
var kuru1 = new Audio("sound/audio_kuru1.mp3");
var kuru2 = new Audio("sound/audio_kuru2.mp3");
var decide;
document.getElementById("num").innerHTML = counter;

function addToCounter(){
    decide = Math.floor(Math.random()*2);
    counter = counter + 1;
    if(decide === 0) {
        kuru1.play();
        kuru1.currentTime = 0;
    }
    else if(decide === 1) {
        kuru2.play();
        kuru2.currentTime = 0;
    } 
    document.getElementById("num").innerHTML = counter;
}