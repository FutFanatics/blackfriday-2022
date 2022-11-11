import icontel from '../img/icon/telefone.svg';
import iconcertificado1 from '../img/icon/image-1.svg';
import iconcertificado2 from '../img/icon/image-2.svg';
import iconcertificado3 from '../img/icon/image-3.svg';
import iconcertificado4 from '../img/icon/image-4.svg';

import pagament1 from '../img/icon/pagament/elo.svg';
import pagament2 from '../img/icon/pagament/master.svg';
import pagament3 from '../img/icon/pagament/hipercard.svg';
import pagament4 from '../img/icon/pagament/diners_club.svg';
import pagament5 from '../img/icon/pagament/boleto.svg';
import pagament6 from '../img/icon/pagament/american.svg';
import pagament7 from '../img/icon/pagament/visa.svg';

import playstore from   '../img/icon/playstore.svg';
import applestore from '../img/icon/applestore.svg';
function Footer(){
    return(
        <section className="c-footer">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-3 d-flex flex-column">
                        <h2 className="title-footer">Institucional</h2>
                        <a href="" className="links-footer">Sobre a FutFanatics </a>
                        <a href="" className="links-footer">Programa de Afiliados</a>
                        <a href="" className="links-footer">Trabalhe Conosco</a>
                        <a href="" className="links-footer">Internacional Orders</a>
                    </div>
                    <div className="col-3 d-flex flex-column">
                        <h2 className="title-footer">AJUDA</h2>
                        <a href="" className="links-footer">Cadastro</a>
                        <a href="" className="links-footer">Frete e entrega</a>
                        <a href="" className="links-footer">Produtos e serviços</a>
                        <a href="" className="links-footer">Trocas e Devolução</a>
                        <a href="" className="links-footer">Política de Privacidade</a>
                    </div>
                    <div className="col-3 d-flex flex-column">
                    <h2 className="title-footer">contato</h2>
                    <a href="" className="links-footer">Portal de Ajuda</a>
                    <a href="" className="links-footer">Trocas e Devolução</a>
                    <a href="" className="links-footer">
                    <img className="icon-cel" src={icontel}/>
                        (18) 3199-0404 
                    </a>
                    </div>
                    <div className="col-3">
                        <h2 className="title-footer">Certificado</h2>
                        <div className='box-images row'>
                            <div className='col-4'>
                            <img src={iconcertificado4} className='img-certificado'/>
                            </div>
                            <div className='col-4'>
                                <img src={iconcertificado2} className='img-certificado'/>
                            </div>
                            <div className='col-4'>
                                <img src={iconcertificado1} className='img-certificado'/>
                            </div>
                            
                            <div className='col-6'>
                                <img src={iconcertificado3} className='img-certificado img-certificado__last'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row method-pagament justify-content-between'>
                    <div className='col-6 d-flex align-items-center'>
                        <img className='pagament' src={pagament1}/>
                        <img className='pagament ' src={pagament2}/>
                        <img className='pagament' src={pagament3}/>
                        <img className='pagament' src={pagament4}/>
                        <img className='pagament' src={pagament5}/>
                        <img className='pagament' src={pagament6}/>
                        <img className='pagament' src={pagament7}/>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                        <img className='app-img' src={playstore}/>
                        <img className='app-img' src={applestore}/>
                    </div>
                </div>

                <div className='row sign'>
                    
                </div>
            </div>
        </section>

    );
};

export default Footer;