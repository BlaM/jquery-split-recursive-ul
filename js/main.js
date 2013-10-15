$('.split-here').css('border-top', '1px solid red');

var $target = $('#target');
var $source = $('#source');

var $pointer = $source.find('.split-here');
var $workpointer = $pointer;
var $parent = null;

var x;

$source.find('li').addClass('keep-in-source');

do {
	x = 0;

	$parent = $workpointer.parentsUntil('li').first().parent().addClass('clear-in-target');

	do {
		$workpointer.removeClass('keep-in-source').addClass('keep-in-target');
		console.log('x');
		$workpointer = $workpointer.next();
	} while ($workpointer.length > 0 && x++ < 100);

	$workpointer = $parent.next('li');
	$workpointer.removeClass('keep-in-source').addClass('keep-in-target');

} while ($workpointer.length > 0);



$target.html( $source.html() );

$source.find('.keep-in-target').remove();

$target.find('.keep-in-target').find('li').removeClass('keep-in-source').addClass('keep-in-target')
$target.find('.keep-in-source').not('.clear-in-target').remove();

$target.find('.clear-in-target').each(function() {
	var $this = $(this);

	var $ul = $this.children('ul').first();

	$this.html($ul);
});