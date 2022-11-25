import item1 from '../img/times-brasil/flamengo.svg';
import item2 from '../img/times-brasil/palmeiras.svg';
import item3 from '../img/times-brasil/atletico-mg.svg';
import item4 from '../img/times-brasil/corinthians.svg';
import item5 from '../img/times-brasil/vasco.svg';
import item6 from '../img/times-brasil/internacional.svg';
import item7 from '../img/times-brasil/fluminense.svg';
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
import iteminter9 from '../img/times-internacionais/milan.svg';
import iteminter10 from '../img/times-internacionais/barcelona-1.svg';
import LazyLoad from 'react-lazy-load';


import Slider from "react-slick";
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
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        dots: false,
                        arrows:false,
                      }
                    },
              ]
                
              };

              const active = 'active';
              const[nacionais, setNacionais] = useState(true);
              return (

                <div className='c-carousel-times'>
                    <div className='container'>
                        <div className='w-100 d-flex justify-content-center'>
                            <h2 className={nacionais ? "title-times active" : "title-times" } onClick={() => {
          setNacionais(true);
        }} {...active}>Times Nacionais</h2>
        
                            <h2 className={!nacionais ? "title-times active" : "title-times" } onClick={() => {
          setNacionais(false);
        }}> Times Internacionais</h2>
                        </div>
                      {nacionais  && <Slider {...timesbrasil} className="times-nacionais">
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/flamengo'>
                          <LazyLoad offset={300} >
                              <img src={item1} className="img-times lozad" alt='Flamengo'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'  >
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/palmeiras'>
                          <LazyLoad offset={300} >
                          <img src={item2} className="img-times lozad" alt='Palmeiras'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'  >
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/atletico-mineiro'>
                          <LazyLoad offset={300} >
                          <img src={item3} className="img-times lozad" alt='Atlético MG'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/corinthians'>
                          <LazyLoad offset={300} >
                            <img src={item4} className="img-times lozad" alt='Corinthians'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/vasco-da-gama'>
                            <LazyLoad offset={300} >
                              <img src={item5} className="img-times lozad" alt='Vasco'/>
                            </LazyLoad>
                          </a>                        
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/internacional'>
                          <LazyLoad offset={300} >
                            <img src={item6} className="img-times lozad" alt='Internacional'/>
                            </LazyLoad>
                          </a>                        
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/fluminense'>
                            <LazyLoad offset={300} >
                              <img src={item7} className="img-times lozad" alt='Fluminense'/>
                            </LazyLoad>
                          </a>                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/santos'>
                          <LazyLoad offset={300} >
                            <img src={item8} className="img-times lozad" alt='Santos'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/sao-paulo'>
                          <LazyLoad offset={300} >
                            <img src={item9} className="img-times lozad" alt='São Paulo'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/gremio'>
                          <LazyLoad offset={300} >
                            <img src={item10} className="img-times lozad" alt='Grêmio'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/botafogo'>
                          <LazyLoad offset={300} >
                            <img src={item11} className="img-times lozad" alt='Botafogo'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/parana/coritiba'>
                            <LazyLoad offset={300} >
                              <img src={item12} className="img-times lozad" alt='Coritiba'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/nordeste/fortaleza'>
                            <LazyLoad offset={300} >
                              <img src={item13} className="img-times lozad" alt='Fortaleza'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                        <a href='https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/cruzeiro'>
                            <LazyLoad offset={300} >
                              <img src={item14} className="img-times lozad" alt='Cruzeiro'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div className='time d-flex justify-content-center'>
                          <a href='https://www.futfanatics.com.br/clubes-brasileiros/nordeste/bahia'>
                            <LazyLoad offset={300} >
                              <img src={item15} className="img-times lozad" alt='Bahia'/>
                            </LazyLoad>
                          </a>
                        </div>
                    </Slider>}

                    {!nacionais && <Slider {...timesinternacional} className="times-internacionais ">
                        <div className='time' > 
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/real-madrid'>
                          <LazyLoad offset={300} >
                            <img src={iteminter1} className="img-times lozad"  alt='Real Madrid'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-alema/bayern-de-munique'>
                          <LazyLoad offset={300} >
                            <img src={iteminter2} className="img-times lozad"  alt='Bayern'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-alema/borussia-dortmund'>
                          <LazyLoad offset={300} >
                            <img src={iteminter3} className="img-times lozad"  alt='Borussia'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-inglesa/arsenal/'>
                          <LazyLoad offset={300} >  
                            <img src={iteminter4} className="img-times lozad"  alt='Arsenal'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-inglesa/liverpool/'>
                          <LazyLoad offset={300} >
                            <img src={iteminter5} className="img-times lozad"  alt='Liverpool'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-inglesa/manchester-united/'>
                          <LazyLoad offset={300} >
                            <img src={iteminter6} className="img-times lozad" alt='Manchester United'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-inglesa/manchester-city/'>
                          <LazyLoad offset={300} >
                            <img src={iteminter7} className="img-times lozad"  alt='Manchester City'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-italiana/juventus'>
                          <LazyLoad offset={300} >
                            <img src={iteminter8} className="img-times lozad img-times lozad-juventus"  alt='Juventus'/>
                          </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-italiana/milan'>
                          <LazyLoad offset={300} >
                            <img src={iteminter9} className="img-times lozad"  alt='Milan'/>
                            </LazyLoad>
                          </a>
                        </div>
                        <div>
                          <a href='https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/barcelona'>
                          <LazyLoad offset={300} >
                            <img src={iteminter10} className="img-times lozad"  alt='Barcelona'/>
                            </LazyLoad>
                          </a>
                        </div>
                    </Slider>
                      }
                    </div>
                </div>
              );
            }



export default Times;

