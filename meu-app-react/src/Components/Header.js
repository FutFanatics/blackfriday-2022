import logo from '../img/icon/futfanatics.svg';
import iconInternacional from '../img/icon/internacional.svg';
import iconUser from '../img/icon/iconuser.svg';
import iconCart from '../img/icon/iconcart.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header (){
    
    return(
        <header className="c-header d-flex align-items-center">
        <div className="container-fluid">
            <div className="row alig-items-center">
                <div className="col-2 box-logo">
                    <img className='logo-header' src={logo}/>
                </div>
                <div className='col-6 box-search'>
                    <div className='search'>
                        
                    </div>
                </div>
                <div className='col-4 d-flex align-items-center  justify-content-center'>
                    <a href='https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=selo-topo' className='link-internacional'>
                        <img className='icon-internacional' src={iconInternacional}/>
                        International Orders
                    </a>
                    <Dropdown class='link-user'>
                        <Dropdown.Toggle >
                            <img className='user-icon' src={iconUser}/>
                        </Dropdown.Toggle>
                            
                        <Dropdown.Menu>
                            <Dropdown.Item href="https://www.futfanatics.com.br/central-do-cliente">Login</Dropdown.Item>
                            <Dropdown.Item href="https://www.futfanatics.com.br/cadastro">Cadastre-se</Dropdown.Item>
                            <Dropdown.Item href="https://www.futfanatics.com.br/my-account/orders/">Meus Pedidos</Dropdown.Item>
                            <Dropdown.Item href="https://www.futfanatics.com.br/portal-de-ajuda">Ajuda</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <a href='' className='link-cart'>
                        <img className='cart-icon' src={iconCart}/>
                    </a>
                </div>
            </div>
        </div>
        <Container fluid>
            <Row>
                <nav> 
                    <ul className='d-flex justify-content-between'>
                        
                    </ul>
                </nav>
            </Row>
        </Container>
      </header>
    );
}
export default Header;