if("undefined"==typeof wet)var wet={};"undefined"==typeof wet.plugins&&(wet.plugins={});
wet.plugins.calendar1=function(b,g){for(var c='<div id="calendar1"></div><div class="wb-calevt" data-calevt-src="calendar1"><ol>',e=b.events,f=e.length,d=0;d<f;d++)var a=e[d],c=c+('<li><section><h4><a href="'+soy.$$escapeHtml(a.href)+'" rel="external">'+soy.$$escapeHtml(a.title)+'</a></h4><p><time datetime="'+soy.$$escapeHtml(a.date)+'">'+soy.$$escapeHtml(a.date)+"</time></p><p>"+soy.$$escapeHtml(a.description)+"</p></section></li>");return c+"</ol></div>"};
wet.plugins.feeds=function(b,g){for(var c='<section class="wb-feeds limit-'+soy.$$escapeHtml(b.limit)+'"><h3>'+soy.$$escapeHtml(b.title)+'</h3><ul class="feeds-cont">',e=b.feeds,f=e.length,d=0;d<f;d++)var a=e[d],c=c+('<li><a href="'+soy.$$escapeHtml(a.href)+'" rel="external">'+soy.$$escapeHtml(a.text)+"</a></li>");return c+"</ul></section>"};
wet.plugins.gallery=function(b,g){for(var c='<section class="wb-lbx lbx-gal"><h4>'+soy.$$escapeHtml(b.title)+'</h4><ul class="list-inline">',e=b.images,f=e.length,d=0;d<f;d++)var a=e[d],c=c+('<li><a href="'+soy.$$escapeHtml(a.href)+'" title="'+soy.$$escapeHtml(a.alt)+'"><img src="'+soy.$$escapeHtml(a.src)+'" alt="'+soy.$$escapeHtml(a.alt)+'" '+(null!=a.longdesc?'aria-describedby="'+soy.$$escapeHtml(a.longdesc)+'" longdesc="#'+soy.$$escapeHtml(a.longdesc)+'" ':"")+"/></a></li>");return c+"</ul></section>"};
wet.plugins.youtube=function(b,g){return'<figure class="wb-mltmd" data-wb-mltmd=\'{"shareUrl": "'+soy.$$escapeHtml(b.url)+'"}\'><video title="'+soy.$$escapeHtml(b.title)+'"><source type="video/youtube" src="'+soy.$$escapeHtml(b.url)+'" /></video><figcaption><p>'+soy.$$escapeHtml(b.title)+(null!=b.transcript?' (<a href="'+soy.$$escapeHtml(b.transcript)+'">Transcript</a>)':"")+"</p></figcaption></figure>"};
