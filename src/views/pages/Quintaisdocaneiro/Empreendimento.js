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

const axios = require('axios').default;

class Empreendimento extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: null,
    };
  }
    componentDidMount(){
	  this.getAdminContent();
    }

    getAdminContent = () => {
      if(this.state.info === null){
        console.log(this.state)
        axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=getPage&area=entretenimento')
          .then((response) => {
            this.setState({
              info: Object.values(response.data),
            })
          })
        }
    }


  render() {
    const { info } = this.state;

    return(
      <div className="Header">
      <Header></Header>
      <section id="home" class="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjp1emnbrovp615jbfhvo.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div class="container">
        <div class="about-us-content">
          <div class="row">
            <div class="col-sm-12">
              <div class="single-about-us">
              </div>
            </div>
            <div class="col-sm-0">
              <div class="single-about-us">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="content">
    <h1>
    {info && info.map(obj => (
                <div>
                <p>{obj.title}</p>
                <p>{obj.text}</p>
                </div>
              ))}
    </h1>
    </div>
    <div className="Footer"><Footer></Footer></div>
    </div>
    );

}
}
export default Empreendimento;