if("undefined"==typeof wet)var wet={};"undefined"==typeof wet.builder&&(wet.builder={});
wet.builder.refTop=function(a,h){a=a||{};return'\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?
"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/css/theme.min.css"><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/css/cdtsfixes.css"><link rel="stylesheet" href="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/css/gcintranet.css">\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+
'/app/cls/WET/gcintranet/v4_0_21/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/css/ie8-theme.min.css" /><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat/app/cls/WET/gcintranet/v4_0_21/js":
"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET/gcintranet/v4_0_21/js":"https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_21/js")+'/ajax/libs/jquery/1.11.1/jquery.min.js">\x3c/script><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/js/ie8-wet-boew.min.js">\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e'};
wet.builder.top=function(a,h){a=a||{};var b='\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer \u00e0 \u00ab&#160;\u00c0 propos de ce site&#160;\u00bb</a></li>'+(!0==a.topSecMenu?'<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>':"")+'</ul><header role="banner"><div id="wb-bnr" class="container">';
if(null!=a.lngLinks){for(var b=b+'<section id="wb-lng" class="visible-md visible-lg text-right"><h2 class="wb-inv">S\u00e9lection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">',e=a.lngLinks,g=e.length,d=0;d<g;d++)var c=e[d],b=b+('<li><a lang="'+soy.$$escapeHtml(c.lang)+'" href="'+soy.$$escapeHtml(c.href)+'">'+soy.$$escapeHtml(c.text)+"</a></li>");b+="</ul></div></div></section>"}b+='<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6">'+
(!1!=a.siteMenu?'<a href="http://intranet.canada.ca/index-fra.asp">':"")+'<object type="image/svg+xml" tabindex="-1" data="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/sig-blk-fr.svg"></object><span class="wb-inv"> Gouvernement du Canada</span>'+(!1!=a.siteMenu?"</a>":"")+'</div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>'+
(!1!=a.search?'<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2>Recherche</h2><form action="http://intranet.canada.ca/search-recherche/query-recherche-fra.aspx" method="post" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherche dans le site Web</label><input class="wb-srch-q form-control" name="q"  value="" size="27" maxlength="150" placeholder="Recherche"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>':
"")+'</div></div><div id="app-brand"><div class="container"><div class="row"><div class="col-sm-3"><div class="app-name"><a href="http://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span>intranet</span></a></div></div><div class="col-sm-6 col-sm-offset-3"><div class="pull-right tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang="><img class="tool-link-icon" src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":
"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/pedia_icon.png" alt="GCp\u00e9dia" /><span class="bold-gc">GC</span>p\u00e9dia</a></div><div class="pull-right tool-link"><a href="https://gcconnex.gc.ca"><img class="tool-link-icon" src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":
"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/connex_icon.png" alt="GCconnex"/><span class="bold-gc">GC</span>connex</a></div></div></div></div></div>'+(!1!=a.siteMenu?'<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-replace="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+
'/app/cls/WET/gcintranet/v4_0_21/ajax/sitemenu-fra.html" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="http://intranet.canada.ca/hgw-cgf/index-fra.asp">Comment le gouvernement fonctionne</a></li><li><a href="http://intranet.canada.ca/wg-tg/index-fra.asp">Travailler au GC</a></li><li><a href="http://intranet.canada.ca/cdl-dca/index-fra.asp">D\u00e9veloppement de carri\u00e8re et apprentissage</a></li><li><a href="http://intranet.canada.ca/tr-or/index-fra.asp">Outils et ressources</a></li></ul></div></div></nav>':
"");if(!1!=a.breadcrumbs){b+='<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous \u00eates ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';if(null!=a.breadcrumbs)for(e=a.breadcrumbs,g=e.length,d=0;d<g;d++)c=e[d],b+="<li>"+(null!=c.acronym?'<abbr title="'+soy.$$escapeHtml(c.acronym)+'">':"")+(null!=c.href?'<a href="'+soy.$$escapeHtml(c.href)+'">':"")+soy.$$escapeHtml(c.title)+(null!=c.href?"</a>":"")+(null!=c.acronym?"</abbr>":"")+"</li>";else b+='<li><a href="http://intranet.canada.ca/index-fra.asp">Accueil</a></li>';
b+="</ol></div></div></nav>"}return b+"</header>"};wet.builder.preFooter=function(a,h){a=a||{};return'\t\t<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">'+(null!=a.dateModified?'<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">'+soy.$$escapeHtml(a.dateModified)+"</time></dd>":null!=a.versionIdentifier?"<dt>Version&#160;:&#32;</dt><dd>"+soy.$$escapeHtml(a.versionIdentifier)+"</dd>":"")+"</dl></div></div>"};
wet.builder.secmenu=function(a,h){for(var b='<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>',e=a.sections,g=e.length,d=0;d<g;d++){for(var c=e[d],b=b+('<section class="list-group menu list-unstyled"><h3>'+(null!=c.sectionLink?'<a href="'+soy.$$escapeHtml(c.sectionLink)+'">':"")+soy.$$escapeHtml(c.sectionName)+(null!=c.sectionLink?"</a>":"")+'</h3><ul class="list-group menu list-unstyled">'),c=c.menuLinks,n=c.length,k=0;k<n;k++){var f=c[k];if(null!=f.subLinks){for(var b=b+('<li><a href="'+
soy.$$escapeHtml(f.href)+'" class="list-group-item">'+soy.$$escapeHtml(f.text)+'</a><ul class="list-group menu list-unstyled">'),f=f.subLinks,p=f.length,l=0;l<p;l++)var m=f[l],b=b+('<li><a href="'+soy.$$escapeHtml(m.subhref)+'" class="list-group-item">'+soy.$$escapeHtml(m.subtext)+"</a></li>");b+="</ul></li>"}else b+='<li><a href="'+soy.$$escapeHtml(f.href)+'" class="list-group-item">'+soy.$$escapeHtml(f.text)+"</a></li>"}b+="</ul></section>"}return b};
wet.builder.footer=function(a,h){a=a||{};var b="\t\t"+(!1!=a.showFeatures?'<section class="ajaxed-in"><aside class="gc-nttvs container"><h2>Activit\u00e9s et initiatives</h2><p>De l\'information sur des activit\u00e9s et initiatives en cours men\u00e9es par les minist\u00e8res et organismes dans l\'ensemble du GC.</p><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_21/ajax/actinit-fr.html"></div></aside></section>':"")+'<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">\u00c0 propos de ce site</h2><div class="row"><section class="col-sm-3"><h3>\u00c0 propos de nous</h3><ul class="list-unstyled"><li><a href="http://nouvelles.gc.ca/web/index-fr.do?_ga=1.110902533.1033712412.1432051073">Nouvelles</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/Intranet">\u00c0 propos de ce site</a></li>';
if(null!=a.contactLinks)for(var e=a.contactLinks,g=e.length,d=0;d<g;d++)var c=e[d],b=b+('<li><a href="'+soy.$$escapeHtml(c.href)+'">'+soy.$$escapeHtml(c.text)+"</a></li>");else b+='<li><a href="http://intranet.canada.ca/contact/contactgc-fra.aspx">Communiquez avec nous</a></li>';return b+='</ul></section><section class="col-sm-3"><h3>Communaut\u00e9s</h3><ul class="list-unstyled"><li><a href="http://gcconnex.gc.ca/">GConnex</a></li><li><a href="http://www.gcpedia.gc.ca/gcwiki/?setlang=fr">GCpedia</a></li></ul></section><section class="col-sm-3"><h3>Transparence</h3><ul class="list-unstyled"><li><a href="http://intranet.canada.ca/gwr-erg-fra.asp">\u00c9tablissement de rapports \u00e0 l\'\u00e9chelle du gouvernement</a></li><li><a href="http://ouvert.canada.ca/fr">Gouvernement ouvert</a></li><li><a href="http://www.canada.ca/fr/transparence/divulgation.html">Divulgation proactive</a></li><li><a href="http://intranet.canada.ca/terms-avis-fra.asp">Avis</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>M\u00e9dias sociaux</h3><p><a href="http://www.canada.ca/fr/sociaux"><img src="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/social.png" alt="M\u00e9dias sociaux"></a></p></section><section><h3>Centre mobile</h3><p><a href="http://www.canada.ca/fr/mobile"><img src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":
"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/mobile.png" alt="Centre mobile"></a></p></section></div></div></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/assets/wmms-blk.svg" aria-label="Symbole du gouvernement du Canada"></object></div></div></div></div></footer>'};
wet.builder.refFooter=function(a,h){a=a||{};return'\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat/app/cls/WET/gcintranet/v4_0_21/js":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET/gcintranet/v4_0_21/js":"https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_21/js")+'/ajax/libs/jquery/2.1.4/jquery.min.js">\x3c/script><script src="'+(null!=a.templateDomain?
soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcintranet/v4_0_21/js/wet-boew.min.js">\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+
'/app/cls/WET/gcintranet/v4_0_21/js/ie8-wet-boew2.min.js">\x3c/script><![endif]--\x3e'};
