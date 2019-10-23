import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { strict } from 'assert';

class Header extends Component {
    componentDidMount(){
        var nav = document.getElementById('nav');
                window.onscroll = function(){
                    if(window.pageYOffset >100){
                        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                    }
                    else {
                        nav.style.background = 'transparent';
                        nav.style.opacity = 1;
                    }
                }
    }

        changeCountry = (lang) =>{
            this.props.history.replace('/'+lang.toLowerCase()+this.props.location.pathname.substring(3))
        window.location.reload();
        }

    render(){
        const route= this.props.match.params.lang;
        console.log(this.props);
        console.log(this.props.match.params)
        console.log(this.props.match.params.lang)

        return(
            <React.Fragment>
            <header className="top-area">
            <div className="header-area" id="nav" >
                <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <div className="logo">
                        <a href="/#"><img src="http://quintaisdocaneiro.com/assets/images/logo/logo.png" alt="logo2"></img></a>
                    </div>
                    </div>
                    <div className="col-sm-10">
                    <div className="main-menu">
                    <div className="sticky">
                        <div className="navbar"  >
                            <ul className="nav navbar-nav navbar-right">
                                    <li>
                                    <DropdownButton id="dropdown-basic-button" title="Quintais do Caneiro">
                                        <Dropdown.Item href={`${this.props.match.params.lang}/pages/Empreendimento`}>Empreendimento</Dropdown.Item>
                                        <Dropdown.Item href="/pt/Galeria">Galeria</Dropdown.Item>
                                    </DropdownButton>
                                        </li>
                                    <li>
                                    <DropdownButton id="dropdown-basic-button" title="Alojamento">
                                        <Dropdown.Item href="/pt/pages/localizacao">A localização</Dropdown.Item>
                                        <Dropdown.Item href="/pt/pages/comodidades">Comodidades</Dropdown.Item>
                                        <Dropdown.Item href="/pt/pages/veralojamento">Ver alojamento</Dropdown.Item>
                                    </DropdownButton>
                                    </li>
                                    <li>
                                        <DropdownButton id="dropdown-basic-button" title="Natureza">
                                            <Dropdown.Item href="/pages/pt/actividades">Atividades exteriores</Dropdown.Item>
                                            <Dropdown.Item href="/pages/pt/ocaminho">O Caminho</Dropdown.Item>
                                        </DropdownButton>
                                    </li>
                                    <li>
                                    <Link to="/Reservas">Reservas</Link>
                                    </li>
                                    <li>
                                    <Link to="/Contactos">Contactos</Link>
                                    </li>
                                    <li>
                                    <ReactFlagsSelect
                                        defaultCountry={this.props.match.params.lang ? this.props.match.params.lang.toUpperCase() : 'PT'}
                                        countries={["ES", "GB", "FR", "PT"]}
                                        showSelectedLabel={false}
                                        showOptionLabel={false}
                                        onSelect={this.changeCountry}
                                    />
                                    </li>
                            </ul>
                        </div>
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
export default withRouter(Header);