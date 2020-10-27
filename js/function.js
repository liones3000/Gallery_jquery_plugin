
var index = $('.current', $gallery).index();
			var $gallery = $(this), //
			$galleryItem = $gallery.children(); //div
function prev (){
	var prev = index < 0 ? $galleryItem.length - 1 : index - 1;
	$galleryItem
	.removeClass('current')
	.eq(prev)
	.addClass('current');
	console.log(index);
	if (index === 0 ) $gallery.trigger('start');
}

function next (){
	var next = index >= $galleryItem.length - 1 ? 0 : index + 1;
	$galleryItem
	.removeClass('current')
	.eq(next)
	.addClass('current');
	console.log(index);
	if (index >= $galleryItem.length - 1) $gallery.trigger('end');
}