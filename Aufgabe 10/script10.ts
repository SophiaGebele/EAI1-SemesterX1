window.addEventListener("load", function(): void {

    /*Variablen*/
    const todoliste: HTMLElement =  document.querySelector("ul");
    const inputtodo: HTMLInputElement = document.querySelector("input");
    let index: number = 0;
    let erledigt: number=0;
    let offen:number=0;
    console.log("anfangs-Variablen verstanden");
    
    /*Counter*/
    function counter(): void {
        document.getElementById("counter").innerHTML = String(index);
        console.log("Counter Funktion");
    }
    /*open*/
    function open():void{
        document.getElementById("open").innerHTML=String(offen);
        console.log("Funktion Counter Open");
    }
    /*done*/
    function done():void{
        document.getElementById("done").innerHTML=String(erledigt);
        console.log("Funktion Counter done");
    }
    
    /*hinzufügen einer Aufgabe*/
    function addtask(): void {
        index++;
        counter ();
        offen++;
        open();
        console.log("index und offen hochgezaehlt");
    
        /*Liste */
        const todoli: HTMLLIElement = document.createElement("li");
        todoli.classList.add("todotext");
        todoli.innerHTML = inputtodo.value; 
        console.log("listen-punkt erschaffen");
    
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
        deletetask.addEventListener("click", function (): void { todoliste.removeChild(todoli); index--; counter(); offen--; open(); });
        console.log("geloescht, index und offen runter gezaehlt");
        check.addEventListener("click", function (): void {if (todoli.style.opacity = "100%") {todoli.style.opacity = "20%"; }erledigt++; done();});
        console.log("neue darstellung, erledigt hochgezaehlt");

    }
    
    /*addtask*/
    document.addEventListener("keydown", function (event: KeyboardEvent): void {            //Tastenfunktion
        if (event.keyCode == 13) {
            addtask (); }});
    
    });