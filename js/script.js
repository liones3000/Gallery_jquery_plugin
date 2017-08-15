console.clear();

$(function() {
	$('#gallery').gallery({current: 5});
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
	});
})