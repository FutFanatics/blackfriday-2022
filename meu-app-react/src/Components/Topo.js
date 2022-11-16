import banner from './../img/banner/banner-live.png';
import bannerMobile from '../img/banner/banner-livemobile.png';

const Topo = () => {
    return (
        <section className='c-banner position-relative'>
        <div className='container d-flex justify-content-center'>
          <div className='col-12'>
            <img src={banner} className="banner-center w-100 d-none d-md-block" alt="banner cocielo"/>
            <img src={bannerMobile} className="banner-center w-100 d-md-none" alt="banner cocielo"/>
          </div>
        </div>
      </section>
    )
}

export default Topo;