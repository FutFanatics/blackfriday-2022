import Menu_Desk from "./Menu_Desk";
import logo from "../img/icon/futfanatics.svg";
import iconUser from '../img/icon/iconuser.svg';
import iconcart from '../img/icon/iconcart.svg';
import iconinternacional from "../img/icon/internacional.svg";


function Header(){
    return(
        <header>
            <div className="header-top">
                <div className="header-infos">
                    <div className="container-fluid">
                        <div className="row py-lg-3 align-items-center">
                            <div className="col-4 d-lg-none">
                                <button className="menu-mob-open icon-menu"><i className="icon-menu d-none"></i></button>
                            </div>
                            <div className="col-4 col-lg-1 d-flex justify-content-center justify-content-lg-start">
                                <a href="{{ store.url }}" className="logo">
                                    <img className="icon-logo-fut" src={logo}/>
                                </a>
                            </div>
                            <div className="col-12 order-last col-lg-8 order-lg-0">
                                <div className="busca">
                                    <form action="https://busca.futfanatics.com.br/busca" className="d-flex align-items-center">
                                        <input type="hidden" name="loja" value="{{ store.id }}" />

                                        <button type="submit" className="order-last order-lg-0"><i className="icon-search"></i></button>

                                        <input id="search-field" type="text" name="q" placeholder="O que você procura?" value="{{ search.word }}" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-4 col-lg-3 d-flex justify-content-between links-usuario">
                                <div className="link-inter align-self-center">
                                    <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=selo-topo" target="_blank" className="d-none d-lg-flex align-items-center"><img className="icon-link-inter" src={iconinternacional}/>International Orders</a>
                                </div>
                                <div className="central">
                                    <a href="{{ store.url }}/central-do-cliente" className="d-none d-lg-block"><img className="icon-user" src={iconUser}/></a>
                                    <div className="menu-central d-none">
                                        <a href="" className="tray-hide" data-logged-user="true">Olá, <span data-customer="name" className="login-traynome"></span></a>
                                        <a href="{{ store.url }}/central-do-cliente" className="tray-hide" data-logged-user="false">Login</a>
                                        <a href="{{ links.logout }}" className="tray-hide" data-logged-user="true">Sair</a>
                                        <a href="{{ store.url }}/cadastro" className="tray-hide" data-logged-user="false">Cadastre-se</a>
                                        <a href="{{ store.url }}/my-account/orders/">Meus Pedidos</a>
                                        <a href="{{ store.url }}/portal-de-ajuda">Ajuda</a>
                                    </div>
                                </div>
                                <div className="search d-lg-none invisible">
                                    <a href=""><i className="icon-search"></i></a>
                                </div>
                                <div className="cart-header">
                                    <a href="{{ store.url }}/loja/carrinho.php?loja=311840"><img className="icon-cart" src={iconcart}/><span className="cart-qty">0</span></a>
                                    <div className="menu-cart d-none">
                                        <ul className="cart-products custom-scroll">
        									<li>
                                                <div className="product-photo">
                                                    <a href="">
                                                        <img src="" alt="" className="img-fluid" />
                                                    </a>
                                                </div>
                                                <div className="product-data">
                                                    <div className="d-flex justify-content-between">
                                                        <h3></h3>
                                                        <button className="product-remove ml-2"><i className="icon-trash"></i></button>
                                                    </div>
                                                    <div className="product-variant"></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-qty"></div>
                                                        <div className="product-price"></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="cart-subtotal">Subtotal: <strong>R$000,00</strong></div>
                                        <a href="{{ store.url }}/loja/carrinho.php?loja=311840">Finalizar compra</a>
                                    </div>
                                    <div className="cart-note d-none">
                                        <ul className="cart-added"></ul>
                                        <a href="{{ store.url }}/loja/carrinho.php?loja=311840">Finalizar compra</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav">
                    <Menu_Desk/>
                                   
                </div>
            </div>
        </header>
    );
};

export default Header;
