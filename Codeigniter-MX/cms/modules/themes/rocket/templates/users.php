<?php $this->load->view($this->public_theme.'/templates/header'); ?>

<section class="section1">
	<div class="container">
		<div class="row">
				<div class="col-md-3">
					<div class="layout-sidebar">
						<?php if(isset($user_menu)) echo $user_menu; ?>
					</div>
					
				</div>
				<div class="col-md-9">
					<div class="content-body">
						<?php if(isset($partial)) echo $partial ; ?>
					</div>
				</div>
			</div>
	</div>
</section>

<?php $this->load->view($this->public_theme.'/templates/footer'); ?>