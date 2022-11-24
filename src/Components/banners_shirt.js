import Slider from 'react-slick';
import banner1 from './../img/banner/banner_min_1.jpg';
import banner2 from './../img/banner/banner_1.jpg';
import banner3 from './../img/banner/banner_2.jpg';
import banner4 from './../img/banner/banner_min_2.jpg';


/*mobile*/
import bannermob from '../img/banner/bannersmob/banner1.png';
import bannermob2 from '../img/banner/bannersmob/banner2.png';
import bannermob3 from '../img/banner/bannersmob/banner3.png';
import bannermob4 from '../img/banner/bannersmob/banner4.png';


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
                                <img src={banner1} className='banner w-100' alt='Ofertas Seleções'/>
                            </a>
                        </div>
                        </div>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&range=&variacao=camisa-oficial_sim&order=1' className=''>
                                <img src={banner2} className='banner w-100' alt='Ofertas Clubes Brasileiros'/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/selecoes/america-do-sul/brasil' className=''>
                                <img src={banner3} className=' banner w-100' alt='Ofertas Brasil'/>
                            </a>
                        </div>
                        </div>
                        <div className="col-5 position-relative">
                        <div class="thumbnail">
                            <a href='https://www.futfanatics.com.br/clubes-internacionais?variacao=camisa-oficial_sim' className=''>
                                <img src={banner4} className='banner w-100' alt='Ofertas Clubes Internacionais'/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerShirt}>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100' src={bannermob}/>
                        </div>
                        <div className='col-12   box-banner'>
                            <img className='img-banner w-100'  src={bannermob2}/>
                        </div>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100'  src={bannermob3}/>
                        </div>
                        <div className='col-12 box-banner'>
                            <img className='img-banner w-100'  src={bannermob4}/>
                        </div>
                    </Slider>
                </div>

            </section>
        )
    }
    
    export default BannersShirt;