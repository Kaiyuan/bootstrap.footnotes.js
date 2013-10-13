jQuery(document).ready(function($) {
	$(document).on('mouseenter','.sup',
		function () {
			var suptext = $(this).data("text");
			var supimg = $(this).data("img");
			var surtext = $(this).data("sur");
			var subtext = $(this).data("sub");
			var sultext = $(this).data("sul");
			var sTop = $(window).scrollTop()
			var wHeight = $(window).height();
			var wWidth = $(window).width();
			var supx = $(this).offset().left;
			var supy = $(this).offset().top;
			var supw = $(this).outerWidth();
			var suph = $(this).outerHeight();
			var textboxw = $(this).parent('p,blockquote').outerWidth();

			function subBox (text) {
				$("body").append('<div class="sub-box">'+text+'</div>' );
				var subbox = $('.sub-box');
				var subboxx = subbox.outerWidth();
				var subboxl = supx+supw/2-subboxx/2;
				if (subboxl<0){subboxl=0};
				if (textboxw&&supw>(textboxw-subboxx)/2) {
					subbox.css('left', supx+supw-subboxx/2-20);
				} else{
					subbox.css('left', subboxl);
				};
				subbox.css('top', supy+suph+8);
				subbox.hide();
			}
			function supBox (text) {
				if (supimg) {
					$("body").append('<div class="sup-box sup-img"><img src="'+supimg+'"></div>' );
				}else {
					$("body").append('<div class="sup-box">'+text+'</div>' );
				};
				var supbox = $('.sup-box');
				var supboxx = supbox.outerWidth();
				var supboxy = supbox.outerHeight();
				var supboxl = supx+supw/2-supboxx/2;
				if (supboxl<0){supboxl=0};
				if (textboxw&&supw>(textboxw-supboxx)/2) {
					supbox.css('left', supx+supw-supboxx/2-20);
				} else{
					supbox.css('left', supboxl);
				};
				supbox.css('top', supy-supboxy-8);
				supbox.hide();
			}
			function surBox (text) {
				$("body").append('<div class="sur-box"><div>'+text+'</div></div>' );
				var surbox = $('.sur-box');
				surbox.css('left', supx+supw+16);
				surbox.css('top', supy+suph/2-14);
				surbox.hide();
			}
			function sulBox (text) {
				$("body").append('<div class="sul-box"><div>'+text+'</div></div>' );
				var sulbox = $('.sul-box');
				var sulboxx = sulbox.outerWidth();
				sulbox.css('left', supx-sulboxx-16);
				sulbox.css('top', supy+suph/2-14);
				sulbox.hide();
			}

			if (suptext||supimg) {
				if (sTop<supy-50) {
					supBox(suptext)
				} else if(!supimg) {
					subBox(suptext)
				};
			};
			if (surtext) {
				if (wWidth-supw-supx>100) {
					surBox(surtext);
				} else if(supx>140){
					sulBox(surtext);
				}else if (sTop<supy-30) {
					supBox(surtext)
				} else {
					subBox(surtext)
				};
			};
			if (sultext) {
				if(supx>50){
					sulBox(sultext);
				} else if (wWidth-supw-supx>100) {
					surBox(sultext);
				} else if (sTop<supy-100) {
					supBox(sultext)
				} else {
					subBox(sultext)
				};
			};
			if (subtext) {
				if (supy-sTop<wHeight-80) {
					subBox(subtext);
				} else {
					supBox(subtext);
				};
			};
			$('.sup-box,.sur-box,.sul-box,.sub-box').fadeIn("fast");
		}
	);
	$(document).on('mouseleave','.sup',
		function () {
			$('.sup-box,.sur-box,.sul-box,.sub-box').detach();
		}
	);
});