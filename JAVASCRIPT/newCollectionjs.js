$(document).ready(function(){
	$(window).on('load', function(){


	});


	var sliderWrapper = $(".designersWrapper");
	var sliderContainer = sliderWrapper.find(".designerSliderContainer");
	var slides = sliderContainer.find(".designerSlides");
	var slidesImg = sliderContainer.find(".designerSlides img");
	var slidesDesignerName = sliderContainer.find(".designerSlides div");
	var titleHeading = $(".titleHeading");
	var exclusiveContainer = $(".exclusiveContainer");
	var featuredContainer = $(".featuredContainer");
	var mainContainer = $(".mainContainer");
	var nav = $(' nav ul');

	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

	function windowSize(){
		var windowsWidth = $(window).width();
		if(windowsWidth < 800) {
			mainContainer.css('height', exclusiveContainer.height() + featuredContainer.height() + 100)
		} else {
			if(exclusiveContainer.height > featuredContainer.height()){
				mainContainer.css('height', exclusiveContainer.height() + titleHeading.height() + 100)
			} else {
				mainContainer.css('height', featuredContainer.height() + titleHeading.height() + 100)

			}
		}

		function hamburger() {

				if(windowsWidth > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			hamburger();
	}

	windowSize()



$(window).resize(windowSize);

	
});
