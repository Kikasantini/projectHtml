// Global variables :
var newText1 = ["Bienvenue", "Welcome", "Bem-vindo", "ようこそ", "Benvenuto", "مرحبا"];
var newText2 = ["Projet 2 - Programmation Web", "Project 2 - Web Programming", "Projeto 2 - Programação Web", "プロジェクト2-Webプログラミング", "Progetto 2 - Programmazione Web", "المشروع 2 - برمجة الويب"];
var newText3 = ["Développé par", "Developed by", "Desenvolvido por", "エリカサンティーニデリマによって開発されました", "Sviluppato da", "تم تطويره بواسطة إيريكا سانتيني دي ليما"];
var newText4 = ["23 mars 2022", "March 23, 2022", "23 de março de 2022", "2022年3月23日", "23 marzo 2022", "23 مارس 2022"];

const MYNAME = " Erica Santini de Lima";

var lang = 0; // French, English, Portuguese, Japanese, Italian, Arabic
const MAX = newText1.length;

var style = 0;

var text3and4Background = -1;
var textBackgrounds = ["#000000", "#C22828", "#ffffff", "#FFF529", "#FD50FF", "#8CECEB"];

var bgColor = 0;
var colors = ["#E4D8C2", "#ADCD93", "#98E0D8", "#E7BAD7", "#E2A9A9", "#BABABA", "#88C5B7", "#ffffff", "#EBE884", "#4C4C4C"];

var text1Color = 0;
var text1Colors = ["#000000", "#7F0000", "#0D6B32", "#48345F", "#DEDEDE", "#744D00"];

var isDark = true;
var decorated = false;

function changeLanguage(){
  lang += 1;

  if(lang == MAX){
    lang = 0;
  }

  document.getElementById("text1").textContent = newText1[lang];
  document.getElementById("text2").textContent = newText2[lang];
  document.getElementById("text3").textContent = newText3[lang];
  if(lang != 3 && lang != 5){
    document.getElementById("text3").textContent += MYNAME;
  }
  document.getElementById("text4").textContent = newText4[lang];

  return;
}

function changeBgColor(){
  bgColor += 1;
  if(bgColor == colors.length){
    bgColor = 0;
  }
  document.body.style.backgroundColor = colors[bgColor];

  if(text3and4Background == textBackgrounds.length){
    document.getElementById("text3").style.backgroundColor = colors[bgColor];
    document.getElementById("text4").style.backgroundColor = colors[bgColor];
  }
  return;
}

function changeStyle(){
  style += 1;
  if(style > 5){
    style = 0;
  }
  var newStyleName = "bigButton style" + style + "button";

  document.getElementById("b1").className = newStyleName;
  document.getElementById("b2").className = newStyleName;
  document.getElementById("b3").className = newStyleName;

  return;
}

function changeText1Color(){
  text1Color += 1;
  if(text1Color == text1Colors.length){
    text1Color = 0;
  }

  document.getElementById("text1").style.color = text1Colors[text1Color];
  return;
}

function changeTextColor(){
  if(isDark){
    document.getElementById("text3").style.color = "#ffffff";
    document.getElementById("text4").style.color = "#ffffff";
  }
  else{
    document.getElementById("text3").style.color = "#727272";
    document.getElementById("text4").style.color = "#727272";
  }
  isDark = !isDark;
  return;
}

function changeText2Decoration(){
  decorated = !decorated;
  if(decorated){
    document.getElementById("text2").style.textDecoration = "line-through";
  }
  else{
    document.getElementById("text2").style.textDecoration = "none";
  }
  return;
}

function text34Right(){
  text3and4Background += 1;

  if(text3and4Background > textBackgrounds.length){
    text3and4Background = 0;
  }

  nowChange(text3and4Background);
  return;
}

function text34Left(){
  text3and4Background -= 1;

  if(text3and4Background == -2){
    text3and4Background = textBackgrounds.length - 1;
  }
  else if(text3and4Background == -1){
    text3and4Background = textBackgrounds.length;
  }

  nowChange(text3and4Background);
  return;
}

function nowChange(color){
  if(color == textBackgrounds.length){
    document.getElementById("text3").style.backgroundColor = colors[bgColor];
    document.getElementById("text4").style.backgroundColor = colors[bgColor];
  }
  else{
    document.getElementById("text3").style.backgroundColor = textBackgrounds[color];
    document.getElementById("text4").style.backgroundColor = textBackgrounds[color];
  }
  return;
}