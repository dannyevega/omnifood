$(document).ready(function(){

	/* Sticky navigation */
	$('.js-section-features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	/* Scroll on button click */
	$('.js-scroll-to-plan').click(function(){
		$('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
	})

	$('.js-scroll-to-start').click(function(){
		$('html, body').animate( {scrollTop: $('.js-section-features').offset().top}, 1000);
	})

	/* Navigation Scroll */
	/* This is a good snipped to use to jump from section to section by creating links */
	/* Will jump to section of page when clicking on link */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	/* Animation on scroll */
	$('.js-first-waypoint').waypoint(function(direction){
		$('.js-first-waypoint').addClass('animated fadeIn')
	}, {
		offset: '50%'
	});

	$('.js-second-waypoint').waypoint(function(direction){
		$('.js-second-waypoint').addClass('animated fadeInUp')
	}, {
		offset: '50%'
	});

	$('.js-third-waypoint').waypoint(function(direction){
		$('.js-third-waypoint').addClass('animated fadeIn')
	}, {
		offset: '50%'
	});

	$('.js-fourth-waypoint').waypoint(function(direction){
		$('.js-fourth-waypoint').addClass('animated pulse')
	}, {
		offset: '50%'
	});

	/* Mobile nav icon */
	$('.js-nav-icon').click(function(){
		var nav = $('.js-main-nav');
		var icon = $('.js-nav-icon i');

		nav.slideToggle(200);

		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round')
			icon.removeClass('ion-navicon-round')
		} else {
			icon.addClass('ion-navicon-round')
			icon.removeClass('ion-close-round')
		}
	});

	/* Maps */
	var map = new GMaps({
		div: 'map',
		lat: 37.8063921,
		lng: -122.21,
		zoom: 13
	});

	map.addMarker({
		lat: 37.8063921,
		lng: -122.2758404,
		title: 'Oakland',
		infoWindow: {
			content: '<p>Oakland Home</p>'
		}
	});

});