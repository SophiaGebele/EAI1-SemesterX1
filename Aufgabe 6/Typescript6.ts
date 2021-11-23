/*Afrika*/ 
var african:string="Africa";
var africa2008 = 1028.0;
var africa2018 = 1235.5;


/*Weltweit*/
var weltweit2018= africa2018+south2018+europa2018+north2018+asia2018+australia2018;


/*suedamerika*/
var americas:string="southamerica";
var south2008 = 1132.6;
var south2018 = 1261.5;


/*europa*/
var europa:string="europe";
var europa2008 = 4965.7;
var europa2018 = 4209.3;


/*nordamerika*/
var american:string="northamerica";
var north2008 = 6600.4;
var north2018 = 6035.6;


/*asien*/
var asien:string="asia";
var asia2008 = 12954.7;
var asia2018 = 16274.1;


/*australien*/
var australien:string="australien";
var australia2008 = 1993;
var australia2018 = 2100.5;



window.addEventListener("load", function() {
    document.querySelector(".EUROPA").addEventListener("click", function() { 
        emissionen(europa, europa2018, europa2008);
    });

    document.querySelector(".NORDAMERIKA").addEventListener("click" , function() {
        emissionen(american, north2018, north2008);
    });

    document.querySelector(".SUEDAMERIKA").addEventListener("click" , function() { 
        emissionen(americas, south2018, south2008)
    });

    document.querySelector(".AFRIKA").addEventListener("click" , function() { 
        emissionen(african, africa2018, africa2008)
    });

    document.querySelector(".ASIEN").addEventListener("click" , function() { 
        emissionen(asien, asia2018, asia2008)
    });

    document.querySelector(".AUSTRALIEN").addEventListener("click" , function() { 
        emissionen(australien, australia2018, australia2008)
    });
});



function emissionen (NameRegion: string, emission_2018: number, emission_2008: number) {
    document.getElementById("titleRegion").innerHTML = NameRegion;
    document.getElementById("KontinentName").innerHTML = NameRegion;
    document.getElementById("Wert2018").innerHTML = emission_2018.toString();
    document.getElementById("ProzentWert").innerHTML = Math.round(emission_2018 / weltweit2018 * 100 * 100) / 100 + "%"; 
    document.getElementById("AnstiegProzent").innerHTML = Math.round((emission_2018 - emission_2008) / emission_2008 * 100 * 100 / 100) + "%";
    document.getElementById("AnstiegWert").innerHTML = `${Math.round((emission_2018 - emission_2008) * 100) / 100}`; 
    
    var Balken:HTMLElement = document.querySelector(".chart")
    Balken.style.height = emission_2018 + "px";
};