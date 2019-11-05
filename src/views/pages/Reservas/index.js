import React, { Component } from 'react';
import './../../components/Footer/index'
import './../../components/Header/index'
import "./../../css/animate.css";
import "./../../css/bootsnav.css";
import "./../../css/bootstrap.min.css";
import "./../../css/datepicker.css";
import "./../../css/font-awesome.min.css";
import "./../../css/hover-min.css";
import "./../../css/owl.theme.default.min.css";
import "./../../css/responsive.css";
import "./../../css/style.css";
import "@brainhubeu/react-carousel/lib/style.css";
import { Form } from 'reactstrap'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Trans } from 'react-i18next';

const axios = require('axios').default;

    class Reservas extends Component {
        state = {
            check_in: '',
            check_out: '',
            adults: '',
            children: '',
            email: '',
            info: '',
            show: false,
        }
        handleSubmit(e) {
            e.preventDefault()
                if(this.state !== null){
                    axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=bookNow&check_in='+this.state.check_in + '&check_out='+this.state.check_out + '&adults=' +this.state.adults + '&children=' +this.state.children + '&email=' +this.state.email)
                    .then((response) => {
                        this.setState({
                            info:{response}
                        })
                        })
                    }
                this.resetForm()
            }
        resetForm() {
            this.setState({
            name: '',
            check_in: '',
            check_out: '',
            adults: '',
            children: '',
            email: '',
            })
        }
        handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
            this.setState({info:[param]})
        }
        hiddenAlert = () => {
            this.setState({ show: false });
        };
        render() {
        return(
        <div className="Reservas">
                <section class="travel-box" id="booknow">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="single-travel-boxes">
                                    <div class="desc-tabs" id="desc-tabs">
                                        <div class="tab-content">
                                            <div className="tab-pane active " id="tours" role="tabpanel">
                                                <div class="tab-para">
                                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                                    <div class="row">
                                                        <div class="col-lg-2 col-md-3 col-sm-4">
                                                            <div class="single-tab-select-box">
                                                                <h2><Trans i18nKey="dataentrada">Data Entrada</Trans></h2>
                                                                <div class="travel-check-icon">
                                                                    <input class="form-control" mask="00-00-0000" name="check_in" placeholder="12-08-2019" type="text" value={this.state.check_in} onChange={this.handleChange.bind(this, 'check_in')} required ></input>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-2 col-md-3 col-sm-4">
                                                            <div class="single-tab-select-box">
                                                                <h2><Trans i18nKey="datasaida">Data Saída</Trans></h2>
                                                                <div class="travel-check-icon">
                                                                    <input class="form-control" mask="00-00-0000" name="check_out" placeholder="22-08-2019" type="text" value={this.state.check_out} onChange={this.handleChange.bind(this, 'check_out')} required ></input>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-2 col-md-1 col-sm-4">
                                                            <div class="single-tab-select-box">
                                                                <h2><Trans i18nKey="adultos">Adultos</Trans></h2>
                                                                <div class="travel-select-icon">
                                                                    <select class="form-control" name="adults" value={this.state.adults} onChange={this.handleChange.bind(this, 'adults')} required >
                                                                        <option selected="selected" value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="mais de 2">mais</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-2 col-md-1 col-sm-4">
                                                            <div class="single-tab-select-box">
                                                                <h2><Trans i18nKey="crianças">Crianças</Trans></h2>
                                                                <div class="travel-select-icon">
                                                                    <select class="form-control" name="children" value={this.state.children} onChange={this.handleChange.bind(this, 'children')} required >
                                                                        <option selected="selected" value="0">0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="mais de 2">mais</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-3 col-md-3 col-sm-4">
                                                            <div class="single-tab-select-box">
                                                                <h2><Trans i18nKey="email">Email</Trans></h2>
                                                                <div class="email-check-icon">
                                                                    <input class="form-control" name="email" placeholder="email@email.com" type="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                    <div class="row">
                                                        <div>
                                                            <div className="about-btn travel-mrt-0 pull-right" type="submit">
                                                                <button class="about-view travel-btn" onClick={() => this.state.info !==  '' ? this.setState({ show: true }) : this.setState({ show: false })}><Trans i18nKey="disponibilidade"></Trans></button>
                                                                <SweetAlert
                                                                    show={this.state.show}
                                                                    title="Sucesso"
                                                                    text="Obrigado por nos contactar"
                                                                    onConfirm={this.hiddenAlert}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
        );
    }
}
export default Reservas;