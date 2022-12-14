import item1 from '../img/marcas/marca1.svg';
import item2 from '../img/marcas/marca2.svg';
import item3 from '../img/marcas/marca3.svg';
import item4 from '../img/marcas/marca4.svg';
import item5 from '../img/marcas/marca5.svg';
import item6 from '../img/marcas/marca6.svg';
import item7 from '../img/marcas/marca7.svg';
import item8 from '../img/marcas/marca8-1.svg';
import item9 from '../img/marcas/marca9.svg';
import item10 from '../img/marcas/marca10.svg';
import item11 from '../img/marcas/marca11.svg';
import item12 from '../img/marcas/marca12.svg';
import item13 from '../img/marcas/marca13.svg';
import item14 from '../img/marcas/marca14.svg';
import item15 from '../img/marcas/marca15.svg';
import item16 from '../img/marcas/marca16.svg';
import item17 from '../img/marcas/marca17.svg';
import item18 from '../img/marcas/marca18.svg';
import item19 from '../img/marcas/marca19.svg';
import item20 from '../img/marcas/marca20.svg';

import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Marcas(){
    const marcas={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 2,
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
    return(
        <div class="c-carousel-marcas">
            <div className="container">
                <div className='box-title d-flex justify-content-center w-100'>
                    <h2 className="title-marcas">Principais marcas</h2>
                </div>
                <Slider {...marcas} className='marcas'>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Adidas&order=hot'>
                                <img src={item1} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Puma&order=hot'>
                                <img src={item2} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Umbro&order=hot'>
                                <img src={item3} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Kappa&order=hot'>
                                <img src={item4} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Fila&order=hot'>
                                <img src={item5} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Under%20Armour&order=hot'>
                                <img src={item6} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=New%20Balance&order=hot'>
                            <img src={item7} className="img-marca lozad" alt=''/>
                            </a>
                            
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=New%20Era&order=hot'>
                                <img src={item8} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Olympikus&order=hot'>
                                <img src={item9} className="img-marca lozad" alt=''/>
                            </a>
                        
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=coca-cola&order=hot'>
                                <img src={item10} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Penalty&order=hot'>
                                <img src={item11} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=oxn&order=hot'>
                                <img src={item12} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Mizuno&order=hot'>
                                <img src={item13} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Spr&order=hot'>
                                <img src={item14} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Braziline&order=hot'>
                                <img src={item15} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Topper&order=hot'>
                                <img src={item16} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=ecko&order=hot'>
                                <img src={item17} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&avancada=1&buscamarca=Super%20Bolla&order=hot'>
                                <img src={item18} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&marca=marca_lotto'>
                                <img src={item19} className="img-marca lozad" alt=''/>
                            </a>
                        
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.futfanatics.com.br/loja/busca.php?loja=311840&marca=marca_asics'>
                                <img src={item20} className="img-marca lozad" alt=''/>
                            </a>
                        </div>
                </Slider>
            </div>
        </div>
        
    )
}
export default Marcas;