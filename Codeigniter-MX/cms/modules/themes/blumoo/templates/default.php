<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <?php echo meta($this->meta_info); ?>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="google-site-verification" content="1VlqOdoNE0DHaBdv3Z9Wpvp28VxBmMzmtCBurRtSaG8" />
    <meta name="msvalidate.01" content="766058DD8CE39899AD5D54E371764B64" />
    
    <link rel="icon" type="image/x-icon"  sizes="16x16" href="<?php echo base_url().$this->template_path ; ?>/assets/images/icons/favicon.ico" hreflang="en-us" />
	<?php echo open_graph($this->open_graph); ?>
	<?php if(isset($this->og_image)) echo '<link rel="image_src" href="'.$this->og_image.'" />' ; ?>
	
	<meta property="twitter:card:id" content="Blumoo" />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="Blumoo Creative Digital Marketing - Digital Marketing Services" />
	<meta property="twitter:description" content="Your business is unique and so are your goals. That’s why every digital marketing solutions is custom tailored for each individual client." />
	<meta property="twitter:image" content="https://www.blumoocreative.com/data/icons/ios/Icon@2x.png" />
	<title><?php echo $this->meta_title; ?></title>
	<link rel="image_src" href="https://www.blumoocreative.com/data/logos/moohead.png" />
	<link rel="icon" href="<?php echo base_url().$this->template_path ; ?>/assets/images/favicons/blumoo.ico" />
	
	<link rel="apple-touch-icon" href="https://www.blumoocreative.com/data/icons/ios/AppIcon.appiconset/Icon-60@2x.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="https://www.blumoocreative.com/data/icons/ios/AppIcon.appiconset/Icon-60@3x.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="https://www.blumoocreative.com/data/icons/ios/AppIcon.appiconset/Icon-76.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="https://www.blumoocreative.com/data/icons/ios/AppIcon.appiconset/Icon-76@2x.png" />
	<link rel="apple-touch-icon" sizes="58x58" href="https://www.blumoocreative.com/data/icons/ios/AppIcon.appiconset/Icon-Small@2x.png" />
	
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-320x460.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-640x920.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-640x1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-768x1004.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-748x1024.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-1536x2008.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
	<link href="https://www.blumoocreative.com/data/icons/ios/apple-touch-startup-image-1496x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous" />
	<link rel='stylesheet' id='googleFonts-css'  href='https://fonts.googleapis.com/css?family=Architects+Daughter%7CLato%3A300%2C400%2C400i%2C700%2C900%7CMontserrat%3A300%2C400%2C500%2C600%2C700%2C800%2C900%7COpen+Sans%3A400%2C400i%2C700' type='text/css' media='all' />
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/owl/owl.theme.css" />
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/application.min.css" />
    
	<?php if(isset($canonical)) echo $canonical; ?>    
    
	<?php if (isset( $css_global )) echo $css_global; ?>
	<?php if (isset( $css )) echo $css; ?>
   
	<script src="https://kit.fontawesome.com/b0d9d8ce81.js" crossorigin="anonymous"></script>
	
    <?php if($this->ga_tracking) echo $this->ga_tracking ; ?>
    
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-W4KM9R8');</script>
	
	<?php if($this->uri->segment(1) == 'digital-marketing-services'): ?>
	<!-- Facebook Pixel Code -->
	<script>
	  !function(f,b,e,v,n,t,s)
	  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	  n.queue=[];t=b.createElement(e);t.async=!0;
	  t.src=v;s=b.getElementsByTagName(e)[0];
	  s.parentNode.insertBefore(t,s)}(window, document,'script',
	  'https://connect.facebook.net/en_US/fbevents.js');
	  fbq('init', '2103462809672397');
	  fbq('track', 'PageView');
	</script>
	<noscript>
		<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2103462809672397&ev=PageView&noscript=1"/>
	</noscript>
	<!-- End Facebook Pixel Code -->

  <?php endif; ?>
	
	<script type="application/ld+json">
	{
	  "@context": "http://www.schema.org",
	  "@type": "ProfessionalService",
	  "name": "Blumoo Creative Digital Marketing",
	  "url": "https://www.blumoocreative.com",
	  "logo": "https://blumoocreative.com/system/cms/modules/themes/blumoo/assets/images/logo/Blumoo_logo_full_400_alt.png",
	  "image": "https://blumoocreative.com/data/logos/blumoo_creative_blue_bkg.jpg",
	  "email": "info@blumoocreative.com",
	  "telePhone": "+1-910-660-2689",
	  "description": "Digital Marketing",
	  "address": {
	    "@type": "PostalAddress",
	    "addressLocality": "Citrus Heights",
	    "addressRegion": "CA",
	    "postalCode": "95621",
	    "addressCountry": "United States"
	  },
	  "openingHours": "Mo, Tu, We, Th, Fr, Sa 09:00-17:00",
	  "contactPoint": {
	    "@type": "ContactPoint",
	    "telephone": "+1-910-660-2689",
	    "contactType": "Customer Service"
	  },
	  "priceRange":"$$$"
	}
	 </script>

  </head>
  <body <?php if( isset( $onload ) ) echo $onload; ?>>
	
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4KM9R8"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	
	
	<?php if(URI == 'index') echo '<div id="snow"></div>'; ?>
		
	<header id="header" class="position-absolute fixed-top">
		<div id="header_top" class="header_top">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-sm-12 col-md-8 header_top_left">
						<div class="meta_wrap">
							<a class="blumoo-mailto" href="mailto:info@blumoocreative.com" title="Call Blumoo Creative Digital Marketing">info@blumoocreative.com</a>
							<a class="blumoo-telephone" ref="tel:<?php echo DEFAULT_TELEPHONE ; ?>" title="Call Blumoo Creative Digital Marketing"><?php echo DEFAULT_TELEPHONE ; ?></a>
						</div>
					</div>
					<div class="col-sm-12 col-md-4 header_top_right">
						<div class="social_wrap">
							<ul>
								<li><a rel="external" href="https://www.facebook.com/blumoocreative" title="Find Blumoo Creative Digital Marketing on Facebook"><i class="fab fa-facebook-square"></i><span class="sr-only">facebook</span></a></li>
								<li><a href="https://www.linkedin.com/company/Blumoo/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="sr-only">linkedin</span></a></li>
								<li><a rel="external" href="https://twitter.com/Blumoo" title="Twitter"><i class="fab fa-twitter-square"></i><span class="sr-only">twitter</span></a></li>
								<!-- <li><a href="https://www.youtube.com/channel/UC8jS9N_GIdGu0BcgAfwFp0Q" title="Youtube"><i class="fab fa-youtube"></i><span class="sr-only">youtube</span></a></li> -->
								<li><a href="https://www.instagram.com/blumoocreative/" title="Instagram"><i class="fab fa-instagram"></i><span class="sr-only">instagram</span></a></li>
							</ul>
							
						</div>
					</div>
				</div>
			</div>
		</div><!--  end: .header_top -->
		
		<div id="toggle-top-header" class="header_top_but_closed text-center">
			<i class="fa fa-angle-down"></i>
		</div>
		
		
		<div class="header_bottom">
			
			<nav class="navbar navbar-expand-lg navbar-light "  data-toggle="sticky-onscroll">
				<div class="container">
					<a class="navbar-brand" title="Citrus Heights SC Digital Marketing Services" href="/">
						<img src="/system/cms/modules/themes/blumoo/assets/images/logo/blumoo-logo-full-400-alt.png" alt="Blumoo Creative Digital Marketing" title="Blumoo Creative Digital Marketing" />
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<i class="fas fa-bars"></i>
					</button>
				
					<div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
						<?php echo $this->main_menu;  ?>
					</div>			
				</div>
			</nav>
			
		</div>
	</header>

    <main role="main" <?php if(isset($mainClass)) echo 'class="'.$mainClass.'"'; ?>>
      <?php if(isset($partial)) echo $partial; ?>							      
    </main>
    
    <footer id="footer" class="pt-4 pb-1" role="contentinfo">
	    <div class="container">
		    <div class="row">
			    <div class="col-md-4">
				    <div class="footer-contact-col">
					    <div class="footer-contact-col-logo">					    
						    <img src="/system/cms/modules/themes/blumoo/assets/images/logo/blumoo-creative-footer-logo.png" alt="Blumoo Creative Digital Marketing" title="Blumoo Creative Digital Marketing" />
						 </div>
						<div class="footer-contact-subtitle">a full service digital agency</div>
						<div class="footer-contact-address">Located in <?php echo DEFAULT_CITY; ?>, CA</div>
						<div class="footer-contact-telephone"><?php echo DEFAULT_TELEPHONE; ?></div>
				    </div>
			    </div>
			    <div class="col-md-4"><?php if($this->footer_left_menu) echo $this->footer_left_menu;  ?></div>
			    <div class="col-md-4"><?php if($this->footer_center_menu) echo $this->footer_center_menu;  ?></div>
		    </div>
		    <div class="row footer-bot-bar">
			    <div class="col-md-6">
				    <ul class="footer-bot-bar-links list-unstyled list-inline text-left">
					    <li class="list-inline-item copyright">&copy; Blumoo Creative Digital Marketing</li>
					    <li class="list-inline-item"><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
					    <li class="list-inline-item">&middot;</li>
					    <li class="list-inline-item"><a href="/sitemap" title="Sitemap">Sitemap</a></li>
				    </ul>
			    </div>
			    <div class="col-md-6">
				    <ul class="footer-bot-bar-links social-links list-unstyled list-inline text-right">
					    <li class="list-inline-item"><a href="https://www.facebook.com/blumoocreative/" rel="external" title="Find us on Facebook"><i class="fab fa-facebook-square"></i></a></li>
					    <li class="list-inline-item"><a href="https://www.linkedin.com/company/Blumoo/" rel="external" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
					    <li class="list-inline-item"><a href="https://twitter.com/Blumoo" rel="external" title="Tweet us on Twitter"><i class="fab fa-twitter-square"></i></a></li>
					    <!--<li class="list-inline-item"><a href="" rel="external"><span class="fa fa-youtube"></span></a></li>-->
						<li class="list-inline-item"><a href="https://www.instagram.com/blumoocreative/" title="Blumoo Instagram"><i class="fab fa-instagram"></i><span class="sr-only">instagram</span></a></li>
				    </ul>
			    </div>
		    </div>
	    </div>
    </footer>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/bootstrapValidator/bootstrapValidator.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/jquery.fittext.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/mask.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/typer.min.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/owl.carousel.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/plugins/waypoint/waypoint.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/plugins/waypoint/adapters/jquery.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/plugins/waypoint/group.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/plugins/waypoint/context.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/application.min.js"></script>
	
    <?php 
	    if (isset( $js_global )) echo $js_global; 
	    if (isset( $js )) echo $js;
	    if( isset( $display_options ) ) echo $display_options ; 
    ?>
	<!-- Start of HubSpot Embed Code -->
	<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6154399.js"></script>
	<!-- End of HubSpot Embed Code -->
  </body>
</html>