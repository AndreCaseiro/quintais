import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "./assets/css/style.css"
import Alojamento from './Alojamento'
const routing = (
  <Router>
    <div>
    <ul>
      <li>
        <Link to="/Alojamento">Alojamento</Link>
      </li>
    </ul>
      <Route exact path="/Alojamento" component={Alojamento} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

class App extends Component {
render(){
  return (
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
						<div class="col-sm-10">
							<div class="main-menu">
								<div class="navbar-header">
								</div>
									<ul id="menu" class="nav navbar-nav navbar-right ">

										<li>

											<button class="book-btn">book now</button>
										</li>
									</ul>
						</div>
					</div>
					<div class="home-border"></div>
				</div>
			</div>
		</header>
      </header>
    </div>
  );
}
}

export default App;
