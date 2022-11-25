import banner1 from './../img/banner/banner_min_3.jpg';
import banner2 from './../img/banner/banner_3.jpg';
import banner3 from './../img/banner/banner_4.jpg';
import banner4 from './../img/banner/banner_min_4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 

import LazyLoad from 'react-lazy-load';

/*mobile*/
import bannermob from '../img/banner/bannersmob/banner5.png';
import bannermob2 from '../img/banner/bannersmob/banner6.png';
import bannermob3 from '../img/banner/bannersmob/banner7.png';
import bannermob4 from '../img/banner/bannersmob/banner8.png';


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
                                <LazyLoad offset={400} >
                                     <img src={banner1} className='banner w-100 lozad' alt='Ofertas Treino'/>
                                </LazyLoad>
                            </a>
                        </div>
                        </div>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/futebol?&order=3' className=''>
                            <LazyLoad offset={400} >
                                <img src={banner2} className='banner w-100 lozad' alt='Ofertas itens Futebol'/>
                            </LazyLoad>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/casual' className=''>
                            <LazyLoad offset={400} >
                                <img src={banner3} className=' banner w-100 lozad' alt='Oferta Casual'/>
                            </LazyLoad>
                            </a>
                        </div>
                        </div>
                        <div className="col-5 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/esportes?&order=0' className=''>
                            <LazyLoad offset={400} >
                                <img src={banner4} className='banner w-100 lozad' alt='Ofertas Esportes'/>
                            </LazyLoad>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerBottom}>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100 lozad' src={bannermob}/>
                        </div>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100 lozad'  src={bannermob2}/>
                        </div>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100 lozad'  src={bannermob3}/>
                        </div>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100 lozad'  src={bannermob4}/>
                        </div>
                    </Slider>
                </div>
        </section>
    );
};

export default BannersBottom;