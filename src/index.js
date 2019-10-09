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

const routing = (
  <Router>
  <Route exact path="/" component={App} />
  <Route exact path="/Alojamento" component={Alojamento} />
  <Route exact path="/Natureza" component={Natureza} />
  <Route exact path="/Reservas" component={Reservas} />


  </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
