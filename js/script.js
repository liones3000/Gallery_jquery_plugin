console.clear();

$(function() {
	$('#gallery').gallery({
		current: 0, 
		keyup: true,
	});
})

$('#gallery').on('end', function(){
	console.log ('end');
})
$('#gallery').on('start', function(){
	console.log ('start');
})

$(function() {
	$('#gallery2').gallery({
		classes: 'gallery-class', 
		preview: false
	});
})