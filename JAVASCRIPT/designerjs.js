$(document).ready(function(){

	var mainContent = $(".mainContent");
	var designerAbout = mainContent.find(".designerAbout");
	console.log(designerAbout.outerHeight());
	var designerGallery = mainContent.find(".designerGallery");
	console.log(designerGallery.outerHeight());
	var clickedImage = $(".clickedImage");
	var selectedContent = $(".selectedImageContent");
	var theSelectedImage = selectedContent.find(".theSelectedImage");
	var windowWidth = $(window).width();
	var nav = $(' nav ul');

	if(designerAbout.height() >= designerGallery.height()){
		mainContent.css('height', designerAbout);
	} else {
		mainContent.css('height', designerGallery);
	}


	clickedImage.click(function(){
		var selectedContent = $(".selectedImageContent");
		var theSelectedImage = selectedContent.find(".theSelectedImage");
	})

	$(".additionalDesigner").click(function(){
		 $(".additionalNav").animate({ "left": "0px"}, 1000 );
		 $(this).fadeOut(1000);

	});

	$(".closeAdditionalNav").click(function(){
		$(".additionalNav").animate({ "left": "-150px"}, 1000 );
		$(".additionalDesigner").fadeIn(1000);
	});

	var designerGallery = $(".designerGallery");
	var galleryBox = designerGallery.find(".galleryBox");

	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

			function windowResize() {
				var width = $(window).width();
				var menu = $('nav ul');

				if(width > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			$(window).resize(windowResize);

});
