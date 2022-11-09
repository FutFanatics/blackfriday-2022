import item1 from './../img/category/categoria_1.png';
import item2 from './../img/category/categoria_2.png';
import item3 from './../img/category/categoria_3.png';
import item4 from './../img/category/categoria_4.png';
import item5 from './../img/category/categoria_5.png';
import item6 from './../img/category/categoria_6.png';
import item7 from './../img/category/categoria_7.png';
import item8 from './../img/category/categoria_8.png';

const Category = () => {
    return (
        <section className='c-category'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Internacionais</span>
                        <a className='' href=''>
                            <img src={item1} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Nacionais</span>
                        <a className='' href=''>
                            <img src={item2} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Casuais</span>
                        <a className='' href=''>
                            <img src={item3} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Calçados</span>
                        <a className='' href=''>
                            <img src={item4} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Futebol</span>
                        <a className='' href=''>
                            <img src={item5} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Treino</span>
                        <a className='' href=''>
                            <img src={item6} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Casuais</span>
                        <a className='' href=''>
                            <img src={item7} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                    <div className='box-category d-flex flex-column align-items-center justify-content-center'>
                        <span className='title-category'>Esportes</span>
                        <a className='' href=''>
                            <img src={item8} className="img-category" alt="banner cocielo"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>    
        )
    }
    
    export default Category;