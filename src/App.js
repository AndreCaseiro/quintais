import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "./assets/css/style.css"

  class App extends Component {
    render(){
        return (
          <Router>
          <div className="App">
          <header className="App-header">
          <header class="top-area">
          <div class="container">
          <div class="col-sm-2">
          <div class="logo">
          <a href="index.html">
          Quintais do <span>Caneiro</span>
          </a>
            </div>
            <span className="input-group-btn">
            <Link to="/Alojamento" > Alojamento</Link>
            </span>

          <div class="col-sm-10">
          <div class="main-menu">
          <div class="navbar-header">
          </div>
          <ul id="menu" class="nav navbar-nav navbar-right ">
          <li>
          <button class="book-btn">book now</button>
          </li>
          <div class="texto">
          Os Quintais do Caneiro são um conjunto de propriedades rústicas centenárias situada nas margens do rio Ceira, no concelho de Miranda do Corvo, num belíssimo enquadramento paisagístico e cultural, que distam cerca de 10 Km da cidade de Coimbra.
          Os proprietários decidiram apostar neste projeto de turismo rural associado à agricultura biológica. As mobílias foram criteriosamente escolhidas, adequando-se ao ambiente rústico e sóbrio da casa. Os quartos são muito confortáveis, com ar condicionado,
          a cozinha totalmente equipada, muito ampla, manteve o forno tradicional a lenha. Na eira, espaço amplo, podemos desfrutar de todo o conforto, privacidade e magníficas vistas sobre o rio Ceira.
          A casa está rodeada de terrenos agrícolas, onde a horta biológica, as ervas aromáticas e a piscina biológica fazem as delícias de todos aqueles que nos visitam.
          </div>
          </ul>
          </div>
          </div>
          <div class="home-border"></div>
          </div>
          </div>
          </header>
          </header>
          </div>
          </Router>
        );
      }
    }
    
    export default App;
    