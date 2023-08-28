"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

// Accordion
// ========================================================================

const accordionItemHeaders = document.querySelectorAll(
	".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener("click", (event) => {
	  // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
	  const currentlyActiveAccordionItemHeader = document.querySelector(
		".accordion-item-header.active"
	  );
	  if (
		currentlyActiveAccordionItemHeader &&
		currentlyActiveAccordionItemHeader !== accordionItemHeader
	  ) {
		currentlyActiveAccordionItemHeader.classList.toggle("active");
		currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
	  }
	  accordionItemHeader.classList.toggle("active");
	  const accordionItemBody = accordionItemHeader.nextElementSibling;
	  if (accordionItemHeader.classList.contains("active")) {
		accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
	  } else {
		accordionItemBody.style.maxHeight = 0;
	  }
	});
  });
  