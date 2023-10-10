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

import Imagemteste from '../img/banner/destaque-banner.png'

function Destaque() {
    const DestaqueSlick={
        dots:true,
        arrows:false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive:[
          {
              breakpoint: 600,
              settings : {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false,
                arrows:false,
              }
            },
        ]
    }
        return(
            <Section className='c-destaque'>
                <div className='container'>
                <BoxTitle>
                    <TitleMarca>
                    Destaque
                    </TitleMarca>
                </BoxTitle>

                    <Slider {...DestaqueSlick} className='slick-destaque'>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a>
                                <ImgBanner src={Imagemteste}/>
                            </a>
                        </div>
                    </Slider>
                </div>
            </Section>
        )
    
}

export default Destaque;