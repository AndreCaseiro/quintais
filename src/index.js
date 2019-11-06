import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/pages/Quintaisdocaneiro/App';
import * as serviceWorker from './serviceWorker';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './views/components/pages/index'
import Galeria from './views/pages/Quintaisdocaneiro/Galeria'
import Contactos from './views/pages/Contactos/index'
import "./i18n";

const NoMatchPage = () => {
  return (
    <h3>404 - Desculpe esta página não está disponível.</h3>
  );
};

const routing = (
  <Router>
  <Route exact path="/" component={App} />
  <Route exact path="/:lang" component={App} />
  <Route path="/:lang/pages/:area" component={Pages} />
  <Route exact path="/:lang/Galeria" component={Galeria} />
  <Route exact path="/:lang/Contactos" component={Contactos} />
  <Route component={NoMatchPage} />
  <Route exact path=":lang/pages" component={NoMatchPage}/>
  </Router>
  )



  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
