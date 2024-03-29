/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Czech dictionary (il8n) ---
 */
( function( wb ) {
"use strict";
/* main index */
wb.i18nDict = {
	"lang-code": "cs",
	"lang-native": "Čeština",
	add: "Přidat",
	all: "Vše",
	tphp: "Na začátek stránky",
	load: "nakládání ...",
	process: "zpracování ...",
	srch: "Hledat",
	"no-match": "No nalezena shoda",
	matches: {
		mixin: "[MIXIN] zápasů nenalezen"
	},
	current: "(aktuální)",
	hide: "Schovat",
	err: "Chyba",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Zahájit",
	stop: "Zastavit",
	back: "Zpátky",
	cancel: "Zrušit",
	"min-ago": "minutou",
	"coup-mins": "pár minut před",
	"mins-ago": {
		mixin: "před [MIXIN] minutami"
	},
	"hour-ago": "před hodinou",
	"hours-ago": {
		mixin: "před [MIXIN] hodinami"
	},
	"days-ago": {
		mixin: "před [MIXIN] dny"
	},
	yesterday: "včera",

	nxt: "Další",
	"nxt-r": "Další (klávesy šipka doleva)",
	prv: "Předchozí",
	"prv-l": "Předchozí (klávesy šipka vpravo)",
	first: "První",
	last: "Poslední",
	page: "Page",
	"srch-menus": "Vyhledávání a nabídky",
	email: "Emailová",
	"menu-close": "Zavřete menu",
	"overlay-close": "Zavřete se šablonou",
	"esc-key": "(klávesy ESC)",
	show: "Ukázat",

	/* Tabbed interface */
	"tab-rot": {
		off: "Zastavit kartě otáčení",
		on: "Zahájit kartě otáčení"
	},
	"tab-list": "Seznam kartě",
	"tab-pnl-end1": "Konec této kartě panelu.",
	"tab-pnl-end2": "Návrat na kartu seznamu",
	"tab-pnl-end3": "nebo pokračovat až do konce stránky.",
	"tab-play": "Hrát",
	/* Multimedia player */
	"mmp-play": "Hrát",
	pause: "Pauza",
	open: "Otevřít",
	close: "Zavřít",
	volume: "Hlasitost",
	mute: {
		on: "Vypnutí",
		off: "Nahlas"
	},
	cc: {
		off: "Skrýt Skryté titulky",
		on: "Zobrazit Skryté titulky"
	},
	"cc-err": "Chyba při načítání uzavřené titulky",
	adesc: {
		on: "Povolit zvukový popis",
		off: "Zakázat zvukový popis"
	},
	pos: "Aktuální pozice:",
	dur: "Celkový čas:",
	/* Share widget */
	"shr-txt": "Sdílet",
	"shr-pg": " tuto stránku",
	"shr-vid": " toto video",
	"shr-aud": " tento audio soubor",
	"shr-hnt": " s {s} ",
	"shr-disc": "Č. schválení jakýchkoli výrobků nebo služeb je vyjádřené nebo předpokládané.",
	/* Form validation */
	"frm-nosubmit": "Formulář nelze předloženy, protože ",
	"errs-fnd": " chyby byly nalezeny.",
	"err-fnd": " chyba byla nalezena.",
	/* Date picker */
	"date-show": "Vyberte datum z kalendáře pro pole:",
	"date-sel": "Vybraný",
	/* Calendar */
	days: [
		"Neděle",
		"Pondělí",
		"Úterý",
		"Středa",
		"Čtvrtek",
		"Pátek",
		"Sobota"
	],
	mnths: [
		"Leden",
		"Únor",
		"Březen",
		"Duben",
		"Květen",
		"Červen",
		"Červenec",
		"Srpen",
		"Září",
		"Říjen",
		"Listopad",
		"Prosinec"
	],
	cal: "Kalendář",
	currDay: "(Aktuální den)",
	"cal-goToLnk": "Přejít na<span class=\"wb-inv\"> měsíc roku</span>",
	"cal-goToTtl": "Přejít na měsíc roku",
	"cal-goToMnth": "Měsíc:",
	"cal-goToYr": "Rok:",
	"cal-goToBtn": "Jít",
	prvMnth: "Předchozí měsíc: ",
	nxtMnth: "Příští měsíc: ",
	/* Lightbox */
	"lb-curr": "Bod %curr% %total%",
	"lb-xhr-err": "Tento obsah se nepodařilo načíst.",
	"lb-img-err": "Tento obrázek se nepodařilo načíst.",
	/* Charts widget */
	"tbl-txt": "Tabulka",
	"tbl-dtls": "Graf. Podrobnosti v následující tabulce.",
	/* Session timeout */
	"st-to-msg-bgn": "Vaše relace vyprší automaticky #min# min #sec# sec.",
	"st-to-msg-end": "Zvolte \"Pokračovat v relaci\" rozšířit relaci.",
	"st-msgbx-ttl": "Upozornění session timeout",
	"st-alrdy-to-msg": "Je nám líto, váš relace již vypršela. Prosím, přihlaste se znovu.",
	"st-btn-cont": "pokračovat v relaci",
	"st-btn-end": "Ukončit relaci nyní",
	/* Toggle details */
	"td-toggle": "Přepnout všechny",
	"td-open": "Rozbalit všechny záložky",
	"td-close": "Sbalit vše",
	"td-ttl-open": "Rozbalit všechny části obsahu",
	"td-ttl-close": "Minimalizovat všechny části obsahu",
	/* Table enhancement */
	sortAsc: ": aktivuje na vzestupně seřadit",
	sortDesc: ": aktivujte pro sestupné řazení",
	emptyTbl: "K dispozici žádné údaje v tabulce",
	infoEntr: "Zobrazeno _START_-_END_ z _TOTAL_ položek",
	infoEmpty: "Zobrazeno 0-0 z 0 položek",
	infoFilt: "(filtrována z _MAX_ celkem záznamů)",
	info1000: "&#160;",
	lenMenu: "Zobrazit _MENU_ položek",
	filter: "Filtrování položek",
	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Přiblížit",
	"geo-zmout": "Oddálit",
	"geo-zmwrld": "Přiblížit zmapovat rozsah",
	"geo-zmfeat": "Přibližte prvku",
	"geo-sclln": "měřítko mapy",
	"geo-msepos": "Zeměpisná šířka a zeměpisná délka kurzoru myši",
	"geo-ariamap": "Mapa objekt. Popisy v mapě funkcí jsou uvedeny v tabulce níže.",
	"geo-ally": "<strong>Klávesové uživatelé:</strong> Pokud je mapa v centru pozornosti, pomocí kláves se šipkami posouvat mapu a plus a mínus pro přiblížení. Kláves se šipkami nebude posouvání mapy při zvětšení na mapu rozsahu.",
	"geo-allyttl": "Návod: Mapa navigace",
	"geo-tgllyr": "Přepnout zobrazení vrstvy",
	"geo-hdnlyr": "Tato vrstva je v současné době skrývá.",
	"geo-bmapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada základní mapa (pouze anglicky nebo francouzsky)",
	"geo-sel": "Vybrat",
	"geo-lblsel": "Zkontrolujte, vyberte prvek na mapě",
	"geo-locurl-geogratis": "http://geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Uveďte název místa&#44; poštovní směrovací číslo&#44; adresu (poštovní)&#44; počet NTS ...",
	"geo-loc-label": "Umístění",
	"geo-aoi-north": "Sever",
	"geo-aoi-east": "Východ",
	"geo-aoi-south": "Na jih",
	"geo-aoi-west": "Západ",
	"geo-aoi-instructions": "Vymezit oblast na mapě nebo zadejte údaje níže a poté klikněte na tlačítko \"Přidat\".",
	"geo-aoi-btndraw": "Kreslit",
	"geo-aoi-btnclear": "Odstranit",
	"geo-geoloc-btn": "Přiblížit se k aktuální poloze",
	"geo-geoloc-fail": "Lokalita se nezdařilo. Ujistěte se, že umístění služby jsou povoleny.",
	"geo-geoloc-uncapable": "Lokalizace není podporována ve vašem prohlížeči.",
	"geo-lgnd-grphc": "Legenda grafický pro mapovou vrstvu.",
	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Základní HTML verze",
	"wb-enable": "Standardní verze",
	/* Dismissable content */
	"dismiss": "Dismiss",
	/* Template */
	"tmpl-signin": "Přihlásit"
};

} )( wb );
