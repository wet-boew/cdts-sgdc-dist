function getHost(a){var b=document.createElement("a");return b.href=a,b.hostname}$(document).ready(function(){$(document.body).on("click","a",function(a){var b=$("html").attr("lang"),c=$(this).attr("href"),d=getHost(c),e=document.URL,f=getHost(e),g=document.querySelector('script[data-id="exitScript"]'),h=null,i=null;if(g&&(h=g.getAttribute("data-token"),i=g.getAttribute("data-token-domains"),displayModal=g.getAttribute("data-token-modal")),"_blank"==$(this).attr("target"))return window.open(c,"_blank"),!1;if(/^(?:[a-z]+:)?\/\//i.test(c)){if(null!==i){var j=i.replace(/ /g,"").split(",").indexOf(d)>-1;if(j)return self.location=c,!1}if(d!==f){if("false"==displayModal)return self.location=h+"?targetUrl="+encodeURIComponent(c)+"&pageLang="+b,!1;a.preventDefault(),$("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),$("#sExitModal").on("click","#eOK",function(){return self.location=h+"?targetUrl="+encodeURIComponent(c)+"&pageLang="+b,!1})}}}),$(document).on("submit","#wb-srch, #mb-pnl",function(a){a.preventDefault();var b=document.querySelector('script[data-id="exitScript"]'),c=b?b.getAttribute("data-token"):null,d=b?b.getAttribute("data-token-modal"):null,e=$("html").attr("lang"),f=$("#wb-srch-q").val();f||(f=$("#wb-srch-q-imprt").val());var g={en:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=eng&st1rt=0&s5bm3ts21rch=x&q="),fr:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=fra&st1rt=0&s5bm3ts21rch=x&q=")},h=g[e]+encodeURIComponent(f+"&wb-srch-sub=#wb-land");return"false"==d?(self.location=c+"?targetUrl="+h,!1):($("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),void $("#sExitModal").on("click","#eOK",function(){return self.location=c+"?targetUrl="+h,!1}))})});