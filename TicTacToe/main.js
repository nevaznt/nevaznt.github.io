let onTurn = true; // ? 1 = X; 0 = O;
let field = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // ? 0 = empty; 1 = X; 2 = O;
let fWork = true; // ? field event

function fEvent(no){
    if (fWork == false) return;

    if (field[Number(no)-1] != 0) return;
    
    if(onTurn){
        document.getElementById(no).innerHTML = "<img src=\"x.png\">";
        document.getElementById(no).style.cursor = "context-menu";
        field[Number(no)-1] = 1;
        onTurn = 0;
        if(checkForWin(1) == 1){
            fWork = 0;
            document.getElementById("winText").innerHTML = "<img src=\"x.png\">WIN!";
            for(let i = 1; i < 10; i++) document.getElementById(String(i)).style.cursor = "context-menu";
        }
    }
    else{
        document.getElementById(no).innerHTML = "<img src=\"c.png\">";
        document.getElementById(no).style.cursor = "context-menu";
        field[Number(no)-1] = 2;
        onTurn = 1;
        if (checkForWin(2) == 1){
            fWork = 0;
            document.getElementById("winText").innerHTML = "<img src=\"c.png\">WIN!";
            for(let i = 1; i < 10; i++) document.getElementById(String(i)).style.cursor = "context-menu";
        }
    }
    
    for(let i = 0; i < 9; i++) {
        if(field[i] == 0) return;
        else if(i == 8 && field[i] != 0){
            fWork = 0;
            document.getElementById("winText").innerHTML = "DRAW!";  
            for(let i = 1; i < 10; i++) document.getElementById(String(i)).style.cursor = "context-menu";  
        }
    }
    
}

function checkForWin(no){
    if (field[0] == no && field[1] == no && field[2] == no){
        for(let i = 1; i < 4; i++) document.getElementById(String(i * 11)).style.background = "#bbb";
        return 1;
    }
    else if(field[3] == no && field[4] == no && field[5] == no){
        for(let i = 4; i < 7; i++) document.getElementById(String(i * 11)).style.background = "#bbb";
        return 1;
    }
    else if(field[6] == no && field[7] == no && field[8] == no){
        for(let i = 7; i < 10; i++) document.getElementById(String(i * 11)).style.background = "#bbb";
        return 1;
    }
    else if(field[0] == no && field[3] == no && field[6] == no){
        for(let i = 1; i < 8; i+=3) {
            document.getElementById(String(i * 11)).style.background = "#bbb";
            document.getElementById(String(i * 11)).style.rotate = 90 + "deg";
        }
        return 1;
    }
    else if(field[1] == no && field[4] == no && field[7] == no){
        for(let i = 2; i < 9; i+=3) {
            document.getElementById(String(i * 11)).style.background = "#bbb";
            document.getElementById(String(i * 11)).style.rotate = 90 + "deg";
        }
        return 1;
    }
    else if(field[2] == no && field[5] == no && field[8] == no){
        for(let i = 3; i < 10; i+=3){ 
            document.getElementById(String(i * 11)).style.background = "#bbb";
            document.getElementById(String(i * 11)).style.rotate = 90 + "deg";
        }
        return 1;
    }
    else if(field[0] == no && field[4] == no && field[8] == no){
        for(let i = 1; i < 10; i+=4) {
            document.getElementById(String(i * 11)).style.background = "#bbb";
            document.getElementById(String(i * 11)).style.rotate = 45 + "deg";
        }
        document.getElementById(11).style.top = 50 + "px";
        document.getElementById(11).style.left = -25 + "px";
        document.getElementById(11).style.width = 150 + "px";
        document.getElementById(55).style.top = 50 + "px";
        document.getElementById(55).style.left = 75 + "px";
        document.getElementById(55).style.width = 150 + "px";
        document.getElementById(99).style.top = 45 + "px";
        document.getElementById(99).style.left = 175 + "px";
        document.getElementById(99).style.width = 140 + "px";
        return 1;
    }
    else if(field[2] == no && field[4] == no && field[6] == no){
        for(let i = 3; i < 8; i+=2) {
            document.getElementById(String(i * 11)).style.background = "#bbb";
            document.getElementById(String(i * 11)).style.rotate = -45 + "deg";
        }
        document.getElementById(33).style.top = 53 + "px";
        document.getElementById(33).style.left = 178 + "px";
        document.getElementById(33).style.width = 140 + "px";
        document.getElementById(55).style.top = 50 + "px";
        document.getElementById(55).style.left = 75 + "px";
        document.getElementById(55).style.width = 150 + "px";
        document.getElementById(77).style.top = 45 + "px";
        document.getElementById(77).style.left = -10 + "px";
        document.getElementById(77).style.width = 130 + "px";
        return 1;
    }
    else return 0;
}

function reset() {
    onTurn = 1;
    for(let i = 0; i < 9; i++) field[i] = 0;
    fWork = 1;
    for(let i = 1; i < 10; i++) document.getElementById(String(i)).innerHTML = "";
    for(let i = 1; i < 10; i++) {
        document.getElementById(String(i*11)).style.background = "none";
        document.getElementById(String(i*11)).style.rotate = 0 + "deg";
        document.getElementById(String(i*11)).style.width = 100 + "px";
        document.getElementById(String(i*11)).style.top = 50 + "px";
    }
    document.getElementById(11).style.left = 0 + "px";
    document.getElementById(33).style.left = 200 + "px";
    document.getElementById(55).style.left = 100 + "px";
    document.getElementById(77).style.left = 0 + "px";
    document.getElementById(99).style.left = 200 + "px";
    document.getElementById("winText").innerHTML = "";
    for(let i = 1; i < 10; i++) document.getElementById(String(i)).style.cursor = "pointer";
}
