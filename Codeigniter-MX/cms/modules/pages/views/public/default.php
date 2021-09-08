<section class="page-mod hero-mod moo-base-bg text-center">
	<div class="inner-page-mod">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="page-mod-preheading"><?php if(isset($title)) echo $title; ?></div>
					<h1 class="h1"><?php if(isset($pretitle)) echo $pretitle; ?></h1>
					<div class="page-mod-subheading"><?php if(isset($subtitle)) echo $subtitle; ?></div>
					
					<div class="banner-mod-scrolling-arrows">
						<span class="hero-banner-mod-scroll-link-container">
							<a class="hero-banner-mod-scroll-link scrollto" href="#contact-callout-intro" data-location="#contact-callout-intro">					
							<svg enable-background="new 0 0 62.5 70.8" version="1.1" viewBox="0 0 62.5 70.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
								<g class="scroll-arrow-group">
									<polygon class="scroll-arrow scroll-arrow-three" points="62.5 39.6 31.3 70.8 0 39.6 5.7 33.9 31.3 59.4 56.8 33.9"/>
									<polygon class="scroll-arrow scroll-arrow-two" points="62.5 22.6 31.3 53.9 0 22.6 5.7 16.9 31.3 42.4 56.8 16.9"/>
									<polygon class="scroll-arrow scroll-arrow-one" points="62.5 5.7 31.3 37 0 5.7 5.7 0 31.3 25.5 56.8 0"/>
								</g>
							</svg>
							</a>
						</span>	
					</div>
					
				</div>
			</div>
		</div>
	</div>
</section>

<section class="lead-gen-mod grey-bg chat-with-us">
	<div class="container">
		
		<div class="row text-center">
			<div class="col-lg-3">
				<img class="mx-auto d-block" src="/<?php echo $this->template_path ; ?>/assets/images/icons/telephone-blue.png" alt="call blumoo creative" title="Call Blumoo Creative" />
			</div>
			<div class="col-lg-6">
				<div class="lead-gen-mod-padding text-center">
					<span class="page-mod-preheading">Don't settle, dare to be better.</span>
					<h2 class="h2 page-mod-heading">Chat with our design team!</h2>
				</div><!--end .lead-gen-mod-intro-->
			</div>
			<div class="col-lg-3">
				<div class="call-us-group">
					<p class="py-0 my-0">Call us!</p>
					<p class="py-0 my-0"><a class="telephone" href="tel:<?php echo DEFAULT_TELEPHONE; ?>"><?php echo DEFAULT_TELEPHONE; ?></a><br /><span>or</span></p>
					<p style="margin-top: 5px;"><a class="btn btn-moo-medium" href="/request-consultation" title="LET'S CHAT TODAY! - Request Consultation">LET'S CHAT TODAY!</a></p>
				</div>
			</div>
		</div>

	</div>
</section>