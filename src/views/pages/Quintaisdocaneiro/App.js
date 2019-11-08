import React, { Component } from 'react';
import "./../../css/style.css";
import Footer from './../../components/Footer/index';
import Header from './../../components/Header/index';
import { Trans } from 'react-i18next';
import vista2 from "./../../css/images/images/vista2.jpg"
import fora from "./../../css/images/images/fora.jpg"
import vista from "./../../css/images/images/vista.jpg"
import interior2 from "./../../css/images/images/interior2.jpg"
import interior from "./../../css/images/images/interior.jpg"
import interior3 from "./../../css/images/images/interior3.jpg"

const sectionStyle = {
	backgroundImage: `url(${vista2})`,
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
						<Trans i18nKey="t5">
							top destination
							</Trans>
						</h2>
						<p>
						<Trans i18nKey="t6">
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
                </div>
              </div>
          </section>
    <section id="blog" class="blog">
			<div class="container">
				<div class="blog-details">
						<div class="gallary-header text-center">
							<h1>
							<Trans i18nKey="t1">
								latest news
								</Trans>
							</h1>
							<p>
							<Trans i18nKey="t2">
								Travel News from all over the world 
								</Trans>
							</p>
						</div>
						<div class="blog-content">
							<div class="row">

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<div class="thumbnail-img">
											<img src="https://spark.adobe.com/page/Chrxj/embed.jpg" alt="blog" className="thumbImage"></img>
											<div class="thumbnail-img-overlay"></div>
										</div>
										<div class="caption">
											<div class="blog-txt">
												<h3>
													<a href="http://www.cm-mirandadocorvo.pt/pt/Default.aspx">
														Miranda do Corvo
													</a>
												</h3>
												<p>
												Terras da Chanfana … onde a Natureza tem outro encanto
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<div class="thumbnail-img">
											<img src="https://i2.wp.com/ncultura.pt/wp-content/uploads/2018/04/capa-8.jpg?fit=1500%2C640&ssl=1" alt="blog" className="thumbImage"></img>
											<div class="thumbnail-img-overlay"></div>
										</div>
										<div class="caption">
											<div class="blog-txt">
												<h3>
													<a href="https://www.cm-coimbra.pt">
														Coimbra
													</a>
												</h3>
												<p>
												A cidade do Conhecimento, Património Mundial da UNESCO
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="col-sm-4 col-md-4">
									<div class="thumbnail">
										<div class="thumbnail-img">
											<img src="https://www.mundoportugues.pt/wp-content/uploads/sites/3/2018/01/camara-municipal-da-lousa-890x593.jpg" alt="blog"></img>
											<div class="thumbnail-img-overlay"></div>
										</div>
										<div class="caption">
											<div class="blog-txt">
												<h3><a href="https://cm-lousa.pt/">Lousã</a></h3>
												<p>
												Património e Natureza. A Serra da Lousã e as suas aldeias de xisto
												</p>
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
