import item1 from '../img/destaque/redley.png';
import item2 from '../img/destaque/coca-cola.png';
import item3 from '../img/destaque/umbro.png';
import item4 from '../img/destaque/adidas.png';
import item5 from '../img/destaque/area.png';
import item6 from '../img/destaque/olympikus.png';
import item7 from '../img/destaque/fila.png';
import item8 from '../img/destaque/kappa.png';
import item9 from '../img/destaque/braziline.png';
import item10 from '../img/destaque/passaro-preto.png';

import item11 from '../img/destaque/allejo.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Destaques(){
    const destaques={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 600,
                settings : {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows:false,
                }
              },
        ]
    };
    return(
        <section className="c-destaque">
            <div className='box-title d-flex justify-content-center'>
                <h2 className='title-destaque'>Top Ofertas</h2>
            </div>
            <div className="container">
            <Slider {...destaques}>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/tenis-redley-originals-preto" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item1} className="img-card"  alt='Tênis Redley Originals Preto'/>    
                    </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/tenis-coca-cola-daytona-feminino-branco" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item2} className="img-card"  alt='Tênis Coca Cola Daytona Feminino Branco'/> 
                        </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/chuteira-umbro-cosmic-campo-preta-e-cinza" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item3} className="img-card"  alt='Chuteira Umbro Cosmic Campo Preta E Cinza'/>  
                        </div>
                    </a>  
                </div>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/short-area-bertha-feminino-amarelo" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item5} className="img-card"  alt='Short Area Bertha Feminino Amarelo'/>
                        </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/camisa-adidas-internacional-women-project-feminina" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item4} className="img-card"  alt='Camisa Adidas Internacional Women Project Feminina'/>
                        </div>
                    </a> 
                </div>  
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/tenis-olympikus-corre-2-arenito" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item6} className="img-card"  alt='Tênis Olympikus Corre 2 Arenito'/>
                    </div>
                    </a>    
                </div> 
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/tenis-fila-cage-python-all-black" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item7} className="img-card"  alt='Tênis Fila Cage Python All Black'/>
                        </div>
                    </a> 
                </div>   
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/camisa-kappa-remo-treino-2021" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item8} className="img-card"  alt='Camisa Kappa Remo Treino 2021'/>
                        </div>
                    </a>
                </div>
                <div className='container-card'>
                        <a href="https://www.futfanatics.com.br/camisa-brasil-solimoes-feminina" className="link-destaque">
                            <div className="card-destaque">
                                <img src={item9} className="img-card"  alt='Camisa Brasil Solimões Feminina'/>
                            </div>
                        </a>   
                </div> 
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/camisa-brasil-7-allejo-amarela" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item11} className="img-card"  alt=''/>
                        </div>
                    </a>    
                </div>
                <div className='container-card'>
                    <a href="https://www.futfanatics.com.br/camisa-passaro-preto-ibis-ii-2021" className="link-destaque">
                        <div className="card-destaque">
                            <img src={item10} className="img-card"  alt=''/>
                        </div>
                    </a>    
                </div>
            </Slider>
            </div>
        </section>
    );
};
export default Destaques;