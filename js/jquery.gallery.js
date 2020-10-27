(function($){
	'use strict';

	$.fn.gallery = function(options){


		var defaults = {
			current: 0,
			classes: '',
			keyup: false,
			preview: true
		};

		options = $.extend(defaults, options);
		// console.log(options);


		return this.each(function(i){
			var $gallery = $(this),
			$galleryItem = $gallery.children(),
			$miniItems = $galleryItem.clone();

			$gallery.addClass('gallery').addClass(options.classes);
			$galleryItem.addClass('gallery-item');

			var maxHeight = 300;
			$.each($galleryItem, function(i, item){
				maxHeight = Math.max(maxHeight, $(item).height());
			});
			
			$gallery.height(maxHeight);
			$galleryItem.eq(options.current).addClass('current');

			// OPTION PREVIEW IMG
			if (options.preview){
			var $div = $('<div>').addClass('preview row').attr('id', 'preview').attr('data', $gallery[i].id);
			$miniItems.each(function(i){
				var $mini = $($miniItems[i]).addClass('mini thumbnail');
				$div.append($mini);
			})
			$(this).after($div);

			$('.preview').on('click', '.mini',function(event){
				var index = $(this).index();
				var id = '#' + this.parentElement.attributes.data.value;
				$(id)
				.children()
				.removeClass('current')
				.eq(index)
				.addClass('current');
			});
			}
			// END OPTION PREVIEW IMG

			// ADD MOVE ARROW
			var $id = '#' + $gallery[i].id;
			$($id + ' .gallery-item>img').before('<span class="left"><i class="glyphicon glyphicon-menu-left"></i></span><span class="right"><i class="glyphicon glyphicon-menu-right"></i></span>');
			// END ADD MOVE ARROW

			// MOVE ARROW MOUSE
			$(this).on('click', '.left',function(){
				var index = $('.current', $gallery).index();
				var prev = index < 0 ? $galleryItem.length - 1 : --index;
				$galleryItem
				.removeClass('current')
				.eq(prev)
				.addClass('current');
				console.log(index);
			}) //left
			$(this).on('click', '.right',function(){
				var index = $('.current', $gallery).index();
				var next = index >= $galleryItem.length - 1 ? 0 : ++index;
				$galleryItem
				.removeClass('current')
				.eq(next)
				.addClass('current');
				console.log(index);
			}); //right
			// END MOVE ARROW MOUSE

			// OPTION ARROW KEYBOARD
			if(options.keyup){
				$gallery.attr('tabindex', 0);
				$gallery.on('keyup', function (event){
					var index = $('.current', $gallery).index();
					if(event.which == 37){
						var prev = index < 0 ? $galleryItem.length - 1 : --index;
						$galleryItem
						.removeClass('current')
						.eq(prev)
						.addClass('current');
						console.log(index);
						if (index === 0 ) $gallery.trigger('start');
					} else if (event.which == 39){
						var next = index >= $galleryItem.length - 1 ? 0 : ++index;
						$galleryItem
						.removeClass('current')
						.eq(next)
						.addClass('current');
						console.log(index);
						if (index >= $galleryItem.length - 1) $gallery.trigger('end');
					}
			}); //arrow
			}
			//END OPTION ARROW KEYBOARD

		}); //each
	}

})(jQuery);