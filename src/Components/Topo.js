import banner from './../img/prorrogado/banner-live.png';
import bannerMobile from '../img/prorrogado/mob/banner-livemobile.png';
import LazyLoad from 'react-lazy-load';

const Topo = () => {
    return (
        <section className='c-banner position-relative'>
        <div className='container d-flex justify-content-center'>
          <div className='col-12 box-image__banner'>
            <a href='https://www.futfanatics.com.br/livedafut/?utm_source=instagram&utm_medium=bio&utm_term=live'>
            <LazyLoad offset={100} >
              <img src={banner} className="banner-center w-100 d-none d-md-block lozad" alt="Live - Shop ofertas e cupons exclusivos, 25/11 ás 19h30"/>
            </LazyLoad>
            </a>
            <a href='https://www.futfanatics.com.br/livedafut/?utm_source=instagram&utm_medium=bio&utm_term=live'>
              <LazyLoad offset={100} >
                <img src={bannerMobile} className="banner-center w-100 d-md-none lozad" alt="Live - Shop ofertas e cupons exclusivos, 25/11 ás 19h30"/>
              </LazyLoad>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Topo;