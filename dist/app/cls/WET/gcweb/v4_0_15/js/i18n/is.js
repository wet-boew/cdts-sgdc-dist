/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Icelandic dictionary (il8n) ---
 */
( function( wb ) {
"use strict";
/* main index */
wb.i18nDict = {
	"lang-code": "is",
	"lang-native": "Íslenska",
	add: "Bæta",
	all: "Allt",
	tphp: "Efst á síðu",
	load: "hleðsla ...",
	process: "vinnslu ...",
	srch: "Leita",
	"no-match": "Engin samsvörun fannst",
	matches: {
		mixin: "[MIXIN] niðurstöður fundust"
	},
	current: "(núverandi)",
	hide: "Fela",
	err: "Villa",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Byrja",
	stop: "Stöðva",
	back: "Til baka",
	cancel: "Hætta við",
	"min-ago": "mínútu síðan",
	"coup-mins": "nokkrar mínútur síðan",
	"mins-ago": {
		mixin: "[MIXIN] mínútur síðan"
	},
	"hour-ago": "klukkutíma síðan",
	"hours-ago": {
		mixin: "[MIXIN] klst síðan"
	},
	"days-ago": {
		mixin: "[MIXIN] dögum síðan"
	},
	yesterday: "í gær",

	nxt: "Næsta",
	"nxt-r": "Næsta (hægri ör lykill)",
	prv: "Fyrri",
	"prv-l": "Fyrri (vinstri ör lykill)",
	first: "First",
	last: "Síðasta",
	page: "Page",
	"srch-menus": "Leit og valmyndir",
	email: "Email",
	"menu-close": "Loka valmynd",
	"overlay-close": "Loka yfirlagið",
	"esc-key": "(flýja lykill)",
	show: "Sýna",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stöðva flipann snúningur",
		on: "Byrja flipann snúningur"
	},
	"tab-list": "Flipann lista",
	"tab-pnl-end1": "Lok þessa flipann spjaldið.",
	"tab-pnl-end2": "Fara aftur á flipann lista",
	"tab-pnl-end3": "eða halda áfram til the hvíla af síðunni.",
	"tab-play": "Spila",
	/* Multimedia player */
	"mmp-play": "Spila",
	pause: "Brot",
	open: "Opinn",
	close: "Loka",
	volume: "Hljóðstyrk",
	mute: {
		on: "Hljóðnemi",
		off: "Slökkva"
	},
	cc: {
		off: "Fela lokuðum skýringartextum",
		on: "Sýna lokuðum skýringartextum"
	},
	"cc-err": "Villa við að hlaða Skjátextar",
	adesc: {
		on: "Virkja hljóð lýsingu",
		off: "Gera hljóð lýsingu"
	},
	pos: "Núverandi staða:",
	dur: "Samtals tími:",
	/* Share widget */
	"shr-txt": "Deila",
	"shr-pg": " þessari síðu",
	"shr-vid": " þessu myndbandi",
	"shr-aud": " þetta hljóðskrá",
	"shr-hnt": " með {s} ",
	"shr-disc": "Engin áritun allar vörur eða þjónustu er gefið eða gefið í skyn.",
	/* Form validation */
	"frm-nosubmit": "Eyðublaðið var ekki hægt að skila því ",
	"errs-fnd": " villur fundust.",
	"err-fnd": " villa fannst.",
	/* Date picker */
	"date-show": "Veldu dagsetningu af dagatali fyrir akur:",
	"date-sel": "Valin",
	/* Calendar */
	days: [
		"Sunnudagur",
		"Mánudagur",
		"Þriðjudagur",
		"Miðvikudagur",
		"Fimmtudagur",
		"Föstudagur",
		"Laugardagur"
	],
	mnths: [
		"Janúar",
		"Febrúar",
		"Mars",
		"Apríl",
		"Maí",
		"Júní",
		"Júlí",
		"Ágúst",
		"September",
		"Október",
		"Nóvember",
		"Desember"
	],
	cal: "Dagbók",
	currDay: "(Núverandi dag)",
	"cal-goToLnk": "Fara í<span class=\"wb-inv\"> mánuð á ári</span>",
	"cal-goToTtl": "Fara í mánuð á ári",
	"cal-goToMnth": "Mánuður:",
	"cal-goToYr": "Ár:",
	"cal-goToBtn": "Farðu",
	prvMnth: "Fyrri mánuður: ",
	nxtMnth: "Næsti mánuður: ",
	/* Lightbox */
	"lb-curr": "Item %curr% af %total%",
	"lb-xhr-err": "Þetta efni tókst að hlaða.",
	"lb-img-err": "Þessi mynd tókst að hlaða.",
	/* Charts widget */
	"tbl-txt": "Tafla",
	"tbl-dtls": "Töfluna. Upplýsingar í eftirfarandi töflu.",
	/* Session timeout */
	"st-to-msg-bgn": "Fundur mun renna sjálfkrafa í #min# mín #sec# sek.",
	"st-to-msg-end": "Sækja Veldu \"Áfram fundur\" til að lengja setu.",
	"st-msgbx-ttl": "Fundur tími viðvörun",
	"st-alrdy-to-msg": "Því miður fundur hefur þegar útrunninn. Vinsamlegast skráðu þig inn aftur.",
	"st-btn-cont": "Halda áfram setu",
	"st-btn-end": "Endir setu nú",
	/* Toggle details */
	"td-toggle": "Gera alla",
	"td-open": "Stækka allt",
	"td-close": "Draga allt",
	"td-ttl-open": "Stækka alla hluta af efni",
	"td-ttl-close": "Fella alla hluta af efni",
	/* Table enhancement */
	sortAsc: ": virkja til hækkandi raða",
	sortDesc: ": virkja til lækkandi konar",
	emptyTbl: "Engar upplýsingar liggja á borðinu",
	infoEntr: "Sýni _START_ til _END_ af _TOTAL_ færslum",
	infoEmpty: "Sýni 0 til 0 af 0 færslum",
	infoFilt: "(síað frá _MAX_ öllum færslum)",
	info1000: ",",
	lenMenu: "Sýna _MENU_ færslur",
	filter: "Sía atriði",
	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Auka aðdrátt",
	"geo-zmout": "Minnka aðdrátt",
	"geo-zmwrld": "Aðdráttur til að kortleggja umfang",
	"geo-zmfeat": "Aðdráttur á frumefni",
	"geo-sclln": "kort mælikvarða",
	"geo-msepos": "Breiddar-og lengdargráðu á mús bendill",
	"geo-ariamap": "Kort mótmæla. Lýsingum á kort lögun eru í töflunni hér að neðan.",
	"geo-ally": "<strong>Lyklaborð Notendur:</strong> Þegar kort er í fókus, nota arrow takkana til að færa kortið og plús og mínus takkana til að súmma. Örvatakkana mun ekki hliðra kortinu þegar aðdregna inn á kortið marki.",
	"geo-allyttl": "Leiðbeiningar: Kort flakk",
	"geo-tgllyr": "Víxla birtingu lag",
	"geo-hdnlyr": "Þetta lag er nú falin.",
	"geo-bmapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada stöð kort (enska eða franska aðeins)",
	"geo-sel": "Veldu",
	"geo-lblsel": "Athugaðu að velja atriði á kortinu",
	"geo-locurl-geogratis": "http://geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Tilgreina nafn staðsetningu&#44; póstnúmer&#44; heimilisfang (Postal)&#44; fjölda NTS ...",
	"geo-loc-label": "Staðsetning",
	"geo-aoi-north": "Norður",
	"geo-aoi-east": "Austur",
	"geo-aoi-south": "Suður",
	"geo-aoi-west": "Vestur",
	"geo-aoi-instructions": "Draw kassi á kortið eða sláðu hnit neðan og smelltu á \"Bæta við\" hnappinn.",
	"geo-aoi-btndraw": "Draga",
	"geo-aoi-btnclear": "Fjarlægja",
	"geo-geoloc-btn": "Aðdráttur til núverandi staðsetningu",
	"geo-geoloc-fail": "Staðsetning mistókst. Skaltu tryggja að staðsetningu þjónustu eru virk.",
	"geo-geoloc-uncapable": "Staðsetning er ekki stutt af vafranum þínum.",
	"geo-lgnd-grphc": "Legend grafík fyrir kortinu lag.",
	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Undirstöðu HTML útgáfa",
	"wb-enable": "Standard útgáfa",
	/* Dismissable content */
	"dismiss": "Dismiss",
	/* Template */
	"tmpl-signin": "Skrá inn"
};

} )( wb );
