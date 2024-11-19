

// import React ,{useState}from 'react';
// import rightimage from "../assets/rightimage.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { FaTimes,FaBars } from "react-icons/fa";
// import Vector from "../assets/Vector.png";
// import callIcon from "../assets/callIcon.png";
// import avatar from "../assets/avatar.png";
// import filtericon from "../assets/filtericon.png";
// import propertyimage from "../assets/propertyimage.png";
// import "./styless.css";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

 
//   const handleToggle = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };
//   return (
    
//       <div className="" style={{ position: "relative" }} id="homepage">
//         <div className='w-100 h-30'>
        
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-md-4 px-lg-5 px-2 " style={{ position: "absolute", top: 0, width: "100vw",
//           zIndex:"30", }}>
    
//             <a className="navbar-brand " href="#homepage">
//               <div className='d-flex gap-3 align-items-center ps-sm-5 ps-3 logo'>
//                 <img src={Vector} alt="Logo" style={{ width: "40px", height: "40px" }} />
//                 JustHome
//               </div>
//             </a>

           
//             <button className="navbar-toggler me-5  border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded={isMenuOpen} onClick={handleToggle} aria-label="Toggle navigation">
//             {isMenuOpen ? <FaTimes /> : <FaBars />} 
//             </button>

           
//             <div className="collapse navbar-collapse ul-bg" id="navbarContent">
//               <ul className="navbar-nav me-auto ms-3 color-white ul-menu  ps-sm-5 ps-5">
               

//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
//                 Home
//                 </a>
//                 <ul className="dropdown-menu  border-0 navbar-dropdown bg-dark text-white" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item text-white" href="#home">Action</a></li>
//                   <li><a className="dropdown-item text-white" href="#home">Another action</a></li>
                  
//                   <li><a className="dropdown-item text-white" href="#home">Something else here</a></li>
//                 </ul>
//               </li>
//                       <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
//                 Listings
//                 </a>
//                 <ul className="dropdown-menu  border-0 bg-dark" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item text-white" href="#listings">Action</a></li>
//                   <li><a className="dropdown-item text-white" href="#listings">Another action</a></li>
                  
//                   <li><a className="dropdown-item text-white" href="#listings">Something else here</a></li>
//                 </ul>
//               </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#members">
//                     Members 
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#blog">
//                     Blog 
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#pages">
//                     Pages 
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#contact">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
              
             
//               <div className="d-flex align-items-md-center  px-sm-5 pe-md-5  ps-5 bottom-menu">
//                 <a href="#contact" className="text-white mx-lg-2 mx-md-0 " style={{ textDecoration: "none" }}>
//                   <div className='d-flex align-items-center justify-content-center text-center'>   <img src={callIcon} alt="callIcon" /> <p className="number mt-3"> +68 68588666</p></div>
                
//                 </a>
//                 <a href="#home" className="text-white mx-2">
//                   <img src={avatar} alt="avatar" />
//                 </a>
//                 <a  href="contact">
//                 <button className="btn text-white border px-lg-2  pe-md-5  py-md-1 px-2 rounded-5 mx-2 addproperty" style={{minWidth:"150px"}}>Add Property</button>
//                 </a>
//               </div>
//             </div>
      
//         </nav>
//         </div>

//         <div className=" container-fluid-lg bg-dark  " style={{ height: "100vh",width:"100vw" }}>
//         <div className='   d-flex    text-white ' style={{left:"27%",}}>
     

//           <div className='d-flex flex-column w-50 '>
//             <button className='  mt-3 bg-transparent text-white border align-self-start   p-md-2 p-1 rounded guide-button'>LET US GUIDE YOUR HOME</button>
//             <h1 className='fs-md-1  py-3'>Find Your <span style={{ color: "#E7C873"}}>Dream</span> Home.</h1>
//             <h6 className='fw-100 header-h6'>From as low as $10 per day with limited time offer discounts</h6>
//             <div className='d-flex my-2 mt-md-4 gap-md-5  gap-2 sale'>
//               <h6 className='border-bottom border-white sale'>Sale</h6>
//               <h6 className='sale'>Rent</h6>
//             </div>

            
//             <div className="d-flex  flex-md-row  flex-column flex-lg-row bg-white   h-sm-300 gap-xs-1  gap-sm-1 p-2 gap-md-1 p-md-3" style={{minWidth:"180px"}}>
//              <div className='d-flex gap-2  flex-sm-row me-auto '>
//               <div className="d-flex flex-column flex-grow-2 me-auto border-0" style={{ minWidth: "90px" ,width:"100%"}}>
//                 <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Keyword</h6>
//                 <input placeholder="Enter Keyword" className="border-0" style={{ color: "black", fontSize: "0.75rem", width: "100%",outline:"none" }} />
//               </div>

            
//               <div className="d-flex flex-column flex-grow-1 align-items-start justify-content-md-start type " style={{ maxWidth: "100px", width:"100%" }}>
//                 <h6 className="text-muted mb-1 ms-1" style={{ fontSize: "0.75rem" }}>Type</h6>
              
//                 <div className="btn-group bg-transparent text-dark border-0">
//                 <button className="btn btn-secondary btn-sm dropdown-toggle bg-transparent text-dark border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   All Type
//                 </button>
 
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#members">Action</a></li>
//                   <li><a className="dropdown-item" href="#members">Another action</a></li>
                                
//                   <li><a className="dropdown-item" href="#members">Something else here</a></li>
//                 </ul>
//               </div>
//               </div>
//               </div>

//             <div className='d-flex gap-2  flex-sm-row ms-md-auto ms-0'>
//             <div className="d-flex align-items-center" style={{ minWidth: "80px", width:"100%" }}>
//                 <button className="border ps-0   p-1 ps-md-3 py-1 py-md-3" style={{ fontSize: "0.75rem", width: "100%" }}>
//                   <img src={filtericon} alt="filtericon" style={{ width: "16px", marginRight: "5px" }} />Filter
//                 </button>
//               </div>

              
//               <div className="d-flex align-items-center " style={{ minWidth: "80px", minHeight:"10px",width:"100%"}}>
//                 <button style={{ background: "#E7C873", border: "none", fontSize: "0.85rem", width: "100%" }} className=" p-md-3 p-1">
//                   Search
//                 </button>
//               </div> 
//             </div>
              
//             </div> 
//             <div className='d-flex  flex-md-row flex-column align-items-md-center align-items-start text-align-start mt-sm-4  mt-4 gap-md-4 gap-2'>
//               <img src={propertyimage} alt="propertyimage" className=' propertyimage' />
//                 <p className='view'> View Property Type</p>
//             </div>
//           </div>
//           <div className=''>
//           <img src={rightimage} alt="banner-img" className="img-fluid" style={{ height: "100vh", objectFit: "cover", width: "100%" ,right:"0",top:"0"}} />
//           </div>
//         </div>


       
//       </div>
      
//     </div>
    
//   );
// };

// export default Header;


import React, { useState } from 'react';
import rightimage from "../assets/rightimage.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes, FaBars } from "react-icons/fa";
import Vector from "../assets/Vector.png";
import callIcon from "../assets/callIcon.png";
import avatar from "../assets/avatar.png";
import filtericon from "../assets/filtericon.png";
import propertyimage from "../assets/propertyimage.png";
import "./styless.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div id="homepage">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark px-md-4 px-lg-5 px-2"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 30,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <a className="navbar-brand" href="#homepage">
          <div className="d-flex gap-3 align-items-center ps-sm-5 ps-3 logo">
            <img src={Vector} alt="Logo" style={{ width: "40px", height: "40px" }} />
            JustHome
          </div>
        </a>

        <button
          className="navbar-toggler me-5 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={isMenuOpen}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="collapse navbar-collapse ul-bg" id="navbarContent">
          <ul className="navbar-nav me-auto ms-5 gap-lg-1 color-white ul-menu ps-sm-5 ps-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul
                className="dropdown-menu border-0 navbar-dropdown bg-dark text-white"
                aria-labelledby="navbarDropdown"
              >
                <li><a className="dropdown-item text-white" href="#home">Action</a></li>
                <li><a className="dropdown-item text-white" href="#home">Another action</a></li>
                <li><a className="dropdown-item text-white" href="#home">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Listings
              </a>
              <ul
                className="dropdown-menu border-0 navbar-dropdown bg-dark text-white"
                aria-labelledby="navbarDropdown"
              >
                <li><a className="dropdown-item text-white" href="#home">Action</a></li>
                <li><a className="dropdown-item text-white" href="#home">Another action</a></li>
                <li><a className="dropdown-item text-white" href="#home">Something else here</a></li>
              </ul>
            </li>
                         <li className="nav-item">
                 <a className="nav-link" href="#members">
                    Members 
                   </a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#blog">
                     Blog                    </a>                 </li>                 <li className="nav-item">
                  <a className="nav-link" href="#pages">
                  Pages 
                  </a>                </li>                 <li className="nav-item">
                   <a className="nav-link" href="#contact">
                    Contact
                  </a>
                 </li>
            {/* Add other nav items similarly */}
          </ul>

          <div className="d-flex align-items-md-center px-sm-5 pe-md-5 ps-5 bottom-menu">
            <a
              href="#contact"
              className="text-white mx-lg-2 mx-md-0"
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex align-items-center justify-content-center text-center">
                <img src={callIcon} alt="callIcon" />
                <p className="number mt-3"> +68 68588666</p>
              </div>
            </a>
            <a href="#home" className="text-white mx-2">
              <img src={avatar} alt="avatar" />
            </a>
            <a href="#contact">
              <button
                className="btn text-white border px-lg-2 py-md-1 px-2 rounded-5 mx-2 addproperty"
                style={{ minWidth: "120px" }}
              >
                Add Property
              </button>
            </a>
          </div>
        </div>
      </nav>
      <div
  className="d-flex container-fluid-lg px-0 bg-dark  h-md-100 h-60 ps-lg-5"
  style={{
    // height: "100vh",
    width: "102vw",
    paddingTop: "75px", 
  }}
>
  <div className="row w-100 h-100 ps-lg-3 justify-content-center align-items-center text-lg-start text-center ">
    {/* Left Section */}
    <div
      className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center   text-white ps-lg-5 my-lg-0 my-5   h-100 "

     
    >
      {/* <div className='text-md-start text-center'>  */}
      <button className="mt-3 bg-transparent text-white border align-self-lg-start align-self-center rounded guide-button text-md-start text-center">
        LET US GUIDE YOUR HOME
      </button>
      <h1 className="fs-md-1 py-3">
        Find Your <span style={{ color: "#E7C873" }}>Dream</span> Home
      </h1>
      <h6 className="fw-100 header-h6">
        From as low as $10 per day with limited time offer discounts
      </h6>
      <div className="d-flex my-2 mt-md-4 gap-md-5 gap-2 sale  text-md-start text-center justify-content-lg-start align-items-lg-start justify-content-center align-items-center">
        <h6 className="border-bottom border-white sale">Sale</h6>
        <h6 className="sale">Rent</h6>
      </div>

      {/* Search Filters */}
      <div
        className="d-flex flex-md-row  flex-lg-row flex-column bg-white h-sm-300 gap-2 p-3 align-self-center align-self-lg-start  me-n5"
        style={{ minWidth: "220px",
          // marginRight: "-100px"
          zIndex:"10" ,width:"55vw"}}
      >
        <div className="d-flex gap-1 flex-sm-row me-auto "  style={{ width: "100%" }}>
          <div
            className="d-flex flex-column flex-grow-2 me-auto border-0"
            style={{ minWidth: "90px", width: "100%" }}
          >
            <h6 className="text-muted mb-1 text-start" style={{ fontSize: "0.75rem" }}>
              Keyword
            </h6>
            <input
              placeholder="Enter Keyword"
              className="border-0 me-auto"
              style={{
                color: "black",
                fontSize: "0.75rem",
                width: "100%",
               
                outline: "none",
              }}
            />
          </div>

          <div
            className="d-flex flex-column flex-grow-1 align-items-start justify-content-md-start   "
            style={{ maxWidth: "100px",width:"100%"}}
          >
            <h6 className="text-muted mb-1 ms-1" style={{ fontSize: "0.75rem" }}>
              Type
            </h6>

            <div className="btn-group bg-transparent text-dark border-0">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle bg-transparent text-dark border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Type
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#members">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#members">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#members">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 flex-sm-row  ms-md-auto ms-0">
          <div className="d-flex align-items-center" style={{ minWidth: "80px", width: "100%" }}>
            <button
              className="border ps-0 p-1 ps-md-3 py-1 py-md-3"
              style={{ fontSize: "0.75rem", width: "100%" }}
            >
              <img
                src={filtericon}
                alt="filtericon"
                style={{ width: "16px", marginRight: "5px" }}
              />
              Filter
            </button>
          </div>

          <div
            className="d-flex align-items-center "
            style={{ minWidth: "80px", minHeight: "10px", width: "100%" }}
          >
            <button
              style={{
                background: "#E7C873",
                border: "none",
                fontSize: "0.85rem",
                width: "100%",
              }}
              className=" p-md-3 p-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-column align-items-center  align-self-center align-self-lg-start mt-4 gap-md-4 gap-2">
        <img src={propertyimage} alt="propertyimage" className="propertyimage" />
        <p className=" mt-3">View Property Type</p>
      </div>
    {/* </div> */}
    </div>

    {/* Right Section */}
    <div className="col-lg-6 col-12  d-none d-lg-block pe-0 me-0">
      <img
        src={rightimage}
        alt="banner-img"
        className="img-fluid"
        style={{
          height: "85vh",
          objectFit: "cover",
          width: "100%", // Adjust to make sure it fills the right half
          right: "0",
          bottom: "0",
        }}
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default Header;
