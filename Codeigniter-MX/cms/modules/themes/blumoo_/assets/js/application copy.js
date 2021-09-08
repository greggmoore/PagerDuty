$('#alert_message, #message, #sf-alert_message, #sf-message').hide();
	$('.us_phone').mask('(000) 000-0000');
	$('.zipcode').mask('00000-000');
	
		$('#defaultForm').bootstrapValidator({
	        message: 'This value is not valid',
	        submitHandler: function(validator, form) {
	            
	            	start_process('Processing...', 1);
		            
		            $.ajax({
		                data: $('#defaultForm').serialize(),
		                type: "POST",
		                url: "/contact", 
		                contentType: "application/x-www-form-urlencoded; iso-8859-7",
		                dataType: 'json',
		                success: function(data) {
		               
		                    if(data)
		                    {
								//resetForm('defaultForm');
								$('#defaultForm').fadeOut(400, function() {
									$('#alert_message').addClass(data.css).fadeIn(400).html(data.alert_message);
									$('#message').fadeIn(400).html(data.message) ;
								});
		                    }
		                    
		                    end_process();
		                }
		               
		            });
		            return false;
	        },
	        fields: {
	            first_name: {
	                message: 'Your first name is not valid',
	                validators: {
	                    notEmpty: {
	                        message: 'Your first name is required and can\'t be empty'
	                    },
	                    stringLength: {
	                        min: 2,
	                        max: 30,
	                        message: 'Your first name must be more than 2 and less than 30 characters long'
	                    }
	              
	                }
	            },
	            
	            last_name: {
	                message: 'Your last name is not valid',
	                validators: {
	                    notEmpty: {
	                        message: 'Your last name is required and can\'t be empty'
	                    },
	                    stringLength: {
	                        min: 2,
	                        max: 30,
	                        message: 'Your last name must be more than 2 and less than 30 characters long'
	                    }
	 
	                }
	            },
	            
	            email: {
	                validators: {
	                    notEmpty: {
	                        message: 'The email address is required and can\'t be empty'
	                    },
	                    emailAddress: {
	                        message: 'The input is not a valid email address'
	                    }
	                }
	            }
	        }
	    });

$("a[rel*=external]").click(function () {
	    window.open(this.href);
	    return false
	});
	
	$('a.back').click(function(){
        parent.history.back();
        return false;
    });

	
	 /*-----------------------------------------------
		ANSWER TO ANCHOR WRAP
	----------------------------------------------- */
    $('.href').click(function() {
        window.document.location = $(this).data("href");
    });
    
    $('.marker').click(function() {
        window.document.location = $(this).data("href");
    });
    
     $('a.back').click(function(){
        parent.history.back();
        return false;
    });



	jQuery(function( $ ) {
	'use strict';
	var $window = $( window );
	var $body   = $( 'body' );

	/* -----------------------------------------
	Responsive Menus Init with mmenu
	----------------------------------------- */
	var $mainNavs   = $( '.navigation-main' );
	var $mobileNav = $( '#mobilemenu' );
	$mobileNav.append( '<ul/>' );

	$mainNavs.each( function () {
		var $this = $( this );
		$this.clone().removeAttr( 'id' ).removeClass().appendTo( $mobileNav.find( 'ul' ).first() );
	} );
	$mobileNav.find( 'li' ).removeAttr( 'id' );

	$mobileNav.mmenu({
		navbar: {
		    title: "MOO!"
		  },
		
		offCanvas: {
			position: 'top',
			zposition: 'front'
		},
		"autoHeight": true,
		"navbars": [
			{
				"position": "top",
				"content": [
					"prev",
					"title",
					"close"
				]
			}
		]
	});

	/* -----------------------------------------
	Responsive Videos with fitVids
	----------------------------------------- */
	$body.fitVids();

	/* -----------------------------------------
	Image Lightbox
	----------------------------------------- */
	$( ".ci-lightbox, a[data-lightbox^='gal']" ).magnificPopup( {
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true
		}
	} );

	$window.on( 'load', function() {
		/* -----------------------------------------
		MatchHeight
		----------------------------------------- */
		$( '.row-equal' ).find( '[class^="col"]' ).matchHeight();

		/* -----------------------------------------
		Video Backgrounds
		----------------------------------------- */
		var $videoWrap = $('.ci-video-wrap');
		var $videoBg = $('.ci-video-background');

		// YouTube videos
		function onYouTubeAPIReady() {
			if ( typeof YT === 'undefined' || typeof YT.Player === 'undefined' ) {
				return setTimeout(onYouTubeAPIReady, 333);
			}

			var ytPlayer = new YT.Player('youtube-vid', {
				videoId: $videoBg.data('video-id'),
				playerVars: {
					autoplay: 1,
					controls: 0,
					showinfo: 0,
					modestbranding: 1,
					loop: 1,
					playlist: $videoBg.data('video-id'),
					fs: 0,
					cc_load_policy: 0,
					iv_load_policy: 3,
					autohide: 0
				},
				events: {
					onReady: function (event) {
						event.target.mute();
					},
					onStateChange: function (event) {
						if (YT.PlayerState.PLAYING) {
							$videoWrap.addClass('visible');
						}
					}
				}
			});
		}

		function onVimeoAPIReady() {
			if ( typeof Vimeo === 'undefined' || typeof Vimeo.Player === 'undefined' ) {
				return setTimeout(onVimeoAPIReady, 333);
			}

			var player = new Vimeo.Player($videoBg, {
				id: $videoBg.data('video-id'),
				loop: true,
				autoplay: true,
				byline: false,
				title: false,
			});

			player.setVolume(0);

			// Cuepoints seem to be the best way to determine
			// if the video is actually playing or not
			player.addCuePoint(.1).catch(function () {
				$videoWrap.addClass('visible');
			});

			player.on('cuepoint', function () {
				$videoWrap.addClass('visible');
			});
		}

		var videoType = $videoBg.data('video-type');

		if ($videoBg.length && window.innerWidth > 1080) {
			var tag = document.createElement('script');
			var firstScript = $('script');

			if (videoType === 'youtube') {
				tag.src = 'https://www.youtube.com/player_api';
				firstScript.parent().prepend(tag);
				onYouTubeAPIReady();
			} else if (videoType === 'vimeo') {
				tag.src = 'https://player.vimeo.com/api/player.js';
				firstScript.parent().prepend(tag);
				onVimeoAPIReady();
			}
		}
	});
});
