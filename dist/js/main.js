$(document).ready(function(){

	function closeAllDoors() {
		$('.door').removeClass('opened');
		$('.door-item').attr('style', '');
		$('.door-description').removeClass('active');
		$('.doors-inn-item').removeClass('visible');
	};

	$(document).on('click', '.doors-item-wrapper', function() {
		let temp = $(this).find('.door').hasClass('opened');

		closeAllDoors();

		if (temp) {
			$(this).find('.door').removeClass('opened');
			$(this).find('.door-description').removeClass('active');
			$(this).find('.doors-inn-item').removeClass('visible');

			$(this).find('.door-item').attr('style', '');
			return false;
		}

		$(this).find('.door').addClass('opened');
		$(this).find('.door-description').addClass('active');
		$(this).find('.doors-inn-item').addClass('visible');

		$(this).find('.door-item').css({left: '0px', transform: 'translateX(-70%)'});
	});

	$(document).on('click', '.door-description', function() {
		return false;
	});

	$(document).on('click', '.door-description__close', function(e) {
		e.preventDefault();
		$(this).closest('.door-description').removeClass('active');
	});

	$(document).on('click', '.doors-wrapper-arrow_next', function() {
		let temp = $('.doors-wrapper-track').css('transform');

		temp = temp.split(',');
		temp = temp[temp.length-2];
		temp = temp - 325;
		$('.doors-wrapper-track').css({transform: `translateX(${temp}px)`});
	})

	$(document).on('click', '.doors-wrapper-arrow_prev', function() {
		let temp = $('.doors-wrapper-track').css('transform');

		temp = temp.split(',');
		temp = temp[temp.length-2];
		temp = parseInt(temp) + 325;
		$('.doors-wrapper-track').css({transform: `translateX(${temp}px)`});
	})

	
});