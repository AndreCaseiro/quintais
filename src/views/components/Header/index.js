import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./../../css/animate.css";
import "./../../css/bootsnav.css";
import "./../../css/bootstrap.min.css";
import "./../../css/datepicker.css";
import "./../../css/font-awesome.min.css";
import "./../../css/hover-min.css";
import "./../../css/owl.theme.default.min.css";
import "./../../css/responsive.css";
import "./../../css/style.css";

class Header extends Component {
    render(){
        return(
            <React.Fragment>
            <header class="top-area">
            <div class="header-area">
                <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                    <div class="logo">
                        <a href="/Home"><img src="http://quintaisdocaneiro.com/assets/images/logo/logo.png" alt="logo2"></img></a>
                    </div>
                    </div>
                    <div class="col-sm-10">
                    <div class="main-menu">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <i class="fa fa-bars"></i>
                        </button>
                        </div>
                        <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                        <li>
                      <Link to="/">Home</Link></li>
                      <li>
                      <Link to="/Alojamento">Alojamento</Link></li>
                        <li>
                          <Link to="/Natureza">Natureza</Link>
                        </li>
                        <li>
                          <Link to="/Reservas">Galeria</Link>
                        </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
            </React.Fragment>
        );
    }
}
export default Header;