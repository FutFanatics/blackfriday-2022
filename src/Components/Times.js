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
import {useState} from 'react';
function Times(){
              const timesbrasil = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 10,
                slidesToScroll: 1,
                
                responsive:[
                  {
                      breakpoint: 600,
                      settings : {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        dots: false,
                        arrows:false,
                      }
                    },
              ]                
              };
              const timesinternacional = {
                dots: true,
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
              const[nacionais, setNacionais] = useState(true);
              return (

                <div className='c-carousel-times'>
                    <div className='container'>
                        <div className='w-100 d-flex justify-content-center'>
                            <h2 className='title-times title-times-nacionais'onClick={() => {
          setNacionais(true);
        }} > Times Nacionais</h2>
                            <h2 className='title-times title-times-internacionais' onClick={() => {
          setNacionais(false);
        }}> Times Internacionais</h2>
                        </div>
                      {nacionais   &&  <Slider {...timesbrasil} className="times-nacionais">
                        <div className='d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/flamengo'>
                            <img src={item1} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/palmeiras'>
                            <img src={item2} className="img-times"/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/atletico-mineiro'>
                            <img src={item3} className="img-times"/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/corinthians'>
                            <img src={item4} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/vasco-da-gama'>
                            <img src={item5} className="img-times" alt=''/>
                          </a>                        
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/internacional'>
                            <img src={item6} className="img-times" alt=''/>
                          </a>                        
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/fluminense'>
                            <img src={item7} className="img-times" alt=''/>
                          </a>                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/santos'>
                            <img src={item8} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/sao-paulo'>
                            <img src={item9} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/gremio'>
                            <img src={item10} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/botafogo'>
                            <img src={item11} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/parana/coritiba'>
                            <img src={item12} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/nordeste/fortaleza'>
                            <img src={item13} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/cruzeiro'>
                            <img src={item14} className="img-times" alt=''/>
                          </a>
                        </div>
                        <div className='d-flex justify-content-center'  alt=''>
                          <a href=''>
                            <img src={item15} className="img-times" alt=''/>
                          </a>
                        </div>
                    </Slider>}

                    {!nacionais && <Slider {...timesinternacional} className="times-internacionais ">
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
                      }
                    </div>
                </div>
              );
            }



export default Times;

