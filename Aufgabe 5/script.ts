/*Afrika*/
var africa2008 = 1028.0;
var africa2018 = 1235.5;
var africaAnstiegProzent=(africa2008/africa2018 -1)*100
var africaWelt2018=(africa2018/weltweit2018)*100;
var africaAnstiegKG=africa2018-africa2008;
/*Weltweit*/
var weltweit2018= africa2018+south2018+europa2018+north2018+asia2018+australia2018;
/*suedamerika*/
var south2008 = 1132.6;
var south2018 = 1261.5;
var southAntiegProzent=(south2008/south2018-1)*100;
var southWelt2018=(south2018/weltweit2018)*100;
var southAnstiegKG=south2018-south2008;
/*europa*/
var europa2008 = 4965.7;
var europa2018 = 4209.3;
var europaAnstiegProzent=(europa2008/europa2018-1)*100;
var europaWelt2018=(europa2018/weltweit2018)*100
var europaAnstiegKG=europa2018-europa2008;
/*nordamerika*/
var north2008 = 6600.4;
var north2018 = 6035.6;
var northAnstiegProzent=(north2008/north2018-1)*100;
var northWelt2018=(north2018/weltweit2018)*100;
var northAnsteigKG=north2018-north2008;
/*asien*/
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var asiaAnstiegProzent=(asia2008/asia2018-1)*100;
var asiaWelt2018=(asia2018/weltweit2018)*100;
var asiaAnstiegKG=asia2018-asia2008;
/*australien*/
var australia2008 = 1993;
var australia2018 = 2100.5;
var australiaAnstiegProzent=(australia2008/australia2018-1)*100;
var australiaWelt2018=(australia2018/weltweit2018)*100;
var australiaAnstiegKG=australia2018-australia2008;

/*consolen-ausgabe*/
/*afrika*/
console.log('Die Emission von Afrika ist:'+africa2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+africaWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+africaAnstiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+africaAnstiegKG+'KG CO2');

/*suedamerika*/
console.log('Die Emission von Afrika ist:'+south2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+southWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+southAntiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+southAnstiegKG+'KG CO2');

/*Europa*/
console.log('Die Emission von Afrika ist:'+europa2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+europaWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+europaAnstiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+europaAnstiegKG+'KG CO2');

/*nordamerika*/
console.log('Die Emission von Afrika ist:'+north2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+northWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+northAnstiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+northAnsteigKG+'KG CO2');

/*asien*/
console.log('Die Emission von Afrika ist:'+asia2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+asiaWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+australiaAnstiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+asiaAnstiegKG+'KG CO2');

/*australien*/
console.log('Die Emission von Afrika ist:'+australia2018+'KG CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+australiaWelt2018+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+australiaAnstiegProzent+'% veraendert.');
console.log('2018 im Vergleich zu 2008 sind das'+australiaAnstiegKG+'KG CO2');
//# sourceMappingURL=script.js.map