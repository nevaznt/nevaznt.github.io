let idk = true;
let poleInter = true;

function fun(no){
    if (poleInter == false ) return;

    if(document.getElementById(no).innerHTML == "x" || document.getElementById(no).innerHTML == "o") {
        return;
    }
    
    if(idk == 1){
        document.getElementById(no).innerHTML = "x";
        idk = 0;
    }
    else {
        document.getElementById(no).innerHTML = "o";
        idk = 1;
    }

    if((document.getElementById("p1").innerHTML == "x" && document.getElementById("p2").innerHTML == "x" && document.getElementById("p3").innerHTML == "x") || (document.getElementById("p4").innerHTML == "x" && document.getElementById("p5").innerHTML == "x" && document.getElementById("p5").innerHTML == "x") || (document.getElementById("p6").innerHTML == "x" && document.getElementById("p8").innerHTML == "x" && document.getElementById("p9").innerHTML == "x") || (document.getElementById("p1").innerHTML == "x" && document.getElementById("p4").innerHTML == "x" && document.getElementById("p7").innerHTML == "x") || (document.getElementById("p2").innerHTML == "x" && document.getElementById("p5").innerHTML == "x" && document.getElementById("p8").innerHTML == "x") || (document.getElementById("p3").innerHTML == "x" && document.getElementById("p6").innerHTML == "x" && document.getElementById("p9").innerHTML == "x") || (document.getElementById("p1").innerHTML == "x" && document.getElementById("p5").innerHTML == "x" && document.getElementById("p9").innerHTML == "x") || (document.getElementById("p3").innerHTML == "x" && document.getElementById("p5").innerHTML == "x" && document.getElementById("p7").innerHTML == "x")) {
        document.getElementById("statusText").innerHTML = "X WINS!";
        poleInter = 0;
    }
    else if((document.getElementById("p1").innerHTML == "o" && document.getElementById("p2").innerHTML == "o" && document.getElementById("p3").innerHTML == "o") || (document.getElementById("p4").innerHTML == "o" && document.getElementById("p5").innerHTML == "o" && document.getElementById("p6").innerHTML == "o") || (document.getElementById("p6").innerHTML == "o" && document.getElementById("p8").innerHTML == "o" && document.getElementById("p9").innerHTML == "o") || (document.getElementById("p1").innerHTML == "o" && document.getElementById("p4").innerHTML == "o" && document.getElementById("p7").innerHTML == "o") || (document.getElementById("p2").innerHTML == "o" && document.getElementById("p5").innerHTML == "o" && document.getElementById("p8").innerHTML == "o") || (document.getElementById("p3").innerHTML == "o" && document.getElementById("p6").innerHTML == "o" && document.getElementById("p9").innerHTML == "o") || (document.getElementById("p1").innerHTML == "o" && document.getElementById("p5").innerHTML == "o" && document.getElementById("p9").innerHTML == "o") || (document.getElementById("p3").innerHTML == "o" && document.getElementById("p5").innerHTML == "o" && document.getElementById("p7").innerHTML == "o")) {
        document.getElementById("statusText").innerHTML = "O WINS!";
        poleInter = 0;
    }
}

function erase() {
    for(let i = 1; i < 10; i++) document.getElementById("p" + i).innerHTML = "";
}
