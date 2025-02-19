$(document).ready(function(){


	function showMenu(prmBut,prmMenu){
		$(prmBut).hover(function(){
			$(prmMenu).stop(true, true).show();
			$(this).addClass("active");
            $('#header-cont').css("min-height", "400px");
		}, function(){
			$(prmMenu).hide();
			$(this).removeClass("active");
            $('#header-cont').css("min-height", "80px");
		});

		$(prmMenu).hover(function(){
			$(this).show();
			$(prmBut).addClass("active");
            
		}, function(){
			$(this).hide();
			$(prmBut).removeClass("active");
		});
	}

		showMenu(".sb1but",".smdiv1");
		showMenu(".sb2but",".smdiv2");
		showMenu(".sb3but",".smdiv3");
		showMenu(".sb4but",".smdiv4");
		showMenu(".sb5but",".smdiv5");
	
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 20,
			responsiveClass: true,
			autoplay:true,
    autoplayTimeout: 4000,
	smartSpeed: 1000,
    autoplayHoverPause: true,
	touchDrag: true, dots: false,
			responsive: {
			  0: {
				items: 1,
				nav: false
			  },
			  600: {
				items: 2,
				nav: false
			  },
			  1000: {
				items: 4,
				nav: false,
				loop: true,
				margin: 20
			  }
			}
		  })
		
		
});
