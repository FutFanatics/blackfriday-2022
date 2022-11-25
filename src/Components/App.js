import logo from '../img/background/banner-home.png';
import logoMobile from '../img/background/background-mobile.png';
import '../assets/css/style.css';
import LazyLoad from 'react-lazy-load';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
        <LazyLoad offset={0} >
          <img src={logo} className="App-logo d-none d-md-block lozad" alt="Produtos com até 75% off" />
        </LazyLoad>
        </a>
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
        <LazyLoad offset={0} >
          <img src={logoMobile} className="w-100 d-md-none lozad" alt="Produtos com até 75% off" />
        </LazyLoad>
        </a>

      </section>
    </div>
    
  );
};

export default App;

