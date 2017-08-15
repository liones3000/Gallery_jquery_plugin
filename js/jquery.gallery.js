(function($){
	'use strict';

	$.fn.gallery = function(options){

		var defaults = {
			current: 0,
			classes: ''
		};

		options = $.extend(defaults, options);
		console.log(options);

		return this.each(function(){
			var $gallery = $(this), //
			$galleryItem = $gallery.children(); //div

			$gallery.addClass('gallery').addClass(options.classes);
			$galleryItem.addClass('gallery-item');

			var maxHeight = 0;
			$.each($galleryItem, function(i, item){
				maxHeight = Math.max(maxHeight, $(item).height());
			});
			
			$gallery.height(maxHeight);
			$galleryItem.eq(options.current).addClass('current');

			$gallery.attr('tabindex', 0);

			$gallery.on('keyup', function(event){
				var index = $('.current', $gallery).index();
				if(event.which == 37){
					var prev = index < 0 ? $galleryItem.length - 1 : index - 1;
					$galleryItem
					.removeClass('current')
					.eq(prev)
					.addClass('current');
					console.log(index);

					if (index === 0 ) $gallery.trigger('start');

				} else if (event.which == 39){
					var next = index >= $galleryItem.length - 1 ? 0 : index + 1;

					$galleryItem
					.removeClass('current')
					.eq(next)
					.addClass('current');
					console.log(index);

					if (index >= $galleryItem.length - 1) $gallery.trigger('end');
				}
			})
		});
	}

})(jQuery);