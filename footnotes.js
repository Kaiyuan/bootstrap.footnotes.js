$('.sup').hover(
	function () {
		var suptext = $(this).data("text");
		var supimg = $(this).data("img");
		var surtext = $(this).data("sur");
		var subtext = $(this).data("sub");
		var sultext = $(this).data("sul");
		var supx = $(this).offset().left;
		var supy = $(this).offset().top;
		var supw = $(this).outerWidth();
		var suph = $(this).outerHeight();
		if (suptext||supimg) {
			if (supimg) {
				$("body").append('<div class="sup-box sup-img"><img src="'+supimg+'"></div>' );
			}else {
				$("body").append('<div class="sup-box">'+suptext+'</div>' );
			};
			var supbox = $('.sup-box');
			var supboxx = supbox.outerWidth();
			var supboxy = supbox.outerHeight();
			supbox.css('left', supx+supw/2-supboxx/2);
			supbox.css('top', supy-supboxy-8);
			supbox.hide();
			
		};
		if (surtext) {
			$("body").append('<div class="sur-box"><div>'+surtext+'</div></div>' );
			var surbox = $('.sur-box');
			surbox.css('left', supx+supw+16);
			surbox.css('top', supy+suph/2-14);
			surbox.hide();
		};
		if (sultext) {
			$("body").append('<div class="sul-box"><div>'+sultext+'</div></div>' );
			var sulbox = $('.sul-box');
			var sulboxx = sulbox.outerWidth();
			sulbox.css('left', supx-sulboxx-16);
			sulbox.css('top', supy+suph/2-14);
			sulbox.hide();
		};
		if (subtext) {
			$("body").append('<div class="sub-box">'+subtext+'</div>' );
			var subbox = $('.sub-box');
			var subboxx = subbox.outerWidth();
			var sybboxy = subbox.height();
			subbox.css('left', supx+supw/2-subboxx/2);
			subbox.css('top', supy+sybboxy+5);
			subbox.hide();
		};
		$('.sup-box,.sur-box,.sul-box,.sub-box').fadeIn("fast");
	},
	function () {
		$('.sup-box,.sur-box,.sul-box,.sub-box').detach();
	};
);