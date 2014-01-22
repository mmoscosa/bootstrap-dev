$(document).ready(function(){
	$('body').prepend('<div class="container developer"><button type="button" class="toggle btn btn-info btn-xs">Toggle Grid</button><div class="row developer-columns" ><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div></div></div>');
	$('.toggle').click(function(){
		$('.developer-columns').toggle();
	});
	$('.container.developer').css({
		'z-index': '999999',
	});
	$('.container.developer button.toggle').css({
		'position': 'fixed',
		'z-index': '99999',
		'top': '10px',
		'right': '-2px',
	});
	$('.container.developer .row').css({
		'position': 'fixed',
		'width': '1170px',
	});
	$('.container.developer .row .col-md-1').css({
		'width': '8.333333333333332%',
		'min-height': '800px',
		'background': 'rgba(2, 48, 89, 0.1)',
		'border': '1px dotted #3276b1',
	});
});