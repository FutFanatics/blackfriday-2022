import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxInstall, BoxTitle } from "./box";
import { Section } from "./section";
import { Title } from "./Text";
import { BoxApp } from "./box";

import ImageCelphone from '../img/app/app-img.png'
import Imgapp from '../img/app/app-store.png'
import Imggoogle from '../img/app/google-play.png'

function Install() {
    return(
        <Section className='c-Install'>
            <div className='container'>
                <div className='row justify-content-center container-app'>
                    <BoxApp className='col-md-10'>
                        <div className='row justify-content-between'>
                            <div className='col-md-3 position-relative'>
                                <img className='app-install' src={ImageCelphone}/>
                            </div>
                            <div className='col-md-7 d-flex flex-column justify-content-center'>
                                <Title>Faça a sua torcida com o App da FutFanatics</Title>
                                <div className='container-install d-flex mt-4'>
                                    <BoxInstall>
                                        <img className='image-install' src={Imgapp}/>
                                    </BoxInstall>
                                    <BoxInstall>
                                        <img className='image-install' src={Imggoogle}/>
                                    </BoxInstall>
                                </div>
                            </div>
                        </div>
                    </BoxApp>
                </div>
            </div>
        </Section>
    )
}

export default Install;