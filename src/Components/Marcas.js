//import item1 from '../img/marcas/marca1.svg';
//import item2 from '../img/marcas/marca2.svg';
//import item3 from '../img/marcas/marca3.svg';
//import item4 from '../img/marcas/marca4.svg';
//import item5 from '../img/marcas/marca5.svg';
//import item6 from '../img/marcas/marca6.svg';
//import item7 from '../img/marcas/marca7.svg';
//import item8 from '../img/marcas/marca8-1.svg';
//import item9 from '../img/marcas/marca9.svg';
//import item10 from '../img/marcas/marca10.svg';
//import item11 from '../img/marcas/marca11.svg';
//import item12 from '../img/marcas/marca12.svg';
//import item13 from '../img/marcas/marca13.svg';
//import item14 from '../img/marcas/marca14.svg';
//import item15 from '../img/marcas/marca15.svg';
//import item16 from '../img/marcas/marca16.svg';
//import item17 from '../img/marcas/marca17.svg';
//import item18 from '../img/marcas/marca18.svg';
//import item19 from '../img/marcas/marca19.svg';
//import item20 from '../img/marcas/marca20.svg';
import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { TitleMarca } from "./Text";
import { NameMarca } from "./Text";
import { StyledButton } from "./Button";
import { BoxTitle } from "./box";
import { BoxMarca } from "./box";
import { Section } from "./section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import marca from '../img/marcas/marca-teste.png';



function Marcas() {
  const marcasSlick={
    dots:false,
    arrows:false,
    speed: 500,
    slidesToShow: 10,
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
  return (
    <Section className='c-marcas'>
        <div className='container'>
          <BoxTitle>
            <TitleMarca>
              Marcas
            </TitleMarca>
          </BoxTitle>
          
          <Slider {...marcasSlick}>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Adidas</NameMarca>
                </BoxMarca>
              </div>          
              </Slider>
        </div>
    </Section>
    
  );
}

export default Marcas;
