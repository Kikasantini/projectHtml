// Global variables :
var newText1 = ["Bienvenue", "Welcome", "Bem-vindo", "ようこそ", "Benvenuto", "مرحبا"];
var newText2 = ["Projet 2 - Programmation Web", "Project 2 - Web Programming", "Projeto 2 - Programação Web", "プロジェクト2-Webプログラミング", "Progetto 2 - Programmazione Web", "المشروع 2 - برمجة الويب"];
var newText3 = ["Développé par", "Developed by", "Desenvolvido por", "エリカサンティーニデリマによって開発されました", "Sviluppato da", "تم تطويره بواسطة إيريكا سانتيني دي ليما"];
var newText4 = ["23 mars 2022", "March 23, 2022", "23 de março de 2022", "2022年3月23日", "23 marzo 2022", "23 مارس 2022"];

const MYNAME = " Erica Santini de Lima";

var lang = 0; // French, English, Portuguese, Japanese, Italian, Arabic
const MAX = newText1.length;

var style = 0;

var bgColor = 0;
var colors = ["#FFD484", "#BBFF84", "#84FFF1", "#FF84EE", "#FF8484", "#969696", "#820000", "#88C5B7", "#ffffff", "#4C4C4C", "#FFFB00"];




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
  return;
}

function changeStyle(){
  style += 1;
  if(style > 5){
    style = 0;
  }
  
  var newStyleName = "style" + style + "button";

  document.getElementById("b1").className = newStyleName;
  document.getElementById("b2").className = newStyleName;
  document.getElementById("b3").className = newStyleName;

  return;
}