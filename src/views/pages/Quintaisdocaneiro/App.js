import React, { Component } from 'react';
import "./../../css/style.css";
import Footer from './../../components/Footer/index';
import Header from './../../components/Header/index';
import { Trans } from 'react-i18next';
import portao from "./../../css/images/images/portao.jpg"
import fora from "./../../css/images/images/fora.jpg"
import vista from "./../../css/images/images/vista.jpg"
import interior2 from "./../../css/images/images/interior2.jpg"
import interior from "./../../css/images/images/interior.jpg"
import interior3 from "./../../css/images/images/interior3.jpg"


const sectionStyle = {
	backgroundImage: `url(${portao})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover"
}

  class App extends Component {

    render(){
        return (
          <div className="App">
          <div className="Natureza">
            <div className="Header">
          <Header/>
          <section id="home" class="about-us" style={sectionStyle}>
          <div class="container">
            <div class="about-us-content">
              <div class="row">
                <div class="col-sm-12">
                  <div class="single-about-us">
                    <div class="about-us-txt">
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
        </div>
        <div class="texto">
        <section id="gallery" class="gallery">
			<div class="container">
				<div class="gallery-details">
					<div class="gallary-header text-center">
						<h2 class="t1">
						<Trans i18nKey="t1">
							top destination
							</Trans>
						</h2>
						<p>
						<Trans i18nKey="t2">
							Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.  
							</Trans>
						</p>
					</div>
					<div class="gallery-box">
						<div class="gallery-content">
						  	<div class="filtr-container">
						  		<div class="row">
						  			<div class="col-md-6">
						  				<div class="filtr-item">
											<img src={fora} alt="Casa fora"/>
										</div>
						  			</div>
						  			<div class="col-md-6">
						  				<div class="filtr-item">
											<img src={interior3} alt="vista "/>
										</div>
						  			</div>
                					<div class="col-md-4">
						  				<div class="filtr-item">
											<img src={interior} alt="vista 1"/>
										</div>
					  				</div>
									<div class="col-md-4">
										<div class="filtr-item">
											<img src={interior2} alt="interior "/>
										</div>
									</div>
									<div class="col-md-4">
										<div class="filtr-item">
											<img src={vista} alt="fora 1 "/>
										</div>
									</div>
						  		</div>
						  	</div>
						</div>
					</div>
				</div>
			</div>
		</section>
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
    <section id="blog" class="blog">
			<div class="container">
				<div class="blog-details">
						<div class="gallary-header text-center">
							<h2>
							<Trans i18nKey="t3">
								latest news
								</Trans>
							</h2>
							<p>
							<Trans i18nKey="t4">
								Travel News from all over the world 
								</Trans>
							</p>
						</div>
						<div class="blog-content">
							<div class="row">

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<h2>trending news <span>15 november 2017</span></h2>
										<div class="thumbnail-img">
											<img src="http://quintaisdocaneiro.com/assets/images/news/thumbs370/p1d9imp68q1v6v18e61on912fqned4.jpg" alt="blog"></img>
											<div class="thumbnail-img-overlay"></div>
										
										</div>
									  
										<div class="caption">
											<div class="blog-txt">
												<h3>
													<a href="/">
														Discover on beautiful weather, Fantastic foods and historical place in Prag
													</a>
												</h3>
												<p>
													Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
												</p>
												<a href="/">Read More</a>
											</div>
										</div>
									</div>

								</div>

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<h2>trending news <span>15 november 2017</span></h2>
										<div class="thumbnail-img">
											<img src="http://quintaisdocaneiro.com/assets/images/news/thumbs370/p1d9iuq4ha2v11eg519qirls1uel4.jpg" alt="blog"></img>
											<div class="thumbnail-img-overlay"></div>
										
										</div>
										<div class="caption">
											<div class="blog-txt">
												<h3>
													<a href="/">
														Discover on beautiful weather, Fantastic foods and historical place in india
													</a>
												</h3>
												<p>
													Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
												</p>
												<a href="/">Read More</a>
											</div>
										</div>
									</div>

								</div>

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<h2>trending news <span>15 november 2017</span></h2>
										<div class="thumbnail-img">
											<img src="http://quintaisdocaneiro.com/assets/images/news/thumbs370/p1d9iv245g8bl13ren9h1j4g13a34.jpg" alt="blog"></img>
											<div class="thumbnail-img-overlay"></div>
										
										</div>
										<div class="caption">
											<div class="blog-txt">
												<h3><a href="/">10 Most Natural place to Discover</a></h3>
												<p>
													Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
												</p>
												<a href="/">Read More</a>
											</div>
										</div>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>

		</section>

        </div>
        <div className="Footer"><Footer></Footer></div>
        </div>
          </div>
      );
    }
  }

    export default App;
