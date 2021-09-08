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

    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Montserrat:300,400|Nunito+Sans" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <link rel="stylesheet" hreflang="en-us" href="/<?php echo $this->template_path ; ?>/assets/css/base.css">
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
	    <ul class="curtain-menu-list menu vertical">
	      <li><a href="#">Home</a></li>
	      <li><a href="#">About</a></li>
	      <li><a href="#">Work</a></li>
	      <li><a href="#">Contact</a></li>
	    </ul>
	  </div>
	</div>
	<?php if(isset($partial)) echo $partial; ?>
  		
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/bootstrapValidator/bootstrapValidator.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/mask.js"></script>
	<script type="text/javascript" src="/<?php echo $this->template_path ; ?>/assets/js/application.js"></script>
	
	
    <?php 
	    if (isset( $js_global )) echo $js_global; 
	    if (isset( $js )) echo $js;
	    if( isset( $display_options ) ) echo $display_options ; 
    ?>

  </body>
</html>