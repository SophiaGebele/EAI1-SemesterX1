window.addEventListener("load", function () {
    /*Variablen*/
    const todoliste = document.querySelector("ul");
    const inputtodo = document.querySelector("input");
    let index = 0;
    let erledigt = 0;
    let offen = 0;
    console.log("anfangs-Variablen verstanden");
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
});
//# sourceMappingURL=script10.js.map