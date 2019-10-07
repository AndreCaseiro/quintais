import React, { Component } from 'react';
import "./../../css/style.css";


class Natureza extends Component {
    render() {
    return(
        <React.Fragment>
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
                    <ul class="nav navbar-nav navbar-right">

                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div class="home-border"></div>
            </div>
        </div>
        </header>








        <footer class="footer-copyright">
                <div class="container">
                        <div class="foot-icons ">
                        <ul class="footer-social-links list-inline list-unstyled">
                                    <li><a  target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
                                    <li><a  target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
                                    <li><a  target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
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
export default Natureza;