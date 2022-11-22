import banner from './../img/banner/banner-live.png';
import bannerMobile from '../img/banner/banner-livemobile.png';

const Topo = () => {
    return (
        <section className='c-banner position-relative'>
        <div className='container d-flex justify-content-center'>
          <div className='col-12 box-image__banner'>
            <a href='https://www.futfanatics.com.br/livedafut/?utm_source=instagram&utm_medium=bio&utm_term=live'>
              <img src={banner} className="banner-center w-100 d-none d-md-block" alt="Live - Shop ofertas e cupons exclusivos, 25/11 ás 19h30"/>
            </a>
            <a href='https://www.futfanatics.com.br/livedafut/?utm_source=instagram&utm_medium=bio&utm_term=live'>
              <img src={bannerMobile} className="banner-center w-100 d-md-none" alt="Live - Shop ofertas e cupons exclusivos, 25/11 ás 19h30"/>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Topo;