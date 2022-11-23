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

import signature from '../img/icon/futfanatics.svg';

import facebook from '../img/icon/share/facebook.svg';
import twitter from '../img/icon/share/twitter.svg';
import instagram from '../img/icon/share/instagram.svg';
import tiktok from '../img/icon/share/tiktok.svg';
import youtube from '../img/icon/share/youtube.svg';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function Footer(){
    const [open, setOpen] = useState(false);
    const [help, sethelp] = useState(false);
    const [contact, setcontact] = useState(false);
    const [certificate, setcertificate] = useState(false);
    return(
        <section className="c-footer">
            <div className="container d-none d-md-block">
                <div className="row pb-4">
                    <div className="col-3 d-flex flex-column">
                        <h2 className="title-footer">Institucional</h2>
                        <a href="https://www.futfanatics.com.br/empresa" className="links-footer">Sobre a FutFanatics </a>
                        <a href="https://www.futfanatics.com.br/afiliados" className="links-footer">Programa de Afiliados</a>
                        <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=site" className="links-footer">Internacional Orders</a>
                        <a href="https://blog.futfanatics.com.br" className="links-footer">Blog da Fut</a>
                        
                    </div>
                    <div className="col-3 d-flex flex-column">
                        <h2 className="title-footer">AJUDA</h2>
                        <a href="https://www.futfanatics.com.br/politica-de-trocas-e-devolucoes" className="links-footer">Trocas e Devolução</a>
                        <a href="https://www.futfanatics.com.br/politica-de-privacidade" className="links-footer">Política de Privacidade</a>
                        <a href="https://www.futfanatics.com.br/regulamentos" className="links-footer">Regulamentos</a>
                    </div>
                    <div className="col-3 d-flex flex-column">
                    <h2 className="title-footer">contato</h2>
                    <a href="https://www.futfanatics.com.br/portal-de-ajuda" className="links-footer">Portal de Ajuda</a>
                    <a href="https://www.futfanatics.com.br/trabalheconosco" className="links-footer">Trabalhe Conosco</a>
                    <a href="tel:+551148583500" className="links-footer">
                    <img className="icon-cel" src={icontel}/>
                        (11) 4858-3500
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=551833440404&text=Ol%C3%A1" className="links-footer">
                    <img className="icon-cel" src={icontel}/>
                        (18) 3344-0404
                    </a>
                    </div>
                    <div className="col-3">
                        <h2 className="title-footer">Certificado</h2>
                        <div className='box-images row'>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado4} className='img-certificado'/>
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado2} className='img-certificado'/>
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado1} className='img-certificado'/>
                                </a>
                            </div>
                            
                            <div className='col-6'>
                                <a href=''>
                                    <img src={iconcertificado3} className='img-certificado img-certificado__last'/>
                                </a>
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
                        <a href='https://play.google.com/store/apps/details?id=com.futfanatics&pli=1' className='app-img'>
                            <img  src={playstore}/>
                        </a>
                        <a href='https://apps.apple.com/br/app/futfanatics/id1422835821'  className='app-img'>
                            <img src={applestore}/>
                        </a>
                       
                    </div>
                </div>

                <div className='row sign'>
                    <div className='col-10 d-flex align-items-start'>
                        <img src={signature} class='sign-futfanatics'/>
                        <p className='content-sign'>
                        FF.Com Esportes Ltda CNPJ 05.328.923/0001-90 Rodovia Arthur Boigues Filho, 59 CEP: 19026-650 Presidente Prudente - SP Copyright 2012-2017 www.futfanatics.com.br - TODOS OS
                        DIREITOS RESERVADOS. É vetada a reprodução total ou parcial das informações aqui veiculadas sem a expressa autorização da administração do site. Os preços e condições depagamento
                        são válidos exclusivamente para compras realizadas via internete
                        </p>
                    </div>
                    <div className='col-2 d-flex box-shared'>
                        <a href='https://twitter.com/futfanatics'>
                            <img className='img-shared' src={twitter}/>
                        </a>
                        <a href='https://www.instagram.com/futfanatics/'>
                            <img className='img-shared' src={instagram}/>
                        </a>
                        <a href='https://www.facebook.com/futfanatics'>
                            <img className='img-shared' src={facebook}/>
                        </a>
                        <a href='https://www.youtube.com/user/futfanaticsbr'>
                            <img className='img-shared' src={youtube}/>
                        </a>
                        <a href='https://www.tiktok.com/@futfanaticsoficial?'>
                        <img className='img-shared' src={tiktok}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='container d-md-none'>
                <div className='box-collapse'>
                    <p className='title-footer-mob' onClick={() => setOpen(!open)}
                aria-controls="colapseinstitucional"
                aria-expanded={open}
            >
                Institucional
                    </p>
                    <Collapse in={open}>
                        <div id="colapseinstitucional">
                            <div className='d-flex flex-column mt-3'>
                                <a href="https://www.futfanatics.com.br/empresa" className="links-footer">Sobre a FutFanatics </a>
                                <a href="https://www.futfanatics.com.br/afiliados" className="links-footer">Programa de Afiliados</a>
                                <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=site" className="links-footer">Internacional Orders</a>
                                <a href="https://blog.futfanatics.com.br" className="links-footer">Blog da Fut</a>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className='box-collapse'>
                    <p className='title-footer-mob' onClick={() => sethelp(!help)}
                aria-controls="example-collapse-text"
                aria-expanded={help}
            >
                AJUDA
                    </p>
                    <Collapse in={help}>
                        <div id="example-collapse-text">
                            <div className='d-flex flex-column mt-3'>
                            <a href="https://www.futfanatics.com.br/politica-de-trocas-e-devolucoes" className="links-footer">Trocas e Devolução</a>
                            <a href="https://www.futfanatics.com.br/politica-de-privacidade" className="links-footer">Política de Privacidade</a>
                            <a href="https://www.futfanatics.com.br/regulamentos" className="links-footer">Regulamentos</a>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className='box-collapse'>
                    <p className='title-footer-mob' onClick={() => setcontact(!contact)}
                aria-controls="example-collapse-text"
                aria-expanded={contact}
            >
                contato
                    </p>
                    <Collapse in={contact}>
                        <div id="example-collapse-text">
                            <div className='d-flex flex-column mt-3'>
                            <a href="https://www.futfanatics.com.br/portal-de-ajuda" className="links-footer">Portal de Ajuda</a>
                            <a href="https://www.futfanatics.com.br/trabalheconosco" className="links-footer">Trabalhe Conosco</a>
                            <a href="tel:+551148583500" className="links-footer">
                            <img className="icon-cel" src={icontel}/>
                                (11) 4858-3500
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=551833440404&text=Ol%C3%A1" className="links-footer">
                            <img className="icon-cel" src={icontel}/>
                                (18) 3344-0404
                            </a>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className='box-collapse'>
                    <p className='title-footer-mob' onClick={() => setcertificate(!certificate)}
                    aria-controls="example-collapse-text" aria-expanded={certificate}>
                    Certificado
                    </p>
                    <Collapse in={certificate}>
                        <div id="example-collapse-text">
                        <div className='box-images row'>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado4} className='img-certificado'/>
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado2} className='img-certificado'/>
                                </a>
                            </div>
                            <div className='col-4'>
                                <a href=''>
                                    <img src={iconcertificado1} className='img-certificado'/>
                                </a>
                            </div>
                            
                            <div className='col-6'>
                                <a href=''>
                                    <img src={iconcertificado3} className='img-certificado img-certificado__last'/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </Collapse>
                </div> 
                <div className='box-app d-flex flex-column align-items-center'>
                <span className='title-footer'>Baixe o app</span>
                    <a href='https://play.google.com/store/apps/details?id=com.futfanatics&pli=1' className='app-img app-img-mob'>
                            <img  src={playstore}/>
                        </a>
                        <a href='https://apps.apple.com/br/app/futfanatics/id1422835821'  className='app-img mt-2'>
                            <img src={applestore}/>
                        </a>
                </div>
                <div className='row sign'>
                    <div className='col-12 d-flex flex-column align-items-center'>
                        <img src={signature} class='sign-futfanatics'/>
                        <p className='content-sign'>
                        FF.Com Esportes Ltda CNPJ 05.328.923/0001-90 Rodovia Arthur Boigues Filho, 59 CEP: 19026-650 Presidente Prudente - SP Copyright 2012-2017 www.futfanatics.com.br - TODOS OS
                        DIREITOS RESERVADOS. É vetada a reprodução total ou parcial das informações aqui veiculadas sem a expressa autorização da administração do site. Os preços e condições depagamento
                        são válidos exclusivamente para compras realizadas via internete
                        </p>
                    </div>
                    <div className='col-2 d-flex box-shared'>
                        <a href='https://twitter.com/futfanatics'>
                            <img className='img-shared' src={twitter}/>
                        </a>
                        <a href='https://www.instagram.com/futfanatics/'>
                            <img className='img-shared' src={instagram}/>
                        </a>
                        <a href='https://www.facebook.com/futfanatics'>
                            <img className='img-shared' src={facebook}/>
                        </a>
                        <a href='https://www.youtube.com/user/futfanaticsbr'>
                            <img className='img-shared' src={youtube}/>
                        </a>
                        <a href='https://www.tiktok.com/@futfanaticsoficial?'>
                        <img className='img-shared' src={tiktok}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>  

    );
};

export default Footer;