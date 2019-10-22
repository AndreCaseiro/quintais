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

const axios = require('axios').default;

class Pages extends Component {
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
        axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=getPage&lang='+this.props.match.params.lang+'&area='+this.props.match.params.area)
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
      <div className="entretenimento">

      <div className="Header"><Header></Header>
      <section id="home" className="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjp1emnbrovp615jbfhvo.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
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
    </div>
    <div className="container mt-5">
    {info && info.map(obj =>
        parse(obj.text),
      )}
    </div>
    <div className="Footer"><Footer></Footer></div>
    </div>
    );

}
}
export default Pages;