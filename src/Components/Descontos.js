import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxDesconto } from "./box";
import { Section } from "./section";
import { TitleMarca } from "./Text";
import {Textdesconto} from "./Text";

import DescontoIcon from "../img/descontos/icon-desconto.png"
import Desconto10 from '../img/descontos/Desconto-10.png'
import Desconto20 from '../img/descontos/Desconto-20.png'
import Desconto30 from '../img/descontos/Desconto-30.png'
import Desconto40 from '../img/descontos/Desconto-40.png'

function Descontos() {
        return(
         <Section className='c-descontos'>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex col-left'>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto10}/>
                            </a>  
                        </BoxDesconto>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto20}/>
                            </a>
                        </BoxDesconto>
                    </div>
                    <div className='col-md-6 d-flex col-right'>
                        <BoxDesconto>
                        <a>
                            <img className='desconto-img' src={Desconto30}/>
                        </a>
                        </BoxDesconto>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto40}/>
                            </a>
                        </BoxDesconto>
                    </div>
                </div>
            </div>
            
         </Section>   
        )
}

export default Descontos;