// Function to get domain name
function getHost(url) {
	var a = document.createElement('a');
	a.href = url;
	return a.hostname;
}

$(document).ready(function(){
	$(document.body).on('click', 'a', function(event) {
		// Get exitURL from JS script injected by GCT
		var exitURL = document
			.querySelector('script[data-id="exitUrlScript"][data-token]')
			.getAttribute('data-token');
		// Get page language
		var pageLang = $("html").attr('lang');
		// Get URL that was clicked and grab domain
		var targetUrl = $(this).attr('href');
		var targetUrlDomain = getHost(targetUrl);
		// Get URL of current page and grab domain
		var currentUrl = document.URL;
		var currentUrlDomain = getHost(currentUrl);
		// Testing
		alert(targetUrlDomain + ' is the targetUrlDomain and this is currentUrlDomain ' + currentUrlDomain);
		
		// Now let's check if it's a relative link
		if (/^(?:[a-z]+:)?\/\//i.test(targetUrl)) {
			// Compare target url and current url to see if a redirect is required
			if (targetUrlDomain!=currentUrlDomain){
				// Domains don't match so prevent default event
				event.preventDefault();
				// Testing
				alert(exitURL + '?exitdomain='+ getHost(exitURL) +'&targetUrl=' + targetUrl + '&targetdomain='+ getHost(targetUrl) +'&pageLang=' + pageLang);
				// Redirect to exitURL variable with parameters
				//self.location = exitURL + '?targetUrl=' + targetUrl + '&pageLang=' + pageLang;
				//return false;
			} // Domains didn't match so continue with link
		}
	});
});