import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./../../css/style.css";
import Footer from './../../components/Footer/index';
import Header from './../../components/Header/index';

  class App extends Component {
    render(){
        return (
      <Router>
          <div className="App">
          <div className="Natureza">
            <div className="Header">
          <Header></Header>
          
          <section id="home" class="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjo1d5f1f9i4bc1kqqapmg.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <div class="container">
            <div class="about-us-content">
              <div class="row">
                <div class="col-sm-12">
                  <div class="single-about-us">
                    <div class="about-us-txt">
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-0">
                  <div class="single-about-us">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
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
        <div className="Footer"><Footer></Footer></div>
        </div>
                  
          </div>
      </Router>
      );
    }
  }

    export default App;
