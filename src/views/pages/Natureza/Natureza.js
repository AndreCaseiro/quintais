import React, { Component } from 'react';
import "./../../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './../../components/Footer/index';
import Header from './../../components/Header/index';

class Natureza extends Component {
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
    <div className="Footer"><Footer></Footer></div>
    </div>
    
    );
}
}
export default Natureza;