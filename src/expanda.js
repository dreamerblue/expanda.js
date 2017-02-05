/*
by bLue
Version: 1.0.0
Link: https://github.com/dreamerblue/expanda.js
Last Updated: 02/04/2017
*/

(function ($) {
	$.fn.extend({
		expandaSingle: function(options) {
			this.addClass("expanda");
			this.hover(function() {
				$(this).children("a").addClass("expanda-hover");
				$(this).children("a").focus();
				
			}, function() {
				$(this).children("a").removeClass("expanda-hover");
				$(this).children("a").blur();
			});
			this.children("a").click(function(e) {
				e.stopPropagation();
			});
			this.click(function() {
				var tmp = $(this).children("a").clone(true);
				tmp.html('<span></span>');
				tmp.hide();
				$("body").append(tmp);
				tmp.children("span").trigger("click");
				tmp.remove();
			});
			return this;
		},
		expanda: function(options) {
			var defaults = {
				'autoExpand': ''
			};
			var settings = $.extend({}, defaults, options);
			if(settings.autoExpand != defaults.autoExpand) {
				var expandList = settings.autoExpand.split(' ');
				for(i=0; i<expandList.length; ++i) {
					$(expandList[i]).each(function() {
						if($(this).children("a").length > 0)
							$(this).expandaSingle();
					});
				}
			}
			else this.expandaSingle();
			return this;
		}
	});
})(jQuery);


$(function() {
	var css = '<style>.expanda{cursor:pointer}.expanda-hover:focus,.expanda-hover:active,.expanda-hover:hover{outline:0}</style>';
	$("head").append(css);
	$(".expanda").expandaSingle();
});
