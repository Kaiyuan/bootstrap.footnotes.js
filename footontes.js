$('.sup').hover(
	function () {
		var suptext = $(this).data("text");
		var supimg = $(this).data("img");
		if (suptext||supimg) {
			if (supimg) {
				$("body").append('<div class="sup-box sup-img"><img src="'+supimg+'"></div>' );
			}else {
				$("body").append('<div class="sup-box">'+suptext+'</div>' );
			};
			var supx = $(this).offset().left;
			var supy = $(this).offset().top;
			var supw = $(this).width();
			var boxx = $('.sup-box').width();
			var boxy = $('.sup-box').height();
			if (supimg) {
				$('.sup-box').css('left', supx+supw/2-boxx/2-2);
				$('.sup-box').css('top', supy-boxy-10);
			} else{
				$('.sup-box').css('left', supx+supw/2-boxx/2-12);
				$('.sup-box').css('top', supy-boxy-30);
			};
			$('.sup-box').hide();
			$('.sup-box').fadeIn("fast");
		};
	},
	function () {
		$('.sup-box').detach();
	}
);