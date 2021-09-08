<?php $this->load->view($this->public_theme.'/templates/header'); ?>	
	
<?php if(isset($partial)) echo $partial ; ?>


<!--contact-us start-->
<section id="contact-us">
    <div id="contact-form" class="padding-one">
        <div class="container ">
            <div class="row">
                <div class="col-xs-12  wow fadeInRight  ">
                    <h2>Contact Us</h2>
                    <hr>
                </div>
            </div>
            <div class="row padding-top-80">
                <div class="col-xs-12">
                    <form id="form-elements" onSubmit="return false">
                         
                         <div class="row">
                            <div class="col-md-12 center">
	                            <div id="result"> </div>
	                        </div>
                         </div>

                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" name="name" id="name" required></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email Address" name="email" id="email" required></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone Number" name="phone" id="phone" required>
                                </div>
                            </div>
                            <div class="col-xs-12">
                                <textarea id="input" class="form-control" rows="7" required="required" placeholder="Message" name="message" id="message" ></textarea>
                            </div>
                            <button type="submit" class="btn btn-default buttons" id="submit_btn">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--/contact-form end-->

    <!--/g-map-->
    <!--<div id="g-map">
        <div class="container-fluid ">
            <div class="row">
                <div id="map"></div>
            </div>
        </div>
    </div>-->
    <!--/g-map-->
    <!--/contact-address-->
    <div id="contact-address" class="padding-two text-center">
        <div class="container">
            <div class="row">
                <div class="col-sm-6  wow fadeInLeft   address-details">
                    <h2><span class="sr-only">header</span><i class="fa fa-volume-control-phone" aria-hidden="true"></i></h2>
                    <?php if(DEFAULT_TELEPHONE) echo '<p>'.DEFAULT_TELEPHONE.'</p>'; ?>
                </div>
               
                <div class="col-sm-6  wow fadeInLeft   address-details">
                    <h2><span class="sr-only">email</span><i class="fa fa-envelope" aria-hidden="true"></i></h2>
                    <p><?php echo safe_mailto(DEFAULT_EMAIL, DEFAULT_EMAIL); ?></p>
                </div>
            </div>
        </div>
    </div>
    <!--/contact-address-->
</section>
	
<?php $this->load->view($this->public_theme.'/templates/footer'); ?>