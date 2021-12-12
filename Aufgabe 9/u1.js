window.addEventListener("load", function () {
    /*Variablen*/
    const todoliste = document.querySelector("ul");
    const inputtodo = document.querySelector("input");
    let index = 0;
    /*Counter*/
    function counter() {
        document.getElementById("counter").innerHTML = String(index);
    }
    /*hinzufügen einer Aufgabe*/
    function addtask() {
        index++;
        counter();
        /*Liste */
        const todoli = document.createElement("li");
        todoli.classList.add("todotext");
        todoli.innerHTML = inputtodo.value;
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
        deletetask.addEventListener("click", function () { todoliste.removeChild(todoli); index--; counter(); });
        check.addEventListener("click", function () { if (check.style.opacity != "100%") {
            check.style.opacity = "100%";
        } });
    }
    /*addtask*/
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addtask();
        }
    });
});
//# sourceMappingURL=u1.js.map