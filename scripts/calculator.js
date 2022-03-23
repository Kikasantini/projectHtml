// Global variables:
var num1;
var num2;
var score = 0;

var hardcore = false; // "Nija Mode" : operations + - and *
var operation = 0;

var goodAnswer = ["Bien joué", "Bravo", "Très bien", "Oui", "Vous avez raison", "C'est ça"];

function firstNumber() {
    num1 = Math.floor(Math.random() * 100);
    document.getElementById("firstNumberHere").innerHTML = "<element>" + num1 + "</element>";
    
    document.getElementById("answer").value = " ";
    checkOperation();
    printOperation();

    return num1;
}

function checkOperation(){
    if(hardcore == false){
        operation = 0;
    }
    else{
        operation = Math.floor(Math.random() * 3); // 0, 1, 2
    }
    return;
}

function printOperation(){
    switch(operation){
        case 0:
            document.getElementById("operation").innerHTML = "<element>+</element>";
            return;
        case 1:
            document.getElementById("operation").innerHTML = "<element>-</element>";
            return;
        case 2:
            document.getElementById("operation").innerHTML = "<element>*</element>";
            return;
    }
}

function secondNumber() {
    num2 = Math.floor(Math.random() * 100);
    document.getElementById("secondNumberHere").innerHTML = "<element>" + num2 + "</element>";
    return num2;
}

function checkResult(){
    var answer = document.getElementById("answer").value;

    if(answer == "" || answer == " "){
        alert("Aucune réponse.");
        return;
    }

    var goodAnswer = calculateGoodAnswer();

    if(answer == goodAnswer){

        var aux = randomString();
        document.getElementById("theresult").innerHTML = "<correct>" + aux + "! C'est " + goodAnswer + "</correct>";
        if(goodAnswer < 0){
            goodAnswer *= (-1);
        }
        updateScore(goodAnswer);
    }
    else {
        document.getElementById("theresult").innerHTML = "<incorrect>Incorrect. C'est " + goodAnswer + "</incorrect>";
        if(goodAnswer < 0){
            goodAnswer *= (-1);
        }
        updateScore(-goodAnswer);
    }

    resetGame();
    return;
}

function calculateGoodAnswer(){
    var goodAnswer;
    
    switch(operation){
        case 0:
            goodAnswer = num1 + num2;
            break;
        case 1:
            goodAnswer = num1 - num2;
            break;
        case 2:
            goodAnswer = num1 * num2;
            break;
    }
    return goodAnswer;
}

function resetGame(){
    firstNumber();
    secondNumber();
    return;
}

function switchMode(){
    hardcore = !hardcore;
    setNinjaStatus();
    
    return;
}

function setNinjaStatus(){
    if(hardcore == true){
        document.getElementById("ninjaMode").textContent = "Ninja Mode is ON";
        document.getElementById("ninjaMode").title = "Déactivez pour faire seulement ADDITION";
        document.getElementById("ninjaMode").style.background="#ffcc00";
    }
    else{
        document.getElementById("ninjaMode").textContent = "Ninja Mode is OFF";
        document.getElementById("ninjaMode").title = "Activez pour faire aussi la SOUSTRACTION et la MULTIPLICATION";
        document.getElementById("ninjaMode").style.background="#aaaaaa";
    }
    return;
}

function updateScore(points){
    score += points;
    if(score >= 0){
        document.getElementById("score").innerHTML = "Score: <b>" + score + "</b>";
    }
    else{
        document.getElementById("score").innerHTML = "Score: <bad>" + score + "</bad>";
    }
    
    return;
}

function randomString(){
    var i = Math.floor(Math.random() * (goodAnswer.length));
    return goodAnswer[i];
}