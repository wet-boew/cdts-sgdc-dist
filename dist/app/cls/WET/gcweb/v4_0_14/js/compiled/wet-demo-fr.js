// This file was automatically generated from wet-gcweb-fr.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.gcweb == 'undefined') { wet.gcweb = {}; }


wet.gcweb.refTop = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/css/wet-boew.min.css"><!--<![endif]--><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/css/theme.min.css"><!--[if lt IE 9]><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/css/ie8-wet-boew.min.css" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/js/ie8-wet-boew.min.js"><\/script><![endif]--><!--[if lte IE 9]-->';
};


wet.gcweb.top = function(opt_data, opt_ignored) {
  var output = '<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li></ul><header role="banner"><div id="wb-bnr" class="container">';
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
  output += '<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"><a href="http://www.canada.ca/fr/index.html"><object type="image/svg+xml" tabindex="-1" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/sig-blk-fr.svg"></object><span class="wb-inv"> Gouvernement du Canada</span></a></div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2 class="wb-inv">Recherche</h2><form action="http://recherche-search.gc.ca/rGs/s_r?#wb-land" method="post" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fra" type="hidden"><input name="st1rt" value="0" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans Canada.ca"><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-fetch="https://cdn.canada.ca/gcweb-cdn-live/sitemenu/sitemenu-fr.html" typeof="SiteNavigationElement"><h2 class="wb-inv">Menu des sujets</h2><div class="container nvbar"><div class="row"><ul class="list-inline menu"><li><a href="http://www.edsc.gc.ca/fr/emplois/index.page">Emplois</a></li><li><a href="http://www.cic.gc.ca/francais/index.asp">Immigration</a></li><li><a href="http://voyage.gc.ca">Voyage</a></li><li><a href="http://www.canada.ca/fr/services/entreprises/index.html">Entreprises</a></li><li><a href="http://www.canada.ca/fr/services/prestations/index.html">Prestations</a></li><li><a href="http://canadiensensante.gc.ca/index-fra.php">Santé</a></li><li><a href="http://www.canada.ca/fr/services/impots/index.html">Impôts</a></li><li><a href="http://www.canada.ca/fr/services/index.html">Autres services</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" class="" property="breadcrumb"><h2 class="wb-inv">Vous êtes ici : </h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList46 = opt_data.breadcrumbs;
      var itemListLen46 = itemList46.length;
      for (var itemIndex46 = 0; itemIndex46 < itemListLen46; itemIndex46++) {
        var itemData46 = itemList46[itemIndex46];
        output += '<li><a href="' + soy.$$escapeHtml(itemData46.href) + '">' + soy.$$escapeHtml(itemData46.title) + '</a></li>';
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
      var itemList62 = opt_data.showJumbotron;
      var itemListLen62 = itemList62.length;
      for (var itemIndex62 = 0; itemIndex62 < itemListLen62; itemIndex62++) {
        var itemData62 = itemList62[itemIndex62];
        output += ((itemIndex62 > 0) ? '<li>' : '') + '<a href="#tab' + soy.$$escapeHtml(itemIndex62) + '" title="Tab ' + soy.$$escapeHtml(itemIndex62) + ': ' + soy.$$escapeHtml(itemData62.title) + '"><img src="' + soy.$$escapeHtml(itemData62.img) + '" alt=""></a></li>';
      }
      output += '</ul><div class="tabpanels">';
      var itemList77 = opt_data.showJumbotron;
      var itemListLen77 = itemList77.length;
      for (var itemIndex77 = 0; itemIndex77 < itemListLen77; itemIndex77++) {
        var itemData77 = itemList77[itemIndex77];
        output += '<div role="tabpanel" id="tab' + soy.$$escapeHtml(itemIndex77) + '" class="' + ((itemIndex77 > 0) ? 'out fade' : 'in fade') + '"><a href="' + soy.$$escapeHtml(itemData77.href) + '" class="learnmore"><figure><img src="' + soy.$$escapeHtml(itemData77.img) + '" alt=""><figcaption><p>' + soy.$$escapeHtml(itemData77.p) + '</p></figcaption></figure></a></div>';
      }
    } else {
      output += '<a href="#tab1" title="Languette 1&#160;: Renseignez-vous sur la façon dont les allègements fiscaux du gouvernement vous permettent de garder votre entreprise au sein de votre famille"><img src="/assets/canada/carousel/20150525-1.jpg" alt=""></a></li><li><a href="#tab2" title="Languette 2&#160;: La Conférence internationale sur les données ouvertes au Canada - les 28 et 29 mai. #CIDO15"><img src="/assets/canada/carousel/20150527-1.jpg" alt=""></a></li><li><a href="#tab3" title="Languette 3&#160;: Écoutez de vraies histoires d\'abus de médicaments d\'ordonnance"><img src="/assets/canada/carousel/20150525.jpg" alt=""></a></li><li><a href="#tab4" title="Languette 4&#160;: Coupe du Monde féminine de la FIFA, Canada 2015MC du 6 juin au 5 juillet, 2015"><img src="/assets/canada/carousel/20150528-fr.jpg" alt=""></a></li></ul><div class="tabpanels"><div role="tabpanel" id="tab1" class="in fade"><a href="http://www.budget.gc.ca/2015/prebudget-prebudgetaire/02/index-fra.html?utm_source=CanCa&amp;utm_medium=Carousel&amp;utm_content=Jack&amp;utm_campaign=PostBud15#6" class="learnmore"><figure><img src="/assets/canada/carousel/20150525-1.jpg" alt=""><figcaption><p>Renseignez-vous sur la façon dont les allègements fiscaux du gouvernement vous permettent de garder votre entreprise au sein de votre famille</p></figcaption></figure></a></div><div role="tabpanel" id="tab2" class="out fade"><a href="http://ouvert.canada.ca/fr/contenu/conference-internationale-donnees-ouvertes?utm_source=referral&amp;utm_medium=carousel&amp;utm_term=canada&amp;utm_content=IODC&amp;utm_campaign=IODC15" class="learnmore"><figure><img src="/assets/canada/carousel/20150527-1.jpg" alt=""><figcaption><p>La Conférence internationale sur les données ouvertes au Canada - les 28 et 29 mai. #CIDO15</p></figcaption></figure></a></div><div role="tabpanel" id="tab3" class="out fade "><a href="http://www.canadiensensante.gc.ca/drug-prevention-drogues/testimonial-temoignage-fra.php?utm_src=pidu_15&amp;utm_medium=banner_fr&amp;utm_campaign=carousel_canada.ca" class="learnmore"><figure><img src="/assets/canada/carousel/20150525.jpg" alt=""><figcaption><p>Écoutez de vraies histoires d\'abus de médicaments d\'ordonnance</p></figcaption></figure></a></div><div role="tabpanel" id="tab4" class="out fade"><a href="http://canada.pch.gc.ca/fra/1414508973424/1429703325743?utm_source=patrimoinecanadien&amp;utm_medium=cdnsitecarousel-fra&amp;utm_campaign=FIFA201" class="learnmore"><figure><img src="/assets/canada/carousel/20150528-fr.jpg" alt=""><figcaption><p>Coupe du Monde féminine de la <abbr title="Fédération Internationale de Football Association">FIFA</abbr>, Canada 2015<sup>MC</sup> du 6 juin au 5 juillet, 2015</p></figcaption></figure></a></div>';
    }
    output += '</div></div></div></div></aside>';
  }
  output += (opt_data.showPreContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/img/promos/1170x347-1.png" class="img-responsive" alt="Place de l\'image." /></div></div></aside>' : '';
  return output;
};


wet.gcweb.preFooter = function(opt_data, opt_ignored) {
  return ((opt_data.showPostContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/img/promos/1170x347-2.png" class="img-responsive" alt="Place de l\'image." /></div></div></aside>' : '') + '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd"><dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd></dl></div><div class="clear visible-xs"></div><div class="col-sm-4 col-xs-6"><a href="http://www.canada.ca/fr/contact/retroaction.html" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>Rétroaction<span class="wb-inv"> sur ce site Web</span></a></div><div class="col-sm-3 col-xs-6 text-right"><div class="wb-share" data-wb-share=\'{"lnkClass": "btn btn-default"}\'></div></div><div class="clear visible-xs"></div></div>';
};


wet.gcweb.footer = function(opt_data, opt_ignored) {
  var output = ((opt_data.showFeatures != null) ? '<aside class="gc-nttvs container"><h2>Activités et initiatives du gouvernement du Canada</h2><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="//cdn.canada.ca/gcweb-cdn-live/features/features-fr.html"><p class="mrgn-lft-md"><a href="http://www.canada.ca/activites.html">Accédez aux activités et initiatives du gouvernement du Canada</a></p></div></aside>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">À propos de ce site</h2><div class="row">';
  if (opt_data.showFooter != false) {
    output += '<div class="col-sm-3 col-lg-3"><section><h3>Coordonnées</h3><ul class="list-unstyled">';
    if (opt_data.contactLinks != null) {
      var linkList121 = opt_data.contactLinks;
      var linkListLen121 = linkList121.length;
      if (linkListLen121 > 0) {
        for (var linkIndex121 = 0; linkIndex121 < linkListLen121; linkIndex121++) {
          var linkData121 = linkList121[linkIndex121];
          output += '<li><a href="' + soy.$$escapeHtml(linkData121.href) + '">' + soy.$$escapeHtml(linkData121.text) + '</a></li>';
        }
      } else {
        output += '&nsbp;';
      }
    } else {
      output += '<li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#slq">Sujets sur lesquels portent la plupart des questions</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#spe">Renseignements spécifiques</a></li><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html#gen">Renseignements généraux</a></li>';
    }
    output += '</ul></section><section><h3>Nouvelles</h3><ul class="list-unstyled"><li><a href="http://nouvelles.gc.ca/web/index-fr.do">Salle de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=1">Communiqués de presse</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=3">Avis aux médias</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=970">Discours</a></li><li><a href="http://nouvelles.gc.ca/web/nwsprdct-fr.do?mthd=tp&amp;crtr.tp1D=980">Déclarations</a></li></ul></section></div><section class="col-sm-3 col-lg-3"><h3>Gouvernement</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/gouv/systeme">Comment le gouvernement fonctionne</a></li><li><a href="http://www.canada.ca/fr/gouv/min">Ministères et organismes</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="http://www.canada.ca/fr/gouv/ministres">Ministres</a></li><li><a href="http://www.canada.ca/fr/gouv/fonctionpublique">Fonction publique et force militaire</a></li><li><a href="http://www.canada.ca/fr/gouv/politique">Politiques, règlements et lois</a></li><li><a href="http://www.canada.ca/fr/gouv/bibliotheques">Bibliothèques</a></li><li><a href="http://www.canada.ca/fr/gouv/publications">Publications</a></li><li><a href="http://www.canada.ca/fr/gouv/statistiques">Statistiques et données</a></li><li><a href="http://www.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li></ul></section><section class="col-sm-3 col-lg-3 brdr-lft"><h3>Transparence</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/rapports.html">Établissement de rapports à l’échelle du gouvernement</a></li><li><a href="http://ouvert.canada.ca/fr">Gouvernement ouvert</a></li><li><a href="http://www.canada.ca/fr/transparence/divulgation.html">Divulgation proactive</a></li><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>Rétroaction</h3><p><a href="http://www.canada.ca/fr/contact/retroaction.html"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/feedback.png" alt="Rétroaction sur ce site Web"></a></p></section><section><h3>Médias sociaux</h3><p><a href="http://www.canada.ca/fr/sociaux"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/social.png" alt="Médias sociaux"></a></p></section><section><h3>Centre mobile</h3><p><a href="http://www.canada.ca/fr/mobile"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/mobile.png" alt="Centre mobile"></a></p></section></div>';
  } else {
    output += '<section class="col-sm-2 col-lg-offset-3"><ul class="list-unstyled"><li><a class="gl-footer" href="http://www.canada.ca/fr/contact/index.html">Cordonées</a></li></ul></section><section class="col-sm-3 col-lg-2"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/avis.html">Avis</a></li></ul></section><section class="col-sm-3 col-lg-3"><ul class="list-unstyled"><li><a href="http://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></section>';
  }
  output += '</div> </nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/assets/wmms-blk.svg" aria-label="Symbole du gouvernement du Canada"></object></div></div></div></div></footer>';
  return output;
};


wet.gcweb.refFooter = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/js/wet-boew.min.js"><\/script><!--<![endif]--><!--[if lt IE 9]><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/js/ie8-wet-boew2.min.js"><\/script><![endif]--><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_14/js/theme.min.js"><\/script>';
};
