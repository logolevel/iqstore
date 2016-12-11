$(function() {

	//Top language button
	$(".top-language").click(function(){
		$(".show-language-btn").slideToggle();
	});

	//Main-menu button
	$(".main-menu-btn").click(function(){
		$(".nav ul").slideToggle();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		navigation : true,
		navigationText : '',
		autoPlay: true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

//Like rating
$(
	function () {
		$('.like-rating ul li').on('click', function() {
			var selectedCssClass = 'selected';
			var $this = $(this);
			$this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
			$this
				.addClass(selectedCssClass)
				.parent().addClass('vote-cast');
		});
	}
);

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
