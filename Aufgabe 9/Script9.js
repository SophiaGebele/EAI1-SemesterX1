window.addEventListener("load", function () {
    // Variablen
    var i = 0;
    var counter = 0;
    // Liste Aufgaben auswählen
    var liste = document.getElementById("Aufgaben");
    // Aufgabe hinzufügen
    function hinzufuegenAufgabe() {
        // Wenn nichts eingegeben wird Aufforderung 
        if (!document.getElementById("input").value) {
            alert("Bitte Aufgabe eintragen");
        }
        else {
            //neue Aufgabe als Listenelement erstellen
            var neueAufgabe = document.createElement("li");
            //Eingabe als Text für neue Aufgabe verwenden
            var textAufgabe = document.getElementById("schachtelEingabe").value;
            //neueAufgabe.innerHTML = textAufgabe;        
            neueAufgabe.innerHTML = textAufgabe;
            //neue Aufgabe in Liste Aufgaben hinzufügen
            liste.appendChild(neueAufgabe);
            //hoch zählen
            counter = counter + 1;
            //Eingabefeld leeren
            document.getElementById("input").value = "";
            //Löschbutton hinzufügen
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            neueAufgabe.appendChild(span);
            span.classList.add("delete");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            // löschen durch klicken auf Lösch-Button
            var loeschen = document.getElementsByClassName("delete");
            for (i = 0; i < loeschen.length; i++) {
                loeschen[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    //runter zählen
                    counter = counter - 1;
                    document.getElementById("zahl").innerHTML = "= " + counter;
                };
                document.getElementById("zahl").innerHTML = "= " + counter;
            }
        }
    }
    // Plus Button
    document.querySelector(".neu").addEventListener("click", function () { hinzufuegenAufgabe(); });
    // Aufgabe hinzufügen durch Enter
    var input = this.document.getElementById("input");
    input.addEventListener("keydown", (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode == 76, 36) {
            hinzufuegenAufgabe();
            console.log("keyeevent geht klar");
        }
    });
    // Aufgaben durch Klick abhaken
    var list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        ev.target.classList.toggle("checked");
    });
    // Aufgaben zählen in Counter
    document.getElementById("zahl").innerHTML = "= " + counter;
    console.log(counter);
});
//# sourceMappingURL=Script9.js.map