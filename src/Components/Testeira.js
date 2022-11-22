
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Testeira(){
    const Testeira={
        dots:false,
        infinite:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };
    return(
        <section className="c-testeira">
            <div className="container">
                <Slider {...Testeira}>
                <div className="d-flex justify-content-center align-items w-100">
                    <p className="testeira-title"><strong>10% Off NA LOJA TODA</strong> OLHO NA BLACK:<strong>BLACKCOPA10</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items w-100">
                    <p className="testeira-title"><strong>10% LIVESHOP ESPECIAL</strong> BLACK FRIDAY 2022<strong>25/11- ÀS 19H30</strong></p>
                </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testeira;