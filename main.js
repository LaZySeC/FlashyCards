// Normale Variablen

var richtig = 0;
var falsch = 0;
var showingLernziel = true;

var currentCard = 0;
var lernziele = ["Wie heisse ich?", "Welche Programmiersprache habe ich in diesem Projekt benutzt?"];
var loesungen = ["Niklas", "Javascript"];

// Init
window.onload = function() {
    show();
}

// HTML Elemente in Variablen
var flashcard = document.getElementsByClassName("flashcard");
var richtigLabel = document.getElementById("richtiglabel");
var falschLabel = document.getElementById("falschlabel");

// Addiert einen Punkt zum Richtig Score
function addRichtig() {
  richtigLabel = document.getElementById("richtiglabel");
  richtig ++;
  richtigLabel.innerText = "Richtig: " + richtig;
  showingLernziel = true;
  next();
}
// Addiert einen Punkt zum Falsch Score
function addFalsch() {
  falschLabel = document.getElementById("falschlabel");
  falsch ++;
  falschLabel.innerText = "Falsch: " + falsch;
  showingLernziel = true;
  next();
}
// Dreht die Flashcard um
function flip() {
  //console.log("Flip!")
  if(showingLernziel) {
   // console.log("true!")
    //alert(loesungen[currentCard]);
    flashcard[0].innerText = loesungen[currentCard];
    showingLernziel = false;
  } else {
    //console.log("false!")
    flashcard[0].innerText = lernziele[currentCard];
    showingLernziel = true;
  }
}
// Sucht sich zufällig die nächste Karte aus
function next() {
  var z = lernziele.length
  var x = Math.floor(Math.random()*z);
  while(x==currentCard) {
    x = Math.floor(Math.random()*z);
  }
  currentCard = x;
  show();
}
// Zeigt die Flashcard(Um bugs zu vermeiden)
function show() {
    if(!showingLernziel) {
   // console.log("true!")
    //alert(loesungen[currentCard]);
    flashcard[0].innerText = loesungen[currentCard];
  } else {
    //console.log("false!")
    flashcard[0].innerText = lernziele[currentCard];
  }
    
}
// Ändert den "prozentText" immer, wenn die Funktion aufgerufen wird.
function updatePercentLabel() {
    var percentlabel = document.getElementById("prozentLabel");
    percentlabel.innerHTML = "%: " + (richtig / (richtig + falsch) )*100
}