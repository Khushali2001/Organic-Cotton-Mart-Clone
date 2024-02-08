	$('.slider_grid').slick({
		  arrows: false,
 		  dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  draggable: false,
		  swipeToSlide: false,
		  touchMove: false,
		  adaptiveHeight: true
		});

		$('.best_selling_product_grid ').slick({
		  dots: false,
		  arrows: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1400,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 1150,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		    },
		      breakpoint: 730,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});


		$(document).ready(function () {
			$('.menu_toggler_icon').click(function() {
				$('.nav_menu').slideToggle();

				$(this).children().odd().toggleClass('odd_remove');
				$(this).children().even().toggleClass('active');
			});



			if($(window).width() < 1025 ){

				$('.menu p').click(function(){
					$(this).toggleClass('drop_up');

					$(this).parent().find('ul').slideToggle();
				});			
			}
		});


 // quentity product page js start  

	const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

window.addEventListener("load", ()=> {
    if (localStorage["num"]) {
        num.innerText = localStorage.getItem("num");
    } else {
        let a = "01";
        num.innerText = a;
    }
});

plus.addEventListener("click", ()=> {
    a = num.innerText;
    a++;
    a = (a < 10) ? "0" + a : a;
    localStorage.setItem("num", a);
    num.innerText = localStorage.getItem("num");
});

minus.addEventListener("click", ()=> {
    a = num.innerText;
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        localStorage.setItem("num", a);
        num.innerText = localStorage.getItem("num");
    }
});

 // quentity product page js end


// like js start

$(function () {
  $(".like").click(function () {
    var input = $(this).find(".qty1");
    input.val(parseInt(input.val()) + 1);
  });
});

// like css end