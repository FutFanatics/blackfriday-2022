import item1 from '../img/banner/teste.png';
import item2 from '../img/banner/teste_expan.png';
import item3 from '../img/banner/banner_total.png';


function BannersBottom() {
    return(
        <section className="c-banners__bottom">
            <div className="container d-flex justify-content-center">
                <div className='row'>
                <div className="row banner--left col-6">
                    <div className="col-6">
                        <a href='' className=''>
                            <img src={item1} className=""/>                            
                        </a>
                    </div>
                    <div className="col-6">
                        <a href='' className=''>
                            <img src={item1} className=""/>
                        </a>
                    </div>
                    <div className="col-12">
                        <a href='' className=''>
                            <img src={item2} className=""/>
                        </a>    
                    </div>
                </div>
                <div className="banner--right col-6">
                    <div className="col-12">
                        <a href='' className=''>
                            <img src={item3} className=""/>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>
        </section>
    );
};

export default BannersBottom;