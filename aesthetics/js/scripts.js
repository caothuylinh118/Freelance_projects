
$(document).ready(function($){
	"use strict";
	
	
	
	//nar//
	
	/* $(".navbar").offset().top > 150 && $(".navbar-fixed-top").addClass("top-nav-collapse"), $(window).scroll(function() {
                $(".navbar").offset().top > 150 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
            });*/
            var t = 0;
            t = $(".navbar-fixed-top").height()- 55, 
			$(".js_nav-item a.scroll").bind("click", function(o) {
                var a = $($(this).attr("href")).offset().top;
                $("html, body").stop().animate({
                    scrollTop: a - t
                }, 800), o.preventDefault()
            });
            $("body").scrollspy({
                target: ".navbar-fixed-top",
                offset: t + 2
            });
            $(window).scroll(function() {
                $(".navbar-collapse.in").collapse("hide")
            })
	
	
	/////////TO TOP////////////
	function totop_button(a) {
		"use strict";
		var b = $("#back_to_top");
		b.removeClass("off on");
		if (a === "on") {
			b.addClass("on")
		} else {
			b.addClass("off")
		}
	}

	$("body").addClass("page-on-scroll")
	
    $(window).scroll(function() {
        var b = $(this).scrollTop();
        var c = $(this).height();
        var d;
        if (b > 0) {
            d = b + c / 2
        } else {
            d = 1
        }
		/* if (b > 60) {
             $("body").addClass("page-on-scroll")
        } else {
            $("body").removeClass("page-on-scroll")
        } */
        if (d < 1e3) {
            totop_button("off");
        } else {
            totop_button("on");
        }
		
	
	
    });
	
	
    $(document).on('click', '#back_to_top', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, $(window).scrollTop() / 3, 'linear');
    });
	
	//loader//
	$(window).load(function() {
	$('body').addClass('loaded');
	});
	
	//scroll to div
	$(function() {
	  $('.scroll-prd').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 800);
		 
			return false;
		  }
		}
		  
	  });
	});
	
	
});

 

$(window).bind('resize', function (){

});