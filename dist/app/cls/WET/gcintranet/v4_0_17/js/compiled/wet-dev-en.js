// This file was automatically generated from wet-dev-en.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.gcweb == 'undefined') { wet.gcweb = {}; }


wet.gcweb.refTop = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="icon" type="image/x-icon"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/wet-boew.min.css"><!--<![endif]--><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/theme.min.css"><!--[if lt IE 9]><link href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/favicon.ico" rel="shortcut icon" /><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/css/ie8-wet-boew.min.css" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew.min.js"><\/script><![endif]--><!--[if lte IE 9]><![endif]--><!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --><script>dataLayer1 = [];<\/script><!-- End Google Tag Manager -->';
};


wet.gcweb.top = function(opt_data, opt_ignored) {
  var output = '<!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer1\'?\'&l=\'+l:\'\';j.async=true;j.src=\'//www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer1\',\'GTM-TLGQ9K\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li></ul><header role="banner"><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="visible-md visible-lg text-right"><h2 class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">';
    var linkList21 = opt_data.lngLinks;
    var linkListLen21 = linkList21.length;
    for (var linkIndex21 = 0; linkIndex21 < linkListLen21; linkIndex21++) {
      var linkData21 = linkList21[linkIndex21];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData21.lang) + '" href="' + soy.$$escapeHtml(linkData21.href) + '">' + soy.$$escapeHtml(linkData21.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  output += '<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"><a href="http://www.canada.ca/en/index.html"><object type="image/svg+xml" tabindex="-1" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/sig-blk-en.svg"></object><span class="wb-inv"> Government of Canada</span></a></div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"><h2>Search and menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Search and menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Search and menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"><h2 class="wb-inv">Search</h2><form action="#" method="post" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search website</label><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Search Canada.ca"><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav role="navigation" id="wb-sm" class="wb-menu visible-md visible-lg" data-trgt="mb-pnl" data-ajax-fetch="https://cdn.canada.ca/gcweb-cdn-' + ((opt_data.cdnDev) ? 'dev' : 'live') + '/sitemenu/sitemenu-en.html" typeof="SiteNavigationElement"><h2 class="wb-inv">Topics menu</h2><div class="container nvbar"><div class="row"><ul class="list-inline menu"><li><a href="http://www.esdc.gc.ca/en/jobs/index.page">Jobs</a></li><li><a href="http://www.cic.gc.ca/english/index.asp">Immigration</a></li><li><a href="http://travel.gc.ca">Travel</a></li><li><a href="http://www.canada.ca/en/services/business/index.html">Business</a></li><li><a href="http://www.canada.ca/en/services/benefits/index.html">Benefits</a></li><li><a href="http://healthycanadians.gc.ca/index-eng.php">Health</a></li><li><a href="http://www.canada.ca/en/services/taxes/index.html">Taxes</a></li><li><a href="http://www.canada.ca/en/services/index.html">More services</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" class="" property="breadcrumb"><h2 class="wb-inv">You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList52 = opt_data.breadcrumbs;
      var itemListLen52 = itemList52.length;
      for (var itemIndex52 = 0; itemIndex52 < itemListLen52; itemIndex52++) {
        var itemData52 = itemList52[itemIndex52];
        output += '<li><a href="' + soy.$$escapeHtml(itemData52.href) + '">' + soy.$$escapeHtml(itemData52.title) + '</a></li>';
      }
    } else {
      output += '<li><a href="http://www.canada.ca/en/index.html">Home</a></li>';
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
      output += '<a href="#tab1" title="Tab 1: Find out how the Government’s tax relief makes it possible for you to keep your business in the family"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150525-1.jpg" alt=""></a></li><li><a href="#tab2" title="Tab 2: International Open Data Conference in Canada - May 28-29. #IODC15"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150527-1.jpg" alt=""></a></li><li><a href="#tab3" title="Tab 3: Watch true prescription drug abuse stories"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150525.jpg" alt=""></a></li><li><a href="#tab4" title="Tab 4: FIFA Women’s World Cup Canada 2015™ from June 6 to July 5, 2015"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150528-en.jpg" alt=""></a></li></ul><div class="tabpanels"><div role="tabpanel" id="tab1" class="in fade"><a href="http://www.budget.gc.ca/2015/prebudget-prebudgetaire/02/index-eng.html?utm_source=CanCa&amp;utm_medium=Carousel&amp;utm_content=Jack&amp;utm_campaign=PostBud15#6" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150525-1.jpg" alt=""><figcaption><p>Find out how the Government’s tax relief makes it possible for you to keep your business in the family</p></figcaption></figure></a></div><div role="tabpanel" id="tab2" class="out fade"><a href="http://open.canada.ca/en/content/international-open-data-conference?utm_source=referral&amp;utm_medium=carousel&amp;utm_term=canada&amp;utm_content=IODC&amp;utm_campaign=IODC15" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150527-1.jpg" alt=""><figcaption><p>International Open Data Conference in Canada - May 28-29. #IODC15</p></figcaption></figure></a></div><div role="tabpanel" id="tab3" class="out fade"><a href="http://www.healthycanadians.gc.ca/drug-prevention-drogues/testimonial-temoignage-eng.php?utm_src=pidu_15&amp;utm_medium=banner_en&amp;utm_campaign=carousel_canada.ca" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150525.jpg" alt=""><figcaption><p>Watch true prescription drug abuse stories</p></figcaption></figure></a></div><div role="tabpanel" id="tab4" class="out fade"><a href="http://canada.pch.gc.ca/eng/1414508973424?utm_source=canadianheritage&amp;utm_medium=cdnsitecarousel-eng&amp;utm_campaign=FIFA2015" class="learnmore"><figure><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/img/promos/20150528-en.jpg" alt=""><figcaption><p><abbr title="International Federation of Association Football">FIFA</abbr> Women’s World Cup Canada 2015™ from June 6 to July 5, 2015</p></figcaption></figure></a></div>';
    }
    output += '</div></div></div></div></aside>';
  }
  output += (opt_data.showPreContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><!--<img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '" class="img-responsive" alt="Place holder image." />--></div></div></aside>' : '';
  return output;
};


wet.gcweb.calendar = function(opt_data, opt_ignored) {
  return '<div id="calendar1"></div><div class="wb-calevt" data-calevt-src="calendar1"><ol><li><section><h4><a href="' + soy.$$escapeHtml(opt_data.href) + '" rel="external">' + soy.$$escapeHtml(opt_data.title) + '</a></h4><p><time datetime="2013-03-11">' + soy.$$escapeHtml(opt_data.date) + '</time></p><p>' + soy.$$escapeHtml(opt_data.caption) + '</p></section></li></ol></div>';
};


wet.gcweb.feeds = function(opt_data, opt_ignored) {
  var output = '<section class="wb-feeds limit-' + soy.$$escapeHtml(opt_data.feeds.length) + '"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul class="feeds-cont">';
  var itemList140 = opt_data.feeds;
  var itemListLen140 = itemList140.length;
  for (var itemIndex140 = 0; itemIndex140 < itemListLen140; itemIndex140++) {
    var itemData140 = itemList140[itemIndex140];
    output += '<li><a href="' + soy.$$escapeHtml(itemData140.link) + '" rel="external">' + soy.$$escapeHtml(item.caption) + '</a></li>';
  }
  output += '</ul></section>';
  return output;
};


wet.gcweb.media = function(opt_data, opt_ignored) {
  return '<figure class="wb-mltmd" data-wb-mltmd=\'{"shareUrl": "' + soy.$$escapeHtml(opt_data.url) + '"}\'><video title="' + soy.$$escapeHtml(opt_data.title) + '"><source type="video/youtube" src="' + soy.$$escapeHtml(opt_data.url) + '" /></video><figcaption><p>' + soy.$$escapeHtml(opt_data.title) + ((opt_data.transcript != null) ? ' (<a href="' + soy.$$escapeHtml(opt_data.transcript) + '">Transcript</a>)' : '') + '</p></figcaption></figure>';
};


wet.gcweb.preFooter = function(opt_data, opt_ignored) {
  var output = ((opt_data.showPostContent != false) ? '<aside class="prm-sngl"><div class="container"><div class="row"><h2 class="wb-inv">Promotions</h2><!--<img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '" class="img-responsive" alt="Place holder image." />--></div></div></aside>' : '') + '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd"><dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd></dl></div>' + ((opt_data.showFeedback != false) ? '<div class="clear visible-xs"></div><div class="col-sm-4 col-xs-6">' + ((opt_data.showFeedback != null) ? '<a href="' + soy.$$escapeHtml(opt_data.showFeedback) + '" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>Feedback<span class="wb-inv"> about this web site</span></a>' : '<a href="http://www.canada.ca/en/contact/feedback.html" class="btn btn-default"><span class="glyphicon glyphicon-comment mrgn-rght-sm"></span>Feedback<span class="wb-inv"> about this web site</span></a>') + '</div>' : '');
  if (opt_data.showShare != false) {
    output += '<div class="col-sm-3 col-xs-6 text-right">';
    if (opt_data.showShare != null) {
      output += '<div class="wb-share" data-wb-share=\'{"filter": [';
      var itemList189 = opt_data.showShare;
      var itemListLen189 = itemList189.length;
      for (var itemIndex189 = 0; itemIndex189 < itemListLen189; itemIndex189++) {
        var itemData189 = itemList189[itemIndex189];
        output += '"' + soy.$$escapeHtml(itemData189) + '"' + ((! (itemIndex189 == itemListLen189 - 1)) ? ', ' : '');
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
  var output = ((opt_data.showFeatures != null) ? '<aside class="gc-nttvs container"><h2>Government of Canada activities and initiatives</h2><div id="gcwb_prts" class="wb-eqht row" data-ajax-replace="https://cdn.canada.ca/gcweb-cdn-' + ((opt_data.cdnDev) ? 'dev' : 'live') + '/features/features-en.html"><p class="mrgn-lft-md"><a href="http://www.canada.ca/activities.html">Access Government of Canada activities and initiatives</a></p></div></aside>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr"><h2 class="wb-inv">About this site</h2><div class="row">';
  if (opt_data.showFooter != false) {
    output += '<div class="col-sm-3 col-lg-3"><section><h3>Contact information</h3><ul class="list-unstyled">';
    if (opt_data.contactLinks != null) {
      var linkList218 = opt_data.contactLinks;
      var linkListLen218 = linkList218.length;
      if (linkListLen218 > 0) {
        for (var linkIndex218 = 0; linkIndex218 < linkListLen218; linkIndex218++) {
          var linkData218 = linkList218[linkIndex218];
          output += '<li><a href="' + soy.$$escapeHtml(linkData218.href) + '">' + soy.$$escapeHtml(linkData218.text) + '</a></li>';
        }
      } else {
        output += '&nsbp;';
      }
    } else {
      output += '<li><a class="gl-footer" href="http://www.canada.ca/en/contact/index.html#aat">Most asked-about topics</a></li><li><a class="gl-footer" href="http://www.canada.ca/en/contact/index.html#spe">Specialized enquiries</a></li><li><a class="gl-footer" href="http://www.canada.ca/en/contact/index.html#gen">General enquiries</a></li>';
    }
    output += '</ul></section><section><h3>News</h3><ul class="list-unstyled"><li><a href="http://news.gc.ca/web/index-en.do">Newsroom</a></li><li><a href="http://news.gc.ca/web/nwsprdct-en.do?mthd=tp&amp;crtr.tp1D=1">News releases</a></li><li><a href="http://news.gc.ca/web/nwsprdct-en.do?mthd=tp&amp;crtr.tp1D=3">Media advisories</a></li><li><a href="http://news.gc.ca/web/nwsprdct-en.do?mthd=tp&amp;crtr.tp1D=970">Speeches</a></li><li><a href="http://news.gc.ca/web/nwsprdct-en.do?mthd=tp&amp;crtr.tp1D=980">Statements</a></li></ul></section></div><section class="col-sm-3 col-lg-3"><h3>Government</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/en/gov/system">How government works</a></li><li><a href="http://www.canada.ca/en/gov/dept">Departments & agencies</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="http://www.canada.ca/en/gov/ministers">Ministers</a></li><li><a href="http://www.canada.ca/en/gov/publicservice">Public service & military</a></li><li><a href="http://www.canada.ca/en/gov/policy">Policies, regulations & laws</a></li><li><a href="http://www.canada.ca/en/gov/libraries">Libraries</a></li><li><a href="http://www.canada.ca/en/gov/publications">Publications</a></li><li><a href="http://www.canada.ca/en/gov/statistics">Statistics & data</a></li><li><a href="http://www.canada.ca/en/newsite.html">About Canada.ca</a></li></ul></section><section class="col-sm-3 col-lg-3 brdr-lft"><h3>Transparency</h3><ul class="list-unstyled"><li><a href="http://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://open.canada.ca/en">Open government</a></li><li><a href="http://www.canada.ca/en/transparency/disclosure.html">Proactive disclosure</a></li><li><a href="http://www.canada.ca/en/transparency/terms.html">Terms & conditions</a></li><li><a href="http://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></section><div class="col-sm-3 col-lg-3 brdr-lft"><section><h3>Feedback</h3><p><a href="http://www.canada.ca/en/contact/feedback.html"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/feedback.png" alt="Feedback about this Web site"></a></p></section><section><h3>Social media</h3><p><a href="http://www.canada.ca/en/social"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/social.png" alt="Social media"></a></p></section><section><h3>Mobile centre</h3><p><a href="http://www.canada.ca/en/mobile"><img src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/mobile.png" alt="Mobile centre"></a></p></section></div>';
  } else {
    output += '<section class="col-sm-2 col-lg-offset-3"><ul class="list-unstyled"><li><a class="gl-footer" href="http://www.canada.ca/en/contact/index.html">Contact information</a></li></ul></section><section class="col-sm-3 col-lg-2"><ul class="list-unstyled"><li><a href="http://www.canada.ca/en/transparency/terms.html">Terms & conditions</a></li></ul></section><section class="col-sm-3 col-lg-3"><ul class="list-unstyled"><li><a href="http://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></section>';
  }
  output += '</div> </nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-12 text-right"><object type="image/svg+xml" tabindex="-1" role="img" data="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/assets/wmms-blk.svg" aria-label="Symbol of the Government of Canada"></object></div></div></div></div></footer>';
  return output;
};


wet.gcweb.refFooter = function(opt_data, opt_ignored) {
  return '<!--[if gte IE 9 | !IE ]><!--><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"><\/script><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/wet-boew.min.js"><\/script><!--<![endif]--><!--[if lt IE 9]><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/ie8-wet-boew2.min.js"><\/script><![endif]--><script src="' + soy.$$escapeHtml(opt_data.templateDomain) + '/app/cls/WET/gcweb/v4_0_15/js/theme.min.js"><\/script>';
};
