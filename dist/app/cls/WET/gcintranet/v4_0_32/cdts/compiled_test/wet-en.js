if ("undefined" == typeof wet) var wet = {};
"undefined" == typeof wet.builder && (wet.builder = {});
wet.builder.serverRefTop = function (a, k) {
	return serverPage.serverRefTop(a)
};
wet.builder.serverTop = function (a, k) {
	return serverPage.serverTop(a)
};
wet.builder.serverRefBottom = function (a, k) {
	return serverPage.serverRefBottom(a)
};
wet.builder.serverBottom = function (a, k) {
	return serverPage.serverBottom(a)
};
wet.builder.environment = function (a, k) {
	return ("qat" == a.cdnEnv ? "https://cdn-canada.services.gc.qat" : "nonprod" == a.cdnEnv ? "https://s2tst-cdn-canada.sade-edap.prv" : "esdcprod" == a.cdnEnv ? "https://templates.service.gc.ca" : "localhost" == a.cdnEnv ? "../../../../../../.." : "https://ssl-templates.services.gc.ca") + "/app/cls/WET/gcintranet/v4_0_32/"
};
wet.builder.refTop = function (a, k) {
	a = a || {};
	return "\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(a) + "css/theme.min.css'>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(a) + "css/ie8-theme.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" +
		wet.builder.environment(a) + "js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e<link rel=\"stylesheet\" href='" + wet.builder.environment(a) + "cdts/gctheme.css'>" + ("esdc" == a.subTheme || "labour" == a.subTheme ? '<link rel="stylesheet" href=\'' + wet.builder.environment(a) + "cdts/esdc.css'>" : "eccc" == a.subTheme ? '<link rel="stylesheet" href=\'' + wet.builder.environment(a) + "cdts/eccc.css'>" : "") + '<link rel="stylesheet" href=\'' + wet.builder.environment(a) + "cdts/cdtsfixes.css'>"
};
wet.builder.top = function (a, k) {
	a = a || {};
	var b = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li>' + (!0 == a.topSecMenu ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : "") + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' +
		(null != a.intranetTitle || null != a.subTheme ? "col-lg-6 col-md-6" : "col-lg-2 col-md-3") + ' col-sm-9 col-xs-8"><div class="app-name' + (null != a.intranetTitle ? " app-name-lg" : "") + '">';
	if (null != a.intranetTitle)
		for (var f = a.intranetTitle, h = f.length, d = 0; d < h; d++) var c = f[d],
			b = b + (0 == d ? '<a href="' + (null != c.href ? soy.$$escapeHtml(c.href) : "http://intranet.ec.gc.ca/default.asp?lang=En") + '">' + (null != c.acronym ? '<abbr title="' + soy.$$escapeHtml(c.acronym) + '">' : "") + '<span><span class="bold-gc">' + (null != c.boldText ? soy.$$escapeHtml(c.boldText) :
				"GC") + "</span>" + (null != c.acronym ? "</abbr>" : "") + (null != c.text ? soy.$$escapeHtml(c.text) : "intranet") + "</span></a>" : "");
	else b += '<a href="https://intranet.canada.ca/index-eng.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
	b += "</div></section>" + (!0 == a.GCToolsModal ? '<section id="gctoolsSection" class="' + (null != a.intranetTitle ? "col-lg-2 col-md-1" : "col-lg-6 col-md-1") + (!1 == a.search ? " col-md-offset-3" : "") + ' hidden-sm hidden-xs text-right"><h2 class="wb-inv">GCTools links</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools"><span class="bold-gc">GC</span>Tools</a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title"><span class="bold-gc">GC</span>Tools</h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-eng.asp" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' :
		null != a.intranetTitle ? "" : '<section id="wb-gctools" class="col-lg-6 visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section>');
	if (null != a.lngLinks) {
		b += '<section id="wb-lng" class="' + (null != a.intranetTitle && !0 != a.GCToolsModal ? "mrgn-bttm-md col-md-offset-1 col-lg-offset-2 " : "") + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
		f = a.lngLinks;
		h = f.length;
		for (d = 0; d < h; d++) c = f[d], b += '<li><a hreflang="' + soy.$$escapeHtml(c.lang) + '" lang="' + soy.$$escapeHtml(c.lang) + '" href="' + soy.$$escapeHtml(c.href) + '">' + soy.$$escapeHtml(c.text) +
			"</a></li>";
		b += "</ul></div></div></section>"
	}
	if (!1 != a.search) {
		b += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Search</h2>';
		if (null != a.customSearch)
			for (f = a.customSearch, h = f.length, d = 0; d < h; d++) {
				if (c = f[d], 0 == d) {
					b += '<form action="' + (null != c.action ? soy.$$escapeHtml(c.action) : "https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx") + '" method="' + (null != c.method ? soy.$$escapeHtml(c.method) : "get") + '" name="' + (null != c.name ? soy.$$escapeHtml(c.name) : "cse-search-box") +
						'" role="search" class="form-inline"><div class="form-group"><label for="' + (null != c.id ? soy.$$escapeHtml(c.id) : "wb-srch-q") + '" class="wb-inv">' + (null != c.placeholder ? soy.$$escapeHtml(c.placeholder) : "Search GCintranet") + '</label><input class="wb-srch-q form-control pull-right" id="' + (null != c.id ? soy.$$escapeHtml(c.id) : "wb-srch-q") + '" name="' + (null != c.name ? soy.$$escapeHtml(c.name) : "q") + '"  value="" size="21" maxlength="150" placeholder="' + (null != c.placeholder ? soy.$$escapeHtml(c.placeholder) : "Search GCintranet") +
						'">';
					if (null != c.hiddenInput)
						for (var c = c.hiddenInput, l = c.length, g = 0; g < l; g++) var e = c[g],
							b = b + ('<input type="hidden" name="' + soy.$$escapeHtml(e.name) + '" value="' + soy.$$escapeHtml(e.value) + '" />');
					else b += '<input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" />';
					b += "</div>"
				}
			} else b += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Search GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
		b += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>'
	}
	b += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + (!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' +
		(!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + (!1 != a.search ? '<span class="glyphicon glyphicon-search">' : "") + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + (!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + "</span>" + (!1 == a.search ? "</span>" : "") + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + (!0 != a.GCToolsModal ?
			'<div id="tools-sm" class="row' + (null != a.intranetTitle ? "" : " visible-md") + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section></div>' :
			"") + "</div></div></div>" + (!1 != a.siteMenu ? "esdc" == a.subTheme || "labour" == a.subTheme ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + (null != a.menuPath ? soy.$$escapeHtml(a.menuPath) : "http://esdc.prv/includes/edsc-esdc_prv/wet4/en/mega_menu/esdcmenu-eng.html") + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="http://esdc.prv/en/department/index.shtml">Our Department</a></li><li><a href="http://esdc.prv/en/branches_regions/index.shtml">Branches and Regions</a></li><li><a href="http://iservice.prv/eng/index.shtml">iService</a></li><li><a href="http://esdc.prv/en/work_tools/index.shtml">Work Tools</a></li><li><a href="http://esdc.prv/en/quick-links/index.shtml">Quick Links</a></li></ul></div></div></nav>' :
			"eccc" == a.subTheme ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + (null != a.menuPath ? soy.$$escapeHtml(a.menuPath) : ("qat" == a.cdnEnv ? "https://cdn-canada.services.gc.qat" : "nonprod" == a.cdnEnv ? "https://s2tst-cdn-canada.sade-edap.prv" : "esdcprod" == a.cdnEnv ? "https://templates.service.gc.ca" : "https://ssl-templates.services.gc.ca") + "/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-eng.html") + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="#">About ECCC</a></li><li><a href="#">Branches</a></li><li><a href="#">Services</a></li><li><a href="#">Tools and References</a></li><li><a href="#">Resources</a></li><li><a href="#">Forms</a></li><li><a href="#">DMs\' Corner</a></li></ul></div></div></nav>' :
			'<nav role="navigation" id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-eng.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="https://intranet.canada.ca/psc-fsc/index-eng.asp">News</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-eng.asp">Human resources</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-eng.asp">Career development and learning</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-eng.asp">Services and tools</a></li></ul></div></div></nav>' :
			"");
	if (!1 != a.breadcrumbs) {
		b += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
		if (null != a.breadcrumbs)
			for (f = a.breadcrumbs, h = f.length, d = 0; d < h; d++) c = f[d], b += "<li>" + (null != c.acronym ? '<abbr title="' + soy.$$escapeHtml(c.acronym) + '">' : "") + (null != c.href ? '<a href="' + soy.$$escapeHtml(c.href) + '">' : "") + soy.$$escapeHtml(c.title) + (null != c.href ? "</a>" : "") + (null != c.acronym ? "</abbr>" : "") + "</li>";
		else b += '<li><a href="https://intranet.canada.ca/index-eng.asp">Home</a></li>';
		b += "</ol></div></div></nav>"
	}
	return b + "</header>"
};
wet.builder.appTop = function (a, k) {
	a = a || {};
	var b = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li>' + (!0 == a.topSecMenu ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : "") + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + (null !=
		a.intranetTitle || null != a.subTheme ? "col-lg-6 col-md-6" : "col-lg-2 col-md-3") + ' col-sm-9 col-xs-8"><div class="app-name' + (null != a.intranetTitle ? " app-name-lg" : "") + '">';
	if (null != a.intranetTitle)
		for (var f = a.intranetTitle, h = f.length, d = 0; d < h; d++) var c = f[d],
			b = b + (0 == d ? '<a href="' + (null != c.href ? soy.$$escapeHtml(c.href) : "http://intranet.ec.gc.ca/default.asp?lang=En") + '">' + (null != c.acronym ? '<abbr title="' + soy.$$escapeHtml(c.acronym) + '">' : "") + '<span><span class="bold-gc">' + (null != c.boldText ? soy.$$escapeHtml(c.boldText) :
				"GC") + "</span>" + (null != c.acronym ? "</abbr>" : "") + (null != c.text ? soy.$$escapeHtml(c.text) : "intranet") + "</span></a>" : "");
	else b += '<a href="https://intranet.canada.ca/index-eng.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
	b += "</div></section>" + (!0 == a.GCToolsModal ? '<section id="gctoolsSection" class="' + (null != a.intranetTitle ? "col-lg-2" : "col-lg-6") + (!1 == a.search ? " col-md-offset-3" : "") + ' col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">GCTools links</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools"><span class="bold-gc">GC</span>Tools</a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title"><span class="bold-gc">GC</span>Tools</h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-eng.asp" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' :
		'<section id="wb-gctools" class="' + (null != a.intranetTitle && !0 != a.GCToolsModal ? "pull-right col-md-4" : "col-lg-6") + ' visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section>');
	if (null != a.lngLinks) {
		b += '<section id="wb-lng" class="' + (null != a.intranetTitle && !0 != a.GCToolsModal ? "mrgn-bttm-md col-md-offset-1 col-lg-offset-2 " : "") + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
		f = a.lngLinks;
		h = f.length;
		for (d = 0; d < h; d++) c = f[d], b += '<li><a lang="' + soy.$$escapeHtml(c.lang) + '" href="' + soy.$$escapeHtml(c.href) + '">' + soy.$$escapeHtml(c.text) + "</a></li>";
		b += "</ul></div></div></section>"
	}
	if (!1 !=
		a.search) {
		b += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Search</h2>';
		if (null != a.customSearch)
			for (f = a.customSearch, h = f.length, d = 0; d < h; d++) {
				if (c = f[d], 0 == d) {
					b += '<form action="' + (null != c.action ? soy.$$escapeHtml(c.action) : "https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx") + '" method="' + (null != c.method ? soy.$$escapeHtml(c.method) : "get") + '" name="' + (null != c.name ? soy.$$escapeHtml(c.name) : "cse-search-box") + '" role="search" class="form-inline"><div class="form-group"><label for="' +
						(null != c.id ? soy.$$escapeHtml(c.id) : "wb-srch-q") + '" class="wb-inv">' + (null != c.placeholder ? soy.$$escapeHtml(c.placeholder) : "Search GCintranet") + '</label><input class="wb-srch-q form-control pull-right" id="' + (null != c.id ? soy.$$escapeHtml(c.id) : "wb-srch-q") + '" name="' + (null != c.name ? soy.$$escapeHtml(c.name) : "q") + '"  value="' + (null != c.value ? soy.$$escapeHtml(c.value) : "") + '" size="21" maxlength="150" placeholder="' + (null != c.placeholder ? soy.$$escapeHtml(c.placeholder) : "Search GCintranet") + '">';
					if (null != c.hiddenInput)
						for (var c =
								c.hiddenInput, l = c.length, g = 0; g < l; g++) var e = c[g],
							b = b + ('<input type="hidden" name="' + soy.$$escapeHtml(e.name) + '" value="' + soy.$$escapeHtml(e.value) + '" />');
					b += "</div>"
				}
			} else b += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Search GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
		b += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>'
	}
	b += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + (!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' +
		(!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + (!1 != a.search ? '<span class="glyphicon glyphicon-search">' : "") + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + (!1 == a.search ? "Menu" + (null != a.topSecMenu ? "s" : "") : "Search and menu" + (null != a.topSecMenu ? "s" : "")) + "</span>" + (!1 == a.search ? "</span>" : "") + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + (!0 != a.GCToolsModal ?
			'<div id="tools-sm" class="row' + (null != a.intranetTitle ? "" : " visible-md") + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>pedia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>directory</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-eng"><span class="bold-gc">GC</span>collab</a></div></section></div>' :
			"") + '</div></div></div><div id="gcappbanner"><div class="container"><div class="row gc-' + (a.subTheme ? "app" : "intra") + '-br">';
	f = a.appName;
	h = f.length;
	for (d = 0; d < h; d++) c = f[d], b += '<div id="wb-sttl" class="col-md-1' + (a.signOut || a.signIn ? "0" : "2") + '">' + (null != c.acronym ? '<abbr title="' + soy.$$escapeHtml(c.acronym) + '">' : "") + (c.href ? '<a href="' + soy.$$escapeHtml(c.href) + '">' : "") + "<span>" + (!0 == a.secure ? '<i class="glyphicon glyphicon-lock mrgn-rght-md"></i>' : "") + soy.$$escapeHtml(c.text) + "</span>" + (c.href ? "</a>" :
		"") + (null != c.acronym ? "</abbr>" : "") + "</div>";
	if (null != a.signOut) {
		b += '<div class="text-right col-md-2"><div class="row">';
		f = a.signOut;
		h = f.length;
		for (d = 0; d < h; d++) c = f[d], b += 0 == d ? '<p><a href="' + soy.$$escapeHtml(c.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Sign out</a></p>' : "";
		b += "</div></div>"
	} else if (null != a.signIn) {
		b += '<div class="text-right col-md-2"><div class="row">';
		f = a.signIn;
		h = f.length;
		for (d = 0; d < h; d++) c = f[d], b += 0 == d ? '<p><a href="' + soy.$$escapeHtml(c.href) +
			'" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Sign in</a></p>' : "";
		b += "</div></div>"
	}
	b += "</div></div></div>";
	if (null != a.menuLinks) {
		b += '<nav role="navigation" id="wb-smapp" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
		f = a.menuLinks;
		h = f.length;
		for (d = 0; d < h; d++)
			if (c = f[d],
				null != c.subLinks) {
				b += '<li><a href="#' + soy.$$escapeHtml(c.id) + '" class="item"' + (!0 == c.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(c.text) + (!0 == c.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(c.id) + '" role="menu">';
				c = c.subLinks;
				l = c.length;
				for (g = 0; g < l; g++) e = c[g], b += g == l - 1 ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(e.subhref) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' :
					"") + ">" + soy.$$escapeHtml(e.subtext) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : '<li><a href="' + soy.$$escapeHtml(e.subhref) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.subtext) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
				b += "</ul></li>"
			} else b += '<li><a href="' + soy.$$escapeHtml(c.href) + '" class="item"' + (!0 == c.newWindow ? ' target="_blank"  rel="noopener"' :
				"") + ">" + soy.$$escapeHtml(c.text) + (!0 == c.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
		b += '<li class="hidden-md hidden-lg"><a href="#mnuTools" class="item">GCTools</a><ul class="sm list-unstyled" id="mnuTools" role="menu"><li><a href="https://gcconnex.gc.ca/splash/"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=en"><span class="bold-gc">GC</span>pedia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/en/GCD/?pgid=002"><span class="bold-gc">GC</span>directory</a></li><li><a href="https://gccollab.ca/splash/"><span class="bold-gc">GC</span>collab</a></li></ul></li></ul></div></div></nav>'
	} else b =
		null != a.menuPath ? b + ('<nav role="navigation" id="wb-smapp" data-ajax-replace="' + soy.$$escapeHtml(a.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>') : b + '<div id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/appmenu-eng.html" data-trgt="mb-pnl" class="wb-menu hidden-sm hidden-xs"></div>';
	if (null != a.breadcrumbs) {
		b += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
		f = a.breadcrumbs;
		h = f.length;
		for (d = 0; d < h; d++) c = f[d], b += "<li>" + (null != c.acronym ? '<abbr title="' + soy.$$escapeHtml(c.acronym) + '">' : "") + (null != c.href ? '<a href="' + soy.$$escapeHtml(c.href) + '">' : "") + soy.$$escapeHtml(c.title) + (null != c.href ? "</a>" : "") + (null != c.acronym ? "</abbr>" : "") + "</li>";
		b += "</ol></div></div></nav>"
	}
	return b + "</header>"
};
wet.builder.preFooter = function (a, k) {
	a = a || {};
	return "\t\t" + (!1 != a.pagedetails ? '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">' + (null != a.screenIdentifier ? "<dt>Screen Identifier:&#32;</dt><dd>" + soy.$$escapeHtml(a.screenIdentifier) + "</dd>" : "") + (null != a.dateModified ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(a.dateModified) + "</time></dd>" : "") + (null != a.versionIdentifier ? "<dt>Version:&#32;</dt><dd>" + soy.$$escapeHtml(a.versionIdentifier) +
		"</dd>" : "") + "</dl></div></div>" : "")
};
wet.builder.secmenu = function (a, k) {
	for (var b = '<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>', f = a.sections, h = f.length, d = 0; d < h; d++) {
		for (var c = f[d], b = b + ('<section class="list-group menu list-unstyled"><h3>' + (null != c.sectionLink ? '<a href="' + soy.$$escapeHtml(c.sectionLink) + '"' + (!0 == c.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" : "") + soy.$$escapeHtml(c.sectionName) + (!0 == c.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + (null != c.sectionLink ? "</a>" : "") + '</h3><ul class="list-group menu list-unstyled">'),
				c = c.menuLinks, l = c.length, g = 0; g < l; g++) {
			var e = c[g];
			if (null != e.subLinks) {
				for (var b = b + ('<li><a href="' + soy.$$escapeHtml(e.href) + '" class="list-group-item"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + '</a><ul class="list-group menu list-unstyled">'), e = e.subLinks, p = e.length, n = 0; n < p; n++) var m = e[n],
					b = b + ('<li><a href="' + soy.$$escapeHtml(m.subhref) + '" class="list-group-item"' + (!0 ==
						m.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(m.subtext) + (!0 == m.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>");
				b += "</ul></li>"
			} else b += '<li><a href="' + soy.$$escapeHtml(e.href) + '" class="list-group-item"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>"
		}
		b += "</ul></section>"
	}
	return b
};
wet.builder.footer = function (a, k) {
	a = a || {};
	var b = "\t\t" + (!0 == a.showFeatures ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-eng.html"></section>' : "") + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4">';
	if (null != a.contactLinks)
		for (var f = a.contactLinks, h = f.length, d = 0; d < h; d++) var c =
			f[d],
			b = b + ('<li><a href="' + soy.$$escapeHtml(c.href) + '">' + soy.$$escapeHtml(c.text) + "</a></li>");
	else b += '<li><a href="https://intranet.canada.ca/contact/contactgc-eng.aspx">Contact us</a></li>';
	return b += '<li><a href="https://intranet.canada.ca/ict-oci/index-eng.asp">About GCTools</a></li><li><a href="https://www.canada.ca/en.html">Canada.ca</a></li><li><a href="https://intranet.canada.ca/terms-avis-eng.asp">Terms and conditions</a></li></ul></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/en.html"><img src=\'' +
		wet.builder.environment(a) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv">Government of Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(a) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'
};
wet.builder.appFooter = function (a, k) {
	a = a || {};
	var b = "\t\t" + (!0 == a.showFeatures ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-eng.html"></section>' : "") + '<footer role="contentinfo" id="wb-info">';
	if (null != a.footerSections)
		if ("esdc" == a.subTheme || "labour" == a.subTheme) {
			for (var b = b + '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">', f = a.footerSections, h =
					f.length, d = 0; d < h; d++) {
				var c = f[d];
				if (null != c.customFooterLinks) {
					if (3 > d) {
						for (var b = b + ('<section class="col-md-3 col-sm-6 col-lg-3">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled">'), c = c.customFooterLinks, l = c.length, g = 0; g < l; g++) var e = c[g],
							b = b + ('<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' :
								"") + "</a></li>");
						b += "</ul></section>"
					}
				} else if (0 == d) {
					b += '<section class="col-md-3 col-sm-6 col-lg-3">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled">';
					c = a.footerSections;
					l = c.length;
					for (g = 0; g < l; g++) e = c[g], b += '<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
					b += "</ul></section>"
				}
			}
			b +=
				'<section class="col-md-3 col-sm-6 col-lg-3"><h3>Corporate</h3><ul class="list-unstyled"><li><a href="http://esdc.prv/en/branches_regions/index.shtml">ESDC/SC IntraWeb</a></li><li><a href="http://esdc.prv/en/news/index.shtml">News</a></li><li><a href="http://esdc.prv/en/contact/index.shtml">Contact and Feedback</a></li><li><a href="http://esdc.prv/en/stay_connected/index.shtml">Stay Connected</a></li><li><a href="http://edsc.prv/en/help.shtml">Help and Important Notices</a></li></ul></section></div></nav>'
		} else if ("eccc" ==
		a.subTheme) {
		b += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">';
		f = a.footerSections;
		h = f.length;
		for (d = 0; d < h; d++)
			if (c = f[d], null != c.customFooterLinks) {
				if (3 > d) {
					b += '<section class="col-md-3 col-sm-6 col-lg-3">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled">';
					c = c.customFooterLinks;
					l = c.length;
					for (g = 0; g < l; g++) e = c[g], b += '<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' :
						"") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
					b += "</ul></section>"
				}
			} else if (0 == d) {
			b += '<section class="col-md-3 col-sm-6 col-lg-3">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled">';
			c = a.footerSections;
			l = c.length;
			for (g = 0; g < l; g++) e = c[g], b += '<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) +
				(!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
			b += "</ul></section>"
		}
		b += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Contact Us</h3><ul class="list-unstyled"><li><a href="#">EnviroTel</a></li><li><a href="#">GEDS</a></li><li><a href="#">Organizational Chart</a></li><li><a href="#">Service Desk</a></li><li><a href="#">Feedback</a></li><li><a href="#">Services Catalogue</a></li></ul></section></div></nav>'
	} else {
		b += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><div class="row">';
		f = a.footerSections;
		h = f.length;
		for (d = 0; d < h; d++)
			if (c = f[d], null != c.customFooterLinks) {
				if (3 > d) {
					b += '<section class="col-md-3 col-sm-6 col-lg-3">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled">';
					c = c.customFooterLinks;
					l = c.length;
					for (g = 0; g < l; g++) e = c[g], b += '<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' :
						"") + "</a></li>";
					b += "</ul></section>"
				}
			} else if (0 == d) {
			b += '<section class="container-fluid">' + (null != c.sectionName ? "<h3>" + soy.$$escapeHtml(c.sectionName) + "</h3>" : "") + '<ul class="list-unstyled colcount-sm-2 colcount-md-4">';
			c = a.footerSections;
			l = c.length;
			for (g = 0; g < l; g++) e = c[g], b += '<li><a href="' + soy.$$escapeHtml(e.href) + '"' + (!0 == e.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(e.text) + (!0 == e.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
			b += "</ul></section>"
		}
		b += "</div></nav>"
	} else if (!0 == a.globalNav) b += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4 container-fluid"><li><a href="https://intranet.canada.ca/psc-fsc/index-eng.asp">News</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-eng.asp">Human resources</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-eng.asp">Career development and learning</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-eng.asp">Services and tools</a></li></ul></nav>';
	else if ("esdc" == a.subTheme || "labour" == a.subTheme) b += '<nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr" data-wb-ajax=\'{"url": "' + ("qat" == a.cdnEnv ? "https://cdn-canada.services.gc.qat" : "nonprod" == a.cdnEnv ? "https://s2tst-cdn-canada.sade-edap.prv" : "esdcprod" == a.cdnEnv ? "https://templates.service.gc.ca" : "https://ssl-templates.services.gc.ca") + '/app/cls/WET/global/esdcfooter-eng.html", "type": "replace", "nocache": true }\'></nav>';
	return b += '<div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/en.html"><img src=\'' +
		wet.builder.environment(a) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv">Government of Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(a) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'
};
wet.builder.refFooter = function (a, k) {
	a = a || {};
	return '\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="' + ("external" == a.jqueryEnv ? "https://ajax.googleapis.com/ajax/libs/" : wet.builder.environment(a) + "js/") + "jquery/2.2.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(a) + "js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='" + wet.builder.environment(a) + "js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<script src='" + wet.builder.environment(a) +
		"js/theme.min.js'>\x3c/script>" + (!0 == a.exitScript ? '<script data-id="exitScript" data-token="' + soy.$$escapeHtml(a.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(a.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(a.displayModal) + '">clickA();\x3c/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' +
			(null != a.exitMsg && 0 < a.exitMsg.length ? soy.$$escapeHtml(a.exitMsg) : "You are about to leave a secure site, do you wish to continue?") + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + (null != a.cancelMsg && 0 < a.cancelMsg.length ? soy.$$escapeHtml(a.cancelMsg) : "Cancel") + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + (null != a.yesMsg &&
				0 < a.yesMsg.length ? soy.$$escapeHtml(a.yesMsg) : "Yes") + "</a></li></ul></div></section>" : "")
};
wet.builder.splashTop = function (a, k) {
	return "\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(a) + "css/theme.min.css'>\x3c!--<![endif]--\x3e<link rel=\"stylesheet\" href='" + wet.builder.environment(a) + "css/messages.min.css'>\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' +
		wet.builder.environment(a) + "css/messages-ie.min.css' /><link rel=\"stylesheet\" href='" + wet.builder.environment(a) + "css/ie8-theme.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(a) + "js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e"
};
wet.builder.splash = function (a, k) {
	var b = '\t\t<div id="bg"><img src=\'' + wet.builder.environment(a) + 'img/splash/sp-bg-2.jpg\' alt=""></div><main role="main"><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">GC Intranet / Intranet du GC</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'' + wet.builder.environment(a) + 'assets/sig-spl.svg\' width="283" alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' +
		(null != a.nameEng ? "<h2>" + soy.$$escapeHtml(a.nameEng) + "</h2>" : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + (null != a.nameFra ? "<h2>" + soy.$$escapeHtml(a.nameFra) + "</h2>" : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">',
		f = navigator.language;
	return b += '<ul class="list-inline lst-spcd"><li>' + ("en-CA" == f ? '<a href="' + soy.$$escapeHtml(a.indexEng) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtml(a.indexEng) +
			'" class="btn btn-default" lang="en">English</a>') + "</li><li>" + ("fr-CA" == f ? '<a href="' + soy.$$escapeHtml(a.indexFra) + '" class="btn btn-primary" lang="fr">Fran\u00e7ais</a>' : '<a href="' + soy.$$escapeHtml(a.indexFra) + '" class="btn btn-default" lang="fr">Fran\u00e7ais</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtml(a.termsEng) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' +
		soy.$$escapeHtml(a.termsFra) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'' + wet.builder.environment(a) + 'assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main>\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src=\'' + ("external" == a.jqueryEnv ? "https://ajax.googleapis.com/ajax/libs/" : wet.builder.environment(a) + "js/") + "jquery/2.2.4/jquery.min.js'>\x3c/script><script src='" +
		wet.builder.environment(a) + "js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='" + wet.builder.environment(a) + "js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<link rel=\"stylesheet\" href='" + wet.builder.environment(a) + "cdts/cdtsfixes.css'>"
};
if ("undefined" == typeof serverPage) var serverPage = {};
serverPage.serverRefTop = function (a, k) {
	return "\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(a) + "css/theme.min.css'><link rel=\"stylesheet\" href='" + wet.builder.environment(a) + "cdts/cdtsfixes.css'>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(a) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' +
		wet.builder.environment(a) + "css/ie8-theme-srv.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(a) + "js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e"
};
serverPage.serverTop = function (a, k) {
	return '\t<header role="banner"><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(a) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>'
};
serverPage.serverBottom = function (a, k) {
	return '\t<footer role="contentinfo" id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(a) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>'
};

// function clickA() {
// 	$(document.body).on("click", "a", function (a) {
// 		exitWarning(a, this.href)
// 	})
// }

// function exitWarning(a, k) {
// 	var b = getHost(k),
// 		f = getHost(document.URL),
// 		h = document.querySelector('script[data-id="exitScript"]'),
// 		d = h.getAttribute("data-token").toLowerCase(),
// 		c = h.getAttribute("data-token-domains").toLowerCase(),
// 		h = "true" == h.getAttribute("data-token-modal").toLowerCase();
// 	b == f || -1 < c.replace(/ /g, "").split(",").indexOf(b) ? (a.preventDefault(), self.location = encodeURI(k)) : h ? ($("#sExitModalLink").trigger("open.wb-lbx", [{
// 		src: "#sExitModal",
// 		type: "inline"
// 	}]), a.preventDefault(), $("#sExitModal").on("click",
// 		"#eOK",
// 		function () {
// 			self.location = "undefined" == d || 1 > d.length ? encodeURI(k) : encodeURI(d + "?targetUrl=") + encodeURIComponent(k)
// 		})) : "undefined" == d || 1 > d.length ? (a.preventDefault(), self.location = encodeURI(k)) : (a.preventDefault(), self.location = encodeURI(d + "?targetUrl=") + encodeURIComponent(k))
// }

// function getHost(a) {
// 	a = -1 < a.indexOf("//") ? a.split("/")[2] : a.split("/")[0];
// 	a = a.split(":")[0];
// 	a = a.split("?")[0];
// 	return a.toLowerCase()
// };