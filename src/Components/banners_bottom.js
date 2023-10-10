import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxTitle } from "./box";
import { Section } from "./section";
import { TitleMarca } from "./Text";

import BannerFull from '../img/banner/banner-full.png'
import BannerBottom1 from '../img/banner/bannerbottom1.png'
import BannerBottom2 from '../img/banner/bannerbottom2.png'
import BannerBottom3 from '../img/banner/bannerbottom3.png'

function BannerBottom() {
    const bannersbottom={
        dots:true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
          {
              breakpoint: 600,
              settings : {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                arrows:false,
              }
            },
        ]
    }

        return(
            <Section className='c-banners-bottom'>
                <div className='box-banner-full'>
                    <img className='banner-full' src={BannerFull}/>
                </div>
                <div className='container mt-3'>
                    <Slider {...bannersbottom} className='slick-banners_bottom'>
                        <div className='item'>
                            <a>
                                <img className='bannersBottom' src={BannerBottom1}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <img className='bannersBottom' src={BannerBottom2}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <img className='bannersBottom' src={BannerBottom3}/>
                            </a>
                        </div>
                    </Slider>
                </div>
            </Section>

        )
}

export default BannerBottom;