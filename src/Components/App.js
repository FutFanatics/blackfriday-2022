import logo from '../img/background/banner-home.png';
import logoMobile from '../img/background/background-mobile.png';
import '../assets/css/style.css';



function App() {
  return (
    <div className="App">
      <section className="App-header">
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
          <img src={logo} className="App-logo d-none d-md-block" alt="Produtos com até 75% off" />
        </a>
        <a href='https://www.futfanatics.com.br/loja/busca.php'>
          <img src={logoMobile} className="w-100 d-md-none" alt="Produtos com até 75% off" />
        </a>

      </section>
    </div>
    
  );
};

export default App;

