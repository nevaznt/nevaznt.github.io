let firstnum;
let secondnum;
let decider;
let operation;
refresh();

function checkAnswer(){

    if(document.getElementById("textfield").value == ''){ 
        document.getElementById("reaction").innerHTML = "";
        return;
    }

    if(operation === '+'){
        if((firstnum + secondnum) == document.getElementById("textfield").value) document.getElementById("reaction").innerHTML = "Good";
        else document.getElementById("reaction").innerHTML = "Bad";
    }
    else if(operation === '-'){
        if((firstnum - secondnum) == document.getElementById("textfield").value) document.getElementById("reaction").innerHTML = "Good";
        else document.getElementById("reaction").innerHTML = "Bad";
    }
    else if(operation === '*'){
        if((firstnum * secondnum) == document.getElementById("textfield").value) document.getElementById("reaction").innerHTML = "Good";
        else document.getElementById("reaction").innerHTML = "Bad";
    }
}

function refresh(){
    firstnum = Math.floor(Math.random() * 50);
    secondnum = Math.floor(Math.random() * 11);
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
}
