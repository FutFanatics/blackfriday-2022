import item1 from '../img/banner/teste.png';
import item2 from '../img/banner/teste_expan.png';
import item3 from '../img/banner/banner_total.png';
import Slider from 'react-slick';
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannersBottom() {
    const bannerBottom={
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(
        <section className="c-banners__bottom">
            <div className="container d-flex justify-content-center">
                <div className='row d-none d-md-flex'>
                <div className="row banner--left col-6">
                    <div className="col-6">
                        <a href='' className=''>
                            <img src={item1} className=""/>                            
                        </a>
                    </div>
                    <div className="col-6">
                        <a href='' className=''>
                            <img src={item1} className=""/>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href='' className=''>
                            <img src={item2} className=""/>
                        </a>    
                    </div>
                </div>
                <div className="banner--right col-6">
                    <div className="col-12">
                        <a href='' className=''>
                            <img src={item3} className=""/>
                        </a>
                    </div>
                </div>
                </div>
                <Slider className='d-md-none'>
                    <div className='col-12'>
                        <img className='img-banner' src={item1}/>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default BannersBottom;