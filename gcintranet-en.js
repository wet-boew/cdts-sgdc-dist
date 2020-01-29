/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0 - 2020-01-29
 *
 */// This file was automatically generated from gcintranet-en.soy.
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


wet.builder.environment = function(opt_data, opt_ignored) {
  return '../../';
};


wet.builder.serverBottom = function(opt_data, opt_ignored) {
  return serverPage.serverBottom(opt_data);
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/theme.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + '/wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/gctheme.css\'>' + ((opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/esdc.css\'>' : (opt_data.subTheme == 'eccc') ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/eccc.css\'>' : '') + '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/intranet.css\'>';
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList56 = opt_data.intranetTitle;
    var itemListLen56 = itemList56.length;
    for (var itemIndex56 = 0; itemIndex56 < itemListLen56; itemIndex56++) {
      var itemData56 = itemList56[itemIndex56];
      output += (itemIndex56 == 0) ? '<a href="' + ((itemData56.href != null) ? soy.$$escapeHtml(itemData56.href) : 'http://intranet.ec.gc.ca/default.asp?lang=En') + '">' + ((itemData56.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData56.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData56.boldText != null) ? soy.$$escapeHtml(itemData56.boldText) : 'GC') + '</span>' + ((itemData56.acronym != null) ? '</abbr>' : '') + ((itemData56.text != null) ? soy.$$escapeHtml(itemData56.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-eng.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2 col-md-1' : 'col-lg-6 col-md-1') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' hidden-sm hidden-xs text-right"><h2 class="wb-inv">GCTools links</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools"><span class="bold-gc">GC</span>Tools</a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title"><span class="bold-gc">GC</span>Tools</h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-eng.asp" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : (opt_data.intranetTitle != null) ? '' : '<section id="wb-gctools" class="col-lg-6 visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList113 = opt_data.lngLinks;
    var linkListLen113 = linkList113.length;
    for (var linkIndex113 = 0; linkIndex113 < linkListLen113; linkIndex113++) {
      var linkData113 = linkList113[linkIndex113];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData113.lang) + '" lang="' + soy.$$escapeHtml(linkData113.lang) + '" href="' + soy.$$escapeHtml(linkData113.href) + '">' + soy.$$escapeHtml(linkData113.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Search</h2>';
    if (opt_data.customSearch != null) {
      var itemList130 = opt_data.customSearch;
      var itemListLen130 = itemList130.length;
      for (var itemIndex130 = 0; itemIndex130 < itemListLen130; itemIndex130++) {
        var itemData130 = itemList130[itemIndex130];
        if (itemIndex130 == 0) {
          output += '<form action="' + ((itemData130.action != null) ? soy.$$escapeHtml(itemData130.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx') + '" method="' + ((itemData130.method != null) ? soy.$$escapeHtml(itemData130.method) : 'get') + '" name="' + ((itemData130.name != null) ? soy.$$escapeHtml(itemData130.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData130.id != null) ? soy.$$escapeHtml(itemData130.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData130.placeholder != null) ? soy.$$escapeHtml(itemData130.placeholder) : 'Search GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData130.id != null) ? soy.$$escapeHtml(itemData130.id) : 'wb-srch-q') + '" name="' + ((itemData130.name != null) ? soy.$$escapeHtml(itemData130.name) : 'q') + '"  value="" size="21" maxlength="150" placeholder="' + ((itemData130.placeholder != null) ? soy.$$escapeHtml(itemData130.placeholder) : 'Search GCintranet') + '">';
          if (itemData130.hiddenInput != null) {
            var inputList184 = itemData130.hiddenInput;
            var inputListLen184 = inputList184.length;
            for (var inputIndex184 = 0; inputIndex184 < inputListLen184; inputIndex184++) {
              var inputData184 = inputList184[inputIndex184];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData184.name) + '" value="' + soy.$$escapeHtml(inputData184.value) + '" />';
            }
          } else {
            output += '<input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" />';
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Search GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div>' + ((opt_data.siteMenu != false) ? (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : 'http://esdc.prv/includes/edsc-esdc_prv/wet4/en/mega_menu/esdcmenu-eng.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="http://hrsdc.prv/eng/department/index.page?">Our Department</a></li><li><a href="http://hrsdc.prv/eng/branches/index.page?">Branches and Regions</a></li><li><a href="http://iservice.prv/eng/">iService</a></li><li><a href="http://hrsdc.prv/eng/work_tools/index.page?">Work Tools</a></li><li><a href="http://hrsdc.prv/eng/quick_links/index.page?">Quick Links</a></li></ul></div></div></nav>' : (opt_data.subTheme == 'eccc') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : '/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-eng.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="#">About ECCC</a></li><li><a href="#">Branches</a></li><li><a href="#">Services</a></li><li><a href="#">Tools and References</a></li><li><a href="#">Resources</a></li><li><a href="#">Forms</a></li><li><a href="#">DMs\' Corner</a></li></ul></div></div></nav>' : '<nav role="navigation" id="wb-sm" data-ajax-replace="./cdts/ajax/sitemenu-eng.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="https://intranet.canada.ca/psc-fsc/index-eng.asp">News</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-eng.asp">Human resources</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-eng.asp">Career development and learning</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-eng.asp">Services and tools</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList278 = opt_data.breadcrumbs;
      var itemListLen278 = itemList278.length;
      for (var itemIndex278 = 0; itemIndex278 < itemListLen278; itemIndex278++) {
        var itemData278 = itemList278[itemIndex278];
        output += '<li>' + ((itemData278.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData278.acronym) + '">' : '') + ((itemData278.href != null) ? '<a href="' + soy.$$escapeHtml(itemData278.href) + '">' : '') + soy.$$escapeHtml(itemData278.title) + ((itemData278.href != null) ? '</a>' : '') + ((itemData278.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://intranet.canada.ca/index-eng.asp">Home</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList323 = opt_data.intranetTitle;
    var itemListLen323 = itemList323.length;
    for (var itemIndex323 = 0; itemIndex323 < itemListLen323; itemIndex323++) {
      var itemData323 = itemList323[itemIndex323];
      output += (itemIndex323 == 0) ? '<a href="' + ((itemData323.href != null) ? soy.$$escapeHtml(itemData323.href) : 'http://intranet.ec.gc.ca/default.asp?lang=En') + '">' + ((itemData323.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData323.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData323.boldText != null) ? soy.$$escapeHtml(itemData323.boldText) : 'GC') + '</span>' + ((itemData323.acronym != null) ? '</abbr>' : '') + ((itemData323.text != null) ? soy.$$escapeHtml(itemData323.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-eng.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2' : 'col-lg-6') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">GCTools links</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools"><span class="bold-gc">GC</span>Tools</a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title"><span class="bold-gc">GC</span>Tools</h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-eng.asp" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : '<section id="wb-gctools" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'pull-right col-md-4' : 'col-lg-6') + ' visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList385 = opt_data.lngLinks;
    var linkListLen385 = linkList385.length;
    for (var linkIndex385 = 0; linkIndex385 < linkListLen385; linkIndex385++) {
      var linkData385 = linkList385[linkIndex385];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData385.lang) + '" href="' + soy.$$escapeHtml(linkData385.href) + '">' + soy.$$escapeHtml(linkData385.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Search</h2>';
    if (opt_data.customSearch != null) {
      var itemList400 = opt_data.customSearch;
      var itemListLen400 = itemList400.length;
      for (var itemIndex400 = 0; itemIndex400 < itemListLen400; itemIndex400++) {
        var itemData400 = itemList400[itemIndex400];
        if (itemIndex400 == 0) {
          output += '<form action="' + ((itemData400.action != null) ? soy.$$escapeHtml(itemData400.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx') + '" method="' + ((itemData400.method != null) ? soy.$$escapeHtml(itemData400.method) : 'get') + '" name="' + ((itemData400.name != null) ? soy.$$escapeHtml(itemData400.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData400.id != null) ? soy.$$escapeHtml(itemData400.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData400.placeholder != null) ? soy.$$escapeHtml(itemData400.placeholder) : 'Search GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData400.id != null) ? soy.$$escapeHtml(itemData400.id) : 'wb-srch-q') + '" name="' + ((itemData400.name != null) ? soy.$$escapeHtml(itemData400.name) : 'q') + '"  value="' + ((itemData400.value != null) ? soy.$$escapeHtml(itemData400.value) : '') + '" size="21" maxlength="150" placeholder="' + ((itemData400.placeholder != null) ? soy.$$escapeHtml(itemData400.placeholder) : 'Search GCintranet') + '">';
          if (itemData400.hiddenInput != null) {
            var inputList459 = itemData400.hiddenInput;
            var inputListLen459 = inputList459.length;
            for (var inputIndex459 = 0; inputIndex459 < inputListLen459; inputIndex459++) {
              var inputData459 = inputList459[inputIndex459];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData459.name) + '" value="' + soy.$$escapeHtml(inputData459.value) + '" />';
            }
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Search GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Search and menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div><div id="gcappbanner"><div class="container"><div class="row gc-' + ((opt_data.subTheme) ? 'app' : 'intra') + '-br">';
  var itemList531 = opt_data.appName;
  var itemListLen531 = itemList531.length;
  for (var itemIndex531 = 0; itemIndex531 < itemListLen531; itemIndex531++) {
    var itemData531 = itemList531[itemIndex531];
    output += '<div id="wb-sttl" class="col-md-1' + ((opt_data.signOut || opt_data.signIn) ? '0' : '2') + '">' + ((itemData531.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData531.acronym) + '">' : '') + ((itemData531.href) ? '<a href="' + soy.$$escapeHtml(itemData531.href) + '">' : '') + '<span>' + ((opt_data.secure == true) ? '<i class="glyphicon glyphicon-lock mrgn-rght-md"></i>' : '') + soy.$$escapeHtml(itemData531.text) + '</span>' + ((itemData531.href) ? '</a>' : '') + ((itemData531.acronym != null) ? '</abbr>' : '') + '</div>';
  }
  if (opt_data.signOut != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList566 = opt_data.signOut;
    var buttonListLen566 = buttonList566.length;
    for (var buttonIndex566 = 0; buttonIndex566 < buttonListLen566; buttonIndex566++) {
      var buttonData566 = buttonList566[buttonIndex566];
      output += (buttonIndex566 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData566.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Sign out</a></p>' : '';
    }
    output += '</div></div>';
  } else if (opt_data.signIn != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList576 = opt_data.signIn;
    var buttonListLen576 = buttonList576.length;
    for (var buttonIndex576 = 0; buttonIndex576 < buttonListLen576; buttonIndex576++) {
      var buttonData576 = buttonList576[buttonIndex576];
      output += (buttonIndex576 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData576.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Sign in</a></p>' : '';
    }
    output += '</div></div>';
  } else {
  }
  output += '</div></div></div>';
  if (opt_data.menuLinks != null) {
    output += '<nav role="navigation" id="wb-smapp" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
    var linkList589 = opt_data.menuLinks;
    var linkListLen589 = linkList589.length;
    for (var linkIndex589 = 0; linkIndex589 < linkListLen589; linkIndex589++) {
      var linkData589 = linkList589[linkIndex589];
      if (linkData589.subLinks != null) {
        output += '<li><a href="#' + soy.$$escapeHtml(linkData589.id) + '" class="item"' + ((linkData589.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData589.text) + ((linkData589.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData589.id) + '" role="menu">';
        var sublinkList606 = linkData589.subLinks;
        var sublinkListLen606 = sublinkList606.length;
        for (var sublinkIndex606 = 0; sublinkIndex606 < sublinkListLen606; sublinkIndex606++) {
          var sublinkData606 = sublinkList606[sublinkIndex606];
          output += (sublinkIndex606 == sublinkListLen606 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData606.subhref) + '"' + ((sublinkData606.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData606.subtext) + ((sublinkData606.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData606.subhref) + '"' + ((sublinkData606.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData606.subtext) + ((sublinkData606.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData589.href) + '" class="item"' + ((linkData589.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData589.text) + ((linkData589.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
      }
    }
    output += '<li class="hidden-md hidden-lg"><a href="#mnuTools" class="item">GCTools</a><ul class="sm list-unstyled" id="mnuTools" role="menu"><li><a href="https://gcconnex.gc.ca/splash/"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/"><span class="bold-gc">GC</span>collab</a></li></ul></li></ul></div></div></nav>';
  } else if (opt_data.menuPath != null) {
    output += '<nav role="navigation" id="wb-smapp" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
  } else {
    output += '<div id="wb-sm" data-ajax-replace="./cdts/ajax/appmenu-eng.html" data-trgt="mb-pnl" class="wb-menu hidden-sm hidden-xs"></div>';
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList660 = opt_data.breadcrumbs;
    var itemListLen660 = itemList660.length;
    for (var itemIndex660 = 0; itemIndex660 < itemListLen660; itemIndex660++) {
      var itemData660 = itemList660[itemIndex660];
      output += '<li>' + ((itemData660.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData660.acronym) + '">' : '') + ((itemData660.href != null) ? '<a href="' + soy.$$escapeHtml(itemData660.href) + '">' : '') + soy.$$escapeHtml(itemData660.title) + ((itemData660.href != null) ? '</a>' : '') + ((itemData660.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t' + ((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Screen Identifier:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div></div>' : '');
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>';
  var sectionList710 = opt_data.sections;
  var sectionListLen710 = sectionList710.length;
  for (var sectionIndex710 = 0; sectionIndex710 < sectionListLen710; sectionIndex710++) {
    var sectionData710 = sectionList710[sectionIndex710];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData710.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData710.sectionLink) + '"' + ((sectionData710.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData710.sectionName) + ((sectionData710.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + ((sectionData710.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList729 = sectionData710.menuLinks;
    var linkListLen729 = linkList729.length;
    for (var linkIndex729 = 0; linkIndex729 < linkListLen729; linkIndex729++) {
      var linkData729 = linkList729[linkIndex729];
      if (linkData729.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData729.href) + '" class="list-group-item"' + ((linkData729.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData729.text) + ((linkData729.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList744 = linkData729.subLinks;
        var sublinkListLen744 = sublinkList744.length;
        for (var sublinkIndex744 = 0; sublinkIndex744 < sublinkListLen744; sublinkIndex744++) {
          var sublinkData744 = sublinkList744[sublinkIndex744];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData744.subhref) + '" class="list-group-item"' + ((sublinkData744.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData744.subtext) + ((sublinkData744.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData729.href) + '" class="list-group-item"' + ((linkData729.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData729.text) + ((linkData729.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="./cdts/ajax/activities-footer-eng.html"></section>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4">';
  if (opt_data.contactLinks != null) {
    var linkList783 = opt_data.contactLinks;
    var linkListLen783 = linkList783.length;
    for (var linkIndex783 = 0; linkIndex783 < linkListLen783; linkIndex783++) {
      var linkData783 = linkList783[linkIndex783];
      output += '<li><a href="' + soy.$$escapeHtml(linkData783.href) + '">' + soy.$$escapeHtml(linkData783.text) + '</a></li>';
    }
  } else {
    output += '<li><a href="https://intranet.canada.ca/contact/contactgc-eng.aspx">Contact us</a></li>';
  }
  output += '<li><a href="https://intranet.canada.ca/ict-oci/index-eng.asp">About GCTools</a></li><li><a href="https://www.canada.ca/en.html">Canada.ca</a></li><li><a href="https://intranet.canada.ca/terms-avis-eng.asp">Terms and conditions</a></li></ul></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/en.html"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv">Government of Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="./cdts/ajax/activities-footer-eng.html"></section>' : '') + '<footer role="contentinfo" id="wb-info">';
  if (opt_data.footerSections != null) {
    if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">';
      var footerSectionList808 = opt_data.footerSections;
      var footerSectionListLen808 = footerSectionList808.length;
      for (var footerSectionIndex808 = 0; footerSectionIndex808 < footerSectionListLen808; footerSectionIndex808++) {
        var footerSectionData808 = footerSectionList808[footerSectionIndex808];
        if (footerSectionData808.customFooterLinks != null) {
          if (footerSectionIndex808 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData808.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData808.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList820 = footerSectionData808.customFooterLinks;
            var linkListLen820 = linkList820.length;
            for (var linkIndex820 = 0; linkIndex820 < linkListLen820; linkIndex820++) {
              var linkData820 = linkList820[linkIndex820];
              output += '<li><a href="' + soy.$$escapeHtml(linkData820.href) + '"' + ((linkData820.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData820.text) + ((linkData820.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex808 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData808.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData808.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList843 = opt_data.footerSections;
          var linkListLen843 = linkList843.length;
          for (var linkIndex843 = 0; linkIndex843 < linkListLen843; linkIndex843++) {
            var linkData843 = linkList843[linkIndex843];
            output += '<li><a href="' + soy.$$escapeHtml(linkData843.href) + '"' + ((linkData843.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData843.text) + ((linkData843.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Corporate</h3><ul class="list-unstyled"><li><a href="http://esdc.prv/en/branches_regions/index.shtml">ESDC/SC IntraWeb</a></li><li><a href="http://esdc.prv/en/news/index.shtml">News</a></li><li><a href="http://esdc.prv/en/contact/index.shtml">Contact and Feedback</a></li><li><a href="http://esdc.prv/en/stay_connected/index.shtml">Stay Connected</a></li><li><a href="http://edsc.prv/en/help.shtml">Help and Important Notices</a></li></ul></section></div></nav>';
    } else if (opt_data.subTheme == 'eccc') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">';
      var footerSectionList862 = opt_data.footerSections;
      var footerSectionListLen862 = footerSectionList862.length;
      for (var footerSectionIndex862 = 0; footerSectionIndex862 < footerSectionListLen862; footerSectionIndex862++) {
        var footerSectionData862 = footerSectionList862[footerSectionIndex862];
        if (footerSectionData862.customFooterLinks != null) {
          if (footerSectionIndex862 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData862.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData862.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList874 = footerSectionData862.customFooterLinks;
            var linkListLen874 = linkList874.length;
            for (var linkIndex874 = 0; linkIndex874 < linkListLen874; linkIndex874++) {
              var linkData874 = linkList874[linkIndex874];
              output += '<li><a href="' + soy.$$escapeHtml(linkData874.href) + '"' + ((linkData874.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData874.text) + ((linkData874.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex862 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData862.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData862.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList897 = opt_data.footerSections;
          var linkListLen897 = linkList897.length;
          for (var linkIndex897 = 0; linkIndex897 < linkListLen897; linkIndex897++) {
            var linkData897 = linkList897[linkIndex897];
            output += '<li><a href="' + soy.$$escapeHtml(linkData897.href) + '"' + ((linkData897.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData897.text) + ((linkData897.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Contact Us</h3><ul class="list-unstyled"><li><a href="#">EnviroTel</a></li><li><a href="#">GEDS</a></li><li><a href="#">Organizational Chart</a></li><li><a href="#">Service Desk</a></li><li><a href="#">Feedback</a></li><li><a href="#">Services Catalogue</a></li></ul></section></div></nav>';
    } else {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">';
      var footerSectionList916 = opt_data.footerSections;
      var footerSectionListLen916 = footerSectionList916.length;
      for (var footerSectionIndex916 = 0; footerSectionIndex916 < footerSectionListLen916; footerSectionIndex916++) {
        var footerSectionData916 = footerSectionList916[footerSectionIndex916];
        if (footerSectionData916.customFooterLinks != null) {
          if (footerSectionIndex916 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData916.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData916.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList928 = footerSectionData916.customFooterLinks;
            var linkListLen928 = linkList928.length;
            for (var linkIndex928 = 0; linkIndex928 < linkListLen928; linkIndex928++) {
              var linkData928 = linkList928[linkIndex928];
              output += '<li><a href="' + soy.$$escapeHtml(linkData928.href) + '"' + ((linkData928.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData928.text) + ((linkData928.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex916 == 0) {
          output += '<section class="container-fluid">' + ((footerSectionData916.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData916.sectionName) + '</h3>' : '') + '<ul class="list-unstyled colcount-sm-2 colcount-md-4">';
          var linkList951 = opt_data.footerSections;
          var linkListLen951 = linkList951.length;
          for (var linkIndex951 = 0; linkIndex951 < linkListLen951; linkIndex951++) {
            var linkData951 = linkList951[linkIndex951];
            output += '<li><a href="' + soy.$$escapeHtml(linkData951.href) + '"' + ((linkData951.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData951.text) + ((linkData951.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '</div></nav>';
    }
  } else if (opt_data.globalNav == true) {
    output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4 container-fluid"><li><a href="https://intranet.canada.ca/psc-fsc/index-eng.asp">News</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-eng.asp">Human resources</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-eng.asp">Career development and learning</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-eng.asp">Services and tools</a></li></ul></nav>';
  } else if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
    output += '<nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr" data-wb-ajax=\'{"url": "./cdts/ajax/esdcfooter-eng.html", "type": "replace", "nocache": true }\'></nav>';
  } else {
  }
  output += '<div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/en.html"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv">Government of Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'You are about to leave a secure site, do you wish to continue?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Cancel') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Yes') + '</a></li></ul></div></section>' : '');
};


wet.builder.splashTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/theme.min.css\'><!--<![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/messages.min.css\'><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/messages-ie.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/intranet.css\'>';
};


wet.builder.splash = function(opt_data, opt_ignored) {
  var output = '\t\t<div id="bg"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/img/splash/sp-bg-2.jpg\' alt=""></div><main role="main"><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">GC Intranet / Intranet du GC</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/sig-spl.svg\' width="283" alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' + ((opt_data.nameEng != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameEng) + '</h2>' : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + ((opt_data.nameFra != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameFra) + '</h2>' : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">';
  var lang__soy1062 = navigator.language;
  output += '<ul class="list-inline lst-spcd"><li>' + ((lang__soy1062 == 'en-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-default" lang="en">English</a>') + '</li><li>' + ((lang__soy1062 == 'fr-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-primary" lang="fr">Français</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-default" lang="fr">Français</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtml(opt_data.termsEng) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' + soy.$$escapeHtml(opt_data.termsFra) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main><!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]-->';
  return output;
};

// This file was automatically generated from gcintranet-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'wet-boew/css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner"><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer role="contentinfo" id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
