var farben = ["blau", "rot", "gruen", "gelb"];
var werte = ["1", "2", "3", "4", "5", "6", "7", "8"];
//Arrays
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
    console.log(Ablegestapel.length, "Ablegestapel");
    console.log(Ziehstapel.length, "Ziehstapel");
    console.log(SpielerKarten.length, "Spielerkarten");
    console.log(ComputerKarten.length, "ComputerKarten");
    var SpielerRunde = true;
    var Spielende = false;
    Aktualisierung();
    console.log(Ablegestapel.length, "Ablegestapel2");
    console.log(Ziehstapel.length, "Ziehstapel2");
    console.log(SpielerKarten.length, "Spielerkarten2");
    console.log(ComputerKarten.length, "ComputerKarten2");
    document.getElementById("Ziehstapel").addEventListener("click", function () {
        ZiehenSpieler();
    });
    function ZiehenComputer() {
        computerkarten.push(Ziehstapel.pop());
        SpielerEnde();
    }
    function ZiehenSpieler() {
        if (!Spielende) {
            SpielerKarten.push(Ziehstapel.pop());
            SpielerEnde();
        }
    }
    function Aktualisierung() {
        //document.getElementById("Ablegestapel").innerHTML=""; //leeren 
        document.getElementById("ComputerKarten").innerHTML = ""; //leeren
        document.getElementById("SpielerKarten").innerHTML = ""; //leeren
        for (var d = 0; d < SpielerKarten.length; d++) {
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
            if (SpielerRunde = true) {
                if (SpielerKarten[d].farbspektrum == Ablegestapel[0].farbspektrum ||
                    SpielerKarten[d].wertigkeit == Ablegestapel[0].wertigkeit) {
                    BasicKarte.addEventListener("click", function () {
                        if (!Spielende) {
                            SpielerKarten.splice(d, 1),
                                Ablegestapel.unshift(SpielerKarten[d]),
                                SpielerEnde();
                        }
                    });
                    console.log(SpielerKarten.length);
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
        Aktualisierung();
        if (SpielerKarten[0] == undefined) {
            var Gewonnen = document.createElement("p");
            document.getElementById("test").appendChild(Gewonnen);
            Gewonnen.innerHTML = "Du hast Gewonnen! Glueckwunsch!";
            Spielende = true;
        }
        else if (ComputerKarten[0] == undefined) {
            var Verloren = document.createElement("p");
            document.getElementById("test").appendChild(Verloren);
            Verloren.innerHTML = "Du Hast verloren!";
            Spielende = true;
        }
        else {
            if (Ziehstapel[0] == undefined) {
                for (var f = 0; f < Ablegestapel.length; f++) {
                    if (Ablegestapel[f + 1] != undefined) {
                        Ziehstapel.push(Ablegestapel[f + 1]);
                        Ablegestapel.splice(f + 1, 1);
                        shuffle(Ziehstapel);
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
            if (ComputerKarten[g].farbspektrum == Ablegestapel[0].farbspektrum ||
                ComputerKarten[g].Wertigkeit == Ablegestapel[0].Wertigkeit) {
                Ablegestapel.unshift(ComputerKarten[g]), ComputerKarten.splice(g, 1);
                SpielerEnde();
                break;
            }
        }
        if (!SpielerEnde) {
            ZiehenComputer();
        }
    }
});
//# sourceMappingURL=Typescript.js.map