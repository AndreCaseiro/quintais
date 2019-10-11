import React, { Component } from 'react';
import Carousel from "@brainhubeu/react-carousel";
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
import Image1 from "./../../css/images/service/s1.jpg";
import Image2 from "./../../css/images/service/s2.png";
import Image3 from "./../../css/images/service/s3.png";

class Galeria extends Component {
    render() {
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
    <div
          className="App"
          style={{ width: "600px", margin: "auto", padding: "50px" }}
                >
          <Carousel animationSpeed={1500} autoPlay={1000} arrows Infinite>
            <img alt="Image1" src={Image1} />
            <img alt="Image2" src={Image2} />
            <img alt="Image3" src={Image3} />
          </Carousel>
          </div>
    <div className="Footer"><Footer></Footer></div>
    </div>

    );
}
}
export default Galeria;