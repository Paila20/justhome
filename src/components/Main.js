import React from 'react';
import {iconarray} from "../Constants";
import { featurearray } from '../Constants';
import { imagearray1 } from '../Constants';
import { imagearray2 } from '../Constants';
import { expertimagearray } from '../Constants';
import location from "../assets/location.png";
import bedicon from "../assets/bedicon.png";  
import bath from "../assets/bath.png";
import room from "../assets/room.png";
import locationicon2 from "../assets/locationicon2.png";
import bedicon2 from "../assets/bedicon2.png";
import bathicon2 from "../assets/bathicon2.png";
import roomicon2 from "../assets/roomicon2.png";
import propertyimage1 from "../assets/propertyimage1.png";
import propertyimage2 from "../assets/propertyimage2.png";
import propertyimage3 from "../assets/propertyimage3.png";
import propertyimage4 from "../assets/propertyimage4.png";
import propertyimage5 from "../assets/propertyimage5.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import Vector from "../assets/Vector.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import applestore from "../assets/applestore.png";
import linkedin from "../assets/linkedin.png";
import googlepay from "../assets/googlepay.png";
import button1 from "../assets/button1.png";
import button2 from "../assets/button2.png";
import group from "../assets/group.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Main = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: "block",
          background: "transparent",
         
          color: "white",
          position: "absolute",
          bottom: "15px",
          left: "10px",
          borderRadius:"10%",
          top:"100%",
          zIndex: 5,
          margin: 0,
          padding: "5px",
        }}
      >
          <img src={button1} alt="button1" />

      </button>
    );
  };
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          border: "none",
          color: "white",
          position: "absolute",
          top:"100%",
          bottom: "30px",
          left: "80px", 
          zIndex: 5,
          margin: 0,
          padding: "5px",
        }}
      >
          <img src={button2} alt="button2" />

      </button>
    );
  };
    

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
   
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
 
      
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
   
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
 
      
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
       
          slidesToShow: 1,
          slidesToScroll: 1,
         
          
        
      },
    ],
  };


  return (
    <div>
       <section className='container py-4  py-md-5 text-center' id="home">
        <div className='text-center py-4 py-md-5'>
            <h2>How It works? Find a perfect home</h2>
            <h6 className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        </div>
       <div className="  d-flex   justify-content-center align-items-center gap-md-2  gap-5 flex-sm-wrap flex-wrap flex-lg-nowrap pb-md-5 pb-4 ">
       {iconarray.map((card, index) => (
              <div className='card-icon'>
                <div className="card-body  text-center  " key={index}  >
                    <img src={card.src} alt={card.title} className="img-fluid" />
                    <h4 className='pt-3 pb-2 fs-5'>{card.title}</h4>
                    <h6 className=' fw-normal'>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco</h6>
                </div>
                </div>
                ))}
                </div>
       </section>
       <section className='container-fluid-lg bg-category px-1 py-md-5 py-5'>
        <div className='  m-md-5  px-md-5 mx-auto  '>
        <div className='d-flex flex-column  mx-md-0 mx-sm-4  mx-3 '>
            <h2>Featured Categories</h2>
            <div className='d-flex justify-content-between gap-5'>
              <h6>Lorem ipsum dolor sit amet</h6>
              <a href="#home" style={{textDecoration:"none",color:"black"}}>
              <h6>View All Categories <FaArrowRight/> </h6>
              </a>
              

            </div>
           
        </div>
                    <div className=" container  d-flex   gap-3 align-items-center justify-content-center  flex-lg-row  flex-md-wrap flex-wrap flex-lg-nowrap  pb-3 mt-3 text-center mx-auto ">
                {featurearray.map((card, index) => (
                <div className="card text-center border-0 d-flex flex-column align-items-center justify-content-center " key={index} style={{ width: '200px', height: '200px',minWidth:"120px" }}>
                    <img src={card.src} alt={card.title} className="img-fluid" />
                    <h4 className='fs-6'>{card.title}</h4>
                    <h5 className='fs-7 display-3'>{card.desc}</h5>
                </div>
                ))}
                </div>
                </div>

       </section>

       <section className='container-fluid-lg   px-0   py-md-5 py-2 ' id="listings">
        <div className='  mx-md-5  px-md-5   py-5'>
        <div className='d-flex flex-column  mx-md-0 mx-sm-4  mx-3'>
            <h2>Discover Our Best Deals</h2>
            <div className='d-flex justify-content-between gap-5'>
              <h6>Lorem ipsum dolor sit amet</h6>
              <a href="listings" style={{textDecoration:"none",color:"black"}}>
              <h6>View All Categories <FaArrowRight/> </h6>
              </a>

            </div>
           
        </div>
      
  <div className=" row  ">
    <Slider {...settings1} className="  pt-3 pb-md-5 pb-3  h-auto">
      {imagearray1.map((card, index) => (
        <div
          className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center px-0  "
          key={index}
        >
          <div className="card border-0 d-flex flex-column mx-3 " style={{ width: '430px',height:"auto" }}>
            <div className="card-img-top aspect-ratio-1x1">
              <img src={card.src} alt={card.title} className="img-fluid " />
            </div>
            <div className="card-body p-0">
              <div className="d-flex">
                <h2 className="fs-5 mt-3">{card.title}</h2>
              </div>
              <div className="d-flex gap-2 mb-2 align-items-center ">
                <img src={location}  alt="icon5" className=" w-10 h-10" />
               

              

                  <h5 className="fs-6 mt-2">{card.location}</h5>
              
              </div>
              <div className='d-flex justify-content-between border-top border-gray pt-3'>
              <div className="d-flex gap-md-3 gap-0">
                <h5 className="d-flex fs-6 display-1 gap-1 pe-2 border-end border-gray"><img src={bedicon} alt="bedicon"/> 4</h5>
                <h5 className="d-flex fs-6 gap-1  display-1  pe-2 border-end border-gray"><img src={bath} alt="bath"/> 2</h5>
                <h5 className="d-flex fs-6 display-1  gap-1"><img src={room} alt="room"/> 450</h5>
              </div>
              <h4 className="fs-6" style={{color:"red"}}>{card.cost}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
</section>
<section className='container-fluid-lg p-2 p-sm-4  mx-md-5 mx-2 my-3 rounded-3 ' style={{background:"#E7C873"}}>
 <div className='d-flex justify-content-between   align-items-center   flex-column flex-lg-row gap-5 py-5 px-lg-5 p-1'>
  <div className='ps-lg-3 ps-0 ms-0 ms-lg-3 text-md-start text-center'>
    <h2>Take a look at our numbers</h2>
    <h6>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h6>

  </div>
  <div className='d-flex gap-md-3  gap-2 pe-lg-3  me-lg-3 flex-md-row flex-column text-md-start text-center'>
   
   <div className='d-flex flex-column '>
    <h3>99%</h3>
    <h6>Customer satisfaction</h6>
   </div>
   <div className='d-flex flex-column ' >
    <h3>50M+</h3>
    <h6>In property sales</h6>
   </div>
   <div className='d-flex flex-column '>
    <h3>2,600+</h3>
    <h6>Successful sales</h6>
   </div>
  </div>
 </div>
</section>
<section className='container-fluid-lg   px-1 ' id="blog">
        <div className='  m-md-5 px-md-5  pt-5 '>
        <div className='d-flex flex-column  mx-md-0 mx-sm-4  mx-3'>
            <h2>Find Properties in These Cities</h2>
            <div className='d-flex justify-content-between gap-5'>
              <h6>Lorem ipsum dolor sit amet</h6>
              <a href="pages" style={{textDecoration:"none",color:"black"}}>
              <h6>View All Categories <FaArrowRight/> </h6>
              </a>
              

            </div>
            <div className='d-flex gap-4 flex-column flex-lg-row justify-content-center align-items-center mt-3 text-center'>
              <div>
                <img src={propertyimage1} alt="propertyimage1" className='img-fluid rounded-3'/>
              </div>
              <div className='d-flex flex-column gap-4'>
                <img src={propertyimage2} alt="propertyimage2" className='img-fluid rounded-3'/>
                <img src={propertyimage3} alt="propertyimage3" className='img-fluid rounded-3'/>
              </div>
              <div className='d-flex flex-column gap-4'>
                <img src={propertyimage4} alt="propertyimage4" className='img-fluid rounded-3'/>
                <img src={propertyimage5} alt="propertyimage5" className='img-fluid rounded-3'/>
              </div>
            </div>
           
        </div>
       
     
      </div>
      <div className='my-md-4 text-center pt-5 pb-5 my-1 '>
        <h4>Thousands of worlds leading companies trust Space</h4>
        <div className=' container mt-5 d-flex gap-5 justify-content-center align-items-center  flex-lg-row flex-wrap mb-4 text-center '>
        <img src={image10} alt="image10" className='img-fluid '/>
        <img src={image11} alt="image11" className='img-fluid mx-4'/>
        <img src={image12} alt="image12" className='img-fluid mx-4'/>
        <img src={image13} alt="image13" className='img-fluid mx-4'/>
        <img src={image14} alt="image14" className='img-fluid mx-4'/>
        <img src={image15} alt="image15" className='img-fluid '/>
        </div>
        </div>
        </section>
        <section className='container-fluid-lg  px-1 py-5' id="pages" style={{background:"#1F4B43",color:"white",paddingTop:"50px"}}>
        <div className='  m-md-5 px-md-5 py-md-1 py-3'>
        <div className='d-flex flex-column   mx-md-0 mx-sm-4  mx-3'>
            <h2>Discover Our Best Deals</h2>
            <div className='d-flex justify-content-between gap-5'>
              <h6>Lorem ipsum dolor sit amet</h6>
              <a href="pages" style={{textDecoration:"none",color:"white"}}>
              <h6>View All Categories <FaArrowRight/> </h6>
              </a>
              

            </div>
           
        </div>
      
  <div className=" row ">
    <Slider {...settings} className="  pt-3 pb-5 border-0 h-auto carousel2"  style={{background:"#1F4B43",color:"white",border: "none", boxShadow: "none"}}>
      {imagearray2.map((card, index) => (
        <div
          className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center " 
          key={index}
        >
          <div className="card card-bg  d-flex flex-column mx-3 border-0" style={{ width: '400px',height:"auto"}}>
            <div className="card-img-top aspect-ratio-1x1"  style={{background:"#1F4B43",color:"white"}}>
              <img src={card.src} alt={card.title} className="img-fluid " />
            </div>
            <div className="card-body p-0 border-0"  style={{background:"#1F4B43",color:"white"}}>
              <div className="d-flex mt-3">
                <h2 className="fs-6 fw-medium">{card.title}</h2>
              </div>
              <div className="d-flex gap-2 mb-2 align-items-center">
                <img src={locationicon2}  alt="icon5" className="img-fluid" />
                
                  <h6 className="fs-7 fw-light mt-1">{card.location}</h6>
              
              </div>
              <div className='d-flex justify-content-between align-items-center border-top border-gray pt-3'>
              <div className="d-flex gap-1">
                <h5 className="d-flex fs-7 display-1 gap-1 pe-2 border-end border-gray align-items-center"><img src={bedicon2} alt="bedicon" className="img-fluid"/> 4</h5>
                <h5 className="d-flex fs-7 gap-1  display-1  pe-2 border-end border-gray align-items-center"><img src={bathicon2} alt="bath" className="img-fluid"/> 2</h5>
                <h5 className="d-flex fs-7 display-1  gap-1 align-items-center"><img src={roomicon2} alt="room" className="img-fluid"/> 450</h5>
              </div>
              <h6 className="fs-7 fw-light" >{card.cost}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
</section>
<section className='container  py-md-5 py-2 text-center ' id="members">
  <div className='d-flex flex-column justify-content-center align-items-center py-5'>
        <div className='text-center pb-4'>
            <h2>Meet Our Team Of Experts</h2>
            <h6 className='fs-6 display-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        </div>
       <div className="  d-flex   gap-4 flex-column flex-lg-row flex-wrap flex-lg-nowrap  mx-5  ">
       {expertimagearray.map((card, index) => (
                <div className="card-body d-flex flex-column text-start" key={index}>
                    <img src={card.src} alt={card.title} className="img-fluid rounded-3" />
                    <h4 className='pt-3'>{card.title}</h4>
                    <h5 className='fs-6 display-3'>{card.desc}</h5>
                </div>
                ))}
                </div>
      </div>
       </section>

      <section className='container-fluid-lg  ' style={{background: "#FFF8F6"}}>
        <div className=' row   '>
          <div className='col-lg-6'>
            <img src={image16} alt="image16" className='img-fluid '/>
          </div>
          <div className=' col-lg-5   col-sm-10 col-md-10 col-12 d-flex flex-column gap-3 justify-content-center mx-auto py-sm-5  py-3 mt-4  px-4 px-lg-0 px-sm-2 px-md-5 ' >
            <div className='  d-flex flex-column px-sm-5 px-3 px-lg-0 '>
            <h2>Why You Should Work
               With Us</h2>
            <h6 className='fs-6 '>Pellentesque egestas elementum egestas facilisis sem. Velit nunc egestas ut morbi. Leo id nibh eget fermentum massa pretium. Mi mauris nulla aliquam ut mauris nunc.</h6>
            </div>
            <div className='d-flex gap-3 px-sm-5 px-3 px-lg-0'>
              <div  className='col-lg-6'>
               <h4>Buy or Rent Homes</h4>
               <h6>We sell your home at the best market price and very quickly as well</h6>
               </div>
               <div className='col-lg-6'>
                <h4>Trusted by Thousands</h4>
                <h6>We offer you free consultancy to get aloan from your home</h6>
               </div>
           
            </div>
            <div>
              <a href="#homepage">
            <button className='rounded border-0 px-3 py-2 mx-sm-5 mx-3 mx-lg-0 mb-4  ' style={{background:"#E7C873"}}>Learn More <FaArrowRight/></button>
            </a>
            </div>
           
          </div>
    
        </div>
      </section>
      


<section className="container-fluid-lg py-5" style={{ background: "#1A1A1A" }}>
  <div className='container'>
      <div className="row">
        <div className="col-lg-6  col-md-10 co-12 d-flex flex-column gap-5 m-auto  px-4 px-sm-4 px-md-5  text-start pt-lg-0 py-3 mx-md-auto ">
          <Slider {...settings2} className="carousel3">
       
            <div className="carousel-item mb-4">
              <div className="d-flex justify-content-between align-items-center gap-5">
                <div className="d-flex gap-3 align-items-center justify-content-start">
                  <img src={image9} alt="profile" className="img-fluid" />
                  <div className="text-white">
                    <h4>Cameron Williamson</h4>
                    <h6>Designer</h6>
                  </div>
                </div>
                <div className="mt-3 mt-md-0">
                  <img src={group} alt="group icon" />
                </div>
              </div>
              <h5 className="text-white mt-4 fs-6 me-0 me-md-5">
                Searches for multiplexes, property comparisons, and the loan estimator. Works great.
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </h5>
            </div>

          
            <div className="carousel-item mb-4">
              <div className="d-flex justify-content-between align-items-center gap-5">
                <div className="d-flex gap-3 align-items-center justify-content-start">
                  <img src={image9} alt="profile" className="img-fluid" />
                  <div className="text-white">
                    <h4>Alex Johnson</h4>
                    <h6>Project Manager</h6>
                  </div>
                </div>
                <div className="mt-3 mt-md-0">
                  <img src={group} alt="group icon" />
                </div>
              </div>
              <h5 className="text-white mt-4 fs-6 me-0 me-md-5">
                Project management and task tracking become easy. Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore.
              </h5>
            </div>

         
          </Slider>
        </div>

   
        <div className="col-lg-6 col-12 text-center py-md-5 pt-5 pb-3">
          <img src={image17} alt="main illustration" className="img-fluid" />
        </div>
      </div>
      </div>
    </section>


      <section className="container-fluid-lg pt-md-5 pt-0 mt-5">
  <div>
    <h1 className="text-center">Hove More Questions?</h1>
    <h6 className="text-center fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
  </div>
  <div className="row justify-content-center pb-md-5 pb-0">
  <div className="col-lg-6 col-11 "> 
  <div className="accordion border-0  mx-auto mt-4 mb-5 " id="accordionExample">
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button fs-5 fw-bold text-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          What methods of payments are supported?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </div>
      </div>
    </div>
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed fs-5 fw-bold text-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Can I cancel at any time?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </div>
      </div>
    </div>
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed fs-5 fw-bold text-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          How do I get a receipt for my purchase?
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </div>
      </div>
    </div>
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed fs-5 fw-bold text-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Which license do I need?
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </div>
      </div>
    </div>
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed fs-5 fw-bold text-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          How do I get access to a theme I purchased?
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className='container-fluid-lg p-md-5 py-5 px-md-5 px-2 ' style={{background:"#FFF8F6"}}>
    <div className='d-flex justify-content-md-between text-center text-lg-start align-items-center p-md-5 mx-5  flex-lg-row flex-column gap-md-5 gap-2'>
          <div>
            <h2>Become a Real Estate Agent</h2>
            <h5>We only work with the best companies around the globe</h5>
          </div>
          <a href="#homepage" >
          <button className='rounded border-0 px-3 py-2 ' style={{background:"#E7C873"}}>Register Now <FaArrowRight/></button>
          </a>
    </div>
   </div>
</section>

<section className="container-fluid px-md-5 px-1 pt-4 pt-sm-0 " style={{ background: "#1F4B43", color: "white" }} id="contact">
      <div className="d-flex flex-column px-md-5 px-2 ">
        <div className="d-flex flex-wrap justify-content-md-between  border-bottom border-light  justify-content-center align-items-center gap-3">
          <div className="d-flex gap-3">
            <img src={Vector} alt="logo" className="img-fluid" />
            <h2>JustHome</h2>
          </div>
          <div className="d-flex align-items-center gap-4">
            <span className='d-flex flex-column pe-4' style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>FollowUs</span>
            <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" className="img-fluid" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.twitter.com/">
            <img src={twitter} alt="twitter" className="img-fluid" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" className="img-fluid" style={{ width: "24px", height: "24px" }} />

            </a>
            <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="linkedin" className="img-fluid" style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-lg-nowrap gap-5 mx-auto my-5 pb-5 border-bottom border-light justify-content-center " id="contact">
          <div className="flex-grow-1">
            <h3 className="fs-5 " style={{color:"gray"}}>Subscribe</h3>
            <div className="d-flex justify-content-between  pb-2">
              <input placeholder='Your email' className=" border-0 text-white input-email"  style={{ background: "#1F4B43", color: "white",outline:"none" }}/>
              <button className=" d-flex flex-row border-0 rounded-4 p-2 px-3  text-white align-items-center gap-1" style={{ background:" rgb(45, 79, 69)",opacity:"5", minWidth:"50px" }}>
                Send <FaArrowRight />
              </button>
            </div>
            <h4 className="fs-6 display-1 border-top border-gray pt-3">Subscribe to our newsletter to receive our weekly feed</h4>
          </div>
        
          <div  className='d-flex flex-column gap-3 flex-grow-1'>
            <h3 className=' fs-5 ' style={{color:"gray"}}> Discover</h3>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1' >Miami</h4>
            </a>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>NewYork</h4>
            </a>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>Chicago</h4>
            </a>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>Florida</h4>
            </a>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>Los Angeles</h4>
            </a>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>San Deiugo</h4>
            </a>
          </div>
          <div className=' d-flex flex-column gap-3 flex-grow-1'>
            <h3 className=' fs-5 ' style={{color:"gray"}}>Quick Links</h3>
            <a href="#home" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>About</h4>
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>Contact</h4>
            </a>
            <a href="#blog" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>FAQ's</h4>
            </a>
            <a href="#blog" style={{ textDecoration: "none", color: "white" }}>
            <h4 className='fs-6 display-1'>Blog</h4>
            </a>
            
            <h4 className='fs-6 display-1' >Pricing Plans</h4>
            

            <h4 className='fs-6 display-1'>Privacy Policy</h4>
          
           
            <h4 className='fs-6 display-1'>Terms & Conditions</h4>
            
          </div>


          <div className="d-flex flex-column gap-3 flex-grow-1">
            <h3 className="fs-5 " style={{color:"gray"}}>Contact Us</h3>
            <a href="mailto:rajarajeswari169@gmail.com"  style={{ textDecoration: "none", color: "white" }}>
            <h4 className="fs-6 display-1">hi@justhome.com</h4>
            </a>
            <a href="mailto:rajarajeswari169@gmail.com"  style={{ textDecoration: "none", color: "white" }}>
            <h4 className="fs-6 display-1">(123) 456-7890</h4>
            </a>
          </div>

          <div className="d-flex flex-column gap-3 flex-grow-1">
            <h3 className="fs-5 " style={{color:"gray"}}>Our Address</h3>
            <h4 className="fs-6 display-1">99 Fifth Avenue, 3rd floor</h4>
            <h4 className="fs-6 display-1">San Francisco, CA 1980</h4>
          </div>

          <div className="d-flex flex-column gap-3 flex-grow-1">
            <h3 className="fs-5 " style={{color:"gray"}}>Get The App</h3>
            <a href="https://www.apple.com/in/store">
            <img src={applestore} alt="applestore" className="img-fluid" />
            </a>
            <a href="https://play.google.com/store/games?device=windows">
            <img src={googlepay} alt="googlepay" className="img-fluid" />
            </a>
          </div>
        </div>

        <div className="text-center pb-5">
          <h4 className="fs-6 display-1">Copyright &copy; 2024 JustHome</h4>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Main
