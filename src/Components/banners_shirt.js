import Slider from 'react-slick';
import banner1 from './../img/banner/banner_min_1.png';
import banner2 from './../img/banner/banner_1.png';
import banner3 from './../img/banner/banner_2.png';
import banner4 from './../img/banner/banner_min_2.png';




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
                            <a href='https://www.futfanatics.com.br/selecoes?loja=311840&categoria=4&variacao=tipo-de-produto_camisa&range=' className=''>
                                <img src={banner1} className='banner w-100' alt='Ofertas Seleções'/>
                            </a>
                        </div>
                        <div className="col-7 position-relative">
                            <a href='https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&range=&variacao=camisa-oficial_sim&order=1' className=''>
                                <img src={banner2} className='banner w-100' alt='Ofertas Clubes Brasileiros'/>
                            </a>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="col-7 position-relative">
                            <a href='https://www.futfanatics.com.br/selecoes/america-do-sul/brasil' className=''>
                                <img src={banner3} className=' banner w-100' alt='Ofertas Brasil'/>
                            </a>
                        </div>
                        <div className="col-5 position-relative">
                            <a href='https://www.futfanatics.com.br/clubes-internacionais?variacao=camisa-oficial_sim' className=''>
                                <img src={banner4} className='banner w-100' alt='Ofertas Clubes Internacionais'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='container d-md-none'>
                    <Slider {...bannerShirt}>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100' src={banner1}/>
                        </div>
                        <div className='col-12 p-2'>
                            <img className='img-banner w-100'  src={banner1}/>
                        </div>
                    </Slider>
                </div>

            </section>
        )
    }
    
    export default BannersShirt;