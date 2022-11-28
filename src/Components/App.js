import logo from '../img/prorrogado/banner-home.png';
import logoMobile from '../img/prorrogado/mob/background-mobile.png';
import '../assets/css/style.css';
import LazyLoad from 'react-lazy-load';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
        <LazyLoad offset={0} >
          <img src={logo} className="App-logo d-none d-md-block lozad" alt="Produtos com até 70% off" />
        </LazyLoad>
        </a>
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
        <LazyLoad offset={0} >
          <img src={logoMobile} className="w-100 d-md-none lozad" alt="Produtos com até 70% off" />
        </LazyLoad>
        </a>

      </section>
    </div>
    
  );
};

export default App;

