/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0 - 2020-01-23
 *
 */// This file was automatically generated from gcintranet-fr.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }


wet.builder.serverRefTop = function(opt_data, opt_ignored) {
  return serverPage.serverRefTop(opt_data);
};


wet.builder.serverTop = function(opt_data, opt_ignored) {
  return serverPage.serverTop(opt_data);
};


wet.builder.serverRefBottom = function(opt_data, opt_ignored) {
  return serverPage.serverRefBottom(opt_data);
};


wet.builder.serverBottom = function(opt_data, opt_ignored) {
  return serverPage.serverBottom(opt_data);
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'./cdts/css/gctheme.css\'>' + ((opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<link rel="stylesheet" href=\'./cdts/css/esdc.css\'>' : (opt_data.subTheme == 'eccc') ? '<link rel="stylesheet" href=\'./cdts/css/eccc.css\'>' : '') + '<link rel="stylesheet" href=\'./cdts/css/intranet.css\'>';
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList36 = opt_data.intranetTitle;
    var itemListLen36 = itemList36.length;
    for (var itemIndex36 = 0; itemIndex36 < itemListLen36; itemIndex36++) {
      var itemData36 = itemList36[itemIndex36];
      output += (itemIndex36 == 0) ? '<a href="' + ((itemData36.href != null) ? soy.$$escapeHtml(itemData36.href) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData36.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData36.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData36.boldText != null) ? soy.$$escapeHtml(itemData36.boldText) : 'GC') + '</span>' + ((itemData36.acronym != null) ? '</abbr>' : '') + ((itemData36.text != null) ? soy.$$escapeHtml(itemData36.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2 col-md-1' : 'col-lg-6 col-md-1') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def" tabindex="-1"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : (opt_data.intranetTitle != null) ? '' : '<section id="wb-gctools" class="col-lg-6 visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList93 = opt_data.lngLinks;
    var linkListLen93 = linkList93.length;
    for (var linkIndex93 = 0; linkIndex93 < linkListLen93; linkIndex93++) {
      var linkData93 = linkList93[linkIndex93];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData93.lang) + '" lang="' + soy.$$escapeHtml(linkData93.lang) + '" href="' + soy.$$escapeHtml(linkData93.href) + '">' + soy.$$escapeHtml(linkData93.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList110 = opt_data.customSearch;
      var itemListLen110 = itemList110.length;
      for (var itemIndex110 = 0; itemIndex110 < itemListLen110; itemIndex110++) {
        var itemData110 = itemList110[itemIndex110];
        if (itemIndex110 == 0) {
          output += '<form action="' + ((itemData110.action != null) ? soy.$$escapeHtml(itemData110.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData110.method != null) ? soy.$$escapeHtml(itemData110.method) : 'get') + '" name="' + ((itemData110.name != null) ? soy.$$escapeHtml(itemData110.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData110.id != null) ? soy.$$escapeHtml(itemData110.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData110.placeholder != null) ? soy.$$escapeHtml(itemData110.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData110.id != null) ? soy.$$escapeHtml(itemData110.id) : 'wb-srch-q') + '" name="' + ((itemData110.name != null) ? soy.$$escapeHtml(itemData110.name) : 'q') + '"  value="" size="21" maxlength="150" placeholder="' + ((itemData110.placeholder != null) ? soy.$$escapeHtml(itemData110.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData110.hiddenInput != null) {
            var inputList164 = itemData110.hiddenInput;
            var inputListLen164 = inputList164.length;
            for (var inputIndex164 = 0; inputIndex164 < inputListLen164; inputIndex164++) {
              var inputData164 = inputList164[inputIndex164];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData164.name) + '" value="' + soy.$$escapeHtml(inputData164.value) + '" />';
            }
          } else {
            output += '<input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" />';
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div>' + ((opt_data.siteMenu != false) ? (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : 'http://esdc.prv/includes/edsc-esdc_prv/wet4/fr/mega_menu/esdcmenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="http://rhdcc.prv/fra/ministere/index.page?">Notre ministère</a></li><li><a href="http://rhdcc.prv/fra/directions_generales/index.page?">Directions générales et régions</a></li><li><a href="http://iservice.prv/fra/">iService</a></li><li><a href="http://rhdcc.prv/fra/outils_travail/index.page?">Outils de travail</a></li><li><a href="http://rhdcc.prv/fra/liens_rapides/index.page?">Liens rapides</a></li></ul></div></div></nav>' : (opt_data.subTheme == 'eccc') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : './cdts/ajax/sitemenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="#">About ECCC</a></li><li><a href="#">Branches</a></li><li><a href="#">Services</a></li><li><a href="#">Tools and References</a></li><li><a href="#">Resources</a></li><li><a href="#">Forms</a></li><li><a href="#">DMs\' Corner</a></li></ul></div></div></nav>' : '<nav role="navigation" id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-fra.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">Développement de carrière et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList258 = opt_data.breadcrumbs;
      var itemListLen258 = itemList258.length;
      for (var itemIndex258 = 0; itemIndex258 < itemListLen258; itemIndex258++) {
        var itemData258 = itemList258[itemIndex258];
        output += '<li>' + ((itemData258.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData258.acronym) + '">' : '') + ((itemData258.href != null) ? '<a href="' + soy.$$escapeHtml(itemData258.href) + '">' : '') + soy.$$escapeHtml(itemData258.title) + ((itemData258.href != null) ? '</a>' : '') + ((itemData258.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://intranet.canada.ca/index-fra.asp">Accueil</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList303 = opt_data.intranetTitle;
    var itemListLen303 = itemList303.length;
    for (var itemIndex303 = 0; itemIndex303 < itemListLen303; itemIndex303++) {
      var itemData303 = itemList303[itemIndex303];
      output += (itemIndex303 == 0) ? '<a href="' + ((itemData303.href != null) ? soy.$$escapeHtml(itemData303.href) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData303.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData303.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData303.boldText != null) ? soy.$$escapeHtml(itemData303.boldText) : 'GC') + '</span>' + ((itemData303.acronym != null) ? '</abbr>' : '') + ((itemData303.text != null) ? soy.$$escapeHtml(itemData303.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2' : 'col-lg-6') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : '<section id="wb-gctools" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'pull-right col-md-4' : 'col-lg-6') + ' visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList365 = opt_data.lngLinks;
    var linkListLen365 = linkList365.length;
    for (var linkIndex365 = 0; linkIndex365 < linkListLen365; linkIndex365++) {
      var linkData365 = linkList365[linkIndex365];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData365.lang) + '" href="' + soy.$$escapeHtml(linkData365.href) + '">' + soy.$$escapeHtml(linkData365.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList380 = opt_data.customSearch;
      var itemListLen380 = itemList380.length;
      for (var itemIndex380 = 0; itemIndex380 < itemListLen380; itemIndex380++) {
        var itemData380 = itemList380[itemIndex380];
        if (itemIndex380 == 0) {
          output += '<form action="' + ((itemData380.action != null) ? soy.$$escapeHtml(itemData380.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData380.method != null) ? soy.$$escapeHtml(itemData380.method) : 'get') + '" name="' + ((itemData380.name != null) ? soy.$$escapeHtml(itemData380.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData380.id != null) ? soy.$$escapeHtml(itemData380.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData380.placeholder != null) ? soy.$$escapeHtml(itemData380.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData380.id != null) ? soy.$$escapeHtml(itemData380.id) : 'wb-srch-q') + '" name="' + ((itemData380.name != null) ? soy.$$escapeHtml(itemData380.name) : 'q') + '"  value="' + ((itemData380.value != null) ? soy.$$escapeHtml(itemData380.value) : '') + '" size="21" maxlength="150" placeholder="' + ((itemData380.placeholder != null) ? soy.$$escapeHtml(itemData380.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData380.hiddenInput != null) {
            var inputList439 = itemData380.hiddenInput;
            var inputListLen439 = inputList439.length;
            for (var inputIndex439 = 0; inputIndex439 < inputListLen439; inputIndex439++) {
              var inputData439 = inputList439[inputIndex439];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData439.name) + '" value="' + soy.$$escapeHtml(inputData439.value) + '" />';
            }
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div><div id="gcappbanner"><div class="container"><div class="row gc-' + ((opt_data.subTheme) ? 'app' : 'intra') + '-br">';
  var itemList511 = opt_data.appName;
  var itemListLen511 = itemList511.length;
  for (var itemIndex511 = 0; itemIndex511 < itemListLen511; itemIndex511++) {
    var itemData511 = itemList511[itemIndex511];
    output += '<div id="wb-sttl" class="col-md-1' + ((opt_data.signOut || opt_data.signIn) ? '0' : '2') + '">' + ((itemData511.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData511.acronym) + '">' : '') + ((itemData511.href) ? '<a href="' + soy.$$escapeHtml(itemData511.href) + '">' : '') + '<span>' + ((opt_data.secure == true) ? '<i class="glyphicon glyphicon-lock mrgn-rght-md"></i>' : '') + soy.$$escapeHtml(itemData511.text) + '</span>' + ((itemData511.href) ? '</a>' : '') + ((itemData511.acronym != null) ? '</abbr>' : '') + '</div>';
  }
  if (opt_data.signOut != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList546 = opt_data.signOut;
    var buttonListLen546 = buttonList546.length;
    for (var buttonIndex546 = 0; buttonIndex546 < buttonListLen546; buttonIndex546++) {
      var buttonData546 = buttonList546[buttonIndex546];
      output += (buttonIndex546 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData546.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Déconnexion</a></p>' : '';
    }
    output += '</div></div>';
  } else if (opt_data.signIn != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList556 = opt_data.signIn;
    var buttonListLen556 = buttonList556.length;
    for (var buttonIndex556 = 0; buttonIndex556 < buttonListLen556; buttonIndex556++) {
      var buttonData556 = buttonList556[buttonIndex556];
      output += (buttonIndex556 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData556.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Connexion</a></p>' : '';
    }
    output += '</div></div>';
  } else {
  }
  output += '</div></div></div>';
  if (opt_data.menuLinks != null) {
    output += '<nav role="navigation" id="wb-smapp" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
    var linkList569 = opt_data.menuLinks;
    var linkListLen569 = linkList569.length;
    for (var linkIndex569 = 0; linkIndex569 < linkListLen569; linkIndex569++) {
      var linkData569 = linkList569[linkIndex569];
      if (linkData569.subLinks != null) {
        output += '<li><a href="#' + soy.$$escapeHtml(linkData569.id) + '" class="item"' + ((linkData569.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData569.text) + ((linkData569.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData569.id) + '" role="menu">';
        var sublinkList586 = linkData569.subLinks;
        var sublinkListLen586 = sublinkList586.length;
        for (var sublinkIndex586 = 0; sublinkIndex586 < sublinkListLen586; sublinkIndex586++) {
          var sublinkData586 = sublinkList586[sublinkIndex586];
          output += (sublinkIndex586 == sublinkListLen586 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData586.subhref) + '"' + ((sublinkData586.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData586.subtext) + ((sublinkData586.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData586.subhref) + '"' + ((sublinkData586.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData586.subtext) + ((sublinkData586.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData569.href) + '" class="item"' + ((linkData569.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData569.text) + ((linkData569.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '<li class="hidden-md hidden-lg"><a href="#mnuTools" class="item">OutilsGC</a><ul class="sm list-unstyled" id="mnuTools" role="menu"><li><a href="https://gcconnex.gc.ca"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcannuaire-gcdirectory.gc.ca/fr/GCA/?pgid=002"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/"><span class="bold-gc">GC</span>collab</a></li></ul></li></ul></div></div></nav>';
  } else if (opt_data.menuPath != null) {
    output += '<nav role="navigation" id="wb-smapp" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
  } else {
    output += '<div id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/appmenu-fra.html" data-trgt="mb-pnl" class="wb-menu hidden-sm hidden-xs"></div>';
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList640 = opt_data.breadcrumbs;
    var itemListLen640 = itemList640.length;
    for (var itemIndex640 = 0; itemIndex640 < itemListLen640; itemIndex640++) {
      var itemData640 = itemList640[itemIndex640];
      output += '<li>' + ((itemData640.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData640.acronym) + '">' : '') + ((itemData640.href != null) ? '<a href="' + soy.$$escapeHtml(itemData640.href) + '">' : '') + soy.$$escapeHtml(itemData640.title) + ((itemData640.href != null) ? '</a>' : '') + ((itemData640.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t' + ((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'écran&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div></div>' : '');
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList690 = opt_data.sections;
  var sectionListLen690 = sectionList690.length;
  for (var sectionIndex690 = 0; sectionIndex690 < sectionListLen690; sectionIndex690++) {
    var sectionData690 = sectionList690[sectionIndex690];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData690.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData690.sectionLink) + '"' + ((sectionData690.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData690.sectionName) + ((sectionData690.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData690.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList709 = sectionData690.menuLinks;
    var linkListLen709 = linkList709.length;
    for (var linkIndex709 = 0; linkIndex709 < linkListLen709; linkIndex709++) {
      var linkData709 = linkList709[linkIndex709];
      if (linkData709.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData709.href) + '" class="list-group-item"' + ((linkData709.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData709.text) + ((linkData709.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList724 = linkData709.subLinks;
        var sublinkListLen724 = sublinkList724.length;
        for (var sublinkIndex724 = 0; sublinkIndex724 < sublinkListLen724; sublinkIndex724++) {
          var sublinkData724 = sublinkList724[sublinkIndex724];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData724.subhref) + '" class="list-group-item"' + ((sublinkData724.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData724.subtext) + ((sublinkData724.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData709.href) + '" class="list-group-item"' + ((linkData709.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData709.text) + ((linkData709.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4">';
  if (opt_data.contactLinks != null) {
    var linkList763 = opt_data.contactLinks;
    var linkListLen763 = linkList763.length;
    for (var linkIndex763 = 0; linkIndex763 < linkListLen763; linkIndex763++) {
      var linkData763 = linkList763[linkIndex763];
      output += '<li><a href="' + soy.$$escapeHtml(linkData763.href) + '">' + soy.$$escapeHtml(linkData763.text) + '</a></li>';
    }
  } else {
    output += '<li><a href="https://intranet.canada.ca/contact/contactgc-fra.aspx">Communiquez avec nous</a></li>';
  }
  output += '<li><a href="https://intranet.canada.ca/ict-oci/index-fra.asp">À propos des OutilsGC</a></li><li><a href="https://www.canada.ca/fr.html">Canada.ca</a></li><li><a href="https://intranet.canada.ca/terms-avis-fra.asp">Avis</a></li></ul></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info">';
  if (opt_data.footerSections != null) {
    if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList784 = opt_data.footerSections;
      var footerSectionListLen784 = footerSectionList784.length;
      for (var footerSectionIndex784 = 0; footerSectionIndex784 < footerSectionListLen784; footerSectionIndex784++) {
        var footerSectionData784 = footerSectionList784[footerSectionIndex784];
        if (footerSectionData784.customFooterLinks != null) {
          if (footerSectionIndex784 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData784.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData784.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList796 = footerSectionData784.customFooterLinks;
            var linkListLen796 = linkList796.length;
            for (var linkIndex796 = 0; linkIndex796 < linkListLen796; linkIndex796++) {
              var linkData796 = linkList796[linkIndex796];
              output += '<li><a href="' + soy.$$escapeHtml(linkData796.href) + '"' + ((linkData796.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData796.text) + ((linkData796.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex784 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData784.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData784.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList819 = opt_data.footerSections;
          var linkListLen819 = linkList819.length;
          for (var linkIndex819 = 0; linkIndex819 < linkListLen819; linkIndex819++) {
            var linkData819 = linkList819[linkIndex819];
            output += '<li><a href="' + soy.$$escapeHtml(linkData819.href) + '"' + ((linkData819.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData819.text) + ((linkData819.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Ministère</h3><ul class="list-unstyled"><li><a href="http://esdc.prv/fr/directions_regions/index.shtml">EDSC/SC IntraWeb</a></li><li><a href="http://edsc.prv/fr/nouvelles/index.shtml">Nouvelles</a></li><li><a href="http://edsc.prv/fr/coordonnees/index.shtml">Coordonnées et rétroaction</a></li><li><a href="http://edsc.prv/fr/restez_branche/index.shtml">Restez branchés</a></li><li><a href="http://edsc.prv/fr/aide.shtml">Aide et avis importants</a></li></ul></section></div></nav>';
    } else if (opt_data.subTheme == 'eccc') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList838 = opt_data.footerSections;
      var footerSectionListLen838 = footerSectionList838.length;
      for (var footerSectionIndex838 = 0; footerSectionIndex838 < footerSectionListLen838; footerSectionIndex838++) {
        var footerSectionData838 = footerSectionList838[footerSectionIndex838];
        if (footerSectionData838.customFooterLinks != null) {
          if (footerSectionIndex838 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData838.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData838.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList850 = footerSectionData838.customFooterLinks;
            var linkListLen850 = linkList850.length;
            for (var linkIndex850 = 0; linkIndex850 < linkListLen850; linkIndex850++) {
              var linkData850 = linkList850[linkIndex850];
              output += '<li><a href="' + soy.$$escapeHtml(linkData850.href) + '"' + ((linkData850.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData850.text) + ((linkData850.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex838 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData838.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData838.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList873 = opt_data.footerSections;
          var linkListLen873 = linkList873.length;
          for (var linkIndex873 = 0; linkIndex873 < linkListLen873; linkIndex873++) {
            var linkData873 = linkList873[linkIndex873];
            output += '<li><a href="' + soy.$$escapeHtml(linkData873.href) + '"' + ((linkData873.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData873.text) + ((linkData873.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Contact Us</h3><ul class="list-unstyled"><li><a href="#">EnviroTel (Fr)</a></li><li><a href="#">GEDS (Fr)</a></li><li><a href="#">Organizational Chart (Fr)</a></li><li><a href="#">Service Desk (Fr)</a></li><li><a href="#">Feedback (Fr)</a></li><li><a href="#">Services Catalogue (Fr)</a></li></ul></section></div></nav>';
    } else {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList892 = opt_data.footerSections;
      var footerSectionListLen892 = footerSectionList892.length;
      for (var footerSectionIndex892 = 0; footerSectionIndex892 < footerSectionListLen892; footerSectionIndex892++) {
        var footerSectionData892 = footerSectionList892[footerSectionIndex892];
        if (footerSectionData892.customFooterLinks != null) {
          if (footerSectionIndex892 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData892.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData892.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList904 = footerSectionData892.customFooterLinks;
            var linkListLen904 = linkList904.length;
            for (var linkIndex904 = 0; linkIndex904 < linkListLen904; linkIndex904++) {
              var linkData904 = linkList904[linkIndex904];
              output += '<li><a href="' + soy.$$escapeHtml(linkData904.href) + '"' + ((linkData904.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData904.text) + ((linkData904.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex892 == 0) {
          output += '<section class="container-fluid">' + ((footerSectionData892.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData892.sectionName) + '</h3>' : '') + '<ul class="list-unstyled colcount-sm-2 colcount-md-4">';
          var linkList927 = opt_data.footerSections;
          var linkListLen927 = linkList927.length;
          for (var linkIndex927 = 0; linkIndex927 < linkListLen927; linkIndex927++) {
            var linkData927 = linkList927[linkIndex927];
            output += '<li><a href="' + soy.$$escapeHtml(linkData927.href) + '"' + ((linkData927.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData927.text) + ((linkData927.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '</div></nav>';
    }
  } else if (opt_data.globalNav == true) {
    output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4 container-fluid" ><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">Développement de carrière et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></nav>';
  } else if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
    output += '<nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr" data-wb-ajax=\'{"url": "./cdts/ajax/esdcfooter-fra.html", "type": "replace", "nocache": true }\'></nav>';
  } else {
  }
  output += '<div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : './wet-boew/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'./wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'./wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'./gcweb/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'./cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '');
};

// This file was automatically generated from gcintranet-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner"><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer role="contentinfo" id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
