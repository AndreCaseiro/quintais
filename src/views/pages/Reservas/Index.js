import React, { Component } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

import './reservas.css';
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
import Image1 from "./../../css/images/gallary/g1.jpg";
import Image2 from "./../../css/images/gallary/g2.jpg";
import Image3 from "./../../css/images/gallary/g3.jpg";
import DropdownItem from 'react-bootstrap/DropdownItem';


class Reservas extends Component {
    render() {
    return(
        <React.Fragment>
        <div className="Reservas">
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
                    <Dropdown>
                    <ul class="nav navbar-nav navbar-right">
                    <li>
                    <DropdownItem tag={Link} to="/">Home</DropdownItem>
                  </li>
                  <li>
                  <Link to="/Alojamento">Alojamento</Link></li>
                    <li>
                      <Link to="/Natureza">Natureza</Link>
                    </li>
                    <li>
                      <Link to="/Reservas">Reservas</Link>
                    </li>
                    </ul>
                    </Dropdown>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

        <section id="home" class="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjp1emnbrovp615jbfhvo.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div class="container">
        <div class="about-us-content">
          <div class="row">
            <div class="col-sm-12">
              <div class="single-about-us">
                <div class="about-us-txt">
                  <h2>
                    Explore the Beauty of the Beautiful World 

                  </h2>
                  <div class="about-btn">
                    <button  class="about-view">
                      explore now
                    </button>
                  </div>
                </div>
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
          <Carousel arrows infinite>
            <img alt="Image1" src={Image1} />
            <img alt="Image2" src={Image2} />
            <img alt="Image3" src={Image3} />
          </Carousel>
          </div>
        </div>
          <section id="subs" className="subscribe">
              <div className="container">
                <div className="subscribe-title text-center">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h2>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
                  </p>
                </div>
              </div>
          </section>
            <footer class="footer-copyright">
                <div class="container">
                        <div class="foot-icons ">
                        <ul class="footer-social-links list-inline list-unstyled">
                                    <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                    <p>&copy; 2019 <a href="http://www.quintaisdocaneiro.com">Quintais Do Caneiro</a>. All Right Reserved</p>

                            </div>
                        <div id="scroll-Top">
                        <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                        </div>
                        </div>
                    </footer>
                    </React.Fragment>
    );
}
}
export default Reservas;