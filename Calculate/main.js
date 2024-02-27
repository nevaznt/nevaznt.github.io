let firstnum;
let secondnum;
let decider;
let operation;
let answerDisplayed = false;
let score = 0;

refresh();

document.getElementById("score").innerHTML = score;

document.addEventListener("keyup", event => {
    if (event.key == "Enter" && answerDisplayed == 0) checkAnswer();
    else if (event.key == "Enter" && answerDisplayed == 1) refresh();
});

function checkAnswer() {

    if(document.getElementById("textfield").value == ''){ 
        document.getElementById("reaction").innerHTML = "";
        return;
    }

    if(operation === '+'){
        if((firstnum + secondnum) == document.getElementById("textfield").value){ 
            document.getElementById("reaction").innerHTML = "Goog";
            answerDisplayed = 1;
            score += 1
        }
        else document.getElementById("reaction").innerHTML = "Bad";
    }
    else if(operation === '-'){
        if((firstnum - secondnum) == document.getElementById("textfield").value) {
            document.getElementById("reaction").innerHTML = "Goog";
            answerDisplayed = 1;
            score += 1
        }
        else document.getElementById("reaction").innerHTML = "Bad";
    }
    else if(operation === '*'){
        if((firstnum * secondnum) == document.getElementById("textfield").value) {
            document.getElementById("reaction").innerHTML = "Goog";
            answerDisplayed = 1;
            score += 1
        }
        else document.getElementById("reaction").innerHTML = "Bad";
    }
    document.getElementById("score").innerHTML = score;
}

function refresh() {
    firstnum = Math.floor(Math.random() * 50);
    secondnum = Math.floor(Math.random() * 20);
    decider = Math.floor(Math.random() * 3);
    operation;
    if(decider === 0) operation = '+';
    else if(decider === 1) operation = '-';
    else if(decider === 2) operation = '*';

    document.getElementById("firstnum").innerHTML = firstnum;
    document.getElementById("operation").innerHTML = operation;
    document.getElementById("secondnum").innerHTML = secondnum;
    document.getElementById("reaction").innerHTML = "";
    document.getElementById("textfield").value = "";
    answerDisplayed = 0;
}
