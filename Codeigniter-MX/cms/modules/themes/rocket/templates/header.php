<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php echo meta($this->meta_info); ?>
    <meta name="google-site-verification" content="" />
    <link rel="icon" type="image/x-icon"  sizes="16x16" href="<?php echo $this->settings->https_url ; ?>/data/site/favicon.ico" hreflang="en-us" />

    <title><?php echo $this->meta_title; ?></title>

    <link rel="alternate" hreflang="en-us" href="" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" hreflang="en-us" crossorigin="anonymous">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/animate.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/owl.carousel.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/owl.transitions.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/settings.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/layers.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/navigation.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/responsive-tabs.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/plugins/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/redactor/redactor.css">
    <link rel="stylesheet" hreflang="en-us" href="https://cdn.datatables.net/buttons/1.2.2/css/buttons.dataTables.min.css" />
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/style.css">
	<?php 
		if (isset( $css_global )) echo $css_global; 
		if (isset( $css )) echo $css;
	?>
   
	<script src="https://use.fontawesome.com/09fa6f8027.js"></script>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <?php 
	    //if($this->ga_tracking) echo $this->ga_tracking ;
	    if( isset($map['js']) ) echo $map['js']; 
	?>
    
  </head>
  <body <?php if( isset( $onload ) ) echo $onload; ?> data-spy="scroll" data-target=".navbars" data-offset="90" id="main">
	<div class="container-fluid main">
		<section id="home">
	    <!--header start-->
	    <header>
	        <!--nav bar start -->
	        <nav class="navbar navbar-default navbar-fixed-top navbars">
	            <div class="container-fluid">
	                <a class="side-menu-button"> <i class="fa fa-bars" aria-hidden="true"></i> </a>
	                <div class="container">
	                    <div class="navbar-header">
	                        <a class="navbar-brand" href="/" title="Home"><img src="/system/cms/modules/themes/rocket/assets/images/logo/logo_400_new.png" alt="logo"></a>
	                    </div>
	                    <div class="collapse navbar-collapse navbar-ex1-collapse hidden-xs ">
	                        <ul class="nav navbar-nav navbar-right navbars">
	                            <li class="active"><a href="#myrocketlisting" class="scroll" title="Sell Your Home">Sell Your Home</a></li>
	                            <li><a href="#how-it-works" class="scroll" title="How It Works">How It Works</a></li>
	                            <li><a href="#pricing" class="scroll" title="Pricing">Pricing</a></li>
	                            <li><a href="#contact-us" class="scroll" title="Contact Us">Contact Us</a></li>
	                            <li><a href="/agents" title="Agents Only">Agents Only</a></li>
	                        </ul>
	                    </div>
	                    <div class="sidenav ">
	                        <!-- Use any element to open the sidenav -->
	                        <ul class="nav">
	                            <li class="active"><a href="#myrocketlisting" class="scroll" title="Sell Your Home">Sell Your Home</a></li>
	                            <li><a href="#portfolio" class="scroll" title="How It Works">How It Works</a></li>
	                            <li><a href="#pricing" class="scroll" title="Pricing">Pricing</a></li>
	                            <li><a href="#contact-us" class="scroll" title="Contact Us">Contact Us</a></li>
	                            <li><a href="/agents" title="Agents Only">Agents Only</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </nav>
	        <!--navbar-end -->
	    </header>
	    <!--header end-->
	</section>
	<!--Home end-->	