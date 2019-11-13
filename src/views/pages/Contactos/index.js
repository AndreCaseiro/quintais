import React, { Component } from 'react';
import './../../components/Footer/index'
import './../../components/Header/index'
import Footer from './../../components/Footer/index';
import Header from './../../components/Header/index';
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
import { Trans } from 'react-i18next';

const axios = require('axios').default;

class Contactos extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    text: '',
  }

  handleSubmit(e) {
    e.preventDefault()
        if(this.state !== null){
            axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=contacto&name='+this.state.name + '&subject='+this.state.subject + '&text=' +this.state.text + '&email=' +this.state.email)
            .then((response) => {
                this.setState({
                    info: Object.values(response.data),
                })
                })
            }
        this.resetForm()
    }
resetForm() {
    this.setState({
    name: '',
    email: '',
    subject: '',
    text: '',
    })
}
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
}
    render() {
    return(
      <div className="Contactos">
      <div className="Header">
      <Header></Header>
      <section id="home" className="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjp1emnbrovp615jbfhvo.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div className="container">
        <div className="about-us-content">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-about-us">
                <div className="about-us-txt">
                  <h2>
                    Contactos
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-0">
              <div className="single-about-us">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="gallery-details">
      
        <div className="gallary-header text-center">
          <h2><Trans i18nKey="Contactus">CONTACTE-NOS</Trans> </h2>
        </div>
      <div className="row">
      
        <div className="col-md-8">
        <Form className="contactForm" onSubmit={this.handleSubmit.bind(this)}>
              <input className="form-control" name="name" placeholder="Nome..." type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required ></input>
              <br></br>
              <input className="form-control" name="email" placeholder="Email..." type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required ></input>
              <br></br>
              <input className="form-control" name="subject" placeholder="Assunto..." type="text" value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} required ></input>
              <br></br>
              <textarea className="form-control" name="text" placeholder="Como o podemos ajudar?" type="text" value={this.state.text} onChange={this.handleChange.bind(this, 'text')} required ></textarea>
              <br></br>
                <div className="about-btn travel-mrt-0 pull-right" type="submit">
                    <button class="about-view travel-btn"> Ver Disponibilidade </button>
                </div>
              <br></br>
              <br></br>
        </Form>
      </div>
      <div className="col-sm-4">
                <div className="single-footer-item text-center">
                  <div className="single-footer-txt text-left">
                    <p><b><Trans i18nKey="c1">Telefone:</Trans></b>(+351) 239 055 164</p>
                    <p><b><Trans i18nKey="c2">Telemóvel:</Trans></b> (+351) 964 939 058</p>
                    <p className="foot-email"><b><Trans i18nKey="c3">Email: </Trans></b><a href=" mailto:info@quintaisdocaneiro.com"> info@quintaisdocaneiro.com</a></p>
                    <p><b><Trans i18nKey="c4">GPS:</Trans></b> 40.17782, -8.319366</p>
                    <p><b><Trans i18nKey="c5">Morada:</Trans></b><br></br>Caneiro dos Braços - Semide - 3220-423</p>
                    <p>Miranda do Corvo, Portugal</p>
                    <br></br>
                    <br></br>
                    <span className="spanrnt">Registo Nacional de Turismo nº 8675 - Casa de Campo</span>
                  </div>
                </div>
              </div>
      </div>
      </div>
    </div>
    <div className="Footer"><Footer></Footer></div>
    </div>
</div>
    );
}
}
export default Contactos;