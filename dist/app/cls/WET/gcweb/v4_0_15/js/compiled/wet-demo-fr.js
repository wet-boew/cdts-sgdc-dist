// This file was automatically generated from wet-demo-fr.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.gcweb == 'undefined') { wet.gcweb = {}; }


wet.gcweb.refTop = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/wet-boew.min.css"><!--<![endif]--><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/theme.min.css"><!--[if lt IE 9]><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/ie8-wet-boew.min.css" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew.min.js"><\/script><![endif]--><!--[if lte IE 9]><![endif]--><!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --><script>dataLayer1 = [];<\/script><!-- End Google Tag Manager -->';
};


wet.gcweb.top = function(opt_data, opt_ignored) {
  var output = '<!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer1\'?\'&l=\'+l:\'\';j.async=true;j.src=\'//www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer1\',\'GTM-TLGQ9K\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li></ul><header role="banner"><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="visible-md visible-lg text-right"><h2 class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">';
    var linkList21 = opt_data.lngLinks;
    var linkListLen21 = linkList21.length;
    for (var linkIndex21 = 0; linkIndex21 < linkListLen21; linkIndex21++) {
      var linkData21 = linkList21[linkIndex21];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData21.lang) + '" href="' + soy.$$escapeHtml(linkData21.href) + '">' + soy.$$escapeHtml(linkData21.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  output += '<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"><a href="http://www.canada.ca/fr/index.html"><object type="image/svg+xml" tabindex="-1" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/sig-blk-fr.svg"></object><span class="wb-inv"> Gouvernement du Canada</span></a></div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2 class="wb-inv">Recherche</h2><form action="http://recherche-search.gc.ca/rGs/s_r?#wb-land" method="post" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fra" type="hidden"><input name="st1rt" value="0" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans Canada.ca"><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-fetch="https://cdn.canada.ca/gcweb-cdn-' + ((opt_data.cdnDev) ? 'dev' : 'live') + '/sitemenu/sitemenu-fr.html" typeof="SiteNavigationElement"><h2 class="wb-inv">Menu des sujets</h2><div class="container nvbar"><div class="row"><ul class="list-inline menu"><li><a href="http://www.edsc.gc.ca/fr/emplois/index.page">Emplois</a></li><li><a href="http://www.cic.gc.ca/francais/index.asp">Immigration</a></li><li><a href="http://voyage.gc.ca">Voyage</a></li><li><a href="http://www.canada.ca/fr/services/entreprises/index.html">Entreprises</a></li><li><a href="http://www.canada.ca/fr/services/prestations/index.html">Prestations</a></li><li><a href="http://canadiensensante.gc.ca/index-fra.php">Santé</a></li><li><a href="http://www.canada.ca/fr/services/impots/index.html">Impôts</a></li><li><a href="http://www.canada.ca/fr/services/index.html">Autres services</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" class="" property="breadcrumb"><h2 class="wb-inv">Vous êtes ici : </h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList52 = opt_data.breadcrumbs;
      var itemListLen52 = itemList52.length;
      for (var itemIndex52 = 0; itemIndex52 < itemListLen52; itemIndex52++) {
        var itemData52 = itemList52[itemIndex52];
        output += '<li><a href="' + soy.$$escapeHtml(itemData52.href) + '">' + soy.$$escapeHtml(itemData52.title) + '</a></li>';
      }
    } else {
      output += '<li><a href="http://www.canada.ca/fr/index.html">Accueil</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>';
  if (opt_data.showJumbotron != null) {
    output += '<aside class="prm-flpr"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><div class="wb-tabs carousel-s2 show-thumbs playing slow"><ul role="tablist"><li class="active">';
    if (opt_data.showJumbotron != 'default') {
      var itemList68 = opt_data.showJumbotron;
      var itemListLen68 = itemList68.length;
      for (var itemIndex68 = 0; itemIndex68 < itemListLen68; itemIndex68++) {
        var itemData68 = itemList68[itemIndex68];
        output += ((itemIndex68 > 0) ? '<li>' : '') + '<a href="#tab' + soy.$$escapeHtml(itemIndex68) + '" title="Tab ' + soy.$$escapeHtml(itemIndex68) + ': ' + soy.$$escapeHtml(itemData68.title) + '"><img src="' + soy.$$escapeHtml(itemData68.img) + '" alt=""></a></li>';
      }
      output += '</ul><div class="tabpanels">';
      var itemList83 = opt_data.showJumbotron;
      var itemListLen83 = itemList83.length;
      for (var itemIndex83 = 0; itemIndex83 < itemListLen83; itemIndex83++) {
        var itemData83 = itemList83[itemIndex83];
        output += '<div role="tabpanel" id="tab' + soy.$$escapeHtml(itemIndex83) + '" class="' + ((itemIndex83 > 0) ? 'out fade' : 'in fade') + '"><a href="' + soy.$$escapeHtml(itemData83.href) + '" class="learnmore"><figure><img src="' + soy.$$escapeHtml(itemData83.img) + '" alt=""><figcaption><p>' + soy.$$escapeHtml(itemData83.p) + '</p></figcaption></figure></a></div>';
      }
    } else {
      output += '<a href="#tab1" title="Languette 1&#160;: Prestation universelle pour la garde d’enfants augmentée (PUGE)"><img src="/assets/canada/carousel/20150706-1.jpg" alt=""></a></li><li><a href="#tab2" title="Languette 2&#160;: Joignez la Gendarmerie royale du Canada"><img src="/assets/canada/carousel/20150720-2.jpg" alt=""></a></li><li><a href="#tab3" title="Languette 3&#160;: Le PM annonce la conclusion d’un Accord de libre-échange avec l’Ukraine"><img src="/assets/canada/carousel/20150714-3.jpg" alt=""></a></li><li><a href="#tab4" title="Languette 4&#160;: Vous planifiez un voyage cet été? N’oubliez pas votre assurance voyage."><img src="/assets/canada/carousel/20150720-1.jpg" alt=""></a></li></ul><div class="tabpanels"><div role="tabpanel" id="tab1" class="in fade"><a href="canada.ca/fr/campagne/reductionsdimpot/index.html" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150706-1.jpg" alt=""><figcaption><p>Prestation universelle pour la garde d’enfants augmentée (<abbr>PUGE</abbr>)</p></figcaption></figure></a></div><div role="tabpanel" id="tab2" class="out fade"><a href="http://www.rcmp-grc.gc.ca/recruiting-recrutement/rm-mr/rm-mr-fra.htm?utm_source=Canada.ca&amp;utm_medium=carousel&amp;utm_campaign=GRC_Recruitement" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150720-2.jpg" alt=""><figcaption><p>Joignez la Gendarmerie royale du Canada</p></figcaption></figure></a></div><div role="tabpanel" id="tab3" class="out fade"><a href="http://pm.gc.ca/fra/nouvelles/2015/07/14/pm-annonce-la-conclusion-dun-accord-de-libre-echange-lukraine" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150714-3.jpg" alt=""><figcaption><p>Le <abbr title="Premier ministre">PM</abbr> annonce la conclusion d’un Accord de libre-échange avec l’Ukraine</p></figcaption></figure></a></div><div role="tabpanel" id="tab4" class="out fade"><a href="http://voyage.gc.ca/voyager/documents/assurance-voyage?campaign=2015-assurancevoyage-sitecdncarrousel" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150720-1.jpg" alt=""><figcaption><p>Vous planifiez un voyage cet été? N’oubliez pas votre assurance voyage.</p></figcaption></figure></a></div>';
    }
    output += '</div></div></div></div></aside>';
  }
  output += (opt_data.showPreContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><!--<img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '" class="img-responsive" alt="Place de l\'image." />--></div></div></aside>' : '';
  return output;
};


wet.gcweb.preFooter = function(opt_data, opt_ignored) {
  var output = ((opt_data.showPostContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><!--<img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '" class="img-responsive" alt="Place de l\'image." />--></div></div></aside>' : '') + '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd"><dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd></dl></div>' + ((opt_data.showFeedback != false) ? '<div class="clear visible-xs"></div><div class="col-sm-4 col-xs-6">' + ((opt_data.showFeedback != null) ? '<a href="' + soy.$$escapeHtml(opt_data.showFeedback) + '" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>Rétroaction<span class="wb-inv"> sur ce site Web</span></a>' : '<a href="http://www.canada.ca/fr/contact/retroaction.html" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>Rétroaction<span class="wb-inv"> sur ce site Web</span></a>') + '</div>' : '');
  if (opt_data.showShare != false) {
    output += '<div class="col-sm-3 col-xs-6 text-right">';
    if (opt_data.showShare != null) {
      output += '<div class="wb-share" data-wb-share=\'{"filter": [';
      var itemList142 = opt_data.showShare;
      var itemListLen142 = itemList142.length;
      for (var itemIndex142 = 0; itemIndex142 < itemListLen142; itemIndex142++) {
        var itemData142 = itemList142[itemIndex142];
        output += '"' + soy.$$escapeHtml(itemData142) + '"' + ((! (itemIndex142 == itemListLen142 - 1)) ? ', ' : '');
      }
      output += '], "lnkClass": "btn btn-default"}\'></div>';
    } else {
      output += '<div class="wb-share" data-wb-share=\'{"lnkClass": "btn btn-default"}\'></div>';
    }
    output += '</div><div class="clear visible-xs"></div>';
  }
  output += '</div>';
  return output;
};


wet.gcweb.footer = function(opt_data, opt_ignored) {
  var output = ((opt_data.showFeatures != null) ? '<aside class="gc-nttvs container"><h2>Activités et initiatives du gouvernement du Canada</h2><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="//cdn.canada.ca/gcweb-cdn-' + ((opt_data.cdnDev) ? 'dev' : 'live') + '/features/features-fr.html"><p class="mrgn-lft-md"><a href="http://www.canada.ca/activites.html">Accédez aux activités et initiatives du gouvernement du Canada</a></p></div></aside>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">À propos de ce site</h2><div class="row">';
  if (opt_data.showFooter != false) {
    output += '<div class="col-sm-3 col-lg-3"><section><h3>Coordonnées</h3><ul class="list-unstyled">';
    if (opt_data.contactLinks != null) {
      var linkList171 = opt_data.contactLinks;
      var linkListLen171 = linkList171.length;
      if (linkListLen171 > 0) {
        for (var linkIndex171 = 0; linkIndex171 < linkListLen171; linkIndex171++) {
          var linkData171 = linkList171[linkIndex171];
          output += '<li><a href="' + soy.$$escapeHtml(linkData171.href) + '">' + soy.$$escapeHtml(linkData171.text) + '</a></li>';
        }
      } else {
        output += '&nsbp;';
      }
    } else {
      output += '<li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#slq">Sujets sur lesquels portent la plupart des questions</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#spe">Renseignements spécifiques</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#gen">Renseignements généraux</a></li>';
    }
    output += '</ul></section><section><h3>Nouvelles</h3><ul class="list-unstyled"><li><a href="http://nouvelles.gc.ca/web/index-fr.do">Salle de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=1">Communiqués de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=3">Avis aux médias</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=970">Discours</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=980">Déclarations</a></li></ul></section></div><section class="col-sm-3 col-lg-3"><h3>Gouvernement</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/gouv/systeme">Comment le gouvernement fonctionne</a></li><li><a href="http://www.canada.ca/fr/gouv/min">Ministères et organismes</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="http://www.canada.ca/fr/gouv/ministres">Ministres</a></li><li><a href="http://www.canada.ca/fr/gouv/fonctionpublique">Fonction publique et force militaire</a></li><li><a href="http://www.canada.ca/fr/gouv/politique">Politiques, règlements et lois</a></li><li><a href="http://www.canada.ca/fr/gouv/bibliotheques">Bibliothèques</a></li><li><a href="http://www.canada.ca/fr/gouv/publications">Publications</a></li><li><a href="http://www.canada.ca/fr/gouv/statistiques">Statistiques et données</a></li><li><a href="http://www.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li></ul></section><section class="col-sm-3 col-lg-3 brdr-lft"><h3>Transparence</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/rapports.html">Établissement de rapports à l’échelle du gouvernement</a></li><li><a href="http://ouvert.canada.ca/fr">Gouvernement ouvert</a></li><li><a href="http://www.canada.ca/fr/transparence/divulgation.html">Divulgation proactive</a></li><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>Rétroaction</h3><p><a href="http://www.canada.ca/fr/contact/retroaction.html"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/feedback.png" alt="Rétroaction sur ce site Web"></a></p></section><section><h3>Médias sociaux</h3><p><a href="http://www.canada.ca/fr/sociaux"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/social.png" alt="Médias sociaux"></a></p></section><section><h3>Centre mobile</h3><p><a href="http://www.canada.ca/fr/mobile"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/mobile.png" alt="Centre mobile"></a></p></section></div>';
  } else {
    output += '<section class="col-sm-2 col-lg-offset-3"><ul class="list-unstyled"><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html">Cordonées</a></li></ul></section><section class="col-sm-3 col-lg-2"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li></ul></section><section class="col-sm-3 col-lg-3"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></section>';
  }
  output += '</div> </nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/wmms-blk.svg" aria-label="Symbole du gouvernement du Canada"></object></div></div></div></div></footer>';
  return output;
};


wet.gcweb.refFooter = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/wet-boew.min.js"><\/script><!--<![endif]--><!--[if lt IE 9]><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew2.min.js"><\/script><![endif]--><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/theme.min.js"><\/script>';
};
