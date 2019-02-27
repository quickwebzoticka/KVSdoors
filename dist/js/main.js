$(document).ready(function(){
	$(document).on('click', '.door', function() {
		$(this).css({transform: 'rotate3d(0, 1, 0, 75deg)'});

		if ( $(this).index('.door') == 0 ) {
			$('.door-item_1').css({left: '0px'});
			return false;
		}
		if ( $(this).index('.door') == 1 ) {
			let temp = $('.doors-item').eq(1).offset().left;
			
			$('.door-item_2').css({left: `${(temp - 155)}px`});
			return false;
		}
		if ( $(this).index('.door') == 2 ) {
			$('.door-item_1').css({left: '0px'});
			return false;
		}
		
	})
});