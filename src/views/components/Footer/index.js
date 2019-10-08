import React, { Component } from 'react';
import "./../../css/animate.css";
import "./../../css/bootsnav.css";
import "./../../css/bootstrap.min.css";
import "./../../css/datepicker.css";
import "./../../css/font-awesome.min.css";
import "./../../css/hover-min.css";
import "./../../css/owl.theme.default.min.css";
import "./../../css/responsive.css";
import "./../../css/style.css";

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
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
export default Footer;