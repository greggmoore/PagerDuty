<section id="moo-blog" class="lead-gen-mod moo-content">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="col-sm-10">
	                <article>
		                 <div class="article__title">
			                 <?php if( isset( $article->title ) ) echo '<h1 class="h2" style="margin-bottom: 0;">'.$article->title.'</h1>'; ?>
			                 <?php if($article->created_ts) echo '<span class="date">'.date('M jS Y', strtotime($article->created_ts)).'</span>'; ?>
		                 </div>
		                 <div class="article__body" style="padding-top: 40px;">
			                 <?php if( isset( $article->content ) ) echo $article->content; ?>
		                 </div>
	                </article>
	                
	               <div class="divider">
		                <a onclick="history.back(-1)" href="#"><i class="fa fa-arrow-circle-o-left"></i> Back</a>
	               </div>
                </div>
			</div>
		</div>
	</div>
</section>
