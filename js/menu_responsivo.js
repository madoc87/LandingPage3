$(function(){

	// ativar menu mobile
	$(function() {
		$('.mobile-menu').click(function(){
			$(this).find('ul').slideToggle();
		})
	});

})