/*Afrika*/ 
var african:string="Africa";
var africa2008 = 1028.0;
var africa2018 = 1235.5;
var africaAnstiegProzent=(africa2018/africa2008 -1)*100
var africaWelt2018=africa2018/weltweit2018*100;
var africaAnstiegKG=africa2018-africa2008;

/*Weltweit*/
var weltweit2018= africa2018+south2018+europa2018+north2018+asia2018+australia2018;

/*suedamerika*/
var americas:string="southamerica";
var south2008 = 1132.6;
var south2018 = 1261.5;
var southAntiegProzent=(south2018/south2008-1)*100;
var southWelt2018=south2018/weltweit2018*100;
var southAnstiegKG=south2018-south2008;

/*europa*/
var europa:string="europe";
var europa2008 = 4965.7;
var europa2018 = 4209.3;
var europaAnstiegProzent=(europa2018/europa2008-1)*100;
var europaWelt2018=europa2018/weltweit2018*100
var europaAnstiegKG=europa2018-europa2008;

/*nordamerika*/
var american:string="northamerica";
var north2008 = 6600.4;
var north2018 = 6035.6;
var northAnstiegProzent=(north2018/north2008-1)*100;
var northWelt2018=north2018/weltweit2018*100;
var northAnsteigKG=north2018-north2008;

/*asien*/
var asien:string="asia";
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var asiaAnstiegProzent=(asia2018/asia2008-1)*100;
var asiaWelt2018=asia2018/weltweit2018*100;
var asiaAnstiegKG=asia2018-asia2008;

/*australien*/
var australien:string="australien";
var australia2008 = 1993;
var australia2018 = 2100.5;
var australiaAnstiegProzent=(australia2018/australia2008-1)*100;
var australiaWelt2018=(australia2018/weltweit2018)*100;
var australiaAnstiegKG=australia2018-australia2008;



/*Europa*/
function Europa(){
    document.getElementById("titleRegion").innerHTML=europa;
    document.getElementById("KontinentName").innerHTML="Europa";
    document.getElementById("Wert2018").innerHTML= europa2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML= europaWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML= europaAnstiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML= europaAnstiegKG.toFixed(1);
}
document.querySelector(".EUROPA").addEventListener("click",Europa);

/*Afrika*/
function Afrika(){
    document.getElementById("titleRegion").innerHTML=african;
    document.getElementById("KontinentName").innerHTML="Afrika";
    document.getElementById("Wert2018").innerHTML= africa2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML= africaWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML= africaAnstiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML= africaAnstiegKG.toFixed(1);
}
document.querySelector(".AFRIKA").addEventListener("click", Afrika);

/*Suedamerika*/
function Suedamerika(){
    document.getElementById("titleRegion").innerHTML=americas;
    document.getElementById("KontinentName").innerHTML="Suedamerika";
    document.getElementById("Wert2018").innerHTML= south2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML= southWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML= southAntiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML= southAnstiegKG.toFixed(1);
}
this.document.querySelector(".SUEDAMERIKA").addEventListener("click", Suedamerika);

/*Nordamerika*/
function Nordamerika(){
    document.getElementById("titleRegion").innerHTML=american;
    document.getElementById("KontinentName").innerHTML="Nordamerika";
    document.getElementById("Wert2018").innerHTML= north2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML=northWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML = northAnstiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML = northAnsteigKG.toFixed(1);
}
document.querySelector(".NORDAMERIKA").addEventListener("click", Nordamerika);

/*Australien*/
function Australien(){
    document.getElementById("titleRegion").innerHTML=australien;
    document.getElementById("KontinentName").innerHTML="Australien";
    document.getElementById("Wert2018").innerHTML= australia2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML= australiaWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML= australiaAnstiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML= australiaAnstiegKG.toFixed(1);
}
document.querySelector(".AUSTRALIEN").addEventListener("click",Australien);

/*Asien*/
function Asien(){
    document.getElementById("titleRegion").innerHTML=asien;
    document.getElementById("KontinentName").innerHTML="Asien";
    document.getElementById("Wert2018").innerHTML= asia2018.toFixed(1);
    document.getElementById("ProzentWert").innerHTML= asiaWelt2018.toFixed(1);
    document.getElementById("AnstiegProzent").innerHTML= australiaAnstiegProzent.toFixed(1);
    document.getElementById("AnstiegWert").innerHTML= australiaAnstiegKG.toFixed(1);
}
document.querySelector(".ASIEN").addEventListener("click",Asien);
