import banner1 from './../img/banner/banner_min_3.png';
import banner2 from './../img/banner/banner_3.png';
import banner3 from './../img/banner/banner_4.png';
import banner4 from './../img/banner/banner_min_4.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannersBottom() {
    const bannerBottom={
        dots:false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(
        <section className="c-banners_shirt">
            <div className="container d-none d-md-block">
                    <div className="row">
                        <div className="col-5 pb-4 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/treino?&order=4' className=''>
                                <img src={banner1} className='banner w-100' alt='Ofertas Treino'/>
                            </a>
                        </div>
                        </div>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/futebol?&order=3' className=''>
                                <img src={banner2} className='banner w-100' alt='Ofertas itens Futebol'/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/casual' className=''>
                                <img src={banner3} className=' banner w-100' alt='Oferta Casual'/>
                            </a>
                        </div>
                        </div>
                        <div className="col-5 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/esportes?&order=0' className=''>
                                <img src={banner4} className='banner w-100' alt='Ofertas Esportes'/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerBottom}>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100' src={banner1}/>
                        </div>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100'  src={banner1}/>
                        </div>
                    </Slider>
                </div>
        </section>
    );
};

export default BannersBottom;