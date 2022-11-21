import banner1 from './../img/banner/banner_min_3.png';
import banner2 from './../img/banner/banner_3.png';
import banner3 from './../img/banner/banner_4.png';
import banner4 from './../img/banner/banner_min_4.png';
import Slider from 'react-slick';
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannersBottom() {
    const bannerBottom={
        dots:false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(
        <section className="c-banners_shirt">
            <div className="container d-none d-md-block">
                    <div className="row">
                        <div className="col-5 pb-4 position-relative">
                            <a href='' className=''>
                                <img src={banner1} className='banner w-100' alt=''/>
                            </a>
                        </div>
                        <div className="col-7 position-relative">
                            <a href='' className=''>
                                <img src={banner2} className='banner w-100' alt=''/>
                            </a>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                            <a href='' className=''>
                                <img src={banner3} className=' banner w-100' alt=''/>
                            </a>
                        </div>
                        <div className="col-5 position-relative">
                            <a href='' className=''>
                                <img src={banner4} className='banner w-100' alt=''/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerBottom}>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100' src={banner1}/>
                        </div>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100'  src={banner1}/>
                        </div>
                    </Slider>
                </div>
        </section>
    );
};

export default BannersBottom;