import Slider from 'react-slick';
import banner1 from './../img/prorrogado/banner_min_1.png';
import banner2 from './../img/prorrogado/banner_1.png';
import banner3 from './../img/prorrogado/banner_2.png';
import banner4 from './../img/prorrogado/banner_min_2.png';

import LazyLoad from 'react-lazy-load';

/*mobile*/
import bannermob from '../img/prorrogado/mob/banner1.png';
import bannermob2 from '../img/prorrogado/mob/banner2.png';
import bannermob3 from '../img/prorrogado/mob/banner3.png';
import bannermob4 from '../img/prorrogado/mob/banner4.png';


const BannersShirt = () => {
    const bannerShirt={
        dots:false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
            <section className="c-banners_shirt">
                <div className="container d-none d-md-block">
                    <div className="row">
                        <div className="col-5 pb-4 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/selecoes?loja=311840&categoria=4&variacao=tipo-de-produto_camisa&range=' className=''>
                            <LazyLoad offset={300} >
                                <img src={banner1} className='banner w-100 lozad' alt='Ofertas Seleções'/>
                            </LazyLoad>
                            </a>
                        </div>
                        </div>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&range=&variacao=camisa-oficial_sim&order=1' className=''>
                                <LazyLoad offset={300} >
                                    <img src={banner2} className='banner w-100 lozad' alt='Ofertas Clubes Brasileiros'/>
                                </LazyLoad>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/selecoes/america-do-sul/brasil' className=''>
                                <LazyLoad offset={300} >
                                    <img src={banner3} className=' banner w-100 lozad' alt='Ofertas Brasil'/>
                                </LazyLoad>
                            </a>
                        </div>
                        </div>
                        <div className="col-5 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/clubes-internacionais?variacao=camisa-oficial_sim' className=''>
                            <LazyLoad offset={300} >
                                <img src={banner4} className='banner w-100 lozad' alt='Ofertas Clubes Internacionais'/>
                            </LazyLoad>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerShirt}>
                        <div className='col-12 box-banner'>
                        <LazyLoad offset={300} >
                            <img className='img-banner w-100 lozad' src={bannermob}/>
                        </LazyLoad>
                        </div>
                        <div className='col-12   box-banner'>
                        <LazyLoad offset={300} >
                            <img className='img-banner w-100 lozad'  src={bannermob2}/>
                            </LazyLoad>
                        </div>
                        <div className='col-12 box-banner'>
                            <LazyLoad offset={300} >
                                <img className='img-banner w-100 lozad'  src={bannermob3}/>
                            </LazyLoad>
                        </div>
                        <div className='col-12 box-banner'>
                            <LazyLoad offset={300} >
                                <img className='img-banner w-100 lozad'  src={bannermob4}/>
                            </LazyLoad>
                        </div>
                    </Slider>
                </div>

            </section>
        )
    }
    
    export default BannersShirt;