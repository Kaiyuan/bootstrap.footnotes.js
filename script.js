$('sup').hover(
	function () {
		var suptext = $(this).data("text");
		$("body").append('<div class="sup-box">'+suptext+'</div>' );
		var supx = $(this).offset().left;
		var supy = $(this).offset().top;
		// var suph = $(this).height();
		var divx = $('.sup-box').width();
		var divy = $('.sup-box').height();
		$('.sup-box').css('left', supx-divx/2-2);
		$('.sup-box').css('top', supy-divy-30);
		$('.sup-box').hide();
		$('.sup-box').fadeIn("fast");
	},
	function () {
		$('.sup-box').fadeOut("fast");
		setTimeout(function () {
			$('.sup-box').detach();
		},100);
	}
);