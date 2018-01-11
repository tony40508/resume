$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		let scrollDistance = $(window).scrollTop();
		const $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})
	
	// link animation
	$(document).on("click", "a", function (e) {
		if ($('.menu-toggle')) return 
		
		e.preventDefault();
		const target = $(this).attr("href");
		
		$("html, body").animate({
			scrollTop: $(target).offset().top
		}, 700);
	});

	// type effect
	const $elem = document.getElementById('hero__text');

	let text = 'HELLO\nI\'M TAKEU.'.split(''),
		i = 0;
		
	let timer = setInterval(function () {
		$elem.insertAdjacentText('beforeend', text[i]);
		i++;
		i == text.length ? clearInterval(timer) : null;
	}, 250);

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	
	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}
});

