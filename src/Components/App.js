import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BannerHomeTop } from "./banner";
import BannerHome from '../img/home/banner-home.png'

function Home(){
    return(
        <section className='c-home'>
            <BannerHomeTop>
                <img className='banner' src={BannerHome}/>
            </BannerHomeTop>
        </section>
    )


}
export default Home;