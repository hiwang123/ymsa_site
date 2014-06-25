$(document).ready(function(){
	$(document.head).load("style");
	
	$(window).bind('popstate', function() {    //override back button to get the ajax content without page reload
			 var toUrl=location.pathname;
			 $.get( toUrl , function(data) {
				 $('.main-content').html($('<div>'+data+'</div>').find('.main-content').html());
				 jQuery.getScript("effect.js");
			 });
	});
	
	$(document.body).load("header.html",function(){
			$('.sub').click(function(e){
					$('.sub').removeClass("now");
					$(this).addClass("now");
					$(this).find('.skin').css({backgroundColor: 'rgba(47, 196, 198,1)',color:'rgb(255,255,255)'});
					$('.sub').not('.now').find('.skin').stop(true,true).animate({backgroundColor: 'rgba(47, 196, 198,0)',color:'rgb(100, 88, 68)'}, 400);
					
					var toUrl=$(this).attr('href')+".html";
					$.get(toUrl , function(data){
						$('.main-content').html($('<div>'+data+'</div>').find('.main-content').html());
					});
					
					if(toUrl!=window.location.href){
						window.history.pushState({path:toUrl},'',toUrl);
					}
					
					jQuery.getScript("effect.js");
			});
			$('.sub').on('mouseenter', function(){
				if($(this).hasClass('now')) return ;
				$(this).find('.skin').stop(true,true).animate({backgroundColor: 'rgba(47, 196, 198,1)',color:'rgb(255,255,255)'}, 400);
			})
			.on('mouseleave', function(){
				if($(this).hasClass('now')) return ;
				$(this).find('.skin').stop(true,true).animate({backgroundColor: 'rgba(47, 196, 198,0)',color:'rgb(100, 88, 68)'}, 400);
			});
	});
	
    var now=window.location.pathname;	
	$(document).ajaxComplete(function(){
			$('.main-content').load(now+" div.main-content > div");
			jQuery.getScript("effect.js");
	});
	
});