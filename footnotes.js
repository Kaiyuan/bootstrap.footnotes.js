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
			var sbox = $('.sup-box');
			var supx = $(this).offset().left;
			var supy = $(this).offset().top;
			var supw = $(this).outerWidth();
			var boxx = sbox.outerWidth();
			var boxy = sbox.outerHeight();
			sbox.css('left', supx+supw/2-boxx/2);
			sbox.css('top', supy-boxy-8);
			sbox.hide();
			sbox.fadeIn("fast");
		};
	},
	function () {
		$('.sup-box').detach();
	}
);