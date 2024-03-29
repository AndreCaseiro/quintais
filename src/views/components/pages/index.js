import React, { Component } from 'react';
import '../../components/Footer/index'
import '../../components/Header/index'
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
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
import parse from 'html-react-parser';
import Reservas from "./../../pages/Reservas"
import Caminho from "./../../pages/Caminho"
import empreendimento from "./../../css/images/images/empreendimento.jpg"
import ErrorBoundary from '../../components/Error/index'

const axios = require('axios').default;

const sectionStyle = {
	backgroundImage: `url(${empreendimento})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover"
}

const pages = ['Empreendimento', 'localizacao', 'comodidades', 'veralojamento', 'actividades', 'ocaminho', 'reservas'];

class Pages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: null,
    };

    if(!pages.includes(this.props.match.params.area)) {
      window.location.href = "/"
    }
  }

    componentDidMount(){
    this.getAdminContent();
    }

    getAdminContent = () => {
      if(this.state.info === null){
        axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=getPage&lang='+this.props.match.params.lang+'&area='+this.props.match.params.area)
          .then((response) => {
            this.setState({
              info: Object.values(response.data),
            })
          })
        }
    }
    Error(){
    }
    showSettings (event) {
      event.preventDefault();
    }
    render() {
    const { info } = this.state;
    
    return(
      <ErrorBoundary>
      <div className="entretenimento">
      <div className="Header"><Header></Header>
      <section id="home" className="about-us" style={sectionStyle}>
      <div className="container">
        <div className="about-us-content">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-about-us">
              <div className="about-us-txt">
                  <h2>
                  {info && info.map(obj =>
                        parse(obj.title),
                    )}
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
    {this.props.match.params.area === 'reservas' && <Reservas></Reservas>}
    </div>
    <div className="container mt-5 static">
    {info && info.map(obj =>
        parse(obj.text),
      )}
      {this.props.match.params.area === 'Empreendimento'}
      <br></br>
      <br></br>
    </div>
    {this.props.match.params.area === 'ocaminho' && <Caminho></Caminho>}
    <div className="Footer"><Footer></Footer></div>
    </div>
    </ErrorBoundary>
    );

}
}
export default Pages;