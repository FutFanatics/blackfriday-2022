import item1 from './../img/category/categoria_7.png';
import item2 from './../img/category/categoria_8.png';
import item3 from './../img/category/categoria_1.png';
import item4 from './../img/category/categoria_2.png';
import item5 from './../img/category/categoria_3.png';
import item6 from './../img/category/categoria_4.png';
import item7 from './../img/category/categoria_5.png';
import item8 from './../img/category/categoria_6.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazy-load';


const Category = () => {
    const categorySlide={
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 600,
                settings : {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: false,
                  arrows:false,
                }
              },
        ]
        
    };
    return (
        <section className='c-category'>
            <div className='container'>
                <div className='d-block justify-content-center'>
                <Slider {...categorySlide} className='category'>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Internacionais</span>
                        <a className='' href='https://www.futfanatics.com.br/clubes-internacionais'>
                        <LazyLoad offset={200} >
                            <img src={item1} className="img-category lozad" alt="categoria internacional"/>
                        </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Nacionais</span>
                        <a className='' href='https://www.futfanatics.com.br/clubes-brasileiros'>
                        <LazyLoad offset={200} >
                            <img src={item2} className="img-category lozad" alt="Categoria nacionais"/>
                        </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Acessórios</span>
                        <a className='' href='https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo'>
                            <LazyLoad offset={200} >
                                <img src={item3} className="img-category lozad" alt="Categoria acessórios"/>
                            </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Calçados</span>
                        <a className='' href='https://www.futfanatics.com.br/calcados'>
                            <LazyLoad offset={200} >
                                <img src={item4} className="img-category lozad" alt="Categoria calçados"/>
                            </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Futebol</span>
                        <a className='' href='https://www.futfanatics.com.br/futebol'>
                            <LazyLoad offset={200} >
                                <img src={item5} className="img-category lozad" alt="Categoria Futebol"/>
                            </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Treino</span>
                        <a className='' href='https://www.futfanatics.com.br/treino'>
                            <LazyLoad offset={200} >    
                                <img src={item6} className="img-category lozad" alt="Categoria Treino"/>
                            </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Casuais</span>
                        <a className='' href='https://www.futfanatics.com.br/casual'>
                            <LazyLoad offset={200} >    
                                <img src={item7} className="img-category lozad" alt="Categoria Casuais"/>
                            </LazyLoad>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Esportes</span>
                        <a className='' href='https://www.futfanatics.com.br/esportes'>
                            <LazyLoad offset={200} >
                                <img src={item8} className="img-category lozad" alt="Categoria Esportes"/>
                            </LazyLoad>
                        </a>
                    </div>
                </Slider>
                </div>
            </div>
        </section>    
        )
    }
    
    export default Category;