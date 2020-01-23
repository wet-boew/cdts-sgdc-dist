/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0 - 2020-01-23
 *
 */// This file was automatically generated from gcweb-fr.soy.
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


wet.builder.appTop = function(opt_data, opt_ignored) {
  return applicationPage.appTop(opt_data);
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  return applicationPage.appFooter(opt_data);
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager -->';
  if (opt_data.webAnalytics != null) {
    output += '<!-- Adobe Analytics --><script src="//gcweb/assets.adobedtm.com/';
    var aaList19 = opt_data.webAnalytics;
    var aaListLen19 = aaList19.length;
    for (var aaIndex19 = 0; aaIndex19 < aaListLen19; aaIndex19++) {
      var aaData19 = aaList19[aaIndex19];
      output += 'caacec67651710193d2331efef325107c23a0145/satelliteLib-' + ((aaData19.version == 1) ? '92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24' : (aaData19.version == 2) ? 'c2082deaf69c358c641c5eb20f94b615dd606662' : '') + ((aaData19.environment == 'staging') ? '-staging' : '');
    }
    output += '.js"><\/script>';
  }
  output += '<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><link rel="stylesheet" href=\'./cdts/css/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'./cdts/css/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DBPCQJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;Au sujet du gouvernement&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul></nav><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Sélection de la langue</h2><ul class="list-inline margin-bottom-none">';
    var linkList45 = opt_data.lngLinks;
    var linkListLen45 = linkList45.length;
    for (var linkIndex45 = 0; linkIndex45 < linkListLen45; linkIndex45++) {
      var linkData45 = linkList45[linkIndex45];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData45.lang) + '" lang="' + soy.$$escapeHtml(linkData45.lang) + '" href="' + soy.$$escapeHtml(linkData45.href) + '">' + soy.$$escapeHtml(linkData45.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + ((opt_data.siteMenu != false) ? '<a href="https://www.canada.ca/fr.html" property="url">' : '') + '<img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Gouvernement du Canada / <span lang="en">Government of Canada</span></span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '<meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'./gcweb/assets/wmms-blk.svg\' /></div>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Recherche</h2><form action="https://www.canada.ca/fr/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher dans Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fr" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher dans Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false">Menu<span class="wb-inv"> principal</span> <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/emplois.html">Emplois et milieu de travail</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">Immigration et citoyenneté</a></li><li role="presentation"><a role="menuitem" href="https://voyage.gc.ca/">Voyage et tourisme</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/entreprises.html">Entreprises et industrie</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/prestations.html">Prestations</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/sante.html">Santé</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/impots.html">Impôts</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/environnement.html">Environnement et ressources naturelles</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/defense.html">Sécurité nationale et défense</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/culture.html">Culture, histoire et sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/police.html">Services de police, justice et urgences</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/transport.html">Transport et infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=fra">Canada et le monde</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/finance.html">Argent et finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/science.html">Science et innovation</a></li></ul></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList80 = opt_data.breadcrumbs;
      var itemListLen80 = itemList80.length;
      for (var itemIndex80 = 0; itemIndex80 < itemListLen80; itemIndex80++) {
        var itemData80 = itemList80[itemIndex80];
        output += '<li>' + ((itemData80.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData80.acronym) + '">' : '') + ((itemData80.href != null) ? '<a href="' + soy.$$escapeHtml(itemData80.href) + '">' : '') + soy.$$escapeHtml(itemData80.title) + ((itemData80.href != null) ? '</a>' : '') + ((itemData80.acronym != null) ? '</acronym>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr.html">Accueil</a></li>';
    }
    output += '</ol></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t\t' + ((opt_data.showPostContent != false) ? '' : '');
  if (opt_data.pagedetails != false) {
    output += '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">';
    if (opt_data.showFeedback != false || opt_data.showShare != false) {
      output += '<div class="row">' + ((opt_data.showFeedback != false) ? (opt_data.showFeedback != null && opt_data.showFeedback != true) ? '<div class="col-sm-6 col-md-5 col-lg-4"><a href="' + soy.$$escapeHtml(opt_data.showFeedback) + '" class="btn btn-default btn-center">Signaler un problème sur cette page</a></div>' : '<div class="col-sm-6 col-md-5 col-lg-4"><a href="https://www.canada.ca/fr/signaler-probleme.html" class="btn btn-default btn-center">Signaler un problème sur cette page</a></div>' : '');
      if (opt_data.showShare != false) {
        if (opt_data.showShare != null) {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"filter": [';
          var itemList150 = opt_data.showShare;
          var itemListLen150 = itemList150.length;
          for (var itemIndex150 = 0; itemIndex150 < itemListLen150; itemIndex150++) {
            var itemData150 = itemList150[itemIndex150];
            output += '"' + soy.$$escapeHtml(itemData150) + '"' + ((! (itemIndex150 == itemListLen150 - 1)) ? ', ' : '');
          }
          output += '], "lnkClass": "btn btn-default btn-block"}\'></div>';
        } else {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';
        }
      }
      output += '</div>';
    }
    output += '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'écran&#160;:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>';
  }
  return output;
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList196 = opt_data.sections;
  var sectionListLen196 = sectionList196.length;
  for (var sectionIndex196 = 0; sectionIndex196 < sectionListLen196; sectionIndex196++) {
    var sectionData196 = sectionList196[sectionIndex196];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData196.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData196.sectionLink) + '"' + ((sectionData196.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData196.sectionName) + ((sectionData196.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData196.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList215 = sectionData196.menuLinks;
    var linkListLen215 = linkList215.length;
    for (var linkIndex215 = 0; linkIndex215 < linkListLen215; linkIndex215++) {
      var linkData215 = linkList215[linkIndex215];
      if (linkData215.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData215.href) + '" class="list-group-item"' + ((linkData215.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData215.text) + ((linkData215.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList230 = linkData215.subLinks;
        var sublinkListLen230 = sublinkList230.length;
        for (var sublinkIndex230 = 0; sublinkIndex230 < sublinkListLen230; sublinkIndex230++) {
          var sublinkData230 = sublinkList230[sublinkIndex230];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData230.subhref) + '" class="list-group-item"' + ((sublinkData230.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData230.subtext) + ((sublinkData230.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData215.href) + '" class="list-group-item"' + ((linkData215.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData215.text) + ((linkData215.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.showFooter != false) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    if (opt_data.contactLinks != null) {
      var linkList268 = opt_data.contactLinks;
      var linkListLen268 = linkList268.length;
      for (var linkIndex268 = 0; linkIndex268 < linkListLen268; linkIndex268++) {
        var linkData268 = linkList268[linkIndex268];
        output += (linkIndex268 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData268.href) + '">Contactez-nous</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/contact.html">Contactez-nous</a></li>';
    }
    output += '<li><a href="https://www.canada.ca/fr/gouvernement/min.html">Ministères et organismes</a></li><li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html">Fonction publique et force militaire</a></li><li><a href="https://www.canada.ca/fr/nouvelles.html">Nouvelles</a></li><li><a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html">Traités, lois et règlements</a></li><li><a href="https://www.canada.ca/fr/transparence/rapports.html">Rapports à l\'échelle du gouvernement</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="https://www.canada.ca/fr/gouvernement/systeme.html">Comment le gouvernement fonctionne</a></li><li><a href="http://ouvert.canada.ca/">Gouvernement ouvert</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul><li><a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a></li><li><a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a></li><li><a href="https://www1.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li><li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList282 = opt_data.contactLinks;
      var linkListLen282 = linkList282.length;
      for (var linkIndex282 = 0; linkIndex282 < linkListLen282; linkIndex282++) {
        var linkData282 = linkList282[linkIndex282];
        output += (linkIndex282 == 0) ? '<li><a ' + ((linkData282.href) ? ' href="' + soy.$$escapeHtml(linkData282.href) + '"' : ' href="https://www.canada.ca/fr/contact.html"') + ((linkData282.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData282.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/contact.html">Coordonnées</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList306 = opt_data.termsLink;
      var linkListLen306 = linkList306.length;
      for (var linkIndex306 = 0; linkIndex306 < linkListLen306; linkIndex306++) {
        var linkData306 = linkList306[linkIndex306];
        output += (linkIndex306 == 0) ? '<li><a ' + ((linkData306.href) ? ' href="' + soy.$$escapeHtml(linkData306.href) + '"' : ' href="https://www.canada.ca/fr/transparence/avis.html"') + ((linkData306.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData306.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList330 = opt_data.privacyLink;
      var linkListLen330 = linkList330.length;
      for (var linkIndex330 = 0; linkIndex330 < linkListLen330; linkIndex330++) {
        var linkData330 = linkList330[linkIndex330];
        output += (linkIndex330 == 0) ? '<li><a ' + ((linkData330.href) ? ' href="' + soy.$$escapeHtml(linkData330.href) + '"' : ' href="https://www.canada.ca/fr/transparence/confidentialite.html"') + ((linkData330.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData330.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : './wet-boew/js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'./wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'./gcweb/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'./cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '');
};

// This file was automatically generated from gcweb-appPage-fr.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;' + ((opt_data.topCusMenu == true) ? 'Liens connexes' : 'À propos de cette application Web') + '&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Sélection de la langue</h2><ul class="list-inline margin-bottom-none">';
    var linkList17 = opt_data.lngLinks;
    var linkListLen17 = linkList17.length;
    for (var linkIndex17 = 0; linkIndex17 < linkListLen17; linkIndex17++) {
      var linkData17 = linkList17[linkIndex17];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData17.lang) + '" href="' + soy.$$escapeHtml(linkData17.href) + '">' + soy.$$escapeHtml(linkData17.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Gouvernement du Canada / <span lang="en">Government of Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'./gcweb/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList30 = opt_data.customSearch;
    var itemListLen30 = itemList30.length;
    for (var itemIndex30 = 0; itemIndex30 < itemListLen30; itemIndex30++) {
      var itemData30 = itemList30[itemIndex30];
      if (itemIndex30 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Recherche' + ((itemData30.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData30.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData30.action) + '" method="' + soy.$$escapeHtml(itemData30.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData30.id != null) ? soy.$$escapeHtml(itemData30.id) : 'wb-srch-q') + '" class="wb-inv">Rechercher' + ((itemData30.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData30.placeholder) : '') + '</label><input id="' + ((itemData30.id != null) ? soy.$$escapeHtml(itemData30.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher' + ((itemData30.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData30.placeholder) : '') + '">';
        if (itemData30.hiddenInput != null) {
          var inputList67 = itemData30.hiddenInput;
          var inputListLen67 = inputList67.length;
          for (var inputIndex67 = 0; inputIndex67 < inputListLen67; inputIndex67++) {
            var inputData67 = inputList67[inputIndex67];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData67.name) + '" value="' + soy.$$escapeHtml(inputData67.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Rechercher' + ((itemData30.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData30.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList87 = opt_data.appName;
  var itemListLen87 = itemList87.length;
  for (var itemIndex87 = 0; itemIndex87 < itemListLen87; itemIndex87++) {
    var itemData87 = itemList87[itemIndex87];
    output += (itemIndex87 == 0) ? '<h2 class="wb-inv">Nom de l\'application Web</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData87.href) + '">' + soy.$$escapeHtml(itemData87.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList102 = opt_data.appSettings;
      var itemListLen102 = itemList102.length;
      for (var itemIndex102 = 0; itemIndex102 < itemListLen102; itemIndex102++) {
        var itemData102 = itemList102[itemIndex102];
        output += (itemIndex102 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData102.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList111 = opt_data.signOut;
      var itemListLen111 = itemList111.length;
      for (var itemIndex111 = 0; itemIndex111 < itemListLen111; itemIndex111++) {
        var itemData111 = itemList111[itemIndex111];
        output += (itemIndex111 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData111.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList119 = opt_data.signIn;
      var itemListLen119 = itemList119.length;
      for (var itemIndex119 = 0; itemIndex119 < itemListLen119; itemIndex119++) {
        var itemData119 = itemList119[itemIndex119];
        output += (itemIndex119 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData119.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
      }
    }
    output += '</ul></nav>';
  }
  output += '</div></div></div>';
  if (opt_data.customSearch != null || opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<div class="app-bar-mb container visible-xs-block hidden-print">';
    if (opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.customSearch != null) {
      output += '<nav><h2 class="wb-inv">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? 'Menu' + ((opt_data.customSearch != null) ? ' et recherche' : '') : 'Recherche') + '</h2><ul class="app-list-main list-unstyled">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : '') + ((opt_data.customSearch != null) ? '<li><a href="#app-srch-mb" title="Recherche" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Recherche</span></a></li>' : '') + '</ul><div id="mb-pnl"></div>';
      if (opt_data.customSearch != null) {
        var itemList152 = opt_data.customSearch;
        var itemListLen152 = itemList152.length;
        for (var itemIndex152 = 0; itemIndex152 < itemListLen152; itemIndex152++) {
          var itemData152 = itemList152[itemIndex152];
          if (itemIndex152 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Recherche' + ((itemData152.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData152.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData152.action) + '" method="' + soy.$$escapeHtml(itemData152.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData152.id != null) ? 'app-' + soy.$$escapeHtml(itemData152.id) : 'app-srch-q-mb') + '" class="wb-inv">Recherche' + ((itemData152.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData152.placeholder) : '') + '</label><input placeholder="Rechercher' + ((itemData152.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData152.placeholder) : '') + '" id="' + ((itemData152.id != null) ? 'app-' + soy.$$escapeHtml(itemData152.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData152.hiddenInput != null) {
              var inputList191 = itemData152.hiddenInput;
              var inputListLen191 = inputList191.length;
              for (var inputIndex191 = 0; inputIndex191 < inputListLen191; inputIndex191++) {
                var inputData191 = inputList191[inputIndex191];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData191.name) + '" value="' + soy.$$escapeHtml(inputData191.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche' + ((itemData152.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData152.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList211 = opt_data.appSettings;
        var itemListLen211 = itemList211.length;
        for (var itemIndex211 = 0; itemIndex211 < itemListLen211; itemIndex211++) {
          var itemData211 = itemList211[itemIndex211];
          output += (itemIndex211 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData211.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList220 = opt_data.signOut;
        var itemListLen220 = itemList220.length;
        for (var itemIndex220 = 0; itemIndex220 < itemListLen220; itemIndex220++) {
          var itemData220 = itemList220[itemIndex220];
          output += (itemIndex220 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData220.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList228 = opt_data.signIn;
        var itemListLen228 = itemList228.length;
        for (var itemIndex228 = 0; itemIndex228 < itemListLen228; itemIndex228++) {
          var itemData228 = itemList228[itemIndex228];
          output += (itemIndex228 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData228.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList240 = opt_data.menuLinks;
      var linkListLen240 = linkList240.length;
      for (var linkIndex240 = 0; linkIndex240 < linkListLen240; linkIndex240++) {
        var linkData240 = linkList240[linkIndex240];
        if (linkData240.subLinks != null) {
          output += '<li><a href="' + soy.$$escapeHtml(linkData240.id) + '" class="item"' + ((linkData240.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData240.text) + ((linkData240.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData240.id) + '" role="menu">';
          var sublinkList257 = linkData240.subLinks;
          var sublinkListLen257 = sublinkList257.length;
          for (var sublinkIndex257 = 0; sublinkIndex257 < sublinkListLen257; sublinkIndex257++) {
            var sublinkData257 = sublinkList257[sublinkIndex257];
            output += (sublinkIndex257 == sublinkListLen257 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData257.subhref) + '"' + ((sublinkData257.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData257.subtext) + ((sublinkData257.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData257.subhref) + '"' + ((sublinkData257.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData257.subtext) + ((sublinkData257.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData240.href) + '" class="item"' + ((linkData240.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData240.text) + ((linkData240.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList309 = opt_data.breadcrumbs;
    var itemListLen309 = itemList309.length;
    for (var itemIndex309 = 0; itemIndex309 < itemListLen309; itemIndex309++) {
      var itemData309 = itemList309[itemIndex309];
      output += '<li>' + ((itemData309.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData309.acronym) + '">' : '') + ((itemData309.href != null) ? '<a href="' + soy.$$escapeHtml(itemData309.href) + '">' : '') + soy.$$escapeHtml(itemData309.title) + ((itemData309.href != null) ? '</a>' : '') + ((itemData309.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


applicationPage.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.footerSections != null) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList339 = opt_data.footerSections;
    var linkListLen339 = linkList339.length;
    for (var linkIndex339 = 0; linkIndex339 < linkListLen339; linkIndex339++) {
      var linkData339 = linkList339[linkIndex339];
      output += '<li><a href="' + soy.$$escapeHtml(linkData339.href) + '"' + ((linkData339.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData339.text) + ((linkData339.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos de cette application Web</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList357 = opt_data.contactLink;
    var linkListLen357 = linkList357.length;
    for (var linkIndex357 = 0; linkIndex357 < linkListLen357; linkIndex357++) {
      var linkData357 = linkList357[linkIndex357];
      output += (linkIndex357 == 0) ? '<li><a ' + ((linkData357.href) ? ' href="' + soy.$$escapeHtml(linkData357.href) + '"' : ' href="https://www.canada.ca/fr/contact.html"') + ((linkData357.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData357.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/contact.html">Coordonnées</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList381 = opt_data.termsLink;
    var linkListLen381 = linkList381.length;
    for (var linkIndex381 = 0; linkIndex381 < linkListLen381; linkIndex381++) {
      var linkData381 = linkList381[linkIndex381];
      output += (linkIndex381 == 0) ? '<li><a ' + ((linkData381.href) ? ' href="' + soy.$$escapeHtml(linkData381.href) + '"' : ' href="https://www.canada.ca/fr/transparence/avis.html"') + ((linkData381.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData381.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList405 = opt_data.privacyLink;
    var linkListLen405 = linkList405.length;
    for (var linkIndex405 = 0; linkIndex405 < linkListLen405; linkIndex405++) {
      var linkData405 = linkList405[linkIndex405];
      output += (linkIndex405 == 0) ? '<li><a ' + ((linkData405.href) ? ' href="' + soy.$$escapeHtml(linkData405.href) + '"' : ' href="https://www.canada.ca/fr/transparence/confidentialite.html"') + ((linkData405.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData405.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>';
  }
  output += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from gcweb-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><link rel="stylesheet" href=\'./cdts/css/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'./gcweb/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
