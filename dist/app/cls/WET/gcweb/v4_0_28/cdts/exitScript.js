function getHost(t){var e=document.createElement("a");return e.href=t,e.hostname}$(document).ready(function(){$(document.body).on("click","a",function(t){var e=$("html").attr("lang"),n=$(this).attr("href"),a=getHost(n),r=getHost(document.URL),o=document.querySelector('script[data-id="exitScript"]'),l=null,c=null;if(o&&(l=o.getAttribute("data-token"),c=o.getAttribute("data-token-domains"),displayModal=o.getAttribute("data-token-modal")),"_blank"==$(this).attr("target"))return window.open(n,"_blank"),!1;if(/^(?:[a-z]+:)?\/\//i.test(n)){if(null!==c&&c.replace(/ /g,"").split(",").indexOf(a)>-1)return self.location=n,!1;if(a!==r){if("false"==displayModal)return self.location=l+"?targetUrl="+encodeURIComponent(n)+"&pageLang="+e,!1;t.preventDefault(),$("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),$("#sExitModal").on("click","#eOK",function(){return self.location=l+"?targetUrl="+encodeURIComponent(n)+"&pageLang="+e,!1})}}}),$(document).on("submit","#wb-srch, #mb-pnl",function(t){t.preventDefault();var e=document.querySelector('script[data-id="exitScript"]'),n=e?e.getAttribute("data-token"):null,a=e?e.getAttribute("data-token-modal"):null,r=$("html").attr("lang"),o=$("#wb-srch-q").val();o||(o=$("#wb-srch-q-imprt").val());var l={en:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=eng&st1rt=0&s5bm3ts21rch=x&q="),fr:"http://recherche-search.gc.ca"+encodeURIComponent("/rGs/s_r?cdn=canada&st=s&num=10&langs=fra&st1rt=0&s5bm3ts21rch=x&q=")}[r]+encodeURIComponent(o+"&wb-srch-sub=#wb-land");if("false"==a)return self.location=n+"?targetUrl="+l,!1;$("#sExitModalLink").trigger("open.wb-lbx",[[{src:"#sExitModal",type:"inline"}],!0]),$("#sExitModal").on("click","#eOK",function(){return self.location=n+"?targetUrl="+l,!1})})});