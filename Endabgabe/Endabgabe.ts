//folgende Zeichen hab ich als Platzhalter und Trennungen verwendet////////////////////////////////////
//Schraegstrich um einen Blockabsatz zu erschaffen fuer meine Kommentare/////////////////////////////// 
//Hashtag um die Funktionen von einander zu trennen und kategorisieren#################################
//#####################################################################################################
//#####################################################################################################
//#####################################################################################################

//Interface einer beliebigen Spielkarte, bestehend aus zwei Eigenschaften./////////////////////////////
//=Die Farbe und die Wertigkeit machen die jeweilige Spielkarten aus.//////////////////////////////////
interface Spielkarte{
    Farben:string;
    Werte:string;
}
//Variable und deren Werte fuer die Funtionalitaet der "functions"
const Wert=["1","2","3","4","5","6","7","8"];
const Farbe=["blau","gruen","rot","gelb"];
var counterSpieler:number=0;
var counterComputer:number=0;
var x:number=0;
var SpielerKarten=new Array();
var ComputerKarten=new Array();
var Ablegestapel=new Array();
var deck=new Array();

//Versuchsarray, Kartendeck von Hand geschrieben
//var Kartendeck=[{Werte: "1", Farben: "blau"}, {Werte:"2",Farben:"blau"}, {Werte:"3",Farben:"blau"}, {Werte:"4",Farben:"blau"}, 
         //   {Werte:"5",Farben:"blau"}, {Werte:"6",Farben:"blau"}, {Werte:"7",Farben:"blau"}, {Werte:"8",Farben:"gblau"},
         //   {Werte:"1", Farben:"rot"}, {Werte:"2",Farben:"rot"}, {Werte:"3", Farben:"rot"}, {Werte:"4", Farben:"rot"},
         //   {Werte:"5",Farben:"rot"}, {Werte:"6",Farben:"rot"}, {Werte:"7",Farben:"rot"}, {Werte:"8",Farben:"rot"},
         //   {Werte:"1",Farben:"gelb"}, {Werte:"2",Farben:"gelb"}, {Werte:"3",Farben:"gelb"}, {Werte:"4",Farben:"gelb"}, 
         //   {Werte:"5",Farben:"gelb"}, {Werte:"6",Farben:"gelb"}, {Werte:"7",Farben:"gelb"}, {Werte:"8",Farben:"gelb"},
         //   {Werte:"1",Farben:"gruen"}, {Werte:"2",Farben:"gruen"}, {Werte:"3",Farben:"gruen"}, {Werte:"4",Farben:"gruen"},
         //   {Werte:"5",Farben:"gruen"}, {Werte:"6",Farben:"gruen"}, {Werte:"7",Farben:"gruen"}, {Werte:"8",Farben:"gruen"}];

//eigentlicher Anfang ders scripts inkl. Funktionen
window.addEventListener("load", function():void {

//Counter fuer die Spielstaende 
//Counter-Funktion fuer den Spieler, damit nach jedem Sieg des Spilers/////////////////////////////////
//der Counter1 um 1 noch oben gezaehlt wird mithilfe von counterSpieler++//////////////////////////////
//durch counter1(); wird der Spielstand fuer den Spieler aktualisiert//////////////////////////////////
//es ersheint ein neues Fenster in Form eines Alerts, das besagt, der Spieler hat gewonnen/////////////
function counter1():void{
    document.getElementById("SpielerStand").innerHTML=String(counterSpieler);
 if (SpielerKarten.length==0){
     counterSpieler++;
     counter1();
     console.log("Sieg fuer den Spieler");
     alert("DU HAST GEWONNEN!GLUECKWUNSCH!");
     console.log(counter1, counterSpieler);
 }
console.log("ELSE1");
}
//Counter-Funktion fuer den Computer, damit nach jedem Sieg des Computers///////////////////////////////
//der Counter2 um 1 noch oben gezaehlt wird mithilfe von counterComputer++//////////////////////////////
//durch counter2(); wird der Spielstand fuer den Computer aktualisiert//////////////////////////////////
//es ersheint ein neues Fenster in Form eines Alerts, das besagt, der Spieler haette verloren/////////// 
function counter2(){
    document.getElementById("ComputerStand").innerHTML=String(counterComputer);
if (ComputerKarten.length==0){
    counterComputer++;
    counter2();
    console.log("Sieg fuer den Computer");
    alert("DU HAST VERLOREN!")
    console.log(counter2, counterComputer);
}
console.log("ELSE2");
}
//#####################################################################################################
//#####################################################################################################
//#####################################################################################################
//erschaffen eines Kartendecks
function getDeck(){
    var deck=new Array();
    for(var i=0;i<Farbe.length;i++){
        for(var x=0;x<Wert.length;x++){
            var Spielkarte={Wert:Wert[x],Farbe:Farbe[i]};
deck.push(Spielkarte);
console.log(deck.length, "deck.length");
}}
console.log(deck.length,"2");
return deck; //ausgabe
}
getDeck();
console.log(deck.length,"3");
//#####################################################################################################
//#####################################################################################################
//#####################################################################################################
//CreateElements in HTML
function Karten(Spielkarte)
{
    console.log(deck.length,"fuuu");
      document.getElementById("Kartendedeck");

	for(let indexFarbe = 0; indexFarbe < deck.length; indexFarbe++)
	{
		let Karte = document.getElementById("Karten32");
		let Wert = document.getElementById("Wertigkeit");
		let Farbe = document.createElement("div");
		Farbe.className = "Farben" + Spielkarte[indexFarbe].Farben;

		Wert.innerHTML = deck[indexFarbe].Werte;
		Karte.appendChild(Wert);
		Karte.appendChild(Farbe);//Karte hat nun Wert und Farbe als Kinder

		document.getElementById("Kartendeck").appendChild(Karte);
	}

}
//#####################################################################################################
//#####################################################################################################
//#####################################################################################################
//Kartendeck mischen Funktion
function mischen(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let indexFarbe = 0; indexFarbe < 1000; indexFarbe++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length))
        
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
mischen(deck);
console.log(deck.length, "neu");
//console.log(deck.length);

//ODER
//function Shuffle(deck) {
//    var current = deck.length, TempWert, random;
//    while (0 !== current) {
//      random = Math.floor(Math.random() * current);
//      current -= 1;
//      TempWert = deck[current];
//      deck[current] = deck[random];
//      deck[random] = TempWert;
//    }
//    return deck;
//  }
//  Shuffle(deck);
function shuffle(deck){
const shuffleDeck = deck => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
}
}
shuffle(deck);



//#####################################################################################################
//#####################################################################################################
//#####################################################################################################
//Spielkarten austeilen an Spieler, Computer und den Abglegestapel. 
console.log("Folgendes sind ausgeteilte Spielkarten");

function Spieler(){
    const SpielerKarten=new Array();    
SpielerKarten.push(deck[0], deck[1], deck[2], deck[3]);
deck.splice(0,4);
}
Spieler(); //Funktion Ausfuehren 
console.log(SpielerKarten.length, "Spielerkarten");

function Computer(){
    var ComputerKarten=new Array();
ComputerKarten.push(deck[4], deck[5], deck[6], deck[7]);
deck.splice(4,4);
}
console.log(ComputerKarten.length,"Computerkarten");
Computer(); //Funktion Ausfuehren 

function Ablege(){
    var Ablegestapel=new Array();
    
Ablegestapel.push(deck[8]);
deck.splice(8,1);
}
Ablege(); //Funktion Ausfuehren 
console.log(Ablegestapel.length, "Ablegestapel");
//#####################################################################################################
//#####################################################################################################
//#####################################################################################################

    //#####################################################################################################
    //#####################################################################################################
    //#####################################################################################################

    //#####################################################################################################
    //#####################################################################################################
    //#####################################################################################################
    //switch-case
    switch(x){
        case 1: //if ++length in Ablegestapel{next round}
        case 2: //if --length in Ziehstpel{next round & 1Objekt von Ziehstapel in Kartendeck}
        case 3: //if ComputerKarten=0 || Spielerkarten=0{game end}
        default: //nichts
    }
    //#####################################################################################################
    //#####################################################################################################
    //#####################################################################################################

    //#####################################################################################################
    //#####################################################################################################
    //#####################################################################################################
    
});