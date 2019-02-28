$(document).ready(function(){
	$(document).on('click', '.doors-item-wrapper', function() {
		let temp = $(this).find('.door').hasClass('opened');

		$('.door').removeClass('opened');
		$('.door-item_1, .door-item_2, .door-item_3').attr('style', '');
		$('.door-description').removeClass('active');
		$('.doors-inn-item').removeClass('visible');

		if (temp) {


			$(this).find('.door').removeClass('opened');
			$(this).find('.door-description').removeClass('active');
			$(this).find('.doors-inn-item').removeClass('visible');


			if ( $(this).index('.doors-item-wrapper') == 0 ) {
				$('.door-item_1').attr('style', '');
				return false;
			}
			if ( $(this).index('.doors-item-wrapper') == 1 ) {			
				$('.door-item_2').attr('style', '');
				return false;
			}
			if ( $(this).index('.doors-item-wrapper') == 2 ) {
				$('.door-item_3').attr('style', '');
				return false;
			}
			return false;
		}

		$(this).find('.door').addClass('opened');
		$(this).find('.door-description').addClass('active');
		$(this).find('.doors-inn-item').addClass('visible');
		if ( $(this).index('.doors-item-wrapper') == 0 ) {
			$('.door-item_1').css({left: '0px'});
			return false;
		}
		if ( $(this).index('.doors-item-wrapper') == 1 ) {			
			$('.door-item_2').css({left: `370px`});
			return false;
		}
		if ( $(this).index('.doors-item-wrapper') == 2 ) {
			$('.door-item_3').css({left: '800px'});
			return false;
		}
	});

	$(document).on('click', '.door-description', function() {
		return false;
	});

	$(document).on('click', '.door-description__close', function(e) {
		e.preventDefault();
		$(this).closest('.door-description').removeClass('active');
	})
});