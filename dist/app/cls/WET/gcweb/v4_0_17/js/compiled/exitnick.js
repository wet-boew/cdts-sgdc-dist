alert("script loaded");
$('a').click(function(){
	/*
	var engMsg = "You are about to leave a secure site. Do you wish to continue ?";
	var fraMsg = "Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?";
	var intPage = "http://www.zombo.com/";
	*/
	var protocol = document.location.protocol;
	var domain = document.location.hostname;
	var targetUrl = $(this).attr('href');
	alert(protocol+'//'domain+' '+targetUrl);
	if (targetUrl.indexOf(protocol+'//'+domain) == -1){
		switch(var pageLang = $("html").attr('lang');){
			case 0:
				pageLang = "en";
				alert(engMsg);
				window.location = intPage;
				break;
			case 1:
				pageLang = "fr";
				alert(fraMsg);
				window.location = intPage;
				break;
		}
	}
});