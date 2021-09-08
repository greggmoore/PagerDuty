$( document ).ready(function() {

	$("#owl-example").owlCarousel({
		items: 1 ,
		autoPlay : true,
		stopOnHover : true,
		autowidth: true,
	});
	
	$(".rotate").typer({
		useCursor: false,
		typeSpeed: 80,
		backspaceDelay: 3000,
		repeatDelay: 3000,
		repeat: true,
		autoStart: true,
		startDelay: 100,

        strings: [
            "SEO Services",
            "Content Marketing",
            "Web Design" ,
            "Social Media",
            "Press Releases"
        ]
    });

});