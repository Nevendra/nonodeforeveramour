
$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	var badgesDiv = $(".contentBadge");
	var badges = badgesDiv.find(".badges");
	var badgesHeight = badgesDiv.outerHeight();
	var badgeOffSetTop = badgesDiv.offset().top;
	var scrollPage = true;
	$("body").css("overflow-y", "auto");
  console.log(badgeOffSetTop);


	var windowWidth = $(window).width();
	var nav = $(' nav ul');
	var width = $(window).width();
	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

			function windowResize() {
				var width = $(window).width();

				if(width > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			$(window).resize(windowResize)



	$(window).on('load', function(e){
		e.preventDefault();
		// $("body").css("overflow-y", "hidden");
		$("body").css("overflow-y", "auto");
		$("html,body").animate({scrollTop: 0}, 100);
		$(badgesDiv).css("height", badgesHeight);
		if(width < 1100) {
			badges.css("width", "12%");
		} else {
			$(badges).css("width", "0%");
		}

	});

	var contentContainer = $(".contentContainer");
	var contents = contentContainer.find(".content")
	var contentHeight = contents.height() * contents.length;

	contents.each(function(index){
		var height = this.height;
		$(this).css("top", (height * index) + 50);
	})

	var reviews = $(".review");
	reviews.each(function(){
		var text = $(this).find(".reviewText");
		$(this).css("height", text.height() + 20);
	})


	$(window).on("scroll", function() {

		if($(window).scrollTop() >= badgeOffSetTop - 150){
			function stopStartScroll(){
				if(scrollPage) {
					$("body").css("overflow-y", "hidden");
				} else if (scrollPage === false) {
					$("body").css("overflow-y", "auto");
				}
			};
			stopStartScroll();
			 $(badges).animate({width: "12%", opacity: 1}, 1000, function(){
			 	scrollPage = false;
			 	stopStartScroll();
			 });
		}
	});

$('html').click(function(){
  $('.slide').slideToggle('fast');

})

$('.close').click(function(){
	$('.events').css('display', 'none');
})

var showEvents = function(){
	setTimeout(function(){
		$('.events').fadeIn(1000);
	}, 6000);
}
showEvents();


      $(".element").typed({
        strings: ["   ","Exclusive.", "Attainable.", "Forever Yours."],
        typeSpeed: 0
      });



});
