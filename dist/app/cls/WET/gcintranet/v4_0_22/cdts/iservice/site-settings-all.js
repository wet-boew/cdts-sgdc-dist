$(function () {
     $(".module-challengequestion, .passwordRequirements, .object-showpassword").removeClass('no-js');
     $(".passwordRequirements, .capslockWarning, .object-third-party").hide();
     $(".form-control-show, .object-js").show();
 });

//Execute resize function only when the user has stopped resizing
var resizeId;
$(window).resize(function() {
	$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
	clearTimeout(resizeId);
    resizeId = setTimeout(checkMenu, 400);
});

var currentMenu = "unknown";

function checkMenu(){
	var activeMenu = $("#jb-menu-group").css("display");
	
	//Mobile menu functions
	if (activeMenu != currentMenu) {
		if (activeMenu === 'block') {
			currentMenu = activeMenu;
			//console.log('Mobile menu');
			
			$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
	    	$('#jb-menu-list').hide();
			$('ul.jb-cat').hide();	
			$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
			
			//Get rid of any previous attached functions
			$('a.jb-cat-menu-item').off('click.menuCatLink');
			
			//Attached new mobile menu functions
	    	$('a.jb-cat-menu-item').on('click.menuCatLink',function(event) {
    		currentMenu = "unknown";
	    		if ($(this).closest('li.jb-cat-menu').find('ul.jb-cat').is(':visible')) {
	    			// Hide Menu
	    			$(this).children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
	    			$(this).closest('li.jb-cat-menu').find('ul.jb-cat').hide();
	    		} else if (!$(this).closest('li.jb-cat-menu').find('ul.jb-cat').is(':visible')) {
	    			// Show Menu
	    			$('ul.jb-cat').hide();
	    			$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
	
	    			$(this).children('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	        		$(this).closest('li.jb-cat-menu').find('ul.jb-cat').slideDown('100');
	        		//console.log('Mobile ZAP!');
	    		}
	    		event.preventDefault();
	    	});
		}
		
		//Desktop menu functions
		if (activeMenu === 'inline-block') {
			currentMenu = activeMenu;
			//console.log('Desktop menu');
			
			$('#jb-menu-list').hide();
    		$('ul.jb-cat').show();
    		$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
    		
			//Get rid of any previous attached functions
    		$('a.jb-cat-menu-item').off('click.menuCatLink');
    		
			//Attached new desktop menu functions
			$('a.jb-cat-menu-item').on('click.menuCatLink',function(event) {
    			//console.log('Desktop ZAP!');
    			currentMenu = "unknown";
    			$('ul.jb-cat').show();
    			//event.preventDefault();
    		});
		}
	}
}


//Dropdown function
dropdownToggle = function() {
	$('a.dropdown-toggle').click( function(e) {
		$('a.dropdown-toggle').not(this).each( function(e) {
			$(this).parent('div.btn-group').removeClass('open');
		});
		if ($(this).parent().is('div.btn-group')) {
			$(this).attr('aria-expanded', function (i, attr) {
			    return attr == 'true' ? 'false' : 'true'
			});
			$(this).parent('div.btn-group').toggleClass('open');
		}		
		return false;
	});

}
//Initiate Dropdown once document has been loaded
$(document).on("wb-ready.wb", dropdownToggle);

//Dropdown Bar function
dropdownBarToggle = function() {
	$('a.dropdown-bar-toggle').click( function(e) {
		/*$('a.dropdown-toggle-bar').not(this).each( function(e) {
			$(this).parent('div.btn-group').children('div.dropdown-bar-menu').hide();
		});*/
		$('a.dropdown-toggle').not(this).each( function(e) {
			$(this).parent('div.btn-group').removeClass('open');
		});
		if ($(this).parent().is('div.btn-group')) {
			$(this).parent('div.btn-group').toggleClass('open');
			$(this).parent('div.btn-group').next('div.dropdown-bar-menu').toggle();
		}		
		return false;
	});

}
//Initiate Dropdown once document has been loaded
$(document).on("wb-ready.wb", dropdownBarToggle);

//Remove Dropdown function
removeDropdownToggle = function() {
	$('html').click( function(){
		var dropdownToggle = $('.dropdown-menu').parent('div.btn-group');
		if (!$(this).parent().is('div.btn-group')) {
			$('a.dropdown-toggle').attr('aria-expanded','false');
			$(dropdownToggle).removeClass('open');
		}
	});
}
//Initiate Remove Dropdown once document has been loaded
$(document).on("ready", removeDropdownToggle);

//*** Begin jQuery ***/
$(document).ready(function(){
	//Sign On State Button
	$('#signon-state').click(function(e) {
		$(this).closest('div.signon').find('div.btn-group').toggle();
		$(this).children('.fa-caret-down, .fa-caret-right').toggleClass("fa-caret-down fa-caret-right");
	});
	
	$('#close-modal-command').show();
	$('#backtojb-command').hide();
	//JB menu general functions
	$('.jbservices').click( function(event){
		//Activate Menu
		checkMenu();
	    $('#jb-menu-list').toggle();
	    $(this).children('.fa-chevron-down, .fa-bars').toggleClass("fa-chevron-down fa-bars");
	    $('#jb-menu-list ul').find('li.jb-cat-menu:nth-child(1)').find('a.jb-cat-menu-item').focus();
	    event.preventDefault();
	});

	$('ul.jb-cat').on('focus', function(event) {
		$(document.activeElement).find('li:nth-child(1)').find('a.list-group-item').focus();
		event.preventDefault();
	});
	
	$('#jb-menu-list a').keydown( function(event) {
		
		// Up key
	    if (event.keyCode == 38) {
	        if ($(document.activeElement).is('a.jb-cat-menu-item')) {
	        	$(document.activeElement).closest('li.jb-cat-menu').find('ul.jb-cat').children('li:nth-last-child(1)').find('a.list-group-item').focus();
	        } else	if ($(document.activeElement).is('a.list-group-item')) {
				if ($(document.activeElement).closest('li').is(':nth-child(1)')) {
					//$(document.activeElement).closest('li.jb-cat-menu').find('a.jb-cat-menu-item').focus();
					$(document.activeElement).closest('li').siblings(':nth-last-child(1)').find('a.list-group-item').focus();
				} else if (!$(document.activeElement).closest('li').is(':nth-child(1)')) {
					$(document.activeElement).closest('li').prev().find('a.list-group-item').focus();
				}
	        }
	        event.preventDefault();
	    }
		
	    // Down key
	    if (event.keyCode == 40) {
	    	if ($(document.activeElement).is('a.jb-cat-menu-item')) {
	    		$(document.activeElement).closest('li.jb-cat-menu').find('ul.jb-cat').children('li:first').find('a.list-group-item').focus();
	        } else if ($(document.activeElement).is('a.list-group-item')) {
				if ($(document.activeElement).closest('li').is(':nth-last-child(1)')) {
					//$(document.activeElement).closest('li.jb-cat-menu').find('a.jb-cat-menu-item').focus();	
					$(document.activeElement).closest('li').siblings(':nth-child(1)').find('a.list-group-item').focus();
				} else if (!$(document.activeElement).closest('li').is(':nth-last-child(1)')) {
					$(document.activeElement).closest('li').next().find('a.list-group-item').focus();
				}
	        }
	    	event.preventDefault();
	    }
	    
	    // Left key
	    if (event.keyCode == 37) {
	    	if ($(document.activeElement).is('a.jb-cat-menu-item')) {
	    		if ($(document.activeElement).closest('li').is(':nth-child(1)')) {
	    			$(document.activeElement).closest('li').siblings(':nth-last-child(1)').find('a.jb-cat-menu-item').focus();
	    		} else if (!$(document.activeElement).closest('li').is(':nth-child(1)')) {
	    			$(document.activeElement).closest('li.jb-cat-menu').prev().find('a.jb-cat-menu-item').focus();
	    		}
	        } else if ($(document.activeElement).is('a.list-group-item')) {
	    		if ($(document.activeElement).closest('ul.jb-cat').closest('li').is(':nth-child(1)')) {
	    			$(document.activeElement).closest('ul.jb-cat').closest('li').siblings(':nth-last-child(1)').find('a.jb-cat-menu-item').focus();
	    		} else if (!$(document.activeElement).closest('ul.jb-cat').closest('li').is(':nth-child(1)')) {
	    			$(document.activeElement).closest('ul.jb-cat').closest('li').prev().find('a.jb-cat-menu-item').focus();
	    		}
	        } else {
	        	$(document.activeElement).closest('ul.jb-cat').closest('li').prev().find('a.jb-cat-menu-item').focus();
	        }
	    	event.preventDefault();
	    }
	    
	    // Right key
	    if (event.keyCode == 39) {
	    	if ($(document.activeElement).is('a.jb-cat-menu-item')) {
	    		if ($(document.activeElement).closest('li').is(':nth-last-child(1)')) {
	    			$(document.activeElement).closest('li').siblings(':nth-child(1)').find('a.jb-cat-menu-item').focus();
	    		} else if (!$(document.activeElement).closest('li').is(':nth-last-child(1)')) {
	    			$(document.activeElement).closest('li').next().find('a.jb-cat-menu-item').focus();
	    		}
	        } else if ($(document.activeElement).is('a.list-group-item')) {
	    		if ($(document.activeElement).closest('ul.jb-cat').closest('li').is(':nth-last-child(1)')) {
	    			$(document.activeElement).closest('ul.jb-cat').closest('li').siblings(':nth-child(1)').find('a.jb-cat-menu-item').focus();
	    		} else if (!$(document.activeElement).closest('ul.jb-cat').closest('li').is(':nth-last-child(1)')) {
	    			$(document.activeElement).closest('ul.jb-cat').closest('li').next().find('a.jb-cat-menu-item').focus();	
	    		}
	        } else {
	        	$(document.activeElement).closest('ul.jb-cat').closest('li').next().find('a.jb-cat-menu-item').focus();	
	        }
	        event.preventDefault();
	    }
	    
	    // Escape key
	    if(event.which == 27) {
	    	$('#jb-menu-list').hide();
	    	if ($('#jb-menu-list').is(':visible')) {
		    	$('.jbservices').children('.fa').addClass('fa-chevron-down').removeClass('fa-bars');
		    } else {
		    	$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
		    	$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
		    }
	    }
	});			
	$(document).click( function(e){
		if (!$(e.target).parents().is('#jb-menu-group')) {
	    	$('#jb-menu-list').hide();
	    	if ($('#jb-menu-list').is(':visible')) {
		    	$('.jbservices').children('.fa').addClass('fa-chevron-down').removeClass('fa-bars');
		    } else {
		    	$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
		    	$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
		    }
		} 
	});
	$(document).focusin( function(e){
		if (!$(e.target).parents().is('#jb-menu-group')) {
			//console.log('Outside inside menu-group');
			$('#jb-menu-list').hide();
			if ($('#jb-menu-list').is(':visible')) {
		    	$('.jbservices').children('.fa').addClass('fa-chevron-down').removeClass('fa-bars');
		    } else {
		    	$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
		    	$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
		    }
		}
	});
    
    if ($('#jb-menu-list').is(':visible')) {
    	$('.jbservices').children('.fa').addClass('fa-chevron-down').removeClass('fa-bars');
    } else {
    	$('.jbservices').children('.fa').addClass('fa-bars').removeClass('fa-chevron-down');
    	$('a.jb-cat-menu-item').children('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-down');
    }
   
});
