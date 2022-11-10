import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/Components/App';
import Topo from '../src/Components/Topo';
import Category from '../src/Components/Category';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';
import BannersShirt from './Components/banners_shirt';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Carousel from 'react-bootstrap/Carousel';
import BannersBottom from './Components/banners_bottom';
import Times from './Components/Times';
import Marcas from './Components/Marcas';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Topo/>
    <Category/>
    <BannersShirt/>
    <Times/>
    <Marcas/>
    <BannersBottom/>
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
