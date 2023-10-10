import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BottomTitle } from "./Text";
import { Section } from "./section";
import { BoxForms } from "./box";
import { StyledButton } from "./Button";

function Forms (){
    return(
        <section className='c-forms'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <BoxForms className='col-md-10'>
                        <BottomTitle>
                        Cadastre-se e receba novidades e ofertas toda semana!
                        </BottomTitle>
                        <form action="https://receiver.emkt.dinamize.com/in/301603/1/73cfd/0" method="POST">
                            <input type="hidden" name="update_mode" value="AS"/>
                            <input type="hidden" name="form-code" value="45"/>
                            <input type="hidden" name="isMsg" value="true"/>
                            <input type="hidden" name="text-confirmation" value="Qm9hIGpvZ2FkYSwgZS1tYWlsIGNhZGFzdHJhZG8gY29tIHN1Y2Vzc28h"/>
                            <input type="hidden" name="text-error" value=""/>
                            <input type="hidden" name="text-alert" value=""/>
                            <input type="hidden" name="cmp4" value="Home Leads - Jun 2019"/>
                            <input type="hidden" name="ignore-fields" value="on"/>
                            <input type="hidden" name="phase-change" value="off"/>
            
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="text row">
                                        <div className="col-12 col-md-4 mb-2 mb-lg-0">
                                            <input id="cmp1" type="text" name="cmp1"  placeholder="seuemail@exemplo.com" format="" className="form-control type_EMAIL field-required" maxlength="80" required="required" />
                                        </div>
                                        <div className="col-12 col-md-4 mb-lg-0 ">
                                            <select name="cmp12" id="cmp12" hd-name="cmp12" className="w-100 invi-select field-required type_LVM">
                                                <option value=""></option>
                                                <option value="Outro">Outro</option>
                                                <option value="Nenhum">Nenhum</option>
                                                <option value="ABC de Natal">ABC de Natal</option>
                                                <option value="Aimoré">Aimoré</option>
                                                <option value="Altos do Piauí">Altos do Piauí</option>
                                                <option value="América Mineiro">América Mineiro</option>
                                                <option value="América RJ">América RJ</option>
                                                <option value="América RN">América RN</option>
                                                <option value="ASA de Arapiraca">ASA de Arapiraca</option>
                                                <option value="Athletico Paranaense">Athletico Paranaense</option>
                                                <option value="Atlético Goianiense">Atlético Goianiense</option>
                                                <option value="Atlético Mineiro">Atlético Mineiro</option>
                                                <option value="Audax Osasco">Audax Osasco</option>
                                                <option value="Avaí">Avaí</option>
                                                <option value="Bahia">Bahia</option>
                                                <option value="Bahia de Feira">Bahia de Feira</option>
                                                <option value="Bangu">Bangu</option>
                                                <option value="Boa Esporte">Boa Esporte</option>
                                                <option value="Botafogo">Botafogo</option>
                                                <option value="Botafogo da Paraíba">Botafogo da Paraíba</option>
                                                <option value="Botafogo de Ribeirão Preto">Botafogo de Ribeirão Preto</option>
                                                <option value="Bragantino">Bragantino</option>
                                                <option value="Brasil de Pelotas">Brasil de Pelotas</option>
                                                <option value="Brasília">Brasília</option>
                                                <option value="Brasiliense">Brasiliense</option>
                                                <option value="Campinense">Campinense</option>
                                                <option value="Caxias do Sul">Caxias do Sul</option>
                                                <option value="Ceará">Ceará</option>
                                                <option value="Chapecoense">Chapecoense</option>
                                                <option value="Clube do Remo">Clube do Remo</option>
                                                <option value="Corinthians">Corinthians</option>
                                                <option value="Coritiba">Coritiba</option>
                                                <option value="CRAC">CRAC</option>
                                                <option value="CRB Alagoas">CRB Alagoas</option>
                                                <option value="Criciúma">Criciúma</option>
                                                <option value="Cruzeiro">Cruzeiro</option>
                                                <option value="CSA">CSA</option>
                                                <option value="Cuiabá">Cuiabá</option>
                                                <option value="Desportiva Ferroviária ES">Desportiva Ferroviária ES</option>
                                                <option value="Ferroviária">Ferroviária</option>
                                                <option value="Ferroviária de Araraquara">Ferroviária de Araraquara</option>
                                                <option value="Ferroviário CE">Ferroviário CE</option>
                                                <option value="Figueirense">Figueirense</option>
                                                <option value="Flamengo">Flamengo</option>
                                                <option value="Flamengo Piauí">Flamengo Piauí</option>
                                                <option value="Fluminense">Fluminense</option>
                                                <option value="Fluminense de Feira">Fluminense de Feira</option>
                                                <option value="Fortaleza">Fortaleza</option>
                                                <option value="Gama">Gama</option>
                                                <option value="Goiás">Goiás</option>
                                                <option value="Goytacaz">Goytacaz</option>
                                                <option value="Grêmio">Grêmio</option>
                                                <option value="Guarani">Guarani</option>
                                                <option value="íbis">íbis</option>
                                                <option value="Internacional">Internacional</option>
                                                <option value="Itabaiana">Itabaiana</option>
                                                <option value="Ituano">Ituano</option>
                                                <option value="Joinville">Joinville</option>
                                                <option value="Juventude">Juventude</option>
                                                <option value="Juventus">Juventus</option>
                                                <option value="Linense">Linense</option>
                                                <option value="Londrina EC">Londrina EC</option>
                                                <option value="Luverdense">Luverdense</option>
                                                <option value="Madureira">Madureira</option>
                                                <option value="Marília">Marília</option>
                                                <option value="Maringá">Maringá</option>
                                                <option value="Metropolitano">Metropolitano</option>
                                                <option value="Mirassol">Mirassol</option>
                                                <option value="Mogi Mirim">Mogi Mirim</option>
                                                <option value="Moto Club">Moto Club</option>
                                                <option value="Náutico">Náutico</option>
                                                <option value="Noroeste de Bauru">Noroeste de Bauru</option>
                                                <option value="Novo Hamburgo">Novo Hamburgo</option>
                                                <option value="Oeste Barueri">Oeste Barueri</option>
                                                <option value="Operário Ferroviário">Operário Ferroviário</option>
                                                <option value="Palmeiras">Palmeiras</option>
                                                <option value="Paraná Clube">Paraná Clube</option>
                                                <option value="Parnahyba">Parnahyba</option>
                                                <option value="Paysandu">Paysandu</option>
                                                <option value="Pelotas">Pelotas</option>
                                                <option value="Penapolense">Penapolense</option>
                                                <option value="Ponte Preta">Ponte Preta</option>
                                                <option value="Portuguesa">Portuguesa</option>
                                                <option value="Rio Branco ES">Rio Branco ES</option>
                                                <option value="River Piauí">River Piauí</option>
                                                <option value="Sampaio Corrêa">Sampaio Corrêa</option>
                                                <option value="Santa Cruz">Santa Cruz</option>
                                                <option value="Santo André">Santo André</option>
                                                <option value="Santos">Santos</option>
                                                <option value="São Bento">São Bento</option>
                                                <option value="São Bernardo">São Bernardo</option>
                                                <option value="São Caetano">São Caetano</option>
                                                <option value="São Paulo">São Paulo</option>
                                                <option value="Sergipe">Sergipe</option>
                                                <option value="Sport Recife">Sport Recife</option>
                                                <option value="Vasco da Gama">Vasco da Gama</option>
                                                <option value="Vila Nova GO">Vila Nova GO</option>
                                                <option value="Vila Nova MG">Vila Nova MG</option>
                                                <option value="Vitória BA">Vitória BA</option>
                                                <option value="Vitória ES">Vitória ES</option>
                                                <option value="Volta Redonda">Volta Redonda</option>
                                                <option value="XV de Piracicaba">XV de Piracicaba</option>
                                            </select>
                                            <input type="hidden" name="cmp12_action" value="replacement" />
                                        </div>
                                        <div className="col-12 col-md-4 mb-2 mb-lg-0">
                                        <StyledButton type="submit" className="btn btn-form">Receber novidades</StyledButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="msg-resp"></div>
                                </div>
                            </div>
                        </form>
                    </BoxForms>
                </div>
            </div>
        </section>
    )
}
export default Forms