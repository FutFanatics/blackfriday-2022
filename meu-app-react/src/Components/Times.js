import item1 from '../img/times-brasil/flamengo.svg';
import item2 from '../img/times-brasil/palmeiras.svg';
import item3 from '../img/times-brasil/atletico-mg.svg';
import item4 from '../img/times-brasil/corinthians.svg';
import item5 from '../img/times-brasil/vasco.svg';
import item6 from '../img/times-brasil/internacional-1.svg';
import item7 from '../img/times-brasil/fluminense-1.svg';
import item8 from '../img/times-brasil/santos.svg';
import item9 from '../img/times-brasil/sao-paulo.svg';
import item10 from '../img/times-brasil/gremio.svg';
import item11 from '../img/times-brasil/botafogo.svg';
import item12 from '../img/times-brasil/coritiba.svg';
import item13 from '../img/times-brasil/fortaleza.svg';
import item14 from '../img/times-brasil/cruzeiro.svg';
import item15 from '../img/times-brasil/bahia.svg';


import iteminter1 from '../img/times-internacionais/real-madrid-1.svg';
import iteminter2 from '../img/times-internacionais/bayern-munique.svg';
import iteminter3 from '../img/times-internacionais/borussia-1.svg';
import iteminter4 from '../img/times-internacionais/arsenal.svg';
import iteminter5 from '../img/times-internacionais/liverpool-1.svg';
import iteminter6 from '../img/times-internacionais/manchester-united-1.svg';
import iteminter7 from '../img/times-internacionais/manchester-city.svg';
import iteminter8 from '../img/times-internacionais/juventus.svg';
import iteminter9 from '../img/times-internacionais/internazionale-milano.svg';
import iteminter10 from '../img/times-internacionais/barcelona-1.svg';


import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Times(){
              const timesbrasil = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 10,
                slidesToScroll: 1,
                responsive:[
                  {
                      breakpoint: 600,
                      settings : {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: false,
                        arrows:false,
                      }
                    },
              ]                
              };
              const timesinternacional = {
                dots: false,
                infinite: true, 
                speed: 500,
                slidesToShow: 10,
                slidesToScroll: 1,
                responsive:[
                  {
                      breakpoint: 600,
                      settings : {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: false,
                        arrows:false,
                      }
                    },
              ]
                
              };
              return (

                <div className='c-carousel-times'>
                    <div className='container'>
                        <div className='w-100 d-flex justify-content-center'>
                            <h2 className='title-times title-times-nacionais'> Times Nacionais</h2>
                            <h2 className='title-times title-times-internacionais'> Times Internacionais</h2>
                        </div>
                    <Slider {...timesbrasil} className="times-nacionais active">
                        <div className='d-flex justify-content-center'>
                        <img src={item1} className="img-times" alt=''/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item2} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item3} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item4} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item5} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item6} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item7} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item8} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item9} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item10} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item11} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item12} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item13} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item14} className="img-times"/>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <img src={item15} className="img-times"/>
                        </div>
                    </Slider>

                    <Slider {...timesinternacional} className="times-internacionais">
                        <div>
                        <img src={iteminter1} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter2} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter3} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter4} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter5} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter6} className="img-times" alt=''/>
                        </div>
                        <div>
                        <img src={iteminter7} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter8} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter9} className="img-times"  alt=''/>
                        </div>
                        <div>
                        <img src={iteminter10} className="img-times"  alt=''/>
                        </div>
                    </Slider>
                    </div>
                </div>
              );
            }



export default Times;

