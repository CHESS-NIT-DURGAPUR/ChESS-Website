import $ from "jquery";
import { WOW } from "wowjs"
(function () {
	// Global variables
	var
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isNoviBuilder = false,

		plugins = {
			bootstrapTooltip: $('[data-toggle="tooltip"]'),
			customToggle: $('[data-custom-toggle]'),
			counter: $('.counter'),
			captcha: $('.recaptcha'),
			campaignMonitor: $('.campaign-mailform'),
			copyrightYear: $('.copyright-year'),
			owl: $('.owl-carousel'),
			progressLinear: $('.progress-linear'),
			preloader: $('.preloader'),
			rdNavbar: $('.rd-navbar'),
			rdMailForm: $('.rd-mailform'),
			rdInputLabel: $('.form-label'),
			regula: $('[data-constraints]'),
			search: $('.rd-search'),
			searchResults: $('.rd-search-results'),
			wow: $('.wow'),
			parallaxJs: $(".parallax-scene-js"),
			maps: $('.google-map-container'),
			customWaypoints: $('[data-custom-scroll-to]'),
			selectFilter: $("select")
		};


	/**
	 * @desc Calls a function when element has been scrolled into the view
	 * @param {object} element - jQuery object
	 * @param {function} func - init function
	 */

	// Initialize scripts that require a finished document
	$(function () {
		isNoviBuilder = window.xMode;

		/**
		 * @desc Initialize owl carousel plugin
		 * @param {object} carousel - carousel jQuery object
		 */
		function initOwlCarousel(carousel) {
			var
				aliaces = ['-', '-sm-', '-md-', '-lg-', '-xl-', '-xxl-'],
				values = [0, 576, 768, 992, 1200, 1600],
				responsive = {};

			for (var j = 0; j < values.length; j++) {
				responsive[values[j]] = {};
				for (var k = j; k >= -1; k--) {
					if (!responsive[values[j]]['items'] && carousel.attr('data' + aliaces[k] + 'items')) {
						responsive[values[j]]['items'] = k < 0 ? 1 : parseInt(carousel.attr('data' + aliaces[k] + 'items'), 10);
					}
					if (!responsive[values[j]]['stagePadding'] && responsive[values[j]]['stagePadding'] !== 0 && carousel.attr('data' + aliaces[k] + 'stage-padding')) {
						responsive[values[j]]['stagePadding'] = k < 0 ? 0 : parseInt(carousel.attr('data' + aliaces[k] + 'stage-padding'), 10);
					}
					if (!responsive[values[j]]['margin'] && responsive[values[j]]['margin'] !== 0 && carousel.attr('data' + aliaces[k] + 'margin')) {
						responsive[values[j]]['margin'] = k < 0 ? 30 : parseInt(carousel.attr('data' + aliaces[k] + 'margin'), 10);
					}
				}
			}

			// Enable custom pagination
			if (carousel.attr('data-dots-custom')) {
				carousel.on('initialized.owl.carousel', function (event) {
					var
						carousel = $(event.currentTarget),
						customPag = $(carousel.attr('data-dots-custom')),
						active = 0;

					if (carousel.attr('data-active')) {
						active = parseInt(carousel.attr('data-active'), 10);
					}

					carousel.trigger('to.owl.carousel', [active, 300, true]);
					customPag.find('[data-owl-item="' + active + '"]').addClass('active');

					customPag.find('[data-owl-item]').on('click', function (event) {
						event.preventDefault();
						carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute('data-owl-item'), 10), 300, true]);
					});

					carousel.on('translate.owl.carousel', function (event) {
						customPag.find('.active').removeClass('active');
						customPag.find('[data-owl-item="' + event.item.index + '"]').addClass('active')
					});
				});
			}

			carousel.owlCarousel({
				autoplay: isNoviBuilder ? false : carousel.attr('data-autoplay') !== 'false',
				autoplayTimeout: carousel.attr("data-autoplay") ? Number(carousel.attr("data-autoplay")) : 3000,
				autoplayHoverPause: true,
				loop: isNoviBuilder ? false : carousel.attr('data-loop') !== 'false',
				items: 1,
				center: carousel.attr('data-center') === 'true',
				dotsContainer: carousel.attr('data-pagination-class') || false,
				navContainer: carousel.attr('data-navigation-class') || false,
				mouseDrag: isNoviBuilder ? false : carousel.attr('data-mouse-drag') !== 'false',
				nav: carousel.attr('data-nav') === 'true',
				dots: carousel.attr('data-dots') === 'true',
				dotsEach: carousel.attr('data-dots-each') ? parseInt(carousel.attr('data-dots-each'), 10) : false,
				animateIn: carousel.attr('data-animation-in') ? carousel.attr('data-animation-in') : false,
				animateOut: carousel.attr('data-animation-out') ? carousel.attr('data-animation-out') : false,
				responsive: responsive,
				navText: carousel.attr('data-nav-text') ? $.parseJSON(carousel.attr('data-nav-text')) : [],
				navClass: carousel.attr('data-nav-class') ? $.parseJSON(carousel.attr('data-nav-class')) : ['owl-prev', 'owl-next']
			});
		}

		/**
		 * @desc Create live search results
		 * @param {object} options
		 */
		/**
		 * @desc Attach form validation to elements
		 * @param {object} elements - jQuery object
		 */

		// Owl carousel
		if (plugins.owl.length) {
			for (var i = 0; i < plugins.owl.length; i++) {
				var carousel = $(plugins.owl[i]);
				plugins.owl[i].owl = carousel;
				initOwlCarousel(carousel);
			}
		}

		// WOW
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
			new WOW().init();
		}

		// RD Input Label
		if (plugins.rdInputLabel.length) {
			plugins.rdInputLabel.RDInputLabel();
		}

		// Custom Toggles
		if (plugins.customToggle.length) {
			for (i = 0; i < plugins.customToggle.length; i++) {
				var $this = $(plugins.customToggle[i]);

				$this.on('click', $.proxy(function (event) {
					event.preventDefault();

					var $ctx = $(this);
					$($ctx.attr('data-custom-toggle')).add(this).toggleClass('active');
				}, $this));

				if ($this.attr("data-custom-toggle-hide-on-blur") === "true") {
					$body.on("click", $this, function (e) {
						if (e.target !== e.data[0]
							&& $(e.data.attr('data-custom-toggle')).find($(e.target)).length
							&& e.data.find($(e.target)).length === 0) {
							$(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
						}
					})
				}

				if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
					$body.on("click", $this, function (e) {
						if (e.target !== e.data[0] && $(e.data.attr('data-custom-toggle')).find($(e.target)).length === 0 && e.data.find($(e.target)).length === 0) {
							$(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
						}
					})
				}
			}
		}


		/**
		 * Parallax JS
		 * @description Creates a parallax effect between an array of layers, driving the motion from the gyroscope output of a smartdevice. If no gyroscope is available, the cursor position is used.
		 */

		//Custom Waypoints
		if (plugins.customWaypoints.length && !isNoviBuilder) {
			var i;
			for (i = 0; i < plugins.customWaypoints.length; i++) {
				$this = $(plugins.customWaypoints[i]);

				$this.on('click', function (e) {
					e.preventDefault();

					$("body, html").stop().animate({
						scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
					}, 1000, function () {
						$window.trigger("resize");
					});
				});
			}
		}


		/**
		 * Select2
		 * @description Enables select2 plugin
		 */
		if (plugins.selectFilter.length) {
			var i;
			for (i = 0; i < plugins.selectFilter.length; i++) {
				var select = $(plugins.selectFilter[i]);

				select.select2({
					placeholder: select.attr("data-placeholder") ? select.attr("data-placeholder") : false,
					minimumResultsForSearch: select.attr("data-minimum-results-search") ? select.attr("data-minimum-results-search") : -1,
					maximumSelectionSize: 3,
					dropdownCssClass: select.attr("data-dropdown-class") ? select.attr("data-dropdown-class") : ''
				});
			}
		}
	});
}());
