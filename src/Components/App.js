import logo from '../img/background/banner-home.png';
import logoMobile from '../img/background/background-mobile.png';
import '../assets/css/style.css';



function App() {
  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo d-none d-md-block" alt="logo" />
        <img src={logoMobile} className="w-100 d-md-none" alt="logo" />
      </section>
    </div>
    
  );
};

export default App;

