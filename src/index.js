import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';

// Components
import App from '../src/Components/App';
import Header from './Components/Header/Header';
import Topo from '../src/Components/Topo';
import Category from '../src/Components/Category';
import BannersShirt from './Components/banners_shirt';
import Times from './Components/Times';
import Marcas from './Components/Marcas';
import Destaques from './Components/Destaques';
import Footer from './Components/Footer';
import BannersBottom from './Components/banners_bottom';
//import Testeira from './Components/Testeira';
// STYLE
import './assets/css/style.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import VitrineTop from './Components/VitrineTop';
import VitrineMiddle from './Components/VitrineMiddle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Topo/>
    <VitrineTop />
    <Category/>
    <BannersShirt/>
    <Times/>
    <VitrineMiddle />
    <BannersBottom/>
    <Marcas/>
    <Destaques/>
    <Footer/>
  </React.StrictMode>
);

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

