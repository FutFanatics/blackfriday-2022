import banner1 from './../img/banner/banner_1.png';
import banner2 from './../img/banner/banner_2.png';
import banner3 from './../img/banner/banner_3.png';



const BannersShirt = () => {
    return (
            <section className="c-banners_shirt">
                <div className="container">
                    <div className="row">
                        <div className="col-5 pb-4 position-relative">
                            <a href='' className=''>
                                <img src={banner1} className='banner w-100' alt=''/>
                            </a>
                        </div>
                        <div className="col-7 position-relative">
                            <a href='' className=''>
                                <img src={banner2} className='banner w-100' alt=''/>
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-7 position-relative">
                            <a href='' className=''>
                                <img src={banner3} className=' banner w-100' alt=''/>
                            </a>
                        </div>
                        <div className="col-5 position-relative">
                            <a href='' className=''>
                                <img src={banner1} className='banner w-100' alt=''/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
    export default BannersShirt;