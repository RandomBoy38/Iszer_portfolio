(function ($) {

// LIGHTBOX

var div = $("<div>", { class: "divko" });
	div.hide()
	   .appendTo('body');

	   $(".gallery").on("click", "a", function (event) {

	   		var href  = $(this).attr("href"),
	   			image = $("<img>", { src: href });
	   			div.html(image);

	   			div.show();
	   			$(".arrow").hide()

	   			event.preventDefault();
	   })


	   div.on("click", function () {

	   		div.hide();
	   		$(".arrow").show()

	   });

	   $(document).on("keydown", function (event) {

	   		if ( event.which === 27 ) 
	   		{ 
	   			div.hide() 
	   			$(".arrow").show() 
	   		};

	   });

// ARROW UP

var arrow = $("<a>", { html: '<img src="img/buttons/next.png">',
					  class: "arrow" });
	arrow.hide()
		 .appendTo("body");

	arrow.on("click", function () {

		$("html, body").animate( { scrollTop: 0}, 2000);

	})

	$(window).on("scroll", function () { 

		if ( $(window).scrollTop() >= 500 ) arrow.fadeIn()
		else arrow.fadeOut()

		});

	// MENU

	var menu    = $(".menu"),
		divMenu = $("<div>", { class: "divMenu",
							   html: '<ul class="menucko"><li><a href="#kto-som">Čo dokážem?</a></li> <li><a href="#portfolio">Portfólio</a></li> <li><a href="#kontakt">Kontakt</a></li> </ul>' }),
		close   = $('<div class="close"><div class="line1 change"></div><div class="line2 change"></div><div class="line3 change"></div></div>');
		close.appendTo(divMenu);
		divMenu.hide()
			   .appendTo("body");

		menu.on("click", function (event) {

			$(this).hide()
			divMenu.fadeIn();
			event.preventDefault();

		});

	//  MENU TRANSFORM NA KRIZIK
		close.on("mouseenter mouseleave", function (event) {

			if ( event.type === "mouseenter") {
				$(".line1").addClass("change1") 
				$(".line2").addClass("change2")
				$(".line3").addClass("change3")
				}
			else { 	$(".line1").removeClass("change1") 
					$(".line2").removeClass("change2")
					$(".line3").removeClass("change3") }


		});

	// CANCEL MENU
		close.on("click", function () {

			divMenu.fadeOut();
			menu.show();

		})

	// 	ESCAPE

		$(document).on("keydown", function (event) {
			if ( event.which === 27 ) {
				divMenu.fadeOut(),
				menu.fadeIn();}
		});

	// LINK NA SEKCIU

	var href = $(".menucko a").attr("href");

		$(".menucko").find("a").on("click", function (event) {
			var id = this.hash;

			divMenu.fadeOut();
			menu.show();

			$("html, body").animate( { scrollTop: $(this.hash).offset().top}, 2000, function () {
				window.location.hash= id
			});

			event.preventDefault();
		});

	// BUTTON LINK

	var button = $(".button");

		button.find("a").on("click", function (event) {
			var bttnID = this.hash;
			$("html, body").animate({ scrollTop: $(this.hash).offset().top}, 1000, function () {
				window.location.hash = bttnID;
			})
		event.preventDefault();
		})

	// GALLERY SET

	var galleries = $(".gallery-set");
		galleries.hide();

	var selected = $(".portfolio-menu").find(".selected"),
		selectedGallery;

	
	function showGallery( selected ) {
		if ( selected.length )
		var id = $(".portfolio-menu .selected a").attr("href");
			selectedGallery = $(id);

			
			var newGallery = selectedGallery.length ? selectedGallery.fadeIn() : galleries.eq(0).show();

			galleries.not(newGallery).hide();
	}

	showGallery(selected);
	
	$(".portfolio-menu a").on("click", function (event) {
		var li = $(this).parent();
		$(this).parent().addClass("selected").siblings().removeClass("selected");

		//zobraz galeriu kliknutu
		showGallery(li);

		event.preventDefault();
	});

	// LOTR

		// SCORE

		IDscore = document.getElementById("block");

		document.addEventListener("keypress", function (event) {
		var scoreElement = IDscore.nextElementSibling,
			score    	 = Number(scoreElement.textContent);

		score = score + 1;
		if (event.key == "w")
		{scoreElement.textContent = score}
		})

		//GAME
		var character = document.getElementById("character"),
			block     = document.getElementById("block"),
			start 	  = document.getElementById("start");

			start.addEventListener("click", function (event) {
				block.classList.remove("run");
				block.classList.add("run");

				IDscore = document.getElementById("block");
				var scoreElement = IDscore.nextElementSibling,
				score = Number(scoreElement.textContent);
				score = 0;
				scoreElement.textContent = score;
				event.preventDefault();
			});




		document.addEventListener("keypress", function (event) {
			if (character.classList != "jump", event.key == "w")
			character.classList.add("jump");

			setTimeout(function () {
				character.classList.remove("jump");}, 800);
		})

		var dead = setInterval(function() {
		var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
		if(blockLeft<50 && blockLeft>0 && characterTop>=130)

			{alert("Saruman sa zmocnil prsteňa! Máš odvahu to skúsiť znova?"),
			block.classList.remove("run")}
		}, 5);
		

})(jQuery);

