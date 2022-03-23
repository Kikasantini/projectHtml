// Global variable:
var story = "";

function getAnswers(){
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;
    var answer4 = document.getElementById("answer4").value;
    var answer5 = document.getElementById("answer5").value;
    var answer6 = document.getElementById("answer6").value;
    var answer7 = document.getElementById("answer7").value;
    var answer8 = document.getElementById("answer8").value;
    var answer9 = document.getElementById("answer9").value;

    if(answer1.length == 0 || answer2.length == 0 || answer3.length == 0 || answer4.length == 0 || answer5.length == 0 || answer6.length == 0 || answer7.length == 0 || answer8.length == 0 || answer9.length == 0){
        alert("Completez tous les champs.");
        //document.getElementById("finalstory").innerHTML = "Completez tous les champs.";
        return;
    }

    story = "Un corbeau était assis sur un arbre de <tag>" + answer1 +"</tag>, ne faisant rien du tout. <br>Un petit <tag>" + answer3 + "</tag> <tag>" + answer2 +
    "</tag> a vu le corbeau et a demandé: Puis-je aussi rester assis et <tag>" + answer7 + "</tag> toute la journée? <br>Le corbeau a répondu: " +
    "Bien sûr, pourquoi pas? <br>Alors le <tag>" + answer3 + "</tag> s'est assis dans le sol sous le corbeau et s'est reposé. " +
    "<br>Tout à coup, un <tag>" + answer4 + "</tag> est apparu en hurlant: <activateCaps><tag>" + answer5 + "</tag> est <tag>" + answer8 + "</activateCaps></tag>!!!! <br>Il a sauté sur le <tag>" +
    answer3 + "</tag> et l'a mangé, ne laissant que les <tag>" + answer6 + "</tag> derrière. <br><br><b>Morale de l'histoire</b> :<br>Il n'y a pas de morale, " +
    "mais c'est important de toujours <tag>" + answer9 + "</tag>.";

    showStory();
    return;
}

function showStory(){
    document.getElementById("finalstory").innerHTML = story;
    return;
}

function clearAll(){
    story = "";
    emptyFields();
    showStory();
    return;
}

function emptyFields(){
    document.getElementById("answer1").value = "";
    document.getElementById("answer2").value = "";
    document.getElementById("answer3").value = "";
    document.getElementById("answer4").value = "";
    document.getElementById("answer5").value = "";
    document.getElementById("answer6").value = "";
    document.getElementById("answer7").value = "";
    document.getElementById("answer8").value = "";
    document.getElementById("answer9").value = "";
    return;
}