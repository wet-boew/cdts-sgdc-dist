// Function to get domain name
// Get date
var d = new Date;
// Generate a cachebust every hour
var rnd_str_hour = 'cacheBust=' + d.getFullYear() + '_' + d.getMonth() + '_' + d.getDay() + '_' + d.getHours();

$(document).ready(function () {
	// Replace URL
	$(function(){
		$('#gcwb_prts').attr('data-ajax-replace', function() {
			if (href) {
				href += (href.match(/\?/) ? '&' : '?') + rnd_str_hour;
				$(this).attr('href', href);
			}
		});
	});
});