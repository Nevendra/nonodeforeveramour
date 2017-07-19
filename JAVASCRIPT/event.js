
$(document).ready(function(){
	var nav;
	var navHeight;
	var windowsHeight;
	var windowsWidth;
	var currentSlide;

	var sliderWrapper;
	var sliderContainer;
	var slides;
	var slidesImg;
	var sliderWidth;
	var sliderInterval;


	function getInfo(currentSlide){
		// nav = $("nav");
		// navHeight = nav.height();
		// windowsHeight = window.innerHeight;
		// windowsWidth = window.innerWidth;
		sliderWrapper = $(".sliderWrapper");
		sliderContainer = sliderWrapper.find(".designerSliderContainer");
		// sliderContainer.css("height", windowsHeight - navHeight);
		slides = sliderContainer.find(".designerSlides");
		slidesImg = sliderContainer.find(".designerSlides img");
		sliderWidth = sliderWrapper.width();
		slides.css("width", sliderWidth);
		console.log(windowsWidth);
		console.log(sliderWrapper.width());
		console.log(sliderWidth);
		console.log(slides.width());

		sliderFeature(sliderContainer, sliderWidth, currentSlide);
	}

	getInfo();

	$(window).on('resize',function(){location.reload();});



	function sliderFeature(sliderContainer, sliderWidth, currentSlide){
		sliderContainerFunc = sliderContainer;
		sliderWidthFunc = sliderWidth;
		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		sliderContainerFunc.css("width", 6 * sliderWidthFunc);

		function imgSlider(){
				sliderInterval = setInterval(function(){
					sliderContainerFunc.animate({"margin-left": "-=" + sliderWidthFunc}, animationSpeed, function(){
							if(currentSlide === undefined){
								currentSlide = 2;
							} else if(currentSlide === 4){
								currentSlide = 1;
								sliderContainerFunc.css("margin-left", 0);
							}else if(currentSlide < 4){
								currentSlide = currentSlide + 1;
							}

					});

			}, sliderSpeed);

		}

		imgSlider();
	}




});