$(document).ready(function(){	
	$('.adrs').on('mouseenter', function(){
			$(this).stop(true,true).animate({backgroundColor: 'rgba(47, 196, 198,1)'}, 350);
		})
		.on('mouseleave', function(){
			$(this).stop(true,true).animate({backgroundColor: 'rgba(100, 88, 68,1)'}, 350);
		});
	
	
});
//@ sourceURL=effect.js