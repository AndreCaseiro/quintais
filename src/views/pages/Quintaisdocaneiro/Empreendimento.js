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

// const getPage = (callback) => {
//   axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=getPage&area=entretenimento')
//           .then(function (response) {
//             // handle success
//             callback(response);
//           })
//           .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//         }
        
//   const renderData =(array) => {
//     console.log('fdp', array);
//     if(!array) return null;
//     return (
//       <div>
//           <p>{array[0].name}</p>
//       </div>
//     );
//   }

//   const handleData = (response) => { 
//     return response;
//   }

const getPage = () => {
  axios.get('http://admin.quintaisdocaneiro.com/api/gets.php?act=getPage&area=entretenimento')
    .then(function (response) {
      // handle success
      handleData(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

const handleData = (response) => {
  console.log(response);
  return response;
}

class Empreendimento extends Component {
  render() {
    console.log('1', getPage());
    console.log('2', getPage());
    console.log('3', getPage());
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
    {handleData()}
    </h1>
    </div>
    <div className="Footer"><Footer></Footer></div>
    </div>
    );

}
}
export default Empreendimento;