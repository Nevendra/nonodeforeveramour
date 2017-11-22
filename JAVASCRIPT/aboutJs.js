$(document).ready(function(){
	
	var windowWidth = $(window).width();
	var nav = $(' nav ul');
	var width = $(window).width();
	// var newYorkWedding = $(".newYorkWedding ");
	// var newYorkWeddingImg = newYorkWedding.find('img');
	// var newYorkWeddingP = newYorkWedding.find('p');
	// 	newYorkWedding.css('width', newYorkWeddingP.outerWidth() + newYorkWeddingImg.width());
	// console.log(newYorkWedding.width());
	// console.log(newYorkWeddingImg.width());
	// console.log(newYorkWeddingP.width());	    
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

});
