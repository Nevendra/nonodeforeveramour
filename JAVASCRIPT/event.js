
$(document).ready(function(){
	var sliderInterval;
	// var sliderWrapper;
	// var slides;
	// var currentSlide;


	var nav = $(' nav ul');

	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

	function clearIntervalFunction() {
	    clearInterval(sliderInterval);
	}



$(window).resize(windowSize);

	function sliderfunction(){
		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var	currentSlide = 1;
		var sliderWrapper = $(".sliderWrapper");
			sliderWrapper.css("width", windowsWidth);
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
			sliderContainer.css('margin-left', 0);
		var slides = sliderContainer.find(".designerSlides");
			slides.css("width", windowsWidth);
		var sliderWidth = slides.width();
		sliderContainer.css("width", slides.length * slides.width());

		function imgSlider(){
				sliderInterval = setInterval(function(){
					console.log(currentSlide);
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === slides.length){
								currentSlide = 1;
								console.log(currentSlide);
								sliderContainer.css("margin-left", 0);
							}/// ends first if

					});/// ends sliderContainer animate function

			}, sliderSpeed);///ends sliderInterval

		}/// ends imgSlider

		imgSlider();
	}

// sliderfunction()


	function windowSize(){
		console.log("active");
		windowsWidth = $(window).width();


		clearIntervalFunction();

		function hamburger() {

				if(windowsWidth > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			hamburger();
			sliderfunction();
	}

	windowSize()


});