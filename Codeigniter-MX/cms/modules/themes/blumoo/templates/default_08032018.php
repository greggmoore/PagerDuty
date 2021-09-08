<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php echo meta($this->meta_info); ?>
    <meta name="google-site-verification" content="A1apfAi0jhhTGLxePS3Kq_yC7uvQCdTbir8AbEHcrGU" />
    <link rel="icon" type="image/x-icon"  sizes="16x16" href="<?php echo base_url().$this->template_path ; ?>/assets/images/icons/favicon.ico" hreflang="en-us" />

    <title><?php echo $this->meta_title; ?></title>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
    
	<link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/vegas.css">
	<link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/fonts.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/app.css">
    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/bootstrapValidator/bootstrapValidator.css">
    
	<?php if (isset( $css_global )) echo $css_global; ?>
	<?php if (isset( $css )) echo $css; ?>
   
	<script src="https://use.fontawesome.com/09fa6f8027.js"></script>

    
    <?php 
	    if($this->ga_tracking) echo $this->ga_tracking ;
	    if( isset($map['js']) ) echo $map['js']; 
	?>
    
  </head>
  <body <?php if( isset( $onload ) ) echo $onload; ?>>
	<!-- the trigger -->
	<div class="curtain-menu-button" data-curtain-menu-button>
	  <div class="curtain-menu-button-toggle">
	    <div class="bar1"></div>
	    <div class="bar2"></div>
	  </div>
	</div>
	
	<!-- the menu  -->
	<div class="curtain-menu">
	  <div class="curtain left-side"></div>
	  <div class="curtain"></div>
	  <div class="curtain right-side"></div>
	  <div class="curtain-menu-wrapper">
	    <ul class="curtain-menu-list list-unstyled">
	      <li><a href="#">Home</a></li>
	      <li><a href="#">About</a></li>
	      <li><a href="#">Work</a></li>
	      <li><a href="#">Contact</a></li>
	    </ul>
	  </div>
	</div>
	
	<header>
		
	</header>
	
	<main role="main" class="<?php if(isset($mainClass)) echo $mainClass; ?>">
	<?php if(isset($partial)) echo $partial; ?>
	</main>
  		
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>

	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/bootstrapValidator/bootstrapValidator.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/mask.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/vegas.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/app.js"></script>
	
	
    <?php 
	    if (isset( $js_global )) echo $js_global; 
	    if (isset( $js )) echo $js;
	    if( isset( $display_options ) ) echo $display_options ; 
    ?>

  </body>
</html>