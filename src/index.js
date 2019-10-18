import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/pages/Quintaisdocaneiro/App';
import * as serviceWorker from './serviceWorker';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Alojamento from './views/pages/Alojamento/Alojamento'
import Natureza from './views/pages/Natureza/Natureza'
import Reservas from './views/pages/Reservas/Index'
import Empreendimento from './views/pages/Quintaisdocaneiro/Empreendimento'
import Comodidades from './views/pages/Alojamento/Comodidades'
import Localizacao from './views/pages/Alojamento/Localizacao'
import VerAlojamento from './views/pages/Alojamento/VerAlojamento'
import Atividades from './views/pages/Natureza/Atividades';
import Caminho from './views/pages/Natureza/Caminho';
import Galeria from './views/pages/Quintaisdocaneiro/Galeria'
import Contactos from './views/pages/Contactos/index'

const routing = (
  <Router>
  <Route exact path="/" component={App} />
  <Route exact path="/Alojamento" component={Alojamento} />
  <Route exact path="/Natureza" component={Natureza} />
  <Route exact path="/Reservas" component={Reservas} />
  <Route path="/pages/:lang/:area" component={Empreendimento} />
  <Route exact path="/Comodidades" component={Comodidades} />
  <Route exact path="/Localizacao" component={Localizacao} />
  <Route exact path="/VerAlojamento" component={VerAlojamento} />
  <Route exact path="/Atividades" component={Atividades} />
  <Route exact path="/Caminho" component={Caminho} />
  <Route exact path="/Galeria" component={Galeria} />
  <Route exact path="/Contactos" component={Contactos} />





  </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
