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
	
	
		
		
});
