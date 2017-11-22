$(document).ready(function(){
	$(window).on('load resize', function(){

		$('.cmhtText').css({
			position:'absolute',
			left: ($('.customMainHeaderText').width() - $('.cmhtText').outerWidth())/2,
			top: ($('.customMainHeaderText').height() - $('.cmhtText').outerHeight())/2
		});
		$('.content').css({
			position:'absolute',
			left: ($('.contentContainer').width() - $('.content').outerWidth())/2,
			// top: ($('.contentContainer').height() - $('.content').outerHeight())/2
		});

		$('.viewMore').css({
			position:'absolute',
			left: ($('.viewMoreContainer').width() - $('.viewMore').outerWidth())/2,
			top: ($('.viewMoreContainer').height() - $('.viewMore').outerHeight())/2
		});

	});

	// To initially run the function:
	$(window).resize();


});