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

const routing = (
  <Router>
  <Route exact path="/" component={App} />
  <Route path="/pages/:lang/:area" component={Pages} />
  <Route exact path="/Galeria" component={Galeria} />
  <Route exact path="/Contactos" component={Contactos} />

  </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
