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
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'

class Header extends Component {
    render(){
        return(
            <React.Fragment>
            <header className="top-area">
            <div className="header-area">
                <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <div className="logo">
                        <a href="/#"><img src="http://quintaisdocaneiro.com/assets/images/logo/logo.png" alt="logo2"></img></a>
                    </div>
                    </div>
                    <div className="col-sm-10">
                    <div className="main-menu">
                        <div className="navbar">
                            <ul className="nav navbar-nav navbar-right">
                                    <li>
                                    <DropdownButton id="dropdown-basic-button" title="Quintais do Caneiro">
                                        <Dropdown.Item href="/pages/pt/empreendimento">Empreendimento</Dropdown.Item>
                                        <Dropdown.Item href="/Galeria">Galeria</Dropdown.Item>
                                    </DropdownButton>
                                        </li>
                                    <li>
                                    <DropdownButton id="dropdown-basic-button" title="Alojamento">
                                        <Dropdown.Item href="/pages/pt/localizacao">A localização</Dropdown.Item>
                                        <Dropdown.Item href="/pages/pt/comodidades">Comodidades</Dropdown.Item>
                                        <Dropdown.Item href="/pages/pt/veralojamento">Ver alojamento</Dropdown.Item>
                                    </DropdownButton>
                                    </li>
                                    <li>
                                        <DropdownButton id="dropdown-basic-button" title="Natureza">
                                            <Dropdown.Item href="/pages/pt/actividades">Atividades exteriores</Dropdown.Item>
                                            <Dropdown.Item href="/pages/pt/ocaminho">O Caminho</Dropdown.Item>
                                        </DropdownButton>
                                    </li>
                                    <li>
                                        <Link to="/Contactos">Contactos</Link>
                                    </li>
                                    <li>
                                        <Link to="/Reservas">Reservas</Link>
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