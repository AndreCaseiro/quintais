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
import { withTranslation, Trans } from 'react-i18next';

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
    changeCountry = (lang) => {
        console.log("lang", lang)
        this.props.i18n.changeLanguage(lang.toLowerCase());
        this.props.history.replace('/'+lang.toLowerCase()+this.props.location.pathname.substring(3))
        window.location.reload();
    }

    render(){
        const route= this.props.match.params.lang ? this.props.match.params.lang : "pt";
        return(
            <React.Fragment>
            <header className="top-area">
            <div className="header-area" id="nav" >
                <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <div className="logo">
                        <a href={`/${route}`}><img src="http://quintaisdocaneiro.com/assets/images/logo/logo.png" alt="logo2"></img></a>
                    </div>
                    </div>
                    <div className="col-sm-10">
                    <div className="main-menu">
                    <div className="sticky">
                        <div className="navbar"  >
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                <DropdownButton id="dropdown-basic-button" title={this.props.i18n.t('Quintais')}>
                                    <Dropdown.Item href={`/${route}/pages/Empreendimento`}><Trans i18nKey="Empreendimento"></Trans></Dropdown.Item>
                                    <Dropdown.Item href={`/${route}/Galeria`}><Trans i18nKey="Galeria"></Trans></Dropdown.Item>
                                </DropdownButton>
                                    </li>
                                <li>
                                <DropdownButton id="dropdown-basic-button" title={this.props.i18n.t('Alojamento')}>
                                    <Dropdown.Item href={`/${route}/pages/localizacao`}><Trans i18nKey="Localizacao"></Trans></Dropdown.Item>
                                    <Dropdown.Item href={`/${route}/pages/comodidades`}><Trans i18nKey="Comodidades"></Trans></Dropdown.Item>
                                    <Dropdown.Item href={`/${route}/pages/veralojamento`}><Trans i18nKey="Aloja"></Trans></Dropdown.Item>
                                </DropdownButton>
                                </li>
                                <div>{this.props.i18n.language}</div>
                                <li>
                                    <DropdownButton id="dropdown-basic-button" title={this.props.i18n.t('Natureza')}>
                                        <Dropdown.Item href={`/${route}/pages/actividades`}><Trans i18nKey="AtividadesExterior"></Trans></Dropdown.Item>
                                        <Dropdown.Item href={`/${route}/pages/ocaminho`}><Trans i18nKey="Caminho"></Trans></Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li>
                                <Link to={`/${route}/pages/reservas`}><Trans i18nKey="Reservas"></Trans></Link>
                                </li>
                                <li>
                                <Link to={`/${route}/contactos`}><Trans i18nKey="Contactos"></Trans></Link>
                                </li>
                                <li>
                                <ReactFlagsSelect
                                    defaultCountry={route.toUpperCase()}
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
export default withTranslation('translation')(withRouter(Header));