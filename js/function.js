(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	var smoothScroll = null;
	var isCompactDevice = window.matchMedia('(max-width: 767px), (hover: none), (pointer: coarse)').matches;
	if (isCompactDevice) {
		document.documentElement.classList.add('mobile-motion-lite');
		Array.prototype.forEach.call(document.querySelectorAll('video[autoplay]'), function(video){
			video.muted = true;
			video.defaultMuted = true;
			video.setAttribute('muted', '');
			video.setAttribute('playsinline', '');
			video.preload = 'metadata';

			var playPromise = video.play();
			if (playPromise && typeof playPromise.catch === 'function') {
				playPromise.catch(function(){
					var resumeVideo = function(){
						video.play().catch(function(){});
						document.removeEventListener('touchstart', resumeVideo);
						document.removeEventListener('pointerdown', resumeVideo);
					};
					document.addEventListener('touchstart', resumeVideo, { once: true, passive: true });
					document.addEventListener('pointerdown', resumeVideo, { once: true, passive: true });
				});
			}
		});
	}

	/* Momentum scrolling: wheel, trackpad, touch and anchor links */
	if(typeof Lenis !== 'undefined' && !isCompactDevice){
		try {
			smoothScroll = new Lenis({
				autoRaf: true,
				lerp: 0.09,
				smoothWheel: true,
				syncTouch: false,
				wheelMultiplier: 0.8,
				touchMultiplier: 1,
				anchors: true,
				stopInertiaOnNavigate: true,
				respectReducedMotion: true
			});

			window.adyapragnyaScroll = smoothScroll;
			document.documentElement.setAttribute('data-scroll-smoothing', 'momentum');
			if(typeof ScrollTrigger !== 'undefined'){
				smoothScroll.on('scroll', ScrollTrigger.update);
			}
		} catch (error) {
			window.adyapragnyaScroll = null;
			document.documentElement.setAttribute('data-scroll-smoothing', 'native');
			window.adyapragnyaScrollInitError = error && error.message ? error.message : String(error);
			document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling');
		}
	}

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		var $activeHeader = $("header.active-sticky-header");
		var $stickyHeader = $activeHeader.find(".header-sticky");
		var headerHeight = 0;
		var scrollTicking = false;
		var resizeTicking = false;

		function setHeaderHeight(){
			headerHeight = $stickyHeader.outerHeight() || 0;
			$activeHeader.css("height", headerHeight);
		}

		function updateStickyState(){
			var fromTop = window.pageYOffset || document.documentElement.scrollTop || 0;
			$stickyHeader.toggleClass("hide", fromTop > headerHeight + 100);
			$stickyHeader.toggleClass("active", fromTop > 600);
			scrollTicking = false;
		}

		function requestStickyUpdate(){
			if(scrollTicking) return;
			scrollTicking = true;
			window.requestAnimationFrame(updateStickyState);
		}

		$window.on('resize', function(){
			if(resizeTicking) return;
			resizeTicking = true;
			window.requestAnimationFrame(function(){
				setHeaderHeight();
				updateStickyState();
				resizeTicking = false;
			});
		});

		window.addEventListener("scroll", requestStickyUpdate, { passive: true });
		$window.on("load", function(){
			setHeaderHeight();
			requestStickyUpdate();
		});
		setHeaderHeight();
		updateStickyState();
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu',
		closeOnClick : true,
		beforeOpen : function(){
			document.documentElement.classList.add('mobile-menu-open');
		},
		afterClose : function(){
			if (!$('.slicknav_btn').hasClass('slicknav_open')) {
				document.documentElement.classList.remove('mobile-menu-open');
			}
		}
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}


	/* Testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				1300:{
					slidesPerView: 3,
				}
			}
		});
	}

	/* Company Support Slider JS */
	if ($('.company-supports-slider').length) {
		const company_supports_slider= new Swiper('.company-supports-slider .swiper', {
			slidesPerView : 2,
			speed: 2000,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				767:{
					slidesPerView: 4,
				},
				1025:{
					slidesPerView: 5,
				}
			}
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider-silver').length) {
		const testimonial_slider_silver = new Swiper('.testimonial-slider-silver .swiper', {
			slidesPerView : 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			
		});
	}

	/* Testimonial Slider JS */
	if ($('.testimonial-slider-gold').length) {
		const testimonial_slider_gold = new Swiper('.testimonial-slider-gold .swiper', {
			slidesPerView : 1,
			speed: 2000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				1025:{
					slidesPerView: 3,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Replaying, accessible count-up stats. */
	(function initCountUpStats(){
		var counters = document.querySelectorAll('.count-up');
		if (!counters.length) return;

		var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || isCompactDevice;
		var formatter = new Intl.NumberFormat('en-IN');

		function finalText(element){
			var value = Number(element.getAttribute('data-count')) || 0;
			var decimals = Number.isInteger(value) ? 0 : String(value).split('.')[1].length;
			var suffix = element.getAttribute('data-suffix') || '';
			return formatter.format(Number(value.toFixed(decimals))) + suffix;
		}

		function animateCounter(element){
			var end = Number(element.getAttribute('data-count')) || 0;
			var decimals = Number.isInteger(end) ? 0 : String(end).split('.')[1].length;
			var suffix = element.getAttribute('data-suffix') || '';
			var duration = Math.min(1800, Math.max(1100, 900 + end * 22));
			var startTime = 0;
			var animationFrame = Number(element.dataset.animationFrame) || 0;
			if (animationFrame) window.cancelAnimationFrame(animationFrame);

			function tick(timestamp){
				if (!startTime) startTime = timestamp;
				var progress = Math.min((timestamp - startTime) / duration, 1);
				var eased = 1 - Math.pow(1 - progress, 4);
				var current = end * eased;
				element.textContent = formatter.format(Number(current.toFixed(decimals))) + suffix;
				if (progress < 1) {
					element.dataset.animationFrame = String(window.requestAnimationFrame(tick));
				} else {
					element.textContent = finalText(element);
					element.classList.remove('is-counted');
					void element.offsetWidth;
					element.classList.add('is-counted');
					element.removeAttribute('data-animation-frame');
				}
			}

			element.textContent = '0' + suffix;
			element.dataset.animationFrame = String(window.requestAnimationFrame(tick));
		}

		if (reduceMotion || !('IntersectionObserver' in window)) {
			counters.forEach(function(counter){ counter.textContent = finalText(counter); });
			return;
		}

		var observer = new IntersectionObserver(function(entries){
			entries.forEach(function(entry){
				var counter = entry.target;
				if (entry.isIntersecting) {
					animateCounter(counter);
				} else {
					var animationFrame = Number(counter.dataset.animationFrame) || 0;
					if (animationFrame) window.cancelAnimationFrame(animationFrame);
					counter.removeAttribute('data-animation-frame');
					counter.textContent = '0' + (counter.getAttribute('data-suffix') || '');
				}
			});
		}, { threshold: 0.55 });

		counters.forEach(function(counter){
			counter.setAttribute('aria-label', finalText(counter));
			observer.observe(counter);
		});
	})();

	/* Image Reveal Animation */
	if ($('.reveal').length && !isCompactDevice) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	function initHeadingAnimation() {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isCompactDevice) return;
		gsap.registerPlugin(SplitText, ScrollTrigger);
		
		if($('.text-effect').length) {
			var textheading = $(".text-effect");

			if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('text-effect') ){
					gsap.set(el.split.chars, {
						opacity: .3,
						x: "-7",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},

					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}
		
		if ($('.text-anime-style-1').length) {
			let staggerAmount 	= 0.05,
				translateXValue = 0,
				delayValue 		= 0.5,
			   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
					});
			});		
		}
		
		if ($('.text-anime-style-2').length) {				
			let	 staggerAmount 		= 0.03,
				 translateXValue	= 20,
				 delayValue 		= 0.1,
				 easeType 			= "power2.out",
				 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
						scrollTrigger: { trigger: element, start: "top 85%"},
					});
			});		
		}
		
		if ($('.text-anime-style-3').length) {		
			let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
			
			 animatedTextElements.forEach((element) => {
				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words",
					linesClass: "split-line",
					wordsClass: "split-word",
				});
				if (element.closest('.hero-interactive') && element.split.words.length) {
					element.split.words[element.split.words.length - 1].classList.add('hero-action-word');
				}
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.words, {
					opacity: 0,
					y: 30,
					rotateX: -12,
				});

				element.animation = gsap.to(element.split.words, {
					y: 0,
					rotateX: 0,
					opacity: 1,
					duration: 0.58,
					ease: "power3.out",
					stagger: { each: 0.115, from: "start" },
					paused: true,
				});

				element.scrollAnimation = ScrollTrigger.create({
					trigger: element,
					start: "top 88%",
					end: "bottom 12%",
					onEnter: function () { element.animation.restart(); },
					onEnterBack: function () { element.animation.restart(); },
					onLeave: function () { element.animation.pause(0); },
					onLeaveBack: function () { element.animation.pause(0); }
				});
			});		
		}
	}
	
	if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initHeadingAnimation();
        });
    } else {
        window.addEventListener("load", initHeadingAnimation);
    }

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 1024))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	
	/* Animated Wow Js */	
	if (isCompactDevice) {
		$('.wow').css('visibility', 'visible').removeClass('wow animated');
	} else {
		new WOW().init();
	}

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}

	/* How It Works List Start */
	var $how_work_item_list = $('.how-work-item-list');
	if ($how_work_item_list.length) {
		var $how_work_item = $how_work_item_list.find('.how-work-item');

		if ($how_work_item.length) {
			$how_work_item.on({
				mouseenter: function () {
					if (!$(this).hasClass('active')) {
						$how_work_item.removeClass('active'); 
						$(this).addClass('active'); 
					}
				},
				mouseleave: function () {
					// Optional: Add logic for mouse leave if needed
				}
			});
		}
	}
	/* How It Works List End */

	/* Interactive homepage hero: spring-based cinematic 3D depth. */
	(function initInteractiveHero(){
		var hero = document.querySelector('.hero-interactive');
		if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches || isCompactDevice) return;

		var content = hero.querySelector('.hero-content-box-silver');
		var video = hero.querySelector('.hero-bg-video-silver video');
		var depthLayers = Array.prototype.map.call(hero.querySelectorAll('.hero-depth-layer'), function(element){
			return {
				element: element,
				depth: Number(element.getAttribute('data-depth')) || 8,
				x: 0,
				y: 0,
				z: 0,
				velocityX: 0,
				velocityY: 0,
				velocityZ: 0
			};
		});
		var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
		var frame = 0;
		var targetX = 0;
		var targetY = 0;
		var currentX = 0;
		var currentY = 0;
		var targetIntensity = 0;
		var currentIntensity = 0;

		function renderHeroDepth(){
			var layersMoving = false;
			currentX += (targetX - currentX) * 0.065;
			currentY += (targetY - currentY) * 0.065;
			currentIntensity += (targetIntensity - currentIntensity) * 0.075;
			hero.style.setProperty('--hero-pointer-x', ((targetX + 1) * 50) + '%');
			hero.style.setProperty('--hero-pointer-y', ((targetY + 1) * 50) + '%');
			hero.style.setProperty('--hero-tilt-x', (-currentY * 4.2).toFixed(3) + 'deg');
			hero.style.setProperty('--hero-tilt-y', (currentX * 5.2).toFixed(3) + 'deg');
			hero.style.setProperty('--hero-shadow-x', (-currentX * 14).toFixed(2) + 'px');
			hero.style.setProperty('--hero-shadow-y', (-currentY * 10 + 8).toFixed(2) + 'px');
			if (content) {
				content.style.transform = 'perspective(1200px) translate3d(' + (currentX * 3.5) + 'px,' + (currentY * 2.6) + 'px,0) rotateX(' + (-currentY * 1.6) + 'deg) rotateY(' + (currentX * 2.1) + 'deg)';
			}
			if (video) video.style.transform = 'scale(1.105) translate3d(' + (currentX * -13) + 'px,' + (currentY * -9) + 'px,0)';

			depthLayers.forEach(function(layer){
				var destinationX = targetX * layer.depth * 1.12;
				var destinationY = targetY * layer.depth * 0.82;
				var destinationZ = currentIntensity * layer.depth * 1.75;
				layer.velocityX = (layer.velocityX + (destinationX - layer.x) * 0.052) * 0.82;
				layer.velocityY = (layer.velocityY + (destinationY - layer.y) * 0.052) * 0.82;
				layer.velocityZ = (layer.velocityZ + (destinationZ - layer.z) * 0.048) * 0.80;
				layer.x += layer.velocityX;
				layer.y += layer.velocityY;
				layer.z += layer.velocityZ;
				var tiltX = -currentY * (1.25 + layer.depth * 0.08);
				var tiltY = currentX * (1.4 + layer.depth * 0.1);
				var rotation = currentX * layer.depth * 0.018;
				layer.element.style.transform = 'translate3d(' + layer.x.toFixed(3) + 'px,' + layer.y.toFixed(3) + 'px,' + layer.z.toFixed(3) + 'px) rotateX(' + tiltX.toFixed(3) + 'deg) rotateY(' + tiltY.toFixed(3) + 'deg) rotateZ(' + rotation.toFixed(3) + 'deg)';
				if (Math.abs(destinationX - layer.x) > 0.02 || Math.abs(destinationY - layer.y) > 0.02 || Math.abs(destinationZ - layer.z) > 0.02 || Math.abs(layer.velocityX) > 0.02 || Math.abs(layer.velocityY) > 0.02 || Math.abs(layer.velocityZ) > 0.02) {
					layersMoving = true;
				}
			});

			if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002 || Math.abs(targetIntensity - currentIntensity) > 0.002 || layersMoving) {
				frame = window.requestAnimationFrame(renderHeroDepth);
			} else {
				frame = 0;
			}
		}

		function updateTarget(event){
			var rect = hero.getBoundingClientRect();
			targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
			targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
			targetIntensity = 1;
			hero.classList.add('is-depth-active');
			if (!frame) frame = window.requestAnimationFrame(renderHeroDepth);
		}

		function resetTarget(){
			targetX = 0;
			targetY = 0;
			targetIntensity = 0;
			hero.classList.remove('is-depth-active');
			if (!frame) frame = window.requestAnimationFrame(renderHeroDepth);
		}

		if (finePointer.matches) {
			hero.addEventListener('pointermove', updateTarget, { passive: true });
			hero.addEventListener('pointerleave', resetTarget, { passive: true });
		}
	})();


	/* Cinematic hero staging, replayed when the scene re-enters view. */
	(function initHeroIntro(){
		var hero = document.querySelector('.hero-interactive');
		if (!hero) return;
		hero.classList.add('has-cinematic-intro');
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isCompactDevice) {
			hero.classList.add('is-intro-ready');
			return;
		}

		function playIntro(){
			hero.classList.remove('is-intro-ready');
			window.requestAnimationFrame(function(){
				window.requestAnimationFrame(function(){ hero.classList.add('is-intro-ready'); });
			});
		}

		if (!('IntersectionObserver' in window)) {
			playIntro();
			return;
		}

		var introObserver = new IntersectionObserver(function(entries){
			entries.forEach(function(entry){
				if (entry.isIntersecting) playIntro();
				else hero.classList.remove('is-intro-ready');
			});
		}, { threshold: 0.28 });

		introObserver.observe(hero);
	})();

	/* Localized light follows the pointer across catalog cards. */
	(function initCatalogCards(){
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
		var cards = document.querySelectorAll('.catalog-section .service-item');
		cards.forEach(function(card){
			var frame = 0;
			var pointerX = 0;
			var pointerY = 0;
			card.addEventListener('pointermove', function(event){
				pointerX = event.clientX;
				pointerY = event.clientY;
				if (frame) return;
				frame = window.requestAnimationFrame(function(){
					frame = 0;
					var rect = card.getBoundingClientRect();
					card.style.setProperty('--card-x', (pointerX - rect.left) + 'px');
					card.style.setProperty('--card-y', (pointerY - rect.top) + 'px');
				});
			}, { passive: true });
		});
	})();

	/* OEM portfolio: calm autoplay, drag/swipe, and pause on interaction. */
	(function initOemPortfolioCarousel(){
		var carousel = document.querySelector('.oem-portfolio-swiper');
		if (!carousel || typeof Swiper === 'undefined') return;
		var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		var portfolioSwiper = new Swiper(carousel, {
			slidesPerView: 1,
			spaceBetween: 16,
			speed: reduceMotion ? 1 : 5200,
			loop: true,
			loopAdditionalSlides: 2,
			rewind: false,
			centeredSlides: false,
			grabCursor: true,
			autoHeight: false,
			autoplay: reduceMotion ? false : {
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			},
			pagination: {
				el: '.oem-carousel-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.oem-carousel-next',
				prevEl: '.oem-carousel-prev'
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			breakpoints: {
				768: { slidesPerView: 2, spaceBetween: 22 },
				1180: { slidesPerView: 3, spaceBetween: 26 },
				1500: { slidesPerView: 4, spaceBetween: 28 }
			}
		});

		if (!reduceMotion && 'IntersectionObserver' in window) {
			var autoplayObserver = new IntersectionObserver(function(entries){
				entries.forEach(function(entry){
					if (entry.isIntersecting) portfolioSwiper.autoplay.start();
					else portfolioSwiper.autoplay.stop();
				});
			}, { threshold: 0.05 });
			autoplayObserver.observe(carousel);
		}
	})();

	/* OEM banner physics: drop, collide, drag and release every object. */
	(function initOemGravityField(){
		var field = document.querySelector('.oem-gravity-field');
		if (!field) return;

		var elements = Array.prototype.slice.call(field.querySelectorAll('.oem-gravity-item'));
		var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || isCompactDevice;
		var bodies = [];
		var frame = 0;
		var previousTime = 0;
		var simulationEndsAt = 0;
		var running = false;
		var inView = false;
		var dragged = null;
		var bounds = { width: field.clientWidth, height: field.clientHeight };
		var fieldRect = field.getBoundingClientRect();

		function measure(){
			bounds.width = field.clientWidth;
			bounds.height = field.clientHeight;
			fieldRect = field.getBoundingClientRect();
		}

		function render(body){
			var rotationLimit = body.el.classList.contains('oem-gravity-logo') ? 2.2 : 8;
			var rotation = Math.max(-rotationLimit, Math.min(rotationLimit, body.angle));
			var transform = 'translate3d(' + body.x.toFixed(1) + 'px,' + body.y.toFixed(1) + 'px,0) rotate(' + rotation.toFixed(1) + 'deg)';
			if (transform === body.transform) return;
			body.el.style.transform = transform;
			body.transform = transform;
		}

		function stop(){
			running = false;
			if (frame) cancelAnimationFrame(frame);
			frame = 0;
			field.classList.remove('is-simulating');
		}

		function wake(duration){
			if (!inView || document.hidden || reducedMotion) return;
			running = true;
			field.classList.add('is-simulating');
			previousTime = performance.now();
			simulationEndsAt = Math.max(simulationEndsAt, previousTime + (duration || 2600));
			if (!frame) frame = requestAnimationFrame(tick);
		}

		function resetBodies(animate){
			measure();
			var now = performance.now();
			bodies = elements.map(function(el, index){
				var width = el.offsetWidth;
				var height = el.offsetHeight;
				var startX = Math.max(0, Math.min(bounds.width - width, parseFloat(el.dataset.x || 0.5) * bounds.width - width / 2));
				var floorOffset = el.classList.contains('oem-gravity-logo') ? 0 : (el.classList.contains('oem-telemetry-node') ? 76 : 70);
				var floorY = Math.max(0, bounds.height - height - floorOffset);
				var body = bodies[index] || { el: el };
				body.x = startX;
				body.y = reducedMotion || !animate ? floorY : -height - 30 - index * 34;
				body.vx = reducedMotion || !animate ? 0 : (index % 2 ? -18 : 18);
				body.vy = 0;
				body.width = width;
				body.height = height;
				body.floorOffset = floorOffset;
				body.angle = reducedMotion || !animate ? 0 : (index % 2 ? 3 : -3);
				body.spin = reducedMotion || !animate ? 0 : (index % 2 ? 4 : -4);
				body.dragging = false;
				body.startAt = now + (animate ? Number(el.dataset.delay || 0) : 0);
				body.lastPointerX = 0;
				body.lastPointerY = 0;
				body.lastPointerTime = 0;
				body.moved = false;
				body.transform = '';
				render(body);
				return body;
			});
			if (animate && !reducedMotion) wake(5200);
		}

		function solvePair(a, b){
			if (a.dragging || b.dragging) return;
			var speed = Math.abs(a.vx) + Math.abs(a.vy) + Math.abs(b.vx) + Math.abs(b.vy);
			if (speed < 18) return;
			var overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
			var overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
			if (overlapX <= 0 || overlapY <= 0) return;
			if (overlapX < overlapY) {
				var directionX = a.x < b.x ? -1 : 1;
				a.x += directionX * overlapX * 0.5;
				b.x -= directionX * overlapX * 0.5;
				var averageVx = (a.vx + b.vx) * 0.34;
				a.vx = averageVx + directionX * 9;
				b.vx = averageVx - directionX * 9;
			} else {
				var directionY = a.y < b.y ? -1 : 1;
				a.y += directionY * overlapY * 0.5;
				b.y -= directionY * overlapY * 0.5;
				var averageVy = (a.vy + b.vy) * 0.18;
				a.vy = averageVy + directionY * 7;
				b.vy = averageVy - directionY * 7;
			}
		}

		function tick(time){
			frame = 0;
			if (!running || !inView || document.hidden) {
				stop();
				return;
			}
			var dt = Math.min(0.026, Math.max(0.001, (time - previousTime) / 1000));
			var active = false;
			previousTime = time;
			var expired = time >= simulationEndsAt && !dragged;

			bodies.forEach(function(body){
				if (body.dragging) return;
				var floorY = Math.max(0, bounds.height - body.height - body.floorOffset);
				if (expired) {
					body.y = floorY;
					body.vx = body.vy = body.spin = 0;
					return;
				}
				if (time < body.startAt) {
					active = true;
					return;
				}
				body.vy += 1080 * dt;
				body.x += body.vx * dt;
				body.y += body.vy * dt;
				body.angle += body.spin * dt;
				if (body.x <= 0 || body.x + body.width >= bounds.width) {
					body.x = Math.max(0, Math.min(bounds.width - body.width, body.x));
					body.vx *= -0.52;
					body.spin *= -0.7;
				}
				if (body.y >= floorY) {
					body.y = floorY;
					if (Math.abs(body.vy) > 34) body.vy *= -0.28;
					else body.vy = 0;
					body.vx *= 0.86;
					body.spin *= 0.72;
				}
				if (body.y < 0 && body.vy < 0) body.vy *= -0.35;
				if (Math.abs(body.vx) > 1.5 || Math.abs(body.vy) > 1.5 || Math.abs(body.spin) > 0.7 || body.y < floorY - 1) active = true;
			});

			if (!expired) {
				for (var i = 0; i < bodies.length; i++) {
					for (var j = i + 1; j < bodies.length; j++) solvePair(bodies[i], bodies[j]);
				}
			}
			bodies.forEach(function(body){
				if (Math.abs(body.vx) < 0.7) body.vx = 0;
				if (Math.abs(body.vy) < 0.7) body.vy = 0;
				if (Math.abs(body.spin) < 0.3) body.spin = 0;
				render(body);
			});
			running = !expired && (active || !!dragged);
			if (running) frame = requestAnimationFrame(tick);
			else field.classList.remove('is-simulating');
		}

		bodies = [];
		resetBodies(false);

		bodies.forEach(function(body){
			body.el.addEventListener('dragstart', function(event){ event.preventDefault(); });
			body.el.addEventListener('pointerdown', function(event){
				if (event.button !== undefined && event.button !== 0) return;
				dragged = body;
				body.dragging = true;
				body.moved = false;
				measure();
				body.offsetX = event.clientX - fieldRect.left - body.x;
				body.offsetY = event.clientY - fieldRect.top - body.y;
				body.lastPointerX = event.clientX;
				body.lastPointerY = event.clientY;
				body.lastPointerTime = performance.now();
				body.vx = 0;
				body.vy = 0;
				body.el.classList.add('is-dragging');
				body.el.setPointerCapture(event.pointerId);
				wake(3600);
			});

			body.el.addEventListener('pointermove', function(event){
				if (dragged !== body) return;
				var now = performance.now();
				var elapsed = Math.max(8, now - body.lastPointerTime);
				var nextX = Math.max(0, Math.min(bounds.width - body.width, event.clientX - fieldRect.left - body.offsetX));
				var nextY = Math.max(0, Math.min(bounds.height - body.height, event.clientY - fieldRect.top - body.offsetY));
				body.vx = (event.clientX - body.lastPointerX) / elapsed * 1000;
				body.vy = (event.clientY - body.lastPointerY) / elapsed * 1000;
				body.moved = body.moved || Math.abs(nextX - body.x) + Math.abs(nextY - body.y) > 5;
				body.x = nextX;
				body.y = nextY;
				body.angle += body.vx * 0.0008;
				body.lastPointerX = event.clientX;
				body.lastPointerY = event.clientY;
				body.lastPointerTime = now;
				render(body);
			});

			function release(event){
				if (dragged !== body) return;
				body.dragging = false;
				body.spin = Math.max(-90, Math.min(90, body.vx * 0.045));
				body.el.classList.remove('is-dragging');
				if (body.el.hasPointerCapture(event.pointerId)) body.el.releasePointerCapture(event.pointerId);
				dragged = null;
				wake(2600);
			}

			body.el.addEventListener('pointerup', release);
			body.el.addEventListener('pointercancel', release);
			body.el.addEventListener('click', function(event){
				if (body.moved) event.preventDefault();
			});
		});

		var resizeTimer = 0;
		window.addEventListener('resize', function(){
			window.clearTimeout(resizeTimer);
			resizeTimer = window.setTimeout(function(){ resetBodies(false); }, 160);
		}, { passive: true });

		/* Entering the viewport always starts a complete, deterministic drop. */
		if ('IntersectionObserver' in window) {
			var fieldObserver = new IntersectionObserver(function(entries){
				entries.forEach(function(entry){
					if (entry.isIntersecting && !inView) {
						inView = true;
						window.requestAnimationFrame(function(){ resetBodies(!reducedMotion); });
					} else if (!entry.isIntersecting) {
						inView = false;
						stop();
					}
				});
			}, { threshold: 0.14 });
			fieldObserver.observe(field);
		} else {
			inView = true;
			resetBodies(!reducedMotion);
		}

		document.addEventListener('visibilitychange', function(){
			if (document.hidden) stop();
		});
	})();
	
})(jQuery);

/* Stable list checks: real elements replace conflicting legacy pseudo-icons. */
(function initStableListChecks(){
	var selector = [
		'.about-us-content-list > ul > li',
		'.why-choose-info-list > ul > li',
		'.about-body-list-silver > ul > li',
		'.what-we-body-list-silver > ul > li',
		'.why-choose-footer-silver > ul > li',
		'.how-work-item-content > ul > li',
		'.what-we-item-content > ul > li'
	].join(',');

	Array.prototype.forEach.call(document.querySelectorAll(selector), function(item){
		var check = item.querySelector(':scope > .ui-list-check, :scope > .list-check, :scope > .benefit-check');
		if (!check) {
			check = document.createElement('span');
			check.setAttribute('aria-hidden', 'true');
			item.insertBefore(check, item.firstChild);
		}
		check.classList.add('ui-list-check');
	});
})();

/* =====================================================================
   Reversible section hand-off
   Sections sharpen in the viewport and softly blur as they leave above or
   below. IntersectionObserver keeps this event-driven with no scroll loop.
   ===================================================================== */
(function initSectionHandOff(){
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(max-width: 767px), (hover: none), (pointer: coarse)').matches) return;

	function collectSections(){
		var sections = [];
		var excludedRegions = 'header, footer, script, .preloader, [data-include], .page-header, .oem-page-header, .hero-silver';
		Array.prototype.forEach.call(document.body.children, function(element){
			if (element.matches(excludedRegions)) return;
			if (element.id === 'detail-page') {
				Array.prototype.forEach.call(element.children, function(child){
					if (!child.matches(excludedRegions) && child.matches('section, div')) sections.push(child);
				});
				return;
			}
			if (element.matches('main, section, div')) sections.push(element);
		});
		return sections.filter(function(section){ return section.offsetHeight > 80; });
	}

	function getContentTarget(section){
		for (var index = 0; index < section.children.length; index += 1) {
			var child = section.children[index];
			if (child.classList.contains('container') || child.classList.contains('container-fluid')) return child;
		}
		return section;
	}

	function setPositionClass(section, isActive){
		var target = section._sectionHandoffTarget || section;
		target.classList.remove('is-view-active', 'is-view-before', 'is-view-after');
		if (isActive) {
			target.classList.add('is-view-active');
			return;
		}
		var rect = section.getBoundingClientRect();
		target.classList.add(rect.bottom <= window.innerHeight * 0.5 ? 'is-view-before' : 'is-view-after');
	}

	function start(){
		var sections = collectSections();
		if (!sections.length) return;
		document.documentElement.classList.add('has-section-handoff');

		sections.forEach(function(section){
			var target = getContentTarget(section);
			section._sectionHandoffTarget = target;
			target.classList.add('section-handoff');
			var rect = section.getBoundingClientRect();
			setPositionClass(section, rect.bottom > window.innerHeight * 0.1 && rect.top < window.innerHeight * 0.9);
		});

		if (!('IntersectionObserver' in window)) {
			sections.forEach(function(section){ setPositionClass(section, true); });
			return;
		}

		var observer = new IntersectionObserver(function(entries){
			entries.forEach(function(entry){ setPositionClass(entry.target, entry.isIntersecting); });
		}, {
			threshold: 0.01,
			rootMargin: '-10% 0px -10% 0px'
		});

		sections.forEach(function(section){ observer.observe(section); });
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
	else start();
})();
