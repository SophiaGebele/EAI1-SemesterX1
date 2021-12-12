window.addEventListener("load", function(): void {

    /*Variablen*/
    const todoliste: HTMLElement =  document.querySelector("ul");
    const inputtodo: HTMLInputElement = document.querySelector("input");
    let index: number = 0;
    
    /*Counter*/
    function counter(): void {
        document.getElementById("counter").innerHTML = String(index);
    }
    
    /*hinzufügen einer Aufgabe*/
    function addtask(): void {
        index++;
        counter ();
    
        /*Liste */
        const todoli: HTMLLIElement = document.createElement("li");
        todoli.classList.add("todotext");
        todoli.innerHTML = inputtodo.value; 
    
        /*Buttons erstellen, mit Icons */
        const checkcircle: HTMLElement = document.createElement("div");
        checkcircle.classList.add("circle");
        todoli.appendChild(checkcircle);
    
        let check: HTMLElement = document.createElement("button");
        check.classList.add("erledigt");
        check.setAttribute("class", "fa fa-check");
        todoli.appendChild(check);
    
        const deletetask: HTMLElement = document.createElement("button");
        deletetask.classList.add("trash");
        deletetask.setAttribute("class", "fa fa-trash-o");
        todoli.appendChild(deletetask);
    
        
     
    
        
        todoliste.appendChild(todoli);
        console.log(todoli);
    
        /*Wert bei hinzufügen der Aufgabe zurücksetzen*/
        inputtodo.value = "";
    
        /*Klick*/
        deletetask.addEventListener("click", function (): void { todoliste.removeChild(todoli); index--; counter(); });
        check.addEventListener("click", function (): void {if (check.style.opacity != "100%") {check.style.opacity = "100%"; }});
    }
    
    /*addtask*/
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.keyCode == 13) {
            addtask (); }});
    
    });