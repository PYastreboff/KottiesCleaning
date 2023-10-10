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
  

const reviews = [
	{
		content: "Kotties Cleaning transformed my home! Their attention to detail is incredible, and my house has never looked cleaner. I highly recommend their services.",
		footer: "Rachel M."
	},
	{
		content: "I can't thank Kotties Cleaning enough for their outstanding work. Their team is efficient, friendly, and leaves my home spotless every time. A true lifesaver!",
		footer: "Susan W."
	},
	{
		content: "We hired Kotties Cleaning for our office space on Sydney's North Shore, and the difference is remarkable. It's now a pleasant and inviting workspace thanks to their efforts.",
		footer: "Lachlan M."
	},
	{
		content: "Kotties Cleaning allows me to enjoy my weekends without the stress of having to clean myself. A must try service!",
		footer: "Mellissa W."
	},
	{
		content: "Kotties Cleaning is perfect for those seeking a pristine home without the hassle. Their service is top-notch, and I couldn't be happier with the results.",
		footer: "Lana A."
	}
	// Add more reviews as needed
];

let middleReviewIndex = 1;
const numReviews = reviews.length;

function parseIndex(i) {
	if (i >= 0 && i < reviews.length) {
		return i;
	} else if (i < 0) {
		return reviews.length  - 1;
	} else {
		return 0;
	}
}

let review1Text = document.querySelector("#review1 q");
let review2Text = document.querySelector("#review2 q");
let review3Text = document.querySelector("#review3 q");

let review1Foot = document.querySelector("#review1 footer");
let review2Foot = document.querySelector("#review2 footer");
let review3Foot = document.querySelector("#review3 footer");


function updateReviews() {
	review1Text.innerHTML = reviews[parseIndex(middleReviewIndex - 1)].content;
	review1Foot.innerHTML = reviews[parseIndex(middleReviewIndex - 1)].footer;

	review2Text.innerHTML = reviews[middleReviewIndex].content;
	review2Foot.innerHTML = reviews[middleReviewIndex].footer;

	review3Text.innerHTML = reviews[parseIndex(middleReviewIndex + 1)].content;
	review3Foot.innerHTML = reviews[parseIndex(middleReviewIndex + 1)].footer;
}


function changeReviews(d) {
	if (d == 1) {
		middleReviewIndex = parseIndex(middleReviewIndex + 1);
	} else {
		middleReviewIndex = parseIndex(middleReviewIndex - 1);
	}
	updateReviews();
}

updateReviews();