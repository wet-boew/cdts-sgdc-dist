if("undefined"==typeof wet)var wet={};"undefined"==typeof wet.builder&&(wet.builder={});
wet.builder.refTop=function(a,h){a=a||{};return'\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?
"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/css/theme.min.css"><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/css/cdtsfixes.css">\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+
'/app/cls/WET/gcweb/v4_0_21/css/ie8-theme.min.css" /><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat/app/cls/WET/gcweb/v4_0_21/js":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET/gcweb/v4_0_21/js":"https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_21/js")+'/ajax/libs/jquery/1.11.1/jquery.min.js">\x3c/script><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==
a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/js/ie8-wet-boew.min.js">\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e'};
wet.builder.top=function(a,h){a=a||{};var b='\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer \u00e0 \u00ab&#160;\u00c0 propos de ce site&#160;\u00bb</a></li>'+(!0==a.topSecMenu?'<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>':"")+'</ul><header role="banner"><div id="wb-bnr" class="container">';
if(null!=a.lngLinks){for(var b=b+'<section id="wb-lng" class="visible-md visible-lg text-right"><h2 class="wb-inv">S\u00e9lection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">',e=a.lngLinks,f=e.length,c=0;c<f;c++)var d=e[c],b=b+('<li><a lang="'+soy.$$escapeHtml(d.lang)+'" href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");b+="</ul></div></div></section>"}b+='<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6">'+
(!1!=a.siteMenu?'<a href="http://www.canada.ca/fr/index.html">':"")+'<object type="image/svg+xml" tabindex="-1" data="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/sig-blk-fr.svg"></object><span class="wb-inv"> Gouvernement du Canada</span>'+(!1!=a.siteMenu?"</a>":"")+'</div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>'+
(!1!=a.search?'<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2>Recherche</h2><form action="https://recherche-search.gc.ca/rGs/s_r?#wb-land" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fra" type="hidden"><input name="st1rt" value="0" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans Canada.ca"><datalist id="wb-srch-q-ac">\x3c!--[if lte IE 9]><select><![endif]--\x3e\x3c!--[if lte IE 9]></select><![endif]--\x3e</datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>':
"")+"</div></div>"+(!1!=a.siteMenu?'<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-replace="https://cdn.canada.ca/gcweb-cdn-'+("prod"==a.cdnEnv?"live":"dev")+'/sitemenu/sitemenu-fr.html" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="http://www.edsc.gc.ca/fr/emplois/index.page">Emplois</a></li><li><a href="http://www.cic.gc.ca/francais/index.asp">Immigration</a></li><li><a href="https://voyage.gc.ca/">Voyage</a></li><li><a href="https://www.canada.ca/fr/services/entreprises.html">Entreprises</a></li><li><a href="https://www.canada.ca/fr/services/prestations.html">Prestations</a></li><li><a href="http://canadiensensante.gc.ca/index-fra.php">Sant\u00e9</a></li><li><a href="https://www.canada.ca/fr/services/impots.html">Imp\u00f4ts</a></li><li><a href="https://www.canada.ca/fr/services.html">Autres services</a></li></ul></div></div></nav>':
"");if(!1!=a.breadcrumbs){b+='<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous \u00eates ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';if(null!=a.breadcrumbs)for(e=a.breadcrumbs,f=e.length,c=0;c<f;c++)d=e[c],b+="<li>"+(null!=d.acronym?'<acronym title="'+soy.$$escapeHtml(d.acronym)+'">':"")+(null!=d.href?'<a href="'+soy.$$escapeHtml(d.href)+'">':"")+soy.$$escapeHtml(d.title)+(null!=d.href?"</a>":"")+(null!=d.acronym?"</acronym>":"")+"</li>";else b+='<li><a href="http://www.canada.ca/fr/index.html">Accueil</a></li>';
b+="</ol></div></div></nav>"}return b+"</header>"};
wet.builder.preFooter=function(a,h){a=a||{};var b='\t\t<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">'+(null!=a.dateModified?'<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">'+soy.$$escapeHtml(a.dateModified)+"</time></dd>":null!=a.versionIdentifier?"<dt>Version&#160;:&#32;</dt><dd>"+soy.$$escapeHtml(a.versionIdentifier)+"</dd>":"")+"</dl></div>"+(!1!=a.showFeedback?'<div class="clear visible-xs"></div><div class="col-sm-4 col-xs-6"><a href="http://www.canada.ca/fr/contact/retroaction.html" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>R\u00e9troaction<span class="wb-inv"> sur ce site Web</span></a></div>':"");
if(!1!=a.showShare){b+='<div class="col-sm-3 col-xs-6 text-right">';if(null!=a.showShare){for(var b=b+'<div class="wb-share" data-wb-share=\'{"filter": [',e=a.showShare,f=e.length,c=0;c<f;c++)b+='"'+soy.$$escapeHtml(e[c])+'"'+(c!=f-1?", ":"");b+='], "lnkClass": "btn btn-default"}\'></div>'}else b+='<div class="wb-share" data-wb-share=\'{"lnkClass": "btn btn-default"}\'></div>';b+='</div><div class="clear visible-xs"></div>'}return b+"</div>"};
wet.builder.secmenu=function(a,h){for(var b='<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>',e=a.sections,f=e.length,c=0;c<f;c++){for(var d=e[c],b=b+('<section class="list-group menu list-unstyled"><h3>'+(null!=d.sectionLink?'<a href="'+soy.$$escapeHtml(d.sectionLink)+'">':"")+soy.$$escapeHtml(d.sectionName)+(null!=d.sectionLink?"</a>":"")+'</h3><ul class="list-group menu list-unstyled">'),d=d.menuLinks,n=d.length,k=0;k<n;k++){var g=d[k];if(null!=g.subLinks){for(var b=b+('<li><a href="'+
soy.$$escapeHtml(g.href)+'" class="list-group-item">'+soy.$$escapeHtml(g.text)+'</a><ul class="list-group menu list-unstyled">'),g=g.subLinks,p=g.length,l=0;l<p;l++)var m=g[l],b=b+('<li><a href="'+soy.$$escapeHtml(m.subhref)+'" class="list-group-item">'+soy.$$escapeHtml(m.subtext)+"</a></li>");b+="</ul></li>"}else b+='<li><a href="'+soy.$$escapeHtml(g.href)+'" class="list-group-item">'+soy.$$escapeHtml(g.text)+"</a></li>"}b+="</ul></section>"}return b};
wet.builder.footer=function(a,h){a=a||{};var b="\t\t\t"+(!1!=a.showFeatures?'<aside class="gc-nttvs container"><h2>Activit\u00e9s et initiatives du gouvernement du Canada</h2><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="//cdn.canada.ca/gcweb-cdn-'+("prod"==a.cdnEnv?"live":"dev")+'/features/features-fr.html"><p class="mrgn-lft-md"><a href="http://www.canada.ca/activites.html">Acc\u00e9dez aux activit\u00e9s et initiatives du gouvernement du Canada</a></p></div></aside>':"")+'<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">\u00c0 propos de ce site</h2><div class="row">';
if(!1!=a.showFooter){b+='<div class="col-sm-3 col-lg-3"><section><h3>Pour nous joindre</h3><ul class="list-unstyled">';if(null!=a.contactLinks)for(var e=a.contactLinks,f=e.length,c=0;c<f;c++)var d=e[c],b=b+('<li><a href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");else b+='<li><a class="gl-footer" href="https://www.canada.ca/fr/contact.html">Coordonn\u00e9es</a></li>';b+='</ul></section><section><h3>Nouvelles</h3><ul class="list-unstyled"><li><a href="http://nouvelles.gc.ca/web/index-fr.do">Salle de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=1">Communiqu\u00e9s de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=3">Avis aux m\u00e9dias</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=970">Discours</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=980">D\u00e9clarations</a></li></ul></section></div><section class="col-sm-3 col-lg-3"><h3>Gouvernement</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/gouvernement/systeme.html">Comment le gouvernement fonctionne</a></li><li><a href="http://www.canada.ca/fr/gouvernement/min.html">Minist\u00e8res et organismes</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="http://www.canada.ca/fr/gouvernement/ministres.html">Ministres</a></li><li><a href="http://www.canada.ca/fr/gouvernement/fonctionpublique.html">Fonction publique et force militaire</a></li><li><a href="http://www.canada.ca/fr/gouvernement/systeme/lois.html">Trait\u00e9s, lois et r\u00e8glements</a></li><li><a href="http://www.canada.ca/fr/gouvernement/bibliotheques.html">Biblioth\u00e8ques</a></li><li><a href="http://www.canada.ca/fr/gouvernement/publications.html">Publications</a></li><li><a href="http://www.canada.ca/fr/gouvernement/statistiques.html">Statistiques et donn\u00e9es</a></li><li><a href="http://www1.canada.ca/fr/nouveausite.html">\u00c0 propos de Canada.ca</a></li></ul></section><section class="col-sm-3 col-lg-3 brdr-lft"><h3>Transparence</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/rapports.html">\u00c9tablissement de rapports \u00e0 l\u2019\u00e9chelle du gouvernement</a></li><li><a href="http://ouvert.canada.ca/fr">Gouvernement ouvert</a></li><li><a href="http://www.canada.ca/fr/transparence/divulgation.html">Divulgation proactive</a></li><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialit\u00e9</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>R\u00e9troaction</h3><p><a href="http://www.canada.ca/fr/contact/retroaction.html"><img src="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/feedback.png" alt="R\u00e9troaction sur ce site Web"></a></p></section><section><h3>M\u00e9dias sociaux</h3><p><a href="http://www.canada.ca/fr/sociaux"><img src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":
"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/social.png" alt="M\u00e9dias sociaux"></a></p></section><section><h3>Centre mobile</h3><p><a href="http://www.canada.ca/fr/mobile"><img src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/mobile.png" alt="Centre mobile"></a></p></section></div>'}else{b+=
'<section class="col-sm-2 col-lg-offset-3"><ul class="list-unstyled">';if(null!=a.contactLinks)for(e=a.contactLinks,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'">Coordonn\u00e9es</a></li>':"";else b+='<li><a href="http://www.canada.ca/fr/contact/index.html">Coordonn\u00e9es</a></li>';b+='</ul></section><section class="col-sm-3 col-lg-2"><ul class="list-unstyled">'+(null!=a.termsLink?'<li><a href="'+soy.$$escapeHtml(a.termsLink)+'">Avis</a></li>':'<li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li>')+
'</ul></section><section class="col-sm-3 col-lg-3"><ul class="list-unstyled">'+(null!=a.privacyLink?'<li><a href="'+soy.$$escapeHtml(a.privacyLink)+'">Confidentialit\u00e9</a></li>':'<li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialit\u00e9</a></li>')+"</ul></section>"}return b+='</div></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="'+
(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/assets/wmms-blk.svg" aria-label="Symbole du gouvernement du Canada"></object></div></div></div></div></footer>'};
wet.builder.refFooter=function(a,h){a=a||{};return'\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat/app/cls/WET/gcweb/v4_0_21/js":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET/gcweb/v4_0_21/js":"https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_21/js")+'/ajax/libs/jquery/2.1.4/jquery.min.js">\x3c/script><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):
"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/js/wet-boew.min.js">\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/js/ie8-wet-boew2.min.js">\x3c/script><![endif]--\x3e'+
(!0==a.exitScript&&null!=a.exitURL?'<script data-id="exitScript" data-token="'+soy.$$escapeHtml(a.exitURL)+'" '+(null!=a.exitDomains?'data-token-domains="'+soy.$$escapeHtml(a.exitDomains)+'" ':"")+'src="'+(null!=a.templateDomain?soy.$$escapeHtml(a.templateDomain):"qat"==a.cdnEnv?"https://cdn-canada.services.gc.qat":"nonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv":"https://ssl-templates.services.gc.ca")+'/app/cls/WET/gcweb/v4_0_21/js/exitScript.js">\x3c/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>'+
(null!=a.exitMsg?soy.$$escapeHtml(a.exitMsg):"Vous \u00eates sur le point de quitter un site s\u00e9curis\u00e9. Voulez-vous continuer?")+'</p><button type="button" class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Annuler</button><button type="button" class="btn btn-default popup-modal pull-right" id="eOK">Oui&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></button><br />&nbsp;</div></section>':"")};
