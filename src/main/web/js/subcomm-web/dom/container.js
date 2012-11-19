$(document).ready(function() {
	$('.subcommContainer').bind('subcommMessage', function(event, data) {
		$('.subcommHeader').each(function(index, element) {
			$(this).empty();
			var session = data.container.session;
			$(this).append('<p>SubComm connected to ' + session.hostname + ' : ' + session.port + ' as ' + session.username + '.</p>');
		});	
	});
	
	$('.subcommTabMenu').on('click', 'div', function() {
		var container = $(this).closest('.subcommContainer')[0];
		$('.subcommTabMenu div').removeClass('subcommTabCurrent');
		$(this).addClass('subcommTabCurrent');
		$(container).children('.subcommTab').hide();
		var tabSelector = '.' + $(this).attr('data-classname');
		$(container).children(tabSelector).each(function(index, element) {
			$(this).show();
			$('.subcommHistory').each(function(index, element) {
				if ($(this).attr('data-autoscroll') !== 'false') {
					$(this).scrollTop($(this)[0].scrollHeight);
				}
			});
		});
	});
	
	$('.subcommContainer').bind('subcommDisconnect', function(event, data) {
		$('.subcommHeader').html('<p>SubComm</p>');
	});
});
