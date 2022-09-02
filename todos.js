// check off specific todo by clicking
$('ul').on('click', 'li', function() {
	// click does not work in this case because the future appended li would not be updated at all, which means that it would not be possible to make it completed!
	// to get the on click valid for all li to be appended in the future, the listener must be on the parent already exiting when the page load!!
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
	// to get the on click valid for all span in appended li in the future, the listener must be on the parent already exiting when the page load!!
	// click does not work in this case because the future appended li would not be updated at all, which means that it would not be possible to delete it!
	$(this)
		.parent() // means that we are on the li to remove the entire li and not the X from the span only
		.fadeOut(500, function() {
			$(this).remove();
		});
	event.stopPropagation();
	// span is multi-layered so the event will happen on span but also on li, ul, container, body !! To stop that we need to use stopPropagation() on event
});

$('input[type="text"]').keypress(function(event) {
	if (event.which == 13) {
		let todoText = $(this).val();
		$(this).val('');
		$('ul').append(
			'<li><span><i class="fa fa-trash-alt"></i></span> ' + todoText + '</li>'
		);
	}
});

$('span').click(function() {
	$('input[type="text"]').fadeToggle();
});
