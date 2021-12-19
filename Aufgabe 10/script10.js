window.addEventListener("load", function () {
    /*Variablen*/
    const todoliste = document.querySelector("ul");
    const inputtodo = document.querySelector("input");
    let index = 0;
    let erledigt = 0;
    let offen = 0;
    console.log("anfangs-Variablen verstanden");
    let checked = false;
    let microphoneClicked = false;
    let micro = document.getElementById("microphone");
    /*Counter*/
    function counter() {
        document.getElementById("counter").innerHTML = String(index);
        console.log("Counter Funktion");
    }
    /*open*/
    function open() {
        document.getElementById("open").innerHTML = String(offen);
        console.log("Funktion Counter Open");
    }
    /*done*/
    function done() {
        document.getElementById("done").innerHTML = String(erledigt);
        console.log("Funktion Counter done");
    }
    function record() {
        let microfone = document.createElement("button");
        microfone.classList.add("Voice");
        microfone.setAttribute("class", "fa-microphone-alt");
    }
    /*hinzufügen einer Aufgabe*/
    function addtask() {
        index++;
        counter();
        offen++;
        open();
        console.log("index und offen hochgezaehlt");
        /*Liste */
        const todoli = document.createElement("li");
        todoli.classList.add("todotext");
        todoli.innerHTML = inputtodo.value;
        console.log("listen-punkt erschaffen");
        /*Buttons erstellen, mit Icons */
        const checkcircle = document.createElement("div");
        checkcircle.classList.add("circle");
        todoli.appendChild(checkcircle);
        let check = document.createElement("button");
        check.classList.add("erledigt");
        check.setAttribute("class", "fa fa-check");
        todoli.appendChild(check);
        const deletetask = document.createElement("button");
        deletetask.classList.add("trash");
        deletetask.setAttribute("class", "fa fa-trash-o");
        todoli.appendChild(deletetask);
        todoliste.appendChild(todoli);
        console.log(todoli);
        /*Wert bei hinzufügen der Aufgabe zurücksetzen*/
        inputtodo.value = "";
        /*Klick*/
        deletetask.addEventListener("click", function () { todoliste.removeChild(todoli); index--; counter(); offen--; open(); });
        console.log("geloescht, index und offen runter gezaehlt");
        check.addEventListener("click", function () { if (todoli.style.opacity = "100%") {
            todoli.style.opacity = "20%";
        } erledigt++; done(); });
        console.log("neue darstellung, erledigt hochgezaehlt");
    }
    /*addtask*/
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addtask();
        }
    });
    //Spracheingabe 
    const artyom = new Artyom();
    artyom.addCommands([{
            indexes: ["erstelle Aufgabe *", "aufgabe erstellen *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Neue Aufgabe wird erstellt: " + wildcard);
                addtask(wildcard);
            }
        }, {
            indexes: ["Lösche alle Aufgaben", "Lösche", "Löschen"],
            smart: false,
            action: function () {
                todoliste.innerHTML = "";
                artyom.say("Alle Aufgaben wurden gelöscht");
            }
        }]);
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
            });
        }, 250);
    }
    micro.addEventListener("click", function () {
        if (microphoneClicked = false) {
            startContinuousArtyom();
            microphoneClicked = true;
        }
        else {
            artyom.fatality();
            console.log("No!");
            microphoneClicked = false;
        }
    });
});
//# sourceMappingURL=script10.js.map