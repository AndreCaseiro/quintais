import React, { Component } from 'react';

class Alojamento extends Component {
    render() {
    return(
        <section id="home" class="about-us" style={{backgroundImage: "url(http://quintaisdocaneiro.com/assets/images/pages/p1den10pjp1emnbrovp615jbfhvo.JPG)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <div className="container">
            <div className="about-us-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="single-about-us">
                    <div className="about-us-txt">
                      <h2>
                        Galeria
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

    );
}
}
export default Alojamento;