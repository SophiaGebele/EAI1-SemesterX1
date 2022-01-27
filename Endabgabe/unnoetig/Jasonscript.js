var symbole = ["kreuz", "pik", "herz", "karo"];
var werte = ["1", "2", "3", "4", "5", "6", "7", "8"];
var ziehkarten = [];
var ablagekarten = [];
for (var i = 0; i < werte.length; i++) {
    for (var x = 0; x < symbole.length; x++) {
        var karte = { symbol: symbole[x], wert: werte[i] };
        ziehkarten.push(karte);
    }
}
function shuffle(kartendeck) {
    for (var i = 0; i < 1337; i++) {
        var loc1 = Math.floor((Math.random() * kartendeck.length));
        var loc2 = Math.floor((Math.random() * kartendeck.length));
        var cloud = kartendeck[loc1];
        kartendeck[loc1] = kartendeck[loc2];
        kartendeck[loc2] = cloud;
    }
}
shuffle(ziehkarten);
var spielerkarten = [];
var computerkarten = [];
for (var y = 0; y < 5; y++) {
    spielerkarten.push(ziehkarten.pop());
    computerkarten.push(ziehkarten.pop());
}
ablagekarten.push(ziehkarten.pop());
window.addEventListener("load", function () {
    var myTurn = true;
    var endGame = false;
    updateInnerHTML();
    document.getElementById("test").addEventListener("click", function () { ziehKarteSpieler(); });
    function ziehKarteComputer() {
        computerkarten.push(ziehkarten.pop());
        endTurn();
    }
    function ziehKarteSpieler() {
        if (!endGame) {
            spielerkarten.push(ziehkarten.pop());
            endTurn();
        }
    }
    function updateInnerHTML() {
        document.getElementById("ablagekarten").innerHTML = "";
        document.getElementById("spielerkarten").innerHTML = "";
        document.getElementById("computerkarten").innerHTML = "";
        for (let i = 0; i < spielerkarten.length; i++) {
            var card = document.createElement("div");
            var wert = document.createElement("p");
            wert.innerHTML = spielerkarten[i].wert;
            document.getElementById("spielerkarten").appendChild(card);
            card.appendChild(wert);
            card.className = spielerkarten[i].symbol;
            if (myTurn) {
                if (spielerkarten[i].symbol == ablagekarten[0].symbol || spielerkarten[i].wert == ablagekarten[0].wert) {
                    card.addEventListener("click", function () { if (!endGame) {
                        ablagekarten.unshift(spielerkarten[i]), spielerkarten.splice(i, 1), endTurn();
                    } });
                }
            }
        }
        for (let i = 0; i < computerkarten.length; i++) {
            var card = document.createElement("div");
            var wert = document.createElement("p");
            document.getElementById("computerkarten").appendChild(card);
            card.appendChild(wert);
        }
        document.getElementById("ablagekarten").innerHTML = "";
        var ablagecard = document.createElement("div");
        var ablagewert = document.createElement("p");
        document.getElementById("ablagekarten").appendChild(ablagecard);
        ablagecard.appendChild(ablagewert);
        ablagewert.innerHTML = ablagekarten[0].wert;
        ablagecard.className = ablagekarten[0].symbol;
    }
    function endTurn() {
        myTurn = !myTurn;
        updateInnerHTML();
        if (spielerkarten[0] == undefined) {
            var textGewinnSP = document.createElement("p");
            document.getElementById("test").appendChild(textGewinnSP);
            textGewinnSP.innerHTML = "Spieler gewinnt!";
            endGame = true;
        }
        else if (computerkarten[0] == undefined) {
            var textGewinnCP = document.createElement("p");
            document.getElementById("test").appendChild(textGewinnCP);
            textGewinnCP.innerHTML = "Computer gewinnt!";
            endGame = true;
        }
        else {
            if (ziehkarten[0] == undefined) {
                for (y = 0; y < ablagekarten.length; y++) {
                    if (ablagekarten[y + 1] != undefined) {
                        ziehkarten.push(ablagekarten[y + 1]);
                        ablagekarten.splice(y + 1, 1);
                        shuffle(ziehkarten);
                    }
                }
            }
            if (myTurn == false && !endGame) {
                computerTurn();
            }
        }
    }
    function computerTurn() {
        for (let x = 0; x < computerkarten.length; x++) {
            if (computerkarten[x].symbol == ablagekarten[0].symbol || computerkarten[x].wert == ablagekarten[0].wert) {
                ablagekarten.unshift(computerkarten[x]), computerkarten.splice(x, 1);
                endTurn();
                break;
            }
        }
        if (!myTurn) {
            ziehKarteComputer();
        }
    }
});
//# sourceMappingURL=Jasonscript.js.map