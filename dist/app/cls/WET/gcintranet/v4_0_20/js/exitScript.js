function getHost(t){var e=document.createElement("a");return e.href=t,e.hostname}$(document).ready(function(){$(document.body).on("click","a",function(t){var e=$("html").attr("lang"),n=$(this).attr("href"),r=getHost(n),a=document.URL,c=getHost(a),o=document.querySelector('script[data-id="exitScript"]'),i=null,l=null;if(o&&(i=o.getAttribute("data-token"),l=o.getAttribute("data-token-domains")),/^(?:[a-z]+:)?\/\//i.test(n)){if(null!==l){var s=l.replace(/ /g,"").split(",").indexOf(r)>-1?!0:!1;if(s)return self.location=n,!1}r!==c&&(t.preventDefault(),$("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),$("#sExitModal").on("click","#eOK",function(){return self.location=i+"?targetUrl="+n+"&pageLang="+e,!1}))}}),$(document).on("submit","#wb-srch, #mb-pnl",function(t){t.preventDefault();var e=document.querySelector('script[data-id="exitScript"]'),n=e?e.getAttribute("data-token"):null,r=$("html").attr("lang"),a=$("#wb-srch-q").val();a||(a=$("#wb-srch-q-imprt").val()),$("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),$("#sExitModal").on("click","#eOK",function(){var t={en:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=eng&st1rt=0&s5bm3ts21rch=x&q="),fr:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=fra&st1rt=0&s5bm3ts21rch=x&q=")},e=t[r]+encodeURIComponent(a+"&wb-srch-sub=#wb-land");return self.location=n+"?targetUrl="+e,!1})})});