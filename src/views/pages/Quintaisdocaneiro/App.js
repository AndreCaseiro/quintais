import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./../../css/style.css";

  class App extends Component {
    render(){
        return (
      <Router>
       <div className="App">
        <a href="/">
          Quintais do <span>Caneiro</span>
        </a>
          <header className="App-header">
           <header class="top-area">
            <div class="container">
             <div class="col-sm-2"></div>
              <div class="col-sm-10">
               <div class="main-menu">
                <div class="navbar-header"></div>
                 <ul id="menu" class="nav navbar-nav navbar-right ">
                  <div class="texto">
                    <h1>O Empreendimento</h1>
                     <b><p>Viva em pleno a tradicional hospitalidade e o ambiente familiar num espaço com o Rio Ceira e a montanha como cenário.</p></b>
                          Em pleno leito do rio, a rudeza do xisto da casa rural dos Quintais do Caneiro esconde um interior sofisticado e acolhedor.
                          Protegida por terrenos agrícolas e florestais, o alojamento oferece ao visitante os verdadeiros luxos do turismo em espaço rural,
                          a tranquilidade e a privacidade que podem ser vividas a dois, em família ou com um grupo de amigos.
                          Os espaços exteriores cuidados e plenos de requinte completam a atmosfera tradicional que se respira em toda a casa.
                          A arte de bem receber é posta em cada detalhe da estadia, deixando no visitante a marca indelével do charme e sedução.
                          Os Quintais do Caneiro são um conjunto de propriedades rústicas centenárias situada nas margens do rio Ceira, no concelho de Miranda do Corvo,
                          num belíssimo enquadramento paisagístico e cultural, que distam cerca de 10 Km da cidade de Coimbra.
                          Os proprietários decidiram apostar neste projeto de turismo rural associado à agricultura biológica.
                          As mobílias foram criteriosamente escolhidas, adequando-se ao ambiente rústico e sóbrio da casa. Os quartos são muito confortáveis, com ar condicionado,
                          a cozinha totalmente equipada, muito ampla, manteve o forno tradicional a lenha.
                          Na eira, espaço amplo, podemos desfrutar de todo o conforto, privacidade e magníficas vistas sobre o rio Ceira.
                          A casa está rodeada de terrenos agrícolas, onde a horta biológica, as ervas aromáticas e a piscina biológica fazem as delícias de todos aqueles que nos visitam.
                  </div>
                 </ul>
               </div>
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
