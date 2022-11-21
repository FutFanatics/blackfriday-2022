(function($) {
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		var hgHeader = $('header').height();
		var hgHeaderNav = $('header .header-nav').height();
		var hgBannerTop = $('body > .banner-top-site').height();
		var hgInfoDanger = $('body > .infobox.danger').height();

		if (!isMobile()) {
			if (st > (getNotNaN(hgHeader) - getNotNaN(hgHeaderNav)  + getNotNaN(hgBannerTop) + getNotNaN(hgInfoDanger) ) ) {
				$('header .header-nav').css({'position': 'absolute', 'width': '100%', 'z-index': '-1'});
				$('.custom-page.page-black').css({'margin-top': '53px'});

				if (st > lastScrollTop) {
					$('header .header-nav').css({'top': '0'});
				} else {
					$('header .header-nav').css({'top': '100%'});
				}
			} else {
				$('header .header-nav').css({'position': 'relative', 'width': 'auto', 'z-index': '0'});
				$('.custom-page.page-black').css({'margin-top': '0'});
			}
		} else {
			if (st > ((getNotNaN(hgHeader) + getNotNaN(hgBannerTop)  + getNotNaN(hgInfoDanger) ) ) ) {
				$('.header-infos .busca').css({'position': 'absolute', 'width': '100%'});
				$('.custom-page.page-black').css({'margin-top': '43px'});

				if (st > lastScrollTop) {
					$('.header-infos .busca').stop(true).slideUp(0);
					$('.links-usuario .search').removeClass('invisible');
				} else {
					$('.header-infos .busca').stop(true).slideDown(0);
					$('.links-usuario .search').addClass('invisible');
				}
			} else {
				$('.header-infos .busca').css({'position': 'relative', 'width': 'auto'});
				$('.custom-page.page-black').css({'margin-top': '0'});
			}
		}
		lastScrollTop = st;
	});


	$('.header-infos .links-usuario .search a').on('click', function() {
		$('.header-infos .busca').stop(true).slideToggle();
		return false;
	});

	// $('.header-nav nav > ul > li.parent').hover(function() {
	// 	$(this).addClass('hover');
	// 	$('.bg-menu').stop(true, true).fadeIn();
	// }, function() {
	// 	$(this).removeClass('hover');
	// 	$('.bg-menu').stop(true, true).fadeOut();
	// });

	$('body','.header-nav nav > ul > li.parent').hoverIntent(function() {
        console.log(this)
		$(this).addClass('hover');
		$('.bg-menu').stop(true, true).fadeIn();
	}, function() {
		$(this).removeClass('hover');
		$('.bg-menu').stop(true, true).fadeOut();
	});

	$('body','header .menu-mob-open').on('click', function() {
		$('body').addClass('menu-open');
		$('.header-nav').css('left', '0');
	});

	$('body','header .menu-mob-close').on('click', function() {
		$('body').removeClass('menu-open');
		$('.header-nav').css('left', '-100%');
	});

	if (isMobile()) {
		$('body','.header-nav a').on('click', function(event) {
			var href = $(this).attr('href');
			if (href == "") {
				$(this).parents('ul').scrollTop(0);
				$(this).siblings('ul').show();
				$(this).parents('ul').css('overflow-y', 'hidden');
				$('.header-nav .nav-top a.link-user').removeClass('invisible');
				// $('.header-nav .nav-top a.link-inter').addClass('d-none');
				return false;
			}
		});

		$('body','.header-nav li.back').on('click', function(event) {
			$(this).parent().hide().parents('ul').css('overflow-y', 'auto');
			if ($(this).parents('ul').length < 3) {
				$('.header-nav .nav-top a.link-user').addClass('invisible');
				// $('.header-nav .nav-top a.link-inter').removeClass('d-none');
			}
		});
	}

	$(document).on('click', function(event) {
		if (!$(event.target).is('.cart-header *') && !$('.cart-header .menu-cart').hasClass('d-none')) {
			$('.cart-header > a').trigger('click');
		}

		if (!$(event.target).is('.central *') && !$('.central .menu-central').hasClass('d-none')) {
			$('.central > a').trigger('click');
		}
	});

	$(document).scroll(function() {
		if (!$('.cart-header .menu-cart').hasClass('d-none')) {
			$('.cart-header > a').trigger('click');
		}

		if (!$('.central .menu-central').hasClass('d-none')) {
			$('.central > a').trigger('click');
		}
	});

	$('body','header .links-usuario .central > a, header .links-usuario .cart-header > a').on('click', function() {
		if (!isMobile()) {
			
			if (!$('.cart-note').hasClass('d-none')) {
				$('.cart-note').addClass('d-none')
			}
			''
			if ($(this).closest('div').hasClass('cart-header') && !$('.central .menu-central').hasClass('d-none')) {
				$('.central > a').trigger('click');
			}

			if ($(this).closest('div').hasClass('central') && !$('.cart-header .menu-cart').hasClass('d-none')) {
				$('.cart-header > a').trigger('click');
			}

			$(this).toggleClass('active');
			$(this).find('+ .menu-central, + .menu-cart').toggleClass('d-none');
			return false;
		}
	});

	var ff_app_cookie = 'ff_app';
	var ff_app_cookie_value = 'Banner App';
	var ff_app_cookie_domain = "futfanatics.com.br";

	function initSmartBanner() {
		var playStoreUrl = "https://play.google.com/store/apps/details?id=com.futfanatics";
		var appStoreUrl  = "https://itunes.apple.com/us/app/futfanatics/id1422835821?mt=8";
		// var mobile = detectarMobile();
		var btnFecharSB = $('.banner-app .btn-fechar');
		var link = "https://app.futfanatics.com.br/deeplink?page=home&action=";

		if (isMobile()) {
			// var platform = detectarOS();

			// var link = null;
			// if (/apple/i.test(platform)) {
			// 	link = appStoreUrl;
			// } else {
			// 	if (/android/i.test(platform)) {
			// 		link = playStoreUrl;
			// 	}
			// } 

			$('.link-app').attr('href', link);

			link !== null ? openSmartBanner() : console.log('Undefined OS');
		}

		btnFecharSB.on('click', function(event) {
			closeSmartBanner();
		});
	}

	function openSmartBanner() {
		if (checkCookie(ff_app_cookie) == "") {
			$('.banner-app').slideDown('slow');
			// setCookie(ff_app_cookie, ff_app_cookie_value, 10, ff_app_cookie_domain);
		}
	}

	function closeSmartBanner() {
		$('.banner-app').slideUp();
		setCookie(ff_app_cookie, ff_app_cookie_value, 10, ff_app_cookie_domain);
	}

	function getNotNaN($dom) {
		if (!isNaN($dom))
			return $dom;
		else
			return 0;
	}

    function isMobile() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    }
    

	initSmartBanner();

}) (jQuery);
