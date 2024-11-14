

import React ,{useState}from 'react';
import banner from "../assets/banner.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FaTimes,FaBars } from "react-icons/fa";
import Vector from "../assets/Vector.png";
import callIcon from "../assets/callIcon.png";
import avatar from "../assets/avatar.png";
import filtericon from "../assets/filtericon.png";
import propertyimage from "../assets/propertyimage.png";
import "./styless.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <div>
      <div className="header-container" style={{ position: "relative" }} id="homepage">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-md-4 px-lg-5 px-2 " style={{ position: "absolute", top: 0, width: "100vw",
          zIndex:"30", }}>
          {/* <div className=""> */}
            <a className="navbar-brand " href="#homepage">
              <div className='d-flex gap-3 align-items-center ps-md-5 ps-5 logo'>
                <img src={Vector} alt="Logo" style={{ width: "40px", height: "40px" }} />
                JustHome
              </div>
            </a>

           
            <button className="navbar-toggler me-5  border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded={isMenuOpen} onClick={handleToggle} aria-label="Toggle navigation">
            {isMenuOpen ? <FaTimes /> : <FaBars />} 
            </button>

           
            <div className="collapse navbar-collapse ul-bg" id="navbarContent">
              <ul className="navbar-nav me-auto ms-3 color-white ul-menu  ps-sm-5 ps-5">
               

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                Home
                </a>
                <ul class="dropdown-menu  border-0 navbar-dropdown bg-dark text-white" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item text-white" href="#home">Action</a></li>
                  <li><a class="dropdown-item text-white" href="#home">Another action</a></li>
                  
                  <li><a class="dropdown-item text-white" href="#home">Something else here</a></li>
                </ul>
              </li>
                      <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                Listings
                </a>
                <ul class="dropdown-menu  border-0 bg-dark" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item text-white" href="#listings">Action</a></li>
                  <li><a class="dropdown-item text-white" href="#listings">Another action</a></li>
                  
                  <li><a class="dropdown-item text-white" href="#listings">Something else here</a></li>
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
              
              {/* Contact & Profile Buttons */}
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
          {/* </div> */}
        </nav>

        {/* Content Section */}
        <div className='container w-sm-150 top-sm  ' style={{left:"7%"}}>
          <div className='d-flex flex-column'>
            <button className=' bg-transparent text-white border align-self-start   p-1  rounded guide-button'>LET US GUIDE YOUR HOME</button>
            <h1 className='fs-md-1  py-3'>Find Your <span style={{ color: "#E7C873" }}>Dream</span> Home.</h1>
            <h6 className='fw-100 header-h6'>From as low as $10 per day with limited time offer discounts</h6>
            <div className='d-flex my-2 mt-md-5 gap-md-5 gap-3'>
              <h6 className='border-bottom border-white'>Sale</h6>
              <h6>Rent</h6>
            </div>

            
            <div className="d-flex  flex-md-row  flex-column flex-lg-row bg-white w-150 w-md-150 h-sm-300 gap-xs-1  gap-sm-1 p-2 gap-md-1 p-md-3">
      
              <div className="d-flex flex-column flex-grow-1 me-auto border-0" style={{ minWidth: "90px" }}>
                <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Keyword</h6>
                <input placeholder="Enter Keyword" className="border-0" style={{ color: "black", fontSize: "0.75rem", width: "100%",outline:"none" }} />
              </div>

            
              <div className="d-flex flex-column flex-grow-1 align-items-start justify-content-md-start" style={{ maxWidth: "100px" }}>
                <h6 className="text-muted mb-1 ms-1" style={{ fontSize: "0.75rem" }}>Type</h6>
                {/* <h5 className="d-flex gap-2 align-items-center justify-content-between" style={{ color: "black", fontSize: "0.75rem" }}>
                  All Type <FontAwesomeIcon icon={faCaretDown} />
                </h5> */}
                <div class="btn-group bg-transparent text-dark border-0">
                <button class="btn btn-secondary btn-sm dropdown-toggle bg-transparent text-dark border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Type
                </button>
 
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#members">Action</a></li>
                  <li><a class="dropdown-item" href="#members">Another action</a></li>
                  
                  <li><a class="dropdown-item" href="#members">Something else here</a></li>
  </ul>
</div>
              </div>

            <div className='d-flex gap-2 flex-column flex-sm-row'>
            <div className="d-flex align-items-center" style={{ minWidth: "70px" }}>
                <button className="border ps-0   p-1 ps-md-3 py-1 py-md-3" style={{ fontSize: "0.75rem", width: "100%" }}>
                  <img src={filtericon} alt="filtericon" style={{ width: "16px", marginRight: "5px" }} />Filter
                </button>
              </div>

              
              <div className="d-flex align-items-center " style={{ minWidth: "50px", minHeight:"10px"}}>
                <button style={{ background: "#E7C873", border: "none", fontSize: "0.85rem", width: "100%" }} className=" p-md-3 p-1">
                  Search
                </button>
              </div> 
            </div>
              
            </div> 
            <div className='d-flex  flex-md-row flex-column align-items-md-center align-items-start text-align-start mt-sm-5 mt-2 gap-4'>
              <img src={propertyimage} alt="propertyimage" className='propertyimage' />
              View Property Type
            </div>
          </div>
        </div>

        <img src={banner} alt="banner-img" className="img-fluid w-100" style={{ height: '100vh', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Header;
