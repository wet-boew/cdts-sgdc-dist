/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0-development - 2020-10-19
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


wet.builder.environment = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'esdcqat' || opt_data.cdnEnv == 'esdcprod' || opt_data.cdnEnv == 'esdcnonprod') ? '/cdts/' : (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : '/etc/designs/canada/cdts/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script>';
  if (opt_data.webAnalytics != null) {
    output += '<!-- Adobe Analytics --><script src="//gcweb/assets.adobedtm.com/';
    var aaList27 = opt_data.webAnalytics;
    var aaListLen27 = aaList27.length;
    for (var aaIndex27 = 0; aaIndex27 < aaListLen27; aaIndex27++) {
      var aaData27 = aaList27[aaIndex27];
      if (aaData27.custom != null) {
        output += soy.$$escapeHtml(aaData27.custom);
      } else if (aaData27.version == 1 || aaData27.version == 2) {
        output += 'caacec67651710193d2331efef325107c23a0145/satelliteLib-';
        switch (aaData27.version) {
          case 1:
            output += '92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24';
            break;
          case 2:
            output += 'c2082deaf69c358c641c5eb20f94b615dd606662';
            break;
          default:
        }
        output += ((aaData27.environment == 'staging') ? '-staging' : '') + '.js';
      }
    }
    output += '"><\/script>';
  }
  output += '<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + '/gcweb/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + '/gcweb/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + '/gcweb/release/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;Au sujet du gouvernement&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul></nav><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Sélection de la langue</h2><ul class="list-inline margin-bottom-none">';
    var linkList73 = opt_data.lngLinks;
    var linkListLen73 = linkList73.length;
    for (var linkIndex73 = 0; linkIndex73 < linkListLen73; linkIndex73++) {
      var linkData73 = linkList73[linkIndex73];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData73.lang) + '" lang="' + soy.$$escapeHtml(linkData73.lang) + '" href="' + soy.$$escapeHtml(linkData73.href) + '">' + soy.$$escapeHtml(linkData73.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + ((opt_data.siteMenu != false) ? '<a href="https://www.canada.ca/fr.html" property="url">' : '') + '<img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-fr.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Gouvernement du Canada / <span lang="en">Government of Canada</span></span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '<meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + '/gcweb/release/assets/wmms-blk.svg\' /></div>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Recherche</h2><form action="https://www.canada.ca/fr/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher dans Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="fr" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher dans Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false">Menu<span class="wb-inv"> principal</span> <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/emplois.html">Emplois et milieu de travail</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">Immigration et citoyenneté</a></li><li role="presentation"><a role="menuitem" href="https://voyage.gc.ca/">Voyage et tourisme</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/entreprises.html">Entreprises et industrie</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/prestations.html">Prestations</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/sante.html">Santé</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/impots.html">Impôts</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/environnement.html">Environnement et ressources naturelles</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/defense.html">Sécurité nationale et défense</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/culture.html">Culture, histoire et sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/police.html">Services de police, justice et urgences</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/transport.html">Transport et infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=fra">Canada et le monde</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/finance.html">Argent et finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/science.html">Science et innovation</a></li></ul></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList112 = opt_data.breadcrumbs;
      var itemListLen112 = itemList112.length;
      for (var itemIndex112 = 0; itemIndex112 < itemListLen112; itemIndex112++) {
        var itemData112 = itemList112[itemIndex112];
        output += (itemIndex112 == 0) ? (itemData112.title == 'Canada.ca' || itemData112.title == 'canada.ca') ? '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/fr.html">Canada.ca</a></abbr></li>' : (itemData112.href == 'https://www.canada.ca' || itemData112.href == 'http://www.canada.ca' || itemData112.href == 'https://www.canada.ca/' || itemData112.href == 'http://www.canada.ca/' || itemData112.href == 'https://www.canada.ca/en.html' || itemData112.href == 'http://www.canada.ca/en.html' || itemData112.href == 'https://www.canada.ca/en.html/' || itemData112.href == 'http://www.canada.ca/en.html/' || itemData112.href == 'https://www.canada.ca/fr.html' || itemData112.href == 'http://www.canada.ca/fr.html' || itemData112.href == 'https://www.canada.ca/fr.html/' || itemData112.href == 'http://www.canada.ca/fr.html/' || itemData112.href == 'https://www.canada.ca/index.html' || itemData112.href == 'http://www.canada.ca/index.html' || itemData112.href == 'https://www.canada.ca/index.html/' || itemData112.href == 'http://www.canada.ca/index.html/' || itemData112.href == 'https://www.canada.ca/en/index.html' || itemData112.href == 'http://www.canada.ca/en/index.html' || itemData112.href == 'https://www.canada.ca/en/index.html/' || itemData112.href == 'http://www.canada.ca/en/index.html/' || itemData112.href == 'https://www.canada.ca/fr/index.html' || itemData112.href == 'http://www.canada.ca/fr/index.html' || itemData112.href == 'https://www.canada.ca/fr/index.html/' || itemData112.href == 'http://www.canada.ca/fr/index.html/' || itemData112.href == 'https://www.canada.ca/home.html' || itemData112.href == 'http://www.canada.ca/home.html' || itemData112.href == 'https://www.canada.ca/home.html/' || itemData112.href == 'http://www.canada.ca/home.html/' || itemData112.href == 'https://www.canada.ca/accueil.html' || itemData112.href == 'http://www.canada.ca/accueil.html' || itemData112.href == 'https://www.canada.ca/accueil.html/' || itemData112.href == 'http://www.canada.ca/accueil.html/') ? '<li>' + ((itemData112.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData112.acronym) + '">' : '') + ((itemData112.href != null) ? '<a href="' + soy.$$escapeHtml(itemData112.href) + '">' : '') + 'Canada.ca' + ((itemData112.href != null) ? '</a>' : '') + ((itemData112.acronym != null) ? '</abbr>' : '') + '</li>' : '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/fr.html">Canada.ca</a></abbr></li><li>' + ((itemData112.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData112.acronym) + '">' : '') + ((itemData112.href != null) ? '<a href="' + soy.$$escapeHtml(itemData112.href) + '">' : '') + ((itemData112.title != null) ? soy.$$escapeHtml(itemData112.title) : '') + ((itemData112.href != null) ? '</a>' : '') + ((itemData112.acronym != null) ? '</abbr>' : '') + '</li>' : '<li>' + ((itemData112.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData112.acronym) + '">' : '') + ((itemData112.href != null) ? '<a href="' + soy.$$escapeHtml(itemData112.href) + '">' : '') + ((itemData112.title != null) ? soy.$$escapeHtml(itemData112.title) : '') + ((itemData112.href != null) ? '</a>' : '') + ((itemData112.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/fr.html">Canada.ca</a></abbr></li>';
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
          var itemList234 = opt_data.showShare;
          var itemListLen234 = itemList234.length;
          for (var itemIndex234 = 0; itemIndex234 < itemListLen234; itemIndex234++) {
            var itemData234 = itemList234[itemIndex234];
            output += '"' + soy.$$escapeHtml(itemData234) + '"' + ((! (itemIndex234 == itemListLen234 - 1)) ? ', ' : '');
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
  var sectionList280 = opt_data.sections;
  var sectionListLen280 = sectionList280.length;
  for (var sectionIndex280 = 0; sectionIndex280 < sectionListLen280; sectionIndex280++) {
    var sectionData280 = sectionList280[sectionIndex280];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData280.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData280.sectionLink) + '"' + ((sectionData280.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData280.sectionName) + ((sectionData280.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData280.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList299 = sectionData280.menuLinks;
    var linkListLen299 = linkList299.length;
    for (var linkIndex299 = 0; linkIndex299 < linkListLen299; linkIndex299++) {
      var linkData299 = linkList299[linkIndex299];
      if (linkData299.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData299.href) + '" class="list-group-item"' + ((linkData299.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData299.text) + ((linkData299.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList314 = linkData299.subLinks;
        var sublinkListLen314 = sublinkList314.length;
        for (var sublinkIndex314 = 0; sublinkIndex314 < sublinkListLen314; sublinkIndex314++) {
          var sublinkData314 = sublinkList314[sublinkIndex314];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData314.subhref) + '" class="list-group-item"' + ((sublinkData314.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData314.subtext) + ((sublinkData314.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData299.href) + '" class="list-group-item"' + ((linkData299.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData299.text) + ((linkData299.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
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
      var linkList352 = opt_data.contactLinks;
      var linkListLen352 = linkList352.length;
      for (var linkIndex352 = 0; linkIndex352 < linkListLen352; linkIndex352++) {
        var linkData352 = linkList352[linkIndex352];
        output += (linkIndex352 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData352.href) + '">Contactez-nous</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/contact.html">Contactez-nous</a></li>';
    }
    output += '<li><a href="https://www.canada.ca/fr/gouvernement/min.html">Ministères et organismes</a></li><li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html">Fonction publique et force militaire</a></li><li><a href="https://www.canada.ca/fr/nouvelles.html">Nouvelles</a></li><li><a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html">Traités, lois et règlements</a></li><li><a href="https://www.canada.ca/fr/transparence/rapports.html">Rapports à l\'échelle du gouvernement</a></li><li><a href="http://pm.gc.ca/fra">Premier ministre</a></li><li><a href="https://www.canada.ca/fr/gouvernement/systeme.html">Comment le gouvernement fonctionne</a></li><li><a href="http://ouvert.canada.ca/">Gouvernement ouvert</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul><li><a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a></li><li><a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a></li><li><a href="https://www.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li><li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li><li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li></ul></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList366 = opt_data.contactLinks;
      var linkListLen366 = linkList366.length;
      for (var linkIndex366 = 0; linkIndex366 < linkListLen366; linkIndex366++) {
        var linkData366 = linkList366[linkIndex366];
        output += (linkIndex366 == 0) ? '<li><a ' + ((linkData366.href) ? ' href="' + soy.$$escapeHtml(linkData366.href) + '"' : ' href="https://www.canada.ca/fr/contact.html"') + ((linkData366.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData366.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/contact.html">Coordonnées</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList390 = opt_data.termsLink;
      var linkListLen390 = linkList390.length;
      for (var linkIndex390 = 0; linkIndex390 < linkListLen390; linkIndex390++) {
        var linkData390 = linkList390[linkIndex390];
        output += (linkIndex390 == 0) ? '<li><a ' + ((linkData390.href) ? ' href="' + soy.$$escapeHtml(linkData390.href) + '"' : ' href="https://www.canada.ca/fr/transparence/avis.html"') + ((linkData390.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData390.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList414 = opt_data.privacyLink;
      var linkListLen414 = linkList414.length;
      for (var linkIndex414 = 0; linkIndex414 < linkListLen414; linkIndex414++) {
        var linkData414 = linkList414[linkIndex414];
        output += (linkIndex414 == 0) ? '<li><a ' + ((linkData414.href) ? ' href="' + soy.$$escapeHtml(linkData414.href) + '"' : ' href="https://www.canada.ca/fr/transparence/confidentialite.html"') + ((linkData414.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData414.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'gcweb/release/js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '');
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
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-fr.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Gouvernement du Canada / <span lang="en">Government of Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList34 = opt_data.customSearch;
    var itemListLen34 = itemList34.length;
    for (var itemIndex34 = 0; itemIndex34 < itemListLen34; itemIndex34++) {
      var itemData34 = itemList34[itemIndex34];
      if (itemIndex34 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Recherche' + ((itemData34.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData34.action) + '" method="' + soy.$$escapeHtml(itemData34.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData34.id != null) ? soy.$$escapeHtml(itemData34.id) : 'wb-srch-q') + '" class="wb-inv">Rechercher' + ((itemData34.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</label><input id="' + ((itemData34.id != null) ? soy.$$escapeHtml(itemData34.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher' + ((itemData34.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '">';
        if (itemData34.hiddenInput != null) {
          var inputList71 = itemData34.hiddenInput;
          var inputListLen71 = inputList71.length;
          for (var inputIndex71 = 0; inputIndex71 < inputListLen71; inputIndex71++) {
            var inputData71 = inputList71[inputIndex71];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData71.name) + '" value="' + soy.$$escapeHtml(inputData71.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Rechercher' + ((itemData34.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList91 = opt_data.appName;
  var itemListLen91 = itemList91.length;
  for (var itemIndex91 = 0; itemIndex91 < itemListLen91; itemIndex91++) {
    var itemData91 = itemList91[itemIndex91];
    output += (itemIndex91 == 0) ? '<h2 class="wb-inv">Nom de l\'application Web</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData91.href) + '">' + soy.$$escapeHtml(itemData91.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList106 = opt_data.appSettings;
      var itemListLen106 = itemList106.length;
      for (var itemIndex106 = 0; itemIndex106 < itemListLen106; itemIndex106++) {
        var itemData106 = itemList106[itemIndex106];
        output += (itemIndex106 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData106.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList115 = opt_data.signOut;
      var itemListLen115 = itemList115.length;
      for (var itemIndex115 = 0; itemIndex115 < itemListLen115; itemIndex115++) {
        var itemData115 = itemList115[itemIndex115];
        output += (itemIndex115 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData115.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList123 = opt_data.signIn;
      var itemListLen123 = itemList123.length;
      for (var itemIndex123 = 0; itemIndex123 < itemListLen123; itemIndex123++) {
        var itemData123 = itemList123[itemIndex123];
        output += (itemIndex123 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData123.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
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
        var itemList156 = opt_data.customSearch;
        var itemListLen156 = itemList156.length;
        for (var itemIndex156 = 0; itemIndex156 < itemListLen156; itemIndex156++) {
          var itemData156 = itemList156[itemIndex156];
          if (itemIndex156 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Recherche' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData156.action) + '" method="' + soy.$$escapeHtml(itemData156.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData156.id != null) ? 'app-' + soy.$$escapeHtml(itemData156.id) : 'app-srch-q-mb') + '" class="wb-inv">Recherche' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</label><input placeholder="Rechercher' + ((itemData156.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '" id="' + ((itemData156.id != null) ? 'app-' + soy.$$escapeHtml(itemData156.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData156.hiddenInput != null) {
              var inputList195 = itemData156.hiddenInput;
              var inputListLen195 = inputList195.length;
              for (var inputIndex195 = 0; inputIndex195 < inputListLen195; inputIndex195++) {
                var inputData195 = inputList195[inputIndex195];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData195.name) + '" value="' + soy.$$escapeHtml(inputData195.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList215 = opt_data.appSettings;
        var itemListLen215 = itemList215.length;
        for (var itemIndex215 = 0; itemIndex215 < itemListLen215; itemIndex215++) {
          var itemData215 = itemList215[itemIndex215];
          output += (itemIndex215 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData215.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList224 = opt_data.signOut;
        var itemListLen224 = itemList224.length;
        for (var itemIndex224 = 0; itemIndex224 < itemListLen224; itemIndex224++) {
          var itemData224 = itemList224[itemIndex224];
          output += (itemIndex224 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData224.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList232 = opt_data.signIn;
        var itemListLen232 = itemList232.length;
        for (var itemIndex232 = 0; itemIndex232 < itemListLen232; itemIndex232++) {
          var itemData232 = itemList232[itemIndex232];
          output += (itemIndex232 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData232.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList244 = opt_data.menuLinks;
      var linkListLen244 = linkList244.length;
      for (var linkIndex244 = 0; linkIndex244 < linkListLen244; linkIndex244++) {
        var linkData244 = linkList244[linkIndex244];
        if (linkData244.subLinks != null) {
          output += '<li><a href="' + soy.$$escapeHtml(linkData244.id) + '" class="item"' + ((linkData244.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData244.text) + ((linkData244.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData244.id) + '" role="menu">';
          var sublinkList261 = linkData244.subLinks;
          var sublinkListLen261 = sublinkList261.length;
          for (var sublinkIndex261 = 0; sublinkIndex261 < sublinkListLen261; sublinkIndex261++) {
            var sublinkData261 = sublinkList261[sublinkIndex261];
            output += (sublinkIndex261 == sublinkListLen261 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData261.subhref) + '"' + ((sublinkData261.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData261.subtext) + ((sublinkData261.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData261.subhref) + '"' + ((sublinkData261.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData261.subtext) + ((sublinkData261.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData244.href) + '" class="item"' + ((linkData244.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData244.text) + ((linkData244.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList315 = opt_data.breadcrumbs;
      var itemListLen315 = itemList315.length;
      for (var itemIndex315 = 0; itemIndex315 < itemListLen315; itemIndex315++) {
        var itemData315 = itemList315[itemIndex315];
        output += (itemIndex315 == 0) ? (itemData315.title == 'Canada.ca' || itemData315.title == 'canada.ca') ? '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/fr.html">Canada.ca</a></abbr></li>' : (itemData315.href == 'https://www.canada.ca' || itemData315.href == 'http://www.canada.ca' || itemData315.href == 'https://www.canada.ca/' || itemData315.href == 'http://www.canada.ca/' || itemData315.href == 'https://www.canada.ca/en.html' || itemData315.href == 'http://www.canada.ca/en.html' || itemData315.href == 'https://www.canada.ca/en.html/' || itemData315.href == 'http://www.canada.ca/en.html/' || itemData315.href == 'https://www.canada.ca/fr.html' || itemData315.href == 'http://www.canada.ca/fr.html' || itemData315.href == 'https://www.canada.ca/fr.html/' || itemData315.href == 'http://www.canada.ca/fr.html/' || itemData315.href == 'https://www.canada.ca/index.html' || itemData315.href == 'http://www.canada.ca/index.html' || itemData315.href == 'https://www.canada.ca/index.html/' || itemData315.href == 'http://www.canada.ca/index.html/' || itemData315.href == 'https://www.canada.ca/en/index.html' || itemData315.href == 'http://www.canada.ca/en/index.html' || itemData315.href == 'https://www.canada.ca/en/index.html/' || itemData315.href == 'http://www.canada.ca/en/index.html/' || itemData315.href == 'https://www.canada.ca/fr/index.html' || itemData315.href == 'http://www.canada.ca/fr/index.html' || itemData315.href == 'https://www.canada.ca/fr/index.html/' || itemData315.href == 'http://www.canada.ca/fr/index.html/' || itemData315.href == 'https://www.canada.ca/home.html' || itemData315.href == 'http://www.canada.ca/home.html' || itemData315.href == 'https://www.canada.ca/home.html/' || itemData315.href == 'http://www.canada.ca/home.html/' || itemData315.href == 'https://www.canada.ca/accueil.html' || itemData315.href == 'http://www.canada.ca/accueil.html' || itemData315.href == 'https://www.canada.ca/accueil.html/' || itemData315.href == 'http://www.canada.ca/accueil.html/') ? '<li>' + ((itemData315.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData315.acronym) + '">' : '') + ((itemData315.href != null) ? '<a href="' + soy.$$escapeHtml(itemData315.href) + '">' : '') + 'Canada.ca' + ((itemData315.href != null) ? '</a>' : '') + ((itemData315.acronym != null) ? '</abbr>' : '') + '</li>' : '<li><abbr title="Canada.ca"><a href="https://www.canada.ca/fr.html">Canada.ca</a></abbr></li><li>' + ((itemData315.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData315.acronym) + '">' : '') + ((itemData315.href != null) ? '<a href="' + soy.$$escapeHtml(itemData315.href) + '">' : '') + ((itemData315.title != null) ? soy.$$escapeHtml(itemData315.title) : '') + ((itemData315.href != null) ? '</a>' : '') + ((itemData315.acronym != null) ? '</abbr>' : '') + '</li>' : '<li>' + ((itemData315.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData315.acronym) + '">' : '') + ((itemData315.href != null) ? '<a href="' + soy.$$escapeHtml(itemData315.href) + '">' : '') + ((itemData315.title != null) ? soy.$$escapeHtml(itemData315.title) : '') + ((itemData315.href != null) ? '</a>' : '') + ((itemData315.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
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
    var linkList398 = opt_data.footerSections;
    var linkListLen398 = linkList398.length;
    for (var linkIndex398 = 0; linkIndex398 < linkListLen398; linkIndex398++) {
      var linkData398 = linkList398[linkIndex398];
      output += '<li><a href="' + soy.$$escapeHtml(linkData398.href) + '"' + ((linkData398.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData398.text) + ((linkData398.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">À propos de cette application Web</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList416 = opt_data.contactLink;
    var linkListLen416 = linkList416.length;
    for (var linkIndex416 = 0; linkIndex416 < linkListLen416; linkIndex416++) {
      var linkData416 = linkList416[linkIndex416];
      output += (linkIndex416 == 0) ? '<li><a ' + ((linkData416.href) ? ' href="' + soy.$$escapeHtml(linkData416.href) + '"' : ' href="https://www.canada.ca/fr/contact.html"') + ((linkData416.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData416.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/contact.html">Coordonnées</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList440 = opt_data.termsLink;
    var linkListLen440 = linkList440.length;
    for (var linkIndex440 = 0; linkIndex440 < linkListLen440; linkIndex440++) {
      var linkData440 = linkList440[linkIndex440];
      output += (linkIndex440 == 0) ? '<li><a ' + ((linkData440.href) ? ' href="' + soy.$$escapeHtml(linkData440.href) + '"' : ' href="https://www.canada.ca/fr/transparence/avis.html"') + ((linkData440.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData440.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList464 = opt_data.privacyLink;
    var linkListLen464 = linkList464.length;
    for (var linkIndex464 = 0; linkIndex464 < linkListLen464; linkIndex464++) {
      var linkData464 = linkList464[linkIndex464];
      output += (linkIndex464 == 0) ? '<li><a ' + ((linkData464.href) ? ' href="' + soy.$$escapeHtml(linkData464.href) + '"' : ' href="https://www.canada.ca/fr/transparence/confidentialite.html"') + ((linkData464.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData464.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>';
  }
  output += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from gcweb-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
