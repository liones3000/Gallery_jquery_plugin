(function($){
	'use strict';

	$.fn.gallery = function(options){


		var defaults = {
			current: 0,
			classes: '',
			keyup: false
		};

		options = $.extend(defaults, options);
		console.log(options);

		return this.each(function(){
			var $gallery = $(this), //
			$galleryItem = $gallery.children(), //div
			$miniItems = $galleryItem.clone();

			$gallery.addClass('gallery').addClass(options.classes);
			$galleryItem.addClass('gallery-item');

			var maxHeight = 0;
			$.each($galleryItem, function(i, item){
				maxHeight = Math.max(maxHeight, $(item).height());
			});
			
			$gallery.height(maxHeight);
			$galleryItem.eq(options.current).addClass('current');

			$gallery.attr('tabindex', 0);

			$(this).on('click', '.left',function(){
				var index = $('.current', $gallery).index();
				var prev = index < 0 ? $galleryItem.length - 1 : index - 1;
				$galleryItem
				.removeClass('current')
				.eq(prev)
				.addClass('current');
				console.log(index);
			}) //left
			$(this).on('click', '.right',function(){
				var index = $('.current', $gallery).index();
				var next = index >= $galleryItem.length - 1 ? 0 : index + 1;
				$galleryItem
				.removeClass('current')
				.eq(next)
				.addClass('current');
				console.log(index);
			}); //right

			if(options.keyup){
				$gallery.on('keyup', function (event){
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
			}); //arrow
			} //option arrow
		$('#gallery .gallery-item>img').before('<span class="left"><i class="glyphicon glyphicon-menu-left"></i></span><span class="right"><i class="glyphicon glyphicon-menu-right"></i></span>');

			var $div = $('<div>').addClass('preview');
			$miniItems.each(function(i){
			var $mini = $($miniItems[i]).addClass('mini');
				$div.append($mini);
			})
			$(this).after($div);

		}); //each
	}

})(jQuery);