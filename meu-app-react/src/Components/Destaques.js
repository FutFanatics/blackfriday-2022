import item1 from '../img/destaque/alemanha.png';
import item2 from '../img/destaque/alemanha.png';
import item3 from '../img/destaque/alemanha.png';
import item4 from '../img/destaque/alemanha.png';
import item5 from '../img/destaque/alemanha.png';
import item6 from '../img/destaque/alemanha.png';
import item7 from '../img/destaque/alemanha.png';
import item8 from '../img/destaque/alemanha.png';
import item9 from '../img/destaque/alemanha.png';
import item10 from '../img/destaque/alemanha.png';

import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Destaques(){
    const destaques={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };
    return(
        <section className="c-destaque">
            <div className='box-title d-flex justify-content-center'>
                <h2 className='title-destaque'>Top Ofertas</h2>
            </div>
            <div className="container">
            <Slider {...destaques}>
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item1} className="img-card"  alt=''/>
                            <span className="legend-card">Brasil</span>    
                    </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item2} className="img-card"  alt=''/>
                            <span className="legend-card">Alemanha</span>    
                    </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item3} className="img-card"  alt=''/>
                            <span className="legend-card">argentina</span>    
                    </div>
                    </a>  
                </div>
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item4} className="img-card"  alt=''/>
                            <span className="legend-card">bélgica</span>    
                    </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item5} className="img-card"  alt=''/>
                            <span className="legend-card">espanha</span>    
                    </div>
                    </a> 
                </div>  
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item6} className="img-card"  alt=''/>
                            <span className="legend-card"></span>    
                    </div>
                    </a>    
                </div> 
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item7} className="img-card"  alt=''/>
                            <span className="legend-card"></span>    
                    </div>
                    </a> 
                </div>   
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item8} className="img-card"  alt=''/>
                            <span className="legend-card"></span>    
                    </div>
                    </a>
                </div>
                <div className='container-card'>
                        <a href="" className="link-destaque">
                            <div className="card-destaque">
                                <img src={item9} className="img-card"  alt=''/>
                                <span className="legend-card"></span>    
                        </div>
                        </a>   
                </div> 
                <div className='container-card'>
                    <a href="" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item10} className="img-card"  alt=''/>
                            <span className="legend-card"></span>    
                    </div>
                    </a>    
                </div>
            </Slider>
            </div>
        </section>
    );
};
export default Destaques;