<section id="moo-blog" class="lead-gen-mod moo-content">
	<div class="container">
		
		
		<div class="row">
			<div class="col-md-12">
				<h1 class="h1 text-center mt-0"><?php if(isset($title)) { echo $title; } ?></h1>
			</div>
		</div>
		
		<?php if(isset($intro)) echo $intro; ?>
		
		
		<div class="row">
			<div class="col-md-12">
				
				<div class="masonry masonry-blog-list">
		            <h3 class="text-center"><?php if(isset($subtitle)) { echo $subtitle; } ?></h3>
	                <hr>
	                <div class="masonry__container">
		                <?php if(!empty($posts)): foreach($posts as $key => $post):  echo $this->posts_m->prepare_post($post, $key); endforeach; else: ?>
							<p><em>Sorry, there are no articles to display at the moment. Please check back soon</em></p>
						<?php endif; ?>
	                </div>
	                <!--end of masonry container-->
	                <div class="pagination">
		                <?php echo $this->pagination->create_links(); ?>
		                
	                    <div class="col-xs-6">
	                        <a class="type--fine-print" href="#">&laquo; Older Posts</a>
	                    </div>
	                    <div class="col-xs-6 text-right">
	                        <a class="type--fine-print" href="#">Newer Posts &raquo;</a>
	                    </div>
	                </div>
	            </div>
	            <!--end masonry-->
			</div>
		</div>
	</div>
</section>


<?php echo $this->pagination->create_links(); ?>