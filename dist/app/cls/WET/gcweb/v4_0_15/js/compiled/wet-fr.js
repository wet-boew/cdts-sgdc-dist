if("undefined"==typeof wet)var wet={};"undefined"==typeof wet.gcweb&&(wet.gcweb={});
wet.gcweb.refTop=function(b,g){return'\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/css/wet-boew.min.css">\x3c!--<![endif]--\x3e<link rel="stylesheet" href="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/css/theme.min.css">\x3c!--[if lt IE 9]><link href="'+soy.$$escapeHtml(b.templateDomain)+
'/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/css/ie8-wet-boew.min.css" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">\x3c/script><script src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew.min.js">\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e'};
wet.gcweb.top=function(b,g){var a='<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer \u00e0 \u00ab&#160;\u00c0 propos de ce site&#160;\u00bb</a></li></ul><header role="banner"><div id="wb-bnr" class="container">';if(null!=b.lngLinks){for(var a=a+'<section id="wb-lng" class="visible-md visible-lg text-right"><h2 class="wb-inv">S\u00e9lection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">',
e=b.lngLinks,f=e.length,c=0;c<f;c++)var d=e[c],a=a+('<li><a lang="'+soy.$$escapeHtml(d.lang)+'" href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");a+="</ul></div></div></section>"}a+='<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"><a href="http://www.canada.ca/fr/index.html"><object type="image/svg+xml" tabindex="-1" data="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/sig-blk-fr.svg"></object><span class="wb-inv"> Gouvernement du Canada</span></a></div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>'+
(!1!=b.search?'<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2 class="wb-inv">Recherche</h2><form action="http://recherche-search.gc.ca/rGs/s_r?#wb-land" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fra" type="hidden"><input name="st1rt" value="0" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans Canada.ca"><datalist id="wb-srch-q-ac">\x3c!--[if lte IE 9]><select><![endif]--\x3e\x3c!--[if lte IE 9]></select><![endif]--\x3e</datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>':
"")+"</div></div>"+(!1!=b.siteMenu?'<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-fetch="https://cdn.canada.ca/gcweb-cdn-'+(b.cdnDev?"dev":"live")+'/sitemenu/sitemenu-fr.html" typeof="SiteNavigationElement"><h2 class="wb-inv">Menu des sujets</h2><div class="container nvbar"><div class="row"><ul class="list-inline menu"><li><a href="http://www.edsc.gc.ca/fr/emplois/index.page">Emplois</a></li><li><a href="http://www.cic.gc.ca/francais/index.asp">Immigration</a></li><li><a href="http://voyage.gc.ca">Voyage</a></li><li><a href="http://www.canada.ca/fr/services/entreprises/index.html">Entreprises</a></li><li><a href="http://www.canada.ca/fr/services/prestations/index.html">Prestations</a></li><li><a href="http://canadiensensante.gc.ca/index-fra.php">Sant\u00e9</a></li><li><a href="http://www.canada.ca/fr/services/impots/index.html">Imp\u00f4ts</a></li><li><a href="http://www.canada.ca/fr/services/index.html">Autres services</a></li></ul></div></div></nav>':
"");if(!1!=b.breadcrumbs){a+='<nav role="navigation" id="wb-bc" class="" property="breadcrumb"><h2 class="wb-inv">Vous \u00eates ici : </h2><div class="container"><div class="row"><ol class="breadcrumb">';if(null!=b.breadcrumbs)for(e=b.breadcrumbs,f=e.length,c=0;c<f;c++)d=e[c],a+="<li>"+(null!=d.acronym?'<acronym title="'+soy.$$escapeHtml(d.acronym)+'">':"")+'<a href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.title)+"</a>"+(null!=d.acronym?"</acronym>":"")+"</li>";else a+='<li><a href="http://www.canada.ca/fr/index.html">Accueil</a></li>';
a+="</ol></div></div></nav>"}a+="</header>";if(null!=b.showJumbotron){a+='<aside class="prm-flpr"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><div class="wb-tabs carousel-s2 show-thumbs playing slow"><ul role="tablist"><li class="active">';if("default"!=b.showJumbotron){e=b.showJumbotron;f=e.length;for(c=0;c<f;c++)d=e[c],a+=(0<c?"<li>":"")+'<a href="#tab'+soy.$$escapeHtml(c)+'" title="Tab '+soy.$$escapeHtml(c)+": "+soy.$$escapeHtml(d.title)+'"><img src="'+soy.$$escapeHtml(d.img)+
'" alt=""></a></li>';a+='</ul><div class="tabpanels">';e=b.showJumbotron;f=e.length;for(c=0;c<f;c++)d=e[c],a+='<div role="tabpanel" id="tab'+soy.$$escapeHtml(c)+'" class="'+(0<c?"out fade":"in fade")+'"><a href="'+soy.$$escapeHtml(d.href)+'" class="learnmore"><figure><img src="'+soy.$$escapeHtml(d.img)+'" alt=""><figcaption><p>'+soy.$$escapeHtml(d.p)+"</p></figcaption></figure></a></div>"}else a+='<a href="#tab1" title="Languette 1&#160;: Renseignez-vous sur la fa\u00e7on dont les all\u00e8gements fiscaux du gouvernement vous permettent de garder votre entreprise au sein de votre famille"><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150525-1.jpg" alt=""></a></li><li><a href="#tab2" title="Languette 2&#160;: La Conf\u00e9rence internationale sur les donn\u00e9es ouvertes au Canada - les 28 et 29 mai. #CIDO15"><img src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150527-1.jpg" alt=""></a></li><li><a href="#tab3" title="Languette 3&#160;: \u00c9coutez de vraies histoires d\'abus de m\u00e9dicaments d\'ordonnance"><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150525.jpg" alt=""></a></li><li><a href="#tab4" title="Languette 4&#160;: Coupe du Monde f\u00e9minine de la FIFA, Canada 2015MC du 6 juin au 5 juillet, 2015"><img src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150528-fr.jpg" alt=""></a></li></ul><div class="tabpanels"><div role="tabpanel" id="tab1" class="in fade"><a href="http://www.budget.gc.ca/2015/prebudget-prebudgetaire/02/index-fra.html?utm_source=CanCa&amp;utm_medium=Carousel&amp;utm_content=Jack&amp;utm_campaign=PostBud15#6" class="learnmore"><figure><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150525-1.jpg" alt=""><figcaption><p>Renseignez-vous sur la fa\u00e7on dont les all\u00e8gements fiscaux du gouvernement vous permettent de garder votre entreprise au sein de votre famille</p></figcaption></figure></a></div><div role="tabpanel" id="tab2" class="out fade"><a href="http://ouvert.canada.ca/fr/contenu/conference-internationale-donnees-ouvertes?utm_source=referral&amp;utm_medium=carousel&amp;utm_term=canada&amp;utm_content=IODC&amp;utm_campaign=IODC15" class="learnmore"><figure><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150527-1.jpg" alt=""><figcaption><p>La Conf\u00e9rence internationale sur les donn\u00e9es ouvertes au Canada - les 28 et 29 mai. #CIDO15</p></figcaption></figure></a></div><div role="tabpanel" id="tab3" class="out fade "><a href="http://www.canadiensensante.gc.ca/drug-prevention-drogues/testimonial-temoignage-fra.php?utm_src=pidu_15&amp;utm_medium=banner_fr&amp;utm_campaign=carousel_canada.ca" class="learnmore"><figure><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150525.jpg" alt=""><figcaption><p>\u00c9coutez de vraies histoires d\'abus de m\u00e9dicaments d\'ordonnance</p></figcaption></figure></a></div><div role="tabpanel" id="tab4" class="out fade"><a href="http://canada.pch.gc.ca/fra/1414508973424/1429703325743?utm_source=patrimoinecanadien&amp;utm_medium=cdnsitecarousel-fra&amp;utm_campaign=FIFA201" class="learnmore"><figure><img src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/img/promos/20150528-fr.jpg" alt=""><figcaption><p>Coupe du Monde f\u00e9minine de la <abbr title="F\u00e9d\u00e9ration Internationale de Football Association">FIFA</abbr>, Canada 2015<sup>MC</sup> du 6 juin au 5 juillet, 2015</p></figcaption></figure></a></div>';
a+="</div></div></div></div></aside>"}return a+=!1!=b.showPreContent?'<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2>\x3c!--<img src="'+soy.$$escapeHtml(b.templateDomain)+'" class="img-responsive" alt="Place de l\'image." />--\x3e</div></div></aside>':""};
wet.gcweb.preFooter=function(b,g){var a=(!1!=b.showPostContent?'<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2>\x3c!--<img src="'+soy.$$escapeHtml(b.templateDomain)+'" class="img-responsive" alt="Place de l\'image." />--\x3e</div></div></aside>':"")+'<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd"><dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">'+soy.$$escapeHtml(b.dateModified)+"</time></dd></dl></div>"+
(!1!=b.showFeedback?'<div class="clear visible-xs"></div><div class="col-sm-4 col-xs-6">'+(null!=b.showFeedback?'<a href="'+soy.$$escapeHtml(b.showFeedback)+'" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>R\u00e9troaction<span class="wb-inv"> sur ce site Web</span></a>':'<a href="http://www.canada.ca/fr/contact/retroaction.html" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>R\u00e9troaction<span class="wb-inv"> sur ce site Web</span></a>')+
"</div>":"");if(!1!=b.showShare){a+='<div class="col-sm-3 col-xs-6 text-right">';if(null!=b.showShare){for(var a=a+'<div class="wb-share" data-wb-share=\'{"filter": [',e=b.showShare,f=e.length,c=0;c<f;c++)a+='"'+soy.$$escapeHtml(e[c])+'"'+(c!=f-1?", ":"");a+='], "lnkClass": "btn btn-default"}\'></div>'}else a+='<div class="wb-share" data-wb-share=\'{"lnkClass": "btn btn-default"}\'></div>';a+='</div><div class="clear visible-xs"></div>'}return a+"</div>"};
wet.gcweb.footer=function(b,g){var a=(null!=b.showFeatures?'<aside class="gc-nttvs container"><h2>Activit\u00e9s et initiatives du gouvernement du Canada</h2><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="//cdn.canada.ca/gcweb-cdn-'+(b.cdnDev?"dev":"live")+'/features/features-fr.html"><p class="mrgn-lft-md"><a href="http://www.canada.ca/activites.html">Acc\u00e9dez aux activit\u00e9s et initiatives du gouvernement du Canada</a></p></div></aside>':"")+'<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">\u00c0 propos de ce site</h2><div class="row">';
if(!1!=b.showFooter){a+='<div class="col-sm-3 col-lg-3"><section><h3>Coordonn\u00e9es</h3><ul class="list-unstyled">';if(null!=b.contactLinks){var e=b.contactLinks,f=e.length;if(0<f)for(var c=0;c<f;c++)var d=e[c],a=a+('<li><a href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");else a+="&nsbp;"}else a+='<li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#slq">Sujets sur lesquels portent la plupart des questions</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#spe">Renseignements sp\u00e9cifiques</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#gen">Renseignements g\u00e9n\u00e9raux</a></li>';
a+='</ul></section><section><h3>Nouvelles</h3><ul class="list-unstyled"><li><a href="http://nouvelles.gc.ca/web/index-fr.do">Salle de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=1">Communiqu\u00e9s de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=3">Avis aux m\u00e9dias</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=970">Discours</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=980">D\u00e9clarations</a></li></ul></section></div><section class="col-sm-3 col-lg-3"><h3>Gouvernement</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/gouv/systeme">Comment le gouvernement fonctionne</a></li><li><a href="http://www.canada.ca/fr/gouv/min">Minist\u00e8res et organismes</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="http://www.canada.ca/fr/gouv/ministres">Ministres</a></li><li><a href="http://www.canada.ca/fr/gouv/fonctionpublique">Fonction publique et force militaire</a></li><li><a href="http://www.canada.ca/fr/gouv/politique">Politiques, r\u00e8glements et lois</a></li><li><a href="http://www.canada.ca/fr/gouv/bibliotheques">Biblioth\u00e8ques</a></li><li><a href="http://www.canada.ca/fr/gouv/publications">Publications</a></li><li><a href="http://www.canada.ca/fr/gouv/statistiques">Statistiques et donn\u00e9es</a></li><li><a href="http://www.canada.ca/fr/nouveausite.html">\u00c0 propos de Canada.ca</a></li></ul></section><section class="col-sm-3 col-lg-3 brdr-lft"><h3>Transparence</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/rapports.html">\u00c9tablissement de rapports \u00e0 l\u2019\u00e9chelle du gouvernement</a></li><li><a href="http://ouvert.canada.ca/fr">Gouvernement ouvert</a></li><li><a href="http://www.canada.ca/fr/transparence/divulgation.html">Divulgation proactive</a></li><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialit\u00e9</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>R\u00e9troaction</h3><p><a href="http://www.canada.ca/fr/contact/retroaction.html"><img src="'+
soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/feedback.png" alt="R\u00e9troaction sur ce site Web"></a></p></section><section><h3>M\u00e9dias sociaux</h3><p><a href="http://www.canada.ca/fr/sociaux"><img src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/social.png" alt="M\u00e9dias sociaux"></a></p></section><section><h3>Centre mobile</h3><p><a href="http://www.canada.ca/fr/mobile"><img src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/mobile.png" alt="Centre mobile"></a></p></section></div>'}else a+=
'<section class="col-sm-2 col-lg-offset-3"><ul class="list-unstyled"><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html">Cordon\u00e9es</a></li></ul></section><section class="col-sm-3 col-lg-2"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li></ul></section><section class="col-sm-3 col-lg-3"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialit\u00e9</a></li></ul></section>';
return a+='</div> </nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/assets/wmms-blk.svg" aria-label="Symbole du gouvernement du Canada"></object></div></div></div></div></footer>'};
wet.gcweb.refFooter=function(b,g){return'\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">\x3c/script><script src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/js/wet-boew.min.js">\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src="'+soy.$$escapeHtml(b.templateDomain)+'/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew2.min.js">\x3c/script><![endif]--\x3e<script src="'+soy.$$escapeHtml(b.templateDomain)+
'/app/cls/WET/gcweb/v4_0_15/js/theme.min.js">\x3c/script>'};
