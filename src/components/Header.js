

import React ,{useState}from 'react';
import banner from "../assets/banner.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaTimes,FaBars } from "react-icons/fa";
import Vector from "../assets/Vector.png";
import callIcon from "../assets/callIcon.png";
import avatar from "../assets/avatar.png";
import filtericon from "../assets/filtericon.png";
import propertyimage from "../assets/propertyimage.png";
import "./styless.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <div>
      <div className="header-container" style={{ position: "relative" }} id="homepage">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-md-4 px-lg-5 px-2 " style={{ position: "relative", top: 0, width: "100vw",
          zIndex:"30", }}>
    
            <a className="navbar-brand " href="#homepage">
              <div className='d-flex gap-3 align-items-center ps-sm-5 ps-3 logo'>
                <img src={Vector} alt="Logo" style={{ width: "40px", height: "40px" }} />
                JustHome
              </div>
            </a>

           
            <button className="navbar-toggler me-5  border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded={isMenuOpen} onClick={handleToggle} aria-label="Toggle navigation">
            {isMenuOpen ? <FaTimes /> : <FaBars />} 
            </button>

           
            <div className="collapse navbar-collapse ul-bg" id="navbarContent">
              <ul className="navbar-nav me-auto ms-3 color-white ul-menu  ps-sm-5 ps-5">
               

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                Home
                </a>
                <ul className="dropdown-menu  border-0 navbar-dropdown bg-dark text-white" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white" href="#home">Action</a></li>
                  <li><a className="dropdown-item text-white" href="#home">Another action</a></li>
                  
                  <li><a className="dropdown-item text-white" href="#home">Something else here</a></li>
                </ul>
              </li>
                      <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                Listings
                </a>
                <ul className="dropdown-menu  border-0 bg-dark" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white" href="#listings">Action</a></li>
                  <li><a className="dropdown-item text-white" href="#listings">Another action</a></li>
                  
                  <li><a className="dropdown-item text-white" href="#listings">Something else here</a></li>
                </ul>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="#members">
                    Members 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pages">
                    Pages 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              
             
              <div className="d-flex align-items-md-center  px-sm-5 pe-md-5  ps-5 bottom-menu">
                <a href="#contact" className="text-white mx-lg-2 mx-md-0 " style={{ textDecoration: "none" }}>
                  <div className='d-flex align-items-center justify-content-center text-center'>   <img src={callIcon} alt="callIcon" /> <p className="number mt-3"> +68 68588666</p></div>
                
                </a>
                <a href="#home" className="text-white mx-2">
                  <img src={avatar} alt="avatar" />
                </a>
                <button className="btn text-white border px-lg-2  pe-md-5  py-md-1 px-2 rounded-5 mx-2 addproperty" style={{minWidth:"150px"}}>Add Property</button>
              </div>
            </div>
      
        </nav>

     
        <div className=' container    text-white content w-100  ' style={{left:"7%",width:"50vw"}}>
     

          <div className='d-flex flex-column'>
            <button className='  mt-3 bg-transparent text-white border align-self-start   p-md-2 p-1 rounded guide-button'>LET US GUIDE YOUR HOME</button>
            <h1 className='fs-md-1  py-3'>Find Your <span style={{ color: "#E7C873"}}>Dream</span> Home.</h1>
            <h6 className='fw-100 header-h6'>From as low as $10 per day with limited time offer discounts</h6>
            <div className='d-flex my-2 mt-md-4 gap-md-5  gap-2 sale'>
              <h6 className='border-bottom border-white sale'>Sale</h6>
              <h6 className='sale'>Rent</h6>
            </div>

            
            <div className="d-flex  flex-md-row  flex-column flex-lg-row bg-white   h-sm-300 gap-xs-1  gap-sm-1 p-2 gap-md-1 p-md-3" style={{width:"50vw",minWidth:"180px"}}>
             <div className='d-flex gap-2  flex-sm-row me-auto w-100'>
              <div className="d-flex flex-column flex-grow-2 me-auto border-0" style={{ minWidth: "90px" ,width:"100%"}}>
                <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Keyword</h6>
                <input placeholder="Enter Keyword" className="border-0" style={{ color: "black", fontSize: "0.75rem", width: "100%",outline:"none" }} />
              </div>

            
              <div className="d-flex flex-column flex-grow-1 align-items-start justify-content-md-start type " style={{ maxWidth: "100px", width:"100%" }}>
                <h6 className="text-muted mb-1 ms-1" style={{ fontSize: "0.75rem" }}>Type</h6>
              
                <div className="btn-group bg-transparent text-dark border-0">
                <button className="btn btn-secondary btn-sm dropdown-toggle bg-transparent text-dark border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Type
                </button>
 
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#members">Action</a></li>
                  <li><a className="dropdown-item" href="#members">Another action</a></li>
                                
                  <li><a className="dropdown-item" href="#members">Something else here</a></li>
                </ul>
              </div>
              </div>
              </div>

            <div className='d-flex gap-2  flex-sm-row ms-md-auto ms-0'>
            <div className="d-flex align-items-center" style={{ minWidth: "80px", width:"100%" }}>
                <button className="border ps-0   p-1 ps-md-3 py-1 py-md-3" style={{ fontSize: "0.75rem", width: "100%" }}>
                  <img src={filtericon} alt="filtericon" style={{ width: "16px", marginRight: "5px" }} />Filter
                </button>
              </div>

              
              <div className="d-flex align-items-center " style={{ minWidth: "80px", minHeight:"10px",width:"100%"}}>
                <button style={{ background: "#E7C873", border: "none", fontSize: "0.85rem", width: "100%" }} className=" p-md-3 p-1">
                  Search
                </button>
              </div> 
            </div>
              
            </div> 
            <div className='d-flex  flex-md-row flex-column align-items-md-center align-items-start text-align-start mt-sm-4  mt-4 gap-md-4 gap-2'>
              <img src={propertyimage} alt="propertyimage" className=' propertyimage' />
                <p className='view'> View Property Type</p>
            </div>
          </div>
        </div>

        <img src={banner} alt="banner-img" className="img-fluid w-100" style={{ height: '100vh', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Header;
