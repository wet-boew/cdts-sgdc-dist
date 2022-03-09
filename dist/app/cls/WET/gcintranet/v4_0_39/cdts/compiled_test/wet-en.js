if ("undefined" == typeof wet) var wet = {};
"undefined" == typeof wet.builder && (wet.builder = {});
wet.builder.serverRefTop = function (b, g) {
	return serverPage.serverRefTop(b)
};
wet.builder.serverTop = function (b, g) {
	return serverPage.serverTop(b)
};
wet.builder.serverRefBottom = function (b, g) {
	return serverPage.serverRefBottom(b)
};
wet.builder.serverBottom = function (b, g) {
	return serverPage.serverBottom(b)
};
wet.builder.appTop = function (b, g) {
	return applicationPage.appTop(b)
};
wet.builder.appFooter = function (b, g) {
	return applicationPage.appFooter(b)
};
wet.builder.environment = function (b, g) {
	return ("esdcqat" == b.cdnEnv ? "https://cdn-canada.services.gc.qat/app/cls/WET" : "esdcnonprod" == b.cdnEnv ? "https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET" : "esdcprod" == b.cdnEnv ? "https://ssl-templates.services.gc.ca/app/cls/WET" : "localhost" == b.cdnEnv ? "../../../.." : "https://www.canada.ca/etc/designs/canada/cdts") + "/gcweb/v4_0_39/"
};
wet.builder.refTop = function (b, g) {
	b = b || {};
	var c = "";
	if (null != b.webAnalytics) {
		for (var c = c + '\x3c!-- Adobe Analytics --\x3e<script id="cdts_AnalyticsId" src="//assets.adobedtm.com/', e = b.webAnalytics, f = e.length, d = 0; d < f; d++) {
			var a = e[d];
			if (null != a.custom) c += soy.$$escapeHtml(a.custom);
			else if (1 == a.version || 2 == a.version) {
				c += "caacec67651710193d2331efef325107c23a0145/satelliteLib-";
				switch (a.version) {
					case 1:
						c += "92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24";
						break;
					case 2:
						c += "c2082deaf69c358c641c5eb20f94b615dd606662"
				}
				c +=
					("staging" == a.environment ? "-staging" : "") + ".js"
			}
		}
		c += '">\x3c/script>'
	}
	return c += "\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'' + wet.builder.environment(b) + "css/theme.min.css'><link rel=\"stylesheet\" href='" +
		wet.builder.environment(b) + "cdts/cdtsfixes.css'>" + (!0 == b.isApplication ? '<link rel="stylesheet" href=\'' + wet.builder.environment(b) + "cdts/cdtsapps.css'>" : "") + "\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(b) + "css/ie8-theme.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(b) +
		"js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e"
};
wet.builder.top = function (b, g) {
	b = b || {};
	var c = '<nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>' + (!0 == b.topSecMenu ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : "") + '</ul></nav><header><div id="wb-bnr" class="container">';
	if (null != b.lngLinks) {
		for (var c = c + '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">',
				e = b.lngLinks, f = e.length, d = 0; d < f; d++) var a = e[d],
			c = c + ('<li><a hreflang="' + soy.$$escapeHtml(a.lang) + '" lang="' + soy.$$escapeHtml(a.lang) + '" href="' + soy.$$escapeHtml(a.href) + '">' + soy.$$escapeHtml(a.text) + "</a></li>");
		c += "</ul></section>"
	}
	c += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + (!1 != b.siteMenu ? '<a href="https://www.canada.ca/en.html" property="url">' : "") + "<img src='" + wet.builder.environment(b) + 'assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>' +
		(!1 != b.siteMenu ? "</a>" : "") + '<meta property="areaServed" typeOf="Country" content="Canada" /><link id="StdIssueWasHere1" property="logo" href=\'' + wet.builder.environment(b) + "assets/wmms-blk.svg' /></div>" + (!1 != b.search ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Search</h2><form action="https://www.canada.ca/en/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="en" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>' :
			"") + "</div></div>" + (!1 != b.siteMenu ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li><li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul></div></nav>' :
			'<div class="transactBar"></div>');
	if (!1 != b.breadcrumbs) {
		c += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><ol class="breadcrumb">';
		if (null != b.breadcrumbs)
			for (e = b.breadcrumbs, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "Canada.ca" == a.title || "canada.ca" == a.title ? '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/en.html">Canada.ca</a></abbr></li>' : "https://www.canada.ca" == a.href || "http://www.canada.ca" == a.href || "https://www.canada.ca/" == a.href || "http://www.canada.ca/" ==
				a.href || "https://www.canada.ca/en.html" == a.href || "http://www.canada.ca/en.html" == a.href || "https://www.canada.ca/en.html/" == a.href || "http://www.canada.ca/en.html/" == a.href || "https://www.canada.ca/fr.html" == a.href || "http://www.canada.ca/fr.html" == a.href || "https://www.canada.ca/fr.html/" == a.href || "http://www.canada.ca/fr.html/" == a.href || "https://www.canada.ca/index.html" == a.href || "http://www.canada.ca/index.html" == a.href || "https://www.canada.ca/index.html/" == a.href || "http://www.canada.ca/index.html/" ==
				a.href || "https://www.canada.ca/en/index.html" == a.href || "http://www.canada.ca/en/index.html" == a.href || "https://www.canada.ca/en/index.html/" == a.href || "http://www.canada.ca/en/index.html/" == a.href || "https://www.canada.ca/fr/index.html" == a.href || "http://www.canada.ca/fr/index.html" == a.href || "https://www.canada.ca/fr/index.html/" == a.href || "http://www.canada.ca/fr/index.html/" == a.href || "https://www.canada.ca/home.html" == a.href || "http://www.canada.ca/home.html" == a.href || "https://www.canada.ca/home.html/" ==
				a.href || "http://www.canada.ca/home.html/" == a.href || "https://www.canada.ca/accueil.html" == a.href || "http://www.canada.ca/accueil.html" == a.href || "https://www.canada.ca/accueil.html/" == a.href || "http://www.canada.ca/accueil.html/" == a.href ? "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + "Canada.ca" + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>" : '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/en.html">Canada.ca</a></abbr></li><li>' +
				(null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + (null != a.title ? soy.$$escapeHtml(a.title) : "") + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>" : "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + (null != a.title ? soy.$$escapeHtml(a.title) : "") + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>";
		else c += '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/en.html">Canada.ca</a></abbr></li>';
		c += "</ol></div></nav>"
	}
	return c + "</header>"
};
wet.builder.preFooter = function (b, g) {
	b = b || {};
	var c = "\t\t";
	if (!1 != b.pagedetails) {
		c += '<div class="pagedetails' + (null != b.isContainer ? " container" : "") + '">';
		if (!1 != b.showFeedback || !1 != b.showShare) {
			c += '<div class="row">' + (!1 != b.showFeedback ? null != b.showFeedback && !0 != b.showFeedback ? '<div class="col-sm-6 col-md-5 col-lg-4"><a href="' + soy.$$escapeHtml(b.showFeedback) + '" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '<div class="col-sm-6 col-md-5 col-lg-4"><a href="https://www.canada.ca/en/report-problem.html" class="btn btn-default btn-center">Report a problem on this page</a></div>' : "");
			if (!1 != b.showShare)
				if (null != b.showShare) {
					for (var c = c + ('<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + (!1 != b.showFeedback ? "2" : "8") + " col-md-offset-" + (!1 != b.showFeedback ? "4" : "9") + (!1 != b.showFeedback ? " col-lg-offset-5" : "") + '" data-wb-share=\'{"filter": ['), e = b.showShare, f = e.length, d = 0; d < f; d++) c += '"' + soy.$$escapeHtml(e[d]) + '"' + (d != f - 1 ? ", " : "");
					c += '], "lnkClass": "btn btn-default btn-block"}\'></div>'
				} else c += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + (!1 != b.showFeedback ? "2" : "8") +
					" col-md-offset-" + (!1 != b.showFeedback ? "4" : "9") + (!1 != b.showFeedback ? " col-lg-offset-5" : "") + '" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';
			c += "</div>"
		}
		c += '<dl id="wb-dtmd">' + (null != b.screenIdentifier ? '<dt>Screen Identifier:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(b.screenIdentifier) + "</dd>" : "") + (null != b.dateModified ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(b.dateModified) + "</time></dd>" : "") + (null != b.versionIdentifier ? '<dt>Version:&#32;</dt><dd property="version">' +
			soy.$$escapeHtml(b.versionIdentifier) + "</dd>" : "") + "</dl></div>"
	}
	return c
};
wet.builder.secmenu = function (b, g) {
	for (var c = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>', e = b.sections, f = e.length, d = 0; d < f; d++) {
		for (var a = e[d], c = c + ('<section class="list-group menu list-unstyled"><h3>' + (null != a.sectionLink ? '<a href="' + soy.$$escapeHtml(a.sectionLink) + '"' + (!0 == a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" : "") + soy.$$escapeHtml(a.sectionName) + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + (null != a.sectionLink ? "</a>" : "") + '</h3><ul class="list-group menu list-unstyled">'),
				a = a.menuLinks, l = a.length, k = 0; k < l; k++) {
			var h = a[k];
			if (null != h.subLinks) {
				for (var c = c + ('<li><a href="' + soy.$$escapeHtml(h.href) + '" class="list-group-item"' + (!0 == h.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(h.text) + (!0 == h.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + '</a><ul class="list-group menu list-unstyled">'), h = h.subLinks, m = h.length, p = 0; p < m; p++) var n = h[p],
					c = c + ('<li><a href="' + soy.$$escapeHtml(n.subhref) + '" class="list-group-item"' + (!0 ==
						n.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(n.subtext) + (!0 == n.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>");
				c += "</ul></li>"
			} else c += '<li><a href="' + soy.$$escapeHtml(h.href) + '" class="list-group-item"' + (!0 == h.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(h.text) + (!0 == h.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>"
		}
		c += "</ul></section>"
	}
	return c
};
wet.builder.footer = function (b, g) {
	b = b || {};
	var c = '\t\t<footer id="wb-info">';
	if (!1 != b.showFooter) {
		c += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
		if (null != b.contactLinks)
			for (var e = b.contactLinks, f = e.length, d = 0; d < f; d++) var a = e[d],
				c = c + (0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '">Contact us</a></li>' : "");
		else c += '<li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>';
		c += '<li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li><li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li><li><a href="https://www.canada.ca/en/news.html">News</a></li><li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li><li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li><li><a href="http://open.canada.ca/en/">Open government</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul><li><a href="https://www.canada.ca/en/social.html">Social media</a></li><li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li><li><a href="https://www.canada.ca/en/newsite.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li><li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></nav>'
	} else {
		c +=
			'<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';
		if (null != b.contactLinks)
			for (e = b.contactLinks, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Contact information" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' :
				"") + "</a></li>" : "";
		else c += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
		if (null != b.termsLink)
			for (e = b.termsLink, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Terms and conditions" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : "";
		else c += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
		if (null != b.privacyLink)
			for (e = b.privacyLink, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Privacy" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : "";
		else c += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
		c += "</ul></nav>"
	}
	return c += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div id="StdIssueWasHere2" class="col-xs-6 col-md-2 text-right"><img src=\'' +
		wet.builder.environment(b) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'
};
wet.builder.refFooter = function (b, g) {
	b = b || {};
	return "\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src='" + ("external" == b.jqueryEnv ? "https://ajax.googleapis.com/ajax/libs/" : wet.builder.environment(b) + "js/") + "jquery/2.2.4/jquery.min.js'>\x3c/script><script src='" + wet.builder.environment(b) + "js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='" + wet.builder.environment(b) + "js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<script src='" + wet.builder.environment(b) +
		"js/theme.min.js'>\x3c/script>" + (!0 == b.exitScript ? '<script data-id="exitScript" data-token="' + soy.$$escapeHtml(b.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(b.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(b.displayModal) + '">clickA();\x3c/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' +
			(null != b.exitMsg && 0 < b.exitMsg.length ? soy.$$escapeHtml(b.exitMsg) : "You are about to leave a secure site, do you wish to continue?") + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + (null != b.cancelMsg && 0 < b.cancelMsg.length ? soy.$$escapeHtml(b.cancelMsg) : "Cancel") + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + (null != b.yesMsg &&
				0 < b.yesMsg.length ? soy.$$escapeHtml(b.yesMsg) : "Yes") + "</a></li></ul></div></section>" : "") + (!0 == b.isApplication ? "<script src='" + wet.builder.environment(b) + "cdts/cdtscustom.js'>\x3c/script>" : "") + (null != b.webAnalytics ? "<script>_satellite.pageBottom();\x3c/script>" : "")
};
wet.builder.splashTop = function (b, g) {
	return "\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(b) + "css/theme.min.css'>\x3c!--<![endif]--\x3e<link rel=\"stylesheet\" href='" + wet.builder.environment(b) + "css/messages.min.css'>\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' +
		wet.builder.environment(b) + "css/messages-ie.min.css' /><link rel=\"stylesheet\" href='" + wet.builder.environment(b) + "css/ie8-theme.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(b) + "js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e"
};
wet.builder.splash = function (b, g) {
	var c = '\t\t<div id="bg"><img src=\'' + wet.builder.environment(b) + 'img/splash/sp-bg-2.jpg\' alt=""></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'' + wet.builder.environment(b) + 'assets/sig-spl.svg\' alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' + (null !=
			b.nameEng ? "<h2>" + soy.$$escapeHtml(b.nameEng) + "</h2>" : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + (null != b.nameFra ? "<h2>" + soy.$$escapeHtml(b.nameFra) + "</h2>" : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">',
		e = navigator.language;
	return c += '<ul class="list-inline lst-spcd"><li>' + ("en-CA" == e ? '<a href="' + soy.$$escapeHtml(b.indexEng) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtml(b.indexEng) +
			'" class="btn btn-default" lang="en">English</a>') + "</li><li>" + ("fr-CA" == e ? '<a href="' + soy.$$escapeHtml(b.indexFra) + '" class="btn btn-primary" lang="fr">Fran\u00e7ais</a>' : '<a href="' + soy.$$escapeHtml(b.indexFra) + '" class="btn btn-default" lang="fr">Fran\u00e7ais</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtml(b.termsEng) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' +
		soy.$$escapeHtml(b.termsFra) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'' + wet.builder.environment(b) + 'assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main>\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="' + ("external" == b.jqueryEnv ? "https://ajax.googleapis.com/ajax/libs" : wet.builder.environment(b) + "js/") + "jquery/2.2.4/jquery.min.js\">\x3c/script><script src='" +
		wet.builder.environment(b) + "js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='" + wet.builder.environment(b) + "js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<script src='" + wet.builder.environment(b) + "js/theme.min.js'>\x3c/script>" + (null != b.webAnalytics ? "<script>_satellite.pageBottom();\x3c/script>" : "") + '<link rel="stylesheet" href=\'' + wet.builder.environment(b) + "cdts/cdtsfixes.css'>"
};
if ("undefined" == typeof serverPage) var serverPage = {};
serverPage.serverRefTop = function (b, g) {
	return "\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(b) + "css/theme.min.css'><link rel=\"stylesheet\" href='" + wet.builder.environment(b) + "cdts/cdtsfixes.css'>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='" + wet.builder.environment(b) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' +
		wet.builder.environment(b) + "css/ie8-theme-srv.min.css' /><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">\x3c/script><script src='" + wet.builder.environment(b) + "js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e"
};
serverPage.serverTop = function (b, g) {
	return '\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(b) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>'
};
serverPage.serverBottom = function (b, g) {
	return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(b) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>'
};
if ("undefined" == typeof applicationPage) var applicationPage = {};
applicationPage.appTop = function (b, g) {
	b = b || {};
	var c = '<script>dataLayer = [];\x3c/script><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "' + (!0 == b.topCusMenu ? "Related links" : "About this Web application") + '"</a></li>' + (!0 == b.topSecMenu ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : "") + '</ul><header><div id="wb-bnr" class="container">';
	if (null != b.lngLinks) {
		for (var c = c + '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">', e = b.lngLinks, f = e.length, d = 0; d < f; d++) var a = e[d],
			c = c + ('<li><a lang="' + soy.$$escapeHtml(a.lang) + '" href="' + soy.$$escapeHtml(a.href) + '">' + soy.$$escapeHtml(a.text) + "</a></li>");
		c += "</ul></section>"
	}
	c += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'' + wet.builder.environment(b) +
		'assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(b) + "assets/wmms-blk.svg' /></div>";
	if (null != b.customSearch)
		for (e = b.customSearch, f = e.length, d = 0; d < f; d++)
			if (a = e[d], 0 == d) {
				c += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Search' + (null != a.placeholder ?
						" " + soy.$$escapeHtml(a.placeholder) : "") + '</h2><form action="' + soy.$$escapeHtml(a.action) + '" method="' + soy.$$escapeHtml(a.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + (null != a.id ? soy.$$escapeHtml(a.id) : "wb-srch-q") + '" class="wb-inv">Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + '</label><input id="' + (null != a.id ? soy.$$escapeHtml(a.id) : "wb-srch-q") + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search' +
					(null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + '">';
				if (null != a.hiddenInput)
					for (var l = a.hiddenInput, k = l.length, h = 0; h < k; h++) var m = l[h],
						c = c + ('<input type="hidden" name="' + soy.$$escapeHtml(m.name) + '" value="' + soy.$$escapeHtml(m.value) + '" />');
				c += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) :
					"") + "</span></button></div></form></section>"
			} c += '</div></div><div class="app-bar"><div class="container"><div class="row">' + (null != b.appSettings || null != b.signOut || null != b.signIn ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
	e = b.appName;
	f = e.length;
	for (d = 0; d < f; d++) a = e[d], c += 0 == d ? '<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="' + soy.$$escapeHtml(a.href) + '">' + soy.$$escapeHtml(a.text) + "</a>" : "";
	c += "</section>";
	if (null != b.appSettings || null != b.signOut ||
		null != b.signIn) {
		c += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
		if (null != b.appSettings)
			for (e = b.appSettings, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : "";
		if (null != b.signOut)
			for (e = b.signOut, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' :
				"";
		else if (null != b.signIn)
			for (e = b.signIn, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : "";
		c += "</ul></nav>"
	}
	c += "</div></div></div>";
	if (null != b.customSearch || null != b.menuPath || null != b.menuLinks || !0 == b.topSecMenu || null != b.appSettings || null != b.signOut || null != b.signIn) {
		c += '<div class="app-bar-mb container visible-xs-block hidden-print">';
		if (null != b.menuPath || null != b.menuLinks ||
			!0 == b.topSecMenu || null != b.customSearch) {
			c += '<nav><h2 class="wb-inv">' + (null != b.menuPath || null != b.menuLinks || !0 == b.topSecMenu ? "Menu" + (null != b.customSearch ? " and search" : "") : "Search") + '</h2><ul class="app-list-main list-unstyled">' + (null != b.menuPath || null != b.menuLinks || !0 == b.topSecMenu ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : "") + (null != b.customSearch ? '<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>' :
				"") + '</ul><div id="mb-pnl"></div>';
			if (null != b.customSearch)
				for (e = b.customSearch, f = e.length, d = 0; d < f; d++)
					if (a = e[d], 0 == d) {
						c += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(a.action) + '" method="' + soy.$$escapeHtml(a.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' +
							(null != a.id ? "app-" + soy.$$escapeHtml(a.id) : "app-srch-q-mb") + '" class="wb-inv">Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + '</label><input placeholder="Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + '" id="' + (null != a.id ? "app-" + soy.$$escapeHtml(a.id) : "app-srch-q-mb") + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
						if (null != a.hiddenInput)
							for (l = a.hiddenInput, k = l.length, h = 0; h < k; h++) m = l[h], c += '<input type="hidden" name="' +
								soy.$$escapeHtml(m.name) + '" value="' + soy.$$escapeHtml(m.value) + '" />';
						c += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + (null != a.placeholder ? " " + soy.$$escapeHtml(a.placeholder) : "") + "</span></button></span></div></form></div></section>"
					} c += "</nav>"
		}
		if (null != b.appSettings || null != b.signOut || null != b.signIn) {
			c += '<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
			if (null != b.appSettings)
				for (e = b.appSettings, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : "";
			if (null != b.signOut)
				for (e = b.signOut, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : "";
			else if (null != b.signIn)
				for (e = b.signIn, f = e.length,
					d = 0; d < f; d++) a = e[d], c += 0 == d ? '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : "";
			c += "</ul></nav>"
		}
		c += "</div>";
		if (null != b.menuLinks) {
			c += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
			e = b.menuLinks;
			f = e.length;
			for (d =
				0; d < f; d++)
				if (a = e[d], null != a.subLinks) {
					c += '<li><a href="#' + soy.$$escapeHtml(a.id) + '" class="item"' + (!0 == a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(a.text) + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(a.id) + '" role="menu">';
					a = a.subLinks;
					l = a.length;
					for (k = 0; k < l; k++) h = a[k], c += k == l - 1 ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(h.subhref) + '"' + (!0 == h.newWindow ? ' target="_blank"  rel="noopener"' :
						"") + ">" + soy.$$escapeHtml(h.subtext) + (!0 == h.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : '<li><a href="' + soy.$$escapeHtml(h.subhref) + '"' + (!0 == h.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(h.subtext) + (!0 == h.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
					c += "</ul></li>"
				} else c += '<li><a href="' + soy.$$escapeHtml(a.href) + '" class="item"' + (!0 == a.newWindow ? ' target="_blank"  rel="noopener"' :
					"") + ">" + soy.$$escapeHtml(a.text) + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>";
			c += "</ul></div></div></nav>"
		} else null != b.menuPath && (c += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(b.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>')
	}
	if (!1 != b.breadcrumbs) {
		c += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
		if (null != b.breadcrumbs)
			for (e = b.breadcrumbs, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "Canada.ca" == a.title || "canada.ca" == a.title ? '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/en.html">Canada.ca</a></abbr></li>' : "https://www.canada.ca" == a.href || "http://www.canada.ca" == a.href || "https://www.canada.ca/" == a.href || "http://www.canada.ca/" == a.href || "https://www.canada.ca/en.html" == a.href || "http://www.canada.ca/en.html" == a.href || "https://www.canada.ca/en.html/" == a.href || "http://www.canada.ca/en.html/" ==
				a.href || "https://www.canada.ca/fr.html" == a.href || "http://www.canada.ca/fr.html" == a.href || "https://www.canada.ca/fr.html/" == a.href || "http://www.canada.ca/fr.html/" == a.href || "https://www.canada.ca/index.html" == a.href || "http://www.canada.ca/index.html" == a.href || "https://www.canada.ca/index.html/" == a.href || "http://www.canada.ca/index.html/" == a.href || "https://www.canada.ca/en/index.html" == a.href || "http://www.canada.ca/en/index.html" == a.href || "https://www.canada.ca/en/index.html/" == a.href || "http://www.canada.ca/en/index.html/" ==
				a.href || "https://www.canada.ca/fr/index.html" == a.href || "http://www.canada.ca/fr/index.html" == a.href || "https://www.canada.ca/fr/index.html/" == a.href || "http://www.canada.ca/fr/index.html/" == a.href || "https://www.canada.ca/home.html" == a.href || "http://www.canada.ca/home.html" == a.href || "https://www.canada.ca/home.html/" == a.href || "http://www.canada.ca/home.html/" == a.href || "https://www.canada.ca/accueil.html" == a.href || "http://www.canada.ca/accueil.html" == a.href || "https://www.canada.ca/accueil.html/" == a.href ||
				"http://www.canada.ca/accueil.html/" == a.href ? !0 == b.isAtApplication ? "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + (null != a.title ? soy.$$escapeHtml(a.title) : "") + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>" : "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + "Canada.ca" + (null != a.href ? "</a>" : "") + (null != a.acronym ?
					"</abbr>" : "") + "</li>" : (!0 == b.isAtApplication ? "" : '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/en.html">Canada.ca</a></abbr></li>') + "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) + '">' : "") + (null != a.title ? soy.$$escapeHtml(a.title) : "") + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>" : "<li>" + (null != a.acronym ? '<abbr title="' + soy.$$escapeHtml(a.acronym) + '">' : "") + (null != a.href ? '<a href="' + soy.$$escapeHtml(a.href) +
					'">' : "") + (null != a.title ? soy.$$escapeHtml(a.title) : "") + (null != a.href ? "</a>" : "") + (null != a.acronym ? "</abbr>" : "") + "</li>";
		c += "</ol></div></div></nav>"
	}
	return c + "</header>"
};
applicationPage.appFooter = function (b, g) {
	b = b || {};
	var c = '\t\t<footer id="wb-info">';
	if (null != b.footerSections) {
		for (var c = c + '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">', e = b.footerSections, f = e.length, d = 0; d < f; d++) var a = e[d],
			c = c + ('<li><a href="' + soy.$$escapeHtml(a.href) + '"' + (!0 == a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">" + soy.$$escapeHtml(a.text) + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' :
				"") + "</a></li>");
		c += "</ul></nav></div>"
	}
	c += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';
	if (null != b.contactLink)
		for (e = b.contactLink, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Contact information" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' :
			"") + "</a></li>" : "";
	else c += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
	if (null != b.termsLink)
		for (e = b.termsLink, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Terms and conditions" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : "";
	else c += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
	if (null != b.privacyLink)
		for (e = b.privacyLink, f = e.length, d = 0; d < f; d++) a = e[d], c += 0 == d ? "<li><a " + (a.href ? ' href="' + soy.$$escapeHtml(a.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + (a.newWindow ? ' target="_blank"  rel="noopener"' : "") + ">Privacy" + (!0 == a.newWindow ? '<span class="wb-inv"> This link will open in a new window</span>' : "") + "</a></li>" : "";
	else c += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
	return c += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'' +
		wet.builder.environment(b) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'
};

function clickA() {
	$(document.body).on("click", "a", function (b) {
		exitWarning(b, this.href)
	})
}



function getHost(b) {
	b = -1 < b.indexOf("//") ? b.split("/")[2] : b.split("/")[0];
	b = b.split(":")[0];
	b = b.split("?")[0];
	return b.toLowerCase()
};

function loadDoc(b) {
	var g = new XMLHttpRequest;
	g.onreadystatechange = function () {
		4 == this.readyState && 200 == this.status && (document.getElementById("main_menu").innerHTML = this.responseText)
	};
	g.open("GET", b, !0);
	g.send()
};