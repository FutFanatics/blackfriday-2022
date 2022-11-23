import React, {Component } from 'react';
import $ from 'jquery';

import Menu_Desk from "./Menu/Menu_Desk";

import logo from "../../img/icon/futfanatics.svg";
import iconUser from '../../img/icon/iconuser.svg';
import iconcart from '../../img/icon/iconcart.svg';
import iconinternacional from "../../img/icon/internacional.svg";
import menu from "../../img/icon/hamburguer.svg";

import '../../assets/css/style.css';
import Menu_Mobile from './Menu/Menu_Mobile';


class Header extends Component  {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
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

        // $('.header-nav nav > ul > li.parent').on('mouseenter',function() {
        //     console.log('----')
        //     console.log(this)
        //     //$(this).addClass('hover');
        //     //$('.bg-menu').stop(true, true).fadeIn();
        // })
        
        // $('.header-nav nav > ul > li.parent').on('mouseleave',function() {
        //     //$(this).removeClass('hover');
        //     //$('.bg-menu').stop(true, true).fadeOut();
        // });

        $('header .menu-mob-open').on('click', function() {
            $('body').addClass('menu-open');
            $('.header-nav').css('left', '0');
        });

        $('header .menu-mob-close').on('click', function() {
            $('body').removeClass('menu-open');
            $('.header-nav').css('left', '-100%');
        });

        if (isMobile()) {
            $('.header-nav a').on('click', function(event) {
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

            $('.header-nav li.back').on('click', function(event) {
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

        $('header .links-usuario .central > a, header .links-usuario .cart-header > a').on('click', function() {
            if (!isMobile()) {
                
                if (!$('.cart-note').hasClass('d-none')) {
                    $('.cart-note').addClass('d-none')
                }
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

        function setCookie(cname, cvalue, exdays, domain) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=." + domain;
        }

        function getCookie(cname) {
            var name = cname + "=";
            // var decodedCookie = decodeURIComponent(document.cookie);
            var decodedCookie = document.cookie;
            var ca = decodedCookie.split(';');

            // var filterCookies = cookies.filter(function(e) {
            // 	return e.trim().indexOf(name) == 0;
            // });

            // return filterCookies[0] ? decodeURIComponent(filterCookies[0].substring(name.length, c.length)) : "";

            for(var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                // while (c.charAt(0) == ' ') {
                // 	c = c.substring(1);
                // }
                if (c.indexOf(name) == 0) {
                    return decodeURIComponent(c.substring(name.length, c.length));
                }
            }
            return "";
        }

        function checkCookie(cname) {
            var cookie = getCookie(cname);
            if (cookie != "") {
                return cookie;
            } else {
                return "";
            }
        }

        initSmartBanner();

    }

    render(){
        return (
            <header>
                <div className="header-top">
                    <div className="header-infos">
                        <div className="container-fluid">
                            <div className="row py-3 align-items-center">
                                <div className="col-4 d-lg-none">
                                    <button className="menu-mob-open icon-menu"><img className="icon-menu d-md-none" src={menu}/></button>
                                </div>
                                <div className="col-4 col-lg-1 d-flex justify-content-center justify-content-lg-start">
                                    <a href="https://futfanatics.com.br" className="logo">
                                        <img className="icon-logo-fut" src={logo}/>
                                    </a>
                                </div>
                                <div className="col-12 order-last col-lg-8 order-lg-0">
                                    <div className="busca">
                                        <form action="https://busca.futfanatics.com.br/busca" className="d-flex align-items-center">
                                            <input type="hidden" name="loja" value="{{ store.id }}" />

                                            <button type="submit" className="order-last order-lg-0"><i className="icon-search"></i></button>

                                            <input id="search-field" type="text" name="q" placeholder="O que você procura?" />
                                        </form>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3 d-flex justify-content-between links-usuario">
                                    <div className="link-inter align-self-center">
                                        <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=selo-topo" target="_blank" className="d-none d-lg-flex align-items-center"><img className="icon-link-inter" src={iconinternacional}/>International Orders</a>
                                    </div>
                                    <div className="central">
                                        <a href="https://futfanatics.com.br/central-do-cliente" className="d-none d-lg-block"><img className="icon-user" src={iconUser}/></a>
                                        <div className="menu-central d-none">
                                            <a href="" className="tray-hide" data-logged-user="true">Olá, <span data-customer="name" className="login-traynome"></span></a>
                                            <a href="https://futfanatics.com.br/central-do-cliente" className="tray-hide" data-logged-user="false">Login</a>
                                            <a href="{{ links.logout }}" className="tray-hide" data-logged-user="true">Sair</a>
                                            <a href="https://futfanatics.com.br/cadastro" className="tray-hide" data-logged-user="false">Cadastre-se</a>
                                            <a href="https://futfanatics.com.br/my-account/orders/">Meus Pedidos</a>
                                            <a href="https://futfanatics.com.br/portal-de-ajuda">Ajuda</a>
                                        </div>
                                    </div>
                                    <div className="search d-lg-none invisible">
                                        <a href=""><i className="icon-search"></i></a>
                                    </div>
                                    <div className="cart-header">
                                        <a href="https://futfanatics.com.br/loja/carrinho.php?loja=311840"><img className="icon-cart" src={iconcart}/><span className="cart-qty">0</span></a>
                                        <div className="menu-cart d-none">
                                            <ul className="cart-products custom-scroll">
                                                <li>
                                                    <div className="product-photo">
                                                        <a href="">
                                                            <img src="" alt="" className="img-fluid" />
                                                        </a>
                                                    </div>
                                                    <div className="product-data">
                                                        <div className="d-flex justify-content-between">
                                                            <h3></h3>
                                                            <button className="product-remove ml-2"><i className="icon-trash"></i></button>
                                                        </div>
                                                        <div className="product-variant"></div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-qty"></div>
                                                            <div className="product-price"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="cart-subtotal">Subtotal: <strong>R$000,00</strong></div>
                                            <a href="https://futfanatics.com.br/loja/carrinho.php?loja=311840">Finalizar compra</a>
                                        </div>
                                        <div className="cart-note d-none">
                                            <ul className="cart-added"></ul>
                                            <a href="https://futfanatics.com.br/loja/carrinho.php?loja=311840">Finalizar compra</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-nav">
                        <Menu_Desk/>
                        <Menu_Mobile/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;




