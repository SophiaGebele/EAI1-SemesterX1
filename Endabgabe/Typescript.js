//hier sind die vier vesrschiedenen Farben und die Zahen 1-8 in Arrays gespiechert
//diese werte werden jeweils and die SpielKarten weitergegeben. 
var farben = ["blau", "rot", "gruen", "gelb"];
var werte = ["1", "2", "3", "4", "5", "6", "7", "8"];
//Arrays fuer den Ziehstapel und dern Ablegestapel
var Ziehstapel = [];
var Ablegestapel = [];
for (var a = 0; a < farben.length; a++) {
    //console.log(a,"Karten",Karten); //stimmt
    for (var b = 0; b < werte.length; b++) {
        var Karten = { farbspektrum: farben[a],
            wertigkeit: werte[b] };
        Ziehstapel.push(Karten);
    }
}
function mischen(Kartendeck) {
    for (var a = 0; a < 1337; a++) {
        var Position1 = Math.floor((Math.random() * Kartendeck.length));
        var Position2 = Math.floor((Math.random() * Kartendeck.length));
        var merke = Kartendeck[Position1];
        Kartendeck[Position1] = Kartendeck[Position2];
        Kartendeck[Position2] = merke;
    }
}
mischen(Ziehstapel);
var SpielerKarten = [];
var ComputerKarten = [];
console.log(Ziehstapel.length, "Ziehstapel alle Karten");
for (var c = 0; c < 4; c++) {
    SpielerKarten.push(Ziehstapel.pop());
    ComputerKarten.push(Ziehstapel.pop());
}
Ablegestapel.push(Ziehstapel.pop()); //eine Karte auf ablagestapel
window.addEventListener("load", function () {
    document.getElementById("Ziehstapel").addEventListener("click", function () {
        //
        SpielerKarten.push(Ziehstapel.pop());
        Aktualisierung();
        ComputerRunde();
    });
    console.log(Ablegestapel.length, "Ablegestapel");
    console.log(Ziehstapel.length, "Ziehstapel");
    console.log(SpielerKarten.length, "Spielerkarten");
    console.log(ComputerKarten.length, "ComputerKarten");
    var SpielerRunde = true;
    var Spielende = false;
    Aktualisierung();
    document.getElementById("Ziehstapel").addEventListener("click", function () {
        ZiehenSpieler();
    });
    function ZiehenComputer() {
        ComputerKarten.push(Ziehstapel.pop());
        SpielerEnde();
    }
    function ZiehenSpieler() {
        if (!Spielende) {
            SpielerKarten.push(Ziehstapel.pop);
            console.log(SpielerKarten, "heeeeee");
            SpielerEnde();
        }
    }
    function Aktualisierung() {
        //document.getElementById("Ablegestapel").innerHTML=""; //leeren 
        document.getElementById("ComputerKarten").innerHTML = ""; //leeren
        document.getElementById("SpielerKarten").innerHTML = ""; //leeren
        for (let d = 0; d < SpielerKarten.length; d++) {
            var BasicKarte = document.createElement("div");
            var werte = document.createElement("p");
            werte.innerHTML = SpielerKarten[d].wertigkeit;
            var farben = document.createElement("i");
            //farben.innerHTML=SpielerKarten[d].farbspektrum;
            //oberes kann fuer mehr Barrierefreiheit hinzugefuegt werde
            //falls hinzugefuegt, steht das Wort der Farbe in der Karte mit drin
            farben.className = SpielerKarten[d].farbspektrum;
            document.getElementById("SpielerKarten").appendChild(BasicKarte);
            BasicKarte.appendChild(werte);
            werte.appendChild(farben);
            BasicKarte.className = SpielerKarten[d].farbspektrum;
            if (SpielerRunde == true) { //hier Zeile 115
                if (SpielerKarten[d].farbspektrum == Ablegestapel[0].farbspektrum ||
                    SpielerKarten[d].wertigkeit == Ablegestapel[0].wertigkeit) {
                    BasicKarte.addEventListener("click", function () {
                        if (!Spielende) {
                            //Ablegestapel.unshift(BasicKarte);
                            Ablegestapel.unshift(SpielerKarten[d]), SpielerKarten.splice(d, 1);
                            SpielerKarten.push(d, 1);
                            SpielerEnde();
                        }
                    }); //hier
                }
            }
        }
        for (let e = 0; e < ComputerKarten.length; e++) {
            var PCKarte = document.createElement("div");
            var werte = document.createElement("p");
            werte.innerHTML = ComputerKarten[e].wertigkeit;
            var farben = document.createElement("i");
            //farben.innerHTML=ComputerKarten[e].farbspektrum;
            //oberes kann fuer mehr Barrierefreiheit hinzugefuegt werde
            //falls hinzugefuegt, steht das Wort der Farbe in der Karte mit drin
            farben.className = ComputerKarten[e].farbspektrum;
            document.getElementById("ComputerKarten").appendChild(PCKarte);
            PCKarte.appendChild(werte);
            werte.appendChild(farben);
            PCKarte.className = ComputerKarten[e].farbspektrum;
        }
        var ablageKarte = document.createElement("div");
        var werte = document.createElement("p");
        document.getElementById("Ablegestapel").appendChild(ablageKarte);
        var farben = document.createElement("i");
        ablageKarte.appendChild(werte);
        werte.appendChild(farben);
        farben.innerHTML = Ablegestapel[0].farbspektrum;
        farben.className = Ablegestapel[0].farbspektrum;
        werte.innerHTML = Ablegestapel[0].wertigkeit;
        ablageKarte.className = Ablegestapel[0].farbspektrum;
    }
    function SpielerEnde() {
        SpielerRunde = !SpielerRunde;
        Aktualisierung(); //hier
        if (SpielerKarten.length == 0) //veraenderung Spielerkarten[0]==undefined
         {
            var Gewonnen = document.createElement("p");
            document.getElementById("Fenster").appendChild(Gewonnen);
            Gewonnen.innerHTML = "Du hast Gewonnen! Glueckwunsch!";
            Spielende = true;
        }
        else if (ComputerKarten.length = 0) //auch veraendert
         {
            var Verloren = document.createElement("p");
            document.getElementById("Fenster2").appendChild(Verloren);
            Verloren.innerHTML = "Du Hast verloren!";
            Spielende = true;
        }
        else {
            if (Ziehstapel.length == 0) {
                for (var f = 0; f < Ablegestapel.length; f++) {
                    if (Ablegestapel[f + 1] != undefined) {
                        Ziehstapel.push(Ablegestapel[f + 1]);
                        Ablegestapel.splice(f + 1, 1);
                        mischen(Ziehstapel);
                    }
                }
            }
            if (SpielerRunde == false && !Spielende) {
                ComputerRunde();
            }
        }
    }
    function ComputerRunde() {
        for (let g = 0; g < ComputerKarten.length; g++) {
            console.log(Ablegestapel[0]);
            if (ComputerKarten[g].farbspektrum == Ablegestapel[0].farbspektrum ||
                ComputerKarten[g].wertigkeit == Ablegestapel[0].wertigkeit) {
                Ablegestapel.unshift(ComputerKarten[g]), ComputerKarten.splice(g, 1);
                console.log(ComputerKarten, "huuu");
                SpielerEnde();
                break; //damit nur eine karte gelegt wird
            }
        }
        if (!SpielerEnde) {
            ZiehenComputer();
        }
    }
});
//# sourceMappingURL=Typescript.js.map