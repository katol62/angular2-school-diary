	$(document).ready(function () {

    	$('.reg').click(function() {
			$('.container').removeClass('fadeInLeft');
			$('.container').removeClass('show');
			$('.container').addClass('fadeOutLeft');
			setTimeout(function(){
				$('.container').addClass('hide');
				$('.container').removeClass('fadeOutLeft');
				
				$('.reg_field').removeClass('fadeOutRight');
				$('.reg_field').addClass('fadeInRight');
				$('.reg_field').removeClass('hide');
				$('.reg_field').addClass('show');
			}, 500);
		});

    	$('#back').click(function() {
			$('.reg_field').removeClass('show');
			$('.reg_field').removeClass('fadeInRight');
			$('.reg_field').addClass('fadeOutRight');
			setTimeout(function(){
				$('.reg_field').addClass('hide');
				
				$('.container').removeClass('hide');
				$('.container').addClass('fadeInLeft');
				$('.container').addClass('show');
			}, 500);
		});

	});
	$('#username').focus(function() {
		$('label[for="username"]').addClass('selected');
	});
	$('#username').blur(function() {
		$('label[for="username"]').removeClass('selected');
	});
	$('#password').focus(function() {
		$('label[for="password"]').addClass('selected');
	});
	$('#password').blur(function() {
		$('label[for="password"]').removeClass('selected');
	});

