
// import React, { useState } from 'react';
// import banner from "../assets/banner.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FaTimes } from "react-icons/fa";
// import Vector from "../assets/Vector.png";
// import callIcon from "../assets/callIcon.png";
// import avatar from "../assets/avatar.png";
// import filtericon from "../assets/filtericon.png";
// import propertyimage from "../assets/propertyimage.png"
// import "./styless.css";

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false); 

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen); 
//   };

//   return (
//     <div >
//     <div className="header-container" style={{ position: "relative" }} id="homepage">
//       {/* Navbar */}
//       {!isMenuOpen ? (
//         <nav className="navbar navbar-expand-lg navbar-dark pb-5" style={{ position: "absolute", top: 0, width: "80%", left: "10%", right: "10%" }}>
//           <div className="container ">
//             <a className="navbar-brand" href="#homepage">
//               <div className='d-flex gap-2 align-items-center'>
//                 <img src={Vector} alt="Logo" style={{ width: "50px", height: "50px"}}/>
//                 JustHome
//               </div>
//             </a>

    
//             <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>


//             <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
//               <ul className="navbar-nav mx-auto color-white">
//                 <li className="nav-item">
//                   <a className="nav-link fs-6 " href="#home">
//                     Home <FontAwesomeIcon icon={faCaretDown} />
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#listings">
//                     Listings <FontAwesomeIcon icon={faCaretDown} />
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#members">Members <FontAwesomeIcon icon={faCaretDown} />
                  
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#blog">Blog  <FontAwesomeIcon icon={faCaretDown} />
                 
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#pages">Pages  <FontAwesomeIcon icon={faCaretDown} />
                 
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#contact">Contact</a>
//                 </li>
//               </ul>
       
//               <div className="d-flex align-items-center">
//                 <a href="#contact" className="text-white mx-2"  style={{ textDecoration: "none" }}>
                 
//                   <img src={callIcon} alt="callIcon"/> +68 68588666
//                 </a>
//                 <a href="#home" className="text-white mx-2">
//                 <img src={avatar} alt="avatar"/>
//                 </a>
//                 <button className="btn text-white border px-3 rounded-5 mx-2">Add Property</button>
//               </div>
//             </div>
//           </div>
//         </nav>
        
//       ) : (
       
        

//         <div
//   className="container-fluid text-white"
//   style={{
//     height: "100vh",
//     width: "100vw",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: 10,
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "black",
//   }}
// >
//   <div className="d-flex justify-content-between align-items-center pt-2 px-5 mx-5">
//     <a className="navbar-brand" href="#homepage">
//     <div className='d-flex gap-2 align-items-center'>
//                 <img src={Vector} alt="Logo" style={{ width: "50px", height: "50px"}}/>
//                 JustHome
//     </div>
//     </a>
//     <FaTimes onClick={toggleMenu} />
//   </div>
//   <ul className="list-unstyled w-100 p-4">
//     <li className=" w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#home"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Home</span>
//         <FontAwesomeIcon icon={faCaretDown} />
//       </a>
//     </li>
//     <li className="my-3 w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#listings"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Listings</span>
//         <FontAwesomeIcon icon={faCaretDown} />
//       </a>
//     </li>
//     <li className="my-3 w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#members"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Members</span>
//         <FontAwesomeIcon icon={faCaretDown} />
//       </a>
//     </li>
//     <li className="my-3 w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#blog"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Blog</span>
//         <FontAwesomeIcon icon={faCaretDown} />
//       </a>
//     </li>
//     <li className="my-3 w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#pages"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Pages</span>
//         <FontAwesomeIcon icon={faCaretDown} />
//       </a>
//     </li>
//     <li className="mt-3 w-100">
//       <a
//         className="d-flex justify-content-between align-items-center w-100 px-4 py-2"
//         href="#contact"
//         style={{ textDecoration: "none", color: "white" }}
//         onClick={toggleMenu}
//       >
//         <span>Contact</span>
//       </a>
//     </li>
//   </ul>
//   <div className="d-flex  align-items-center  px-5">
//     <a href="#contact" className="text-white mx-2" style={{ textDecoration: "none" }} onClick={toggleMenu}>
//     <img src={callIcon} alt="callIcon"/> +68 68588666
//     </a>
//     <a href="#contact" className="text-white mx-2" onClick={toggleMenu}>
//     <img src={avatar} alt="avatar"/>
//     </a>
//     <button className="btn text-white border px-3 rounded-5 mx-2">Add Property</button>
//   </div>
// </div>

//       )}
//    <div  className='container w-sm-150 top-sm'>
//             <div className='d-flex flex-column'>
//                 <h6 className='border align-self-start p-md-2 fs-6  fs-xs-5 p-xs-1 rounded'>LET US GUIDE YOUR HOME</h6>
//                 <h1>Find Your <span style={{ color: "#E7C873" }}>Dream </span>Home</h1>
//                 <h6 className='fw-100'>From as low as $10 per day with limited time offer discounts</h6>
//                 <div className='d-flex my-2 mt-md-5 gap-5'>
//                     <h6 className='border-bottom border-white'>Sale</h6>
//                     <h6>Rent</h6>
//                 </div>

//                 <div
//                     className="d-flex  bg-white  w-150  w-md-150 w-xs-100 gap-xs-1 p-xs-0 gap-sm-1 p-sm-0 gap-md-1 p-md-3"
                   
//                 >
//                     {/* Keyword Input */}
//                     <div className="d-flex flex-column flex-grow-1 me-auto border-0" style={{ minWidth: "90px" }}>
//                         <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Keyword</h6>
//                         <input
//                             placeholder="Enter Keyword"
//                             className="border-0"
//                             style={{
//                                 color: "black",
//                                 fontSize: "0.75rem",
//                                 width: "50%", // Full width for small screens
//                             }}
//                         />
//                     </div>
                    
//                     {/* Type Dropdown */}
//                     <div className="d-flex flex-column flex-grow-1 me-2" style={{ maxWidth: "100px" }}>
//                         <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Type</h6>
//                         <h5 className="d-flex gap-2 align-items-center" style={{ color: "black", fontSize: "0.75rem" }}>
//                             All Type <FontAwesomeIcon icon={faCaretDown} />
//                         </h5>
//                     </div>
                    
//                     {/* Filter Button */}
//                     <div className="d-flex align-items-center  " style={{ minWidth: "80px" }}>
//                      <button className="border px-2 ps-md-3 py-3" style={{ fontSize: "0.75rem", width: "100%" }}>   <img src={filtericon} alt="filtericon" style={{ width: "16px", marginRight: "5px" }}/>Filter</button>
//                     </div>
                    
//                     {/* Search Button */}
//                     <div className="d-flex align-items-center " style={{ minWidth: "80px" }}>
//                         <button
//                             style={{
//                                 background: "#E7C873",
//                                 border: "none",
//                                 fontSize: "0.85rem",
//                                 width: "100%"
//                             }}
//                             className="px-3 px-md-3 py-3"
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>
//                 <div className='d-flex align-items-center mt-5 gap-4 '>
//                   <img src={propertyimage} alt="propertyimage"/>
//                   View Property Type
//                 </div>
//             </div>
//         </div>

//       <img src={banner} alt="banner-img" className="img-fluid w-100" style={{ height: '100vh', objectFit: 'cover' }} />
//     </div>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import banner from "../assets/banner.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from "react-icons/fa";
import Vector from "../assets/Vector.png";
import callIcon from "../assets/callIcon.png";
import avatar from "../assets/avatar.png";
import filtericon from "../assets/filtericon.png";
import propertyimage from "../assets/propertyimage.png";
import "./styless.css";

const Header = () => {
  return (
    <div>
      <div className="header-container" style={{ position: "relative" }} id="homepage">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  px-md-5 " style={{ position: "absolute", top: 0, width: "100vw",
          zIndex:"30", }}>
          {/* <div className=""> */}
            <a className="navbar-brand" href="#homepage">
              <div className='d-flex gap-3 align-items-center ps-sm-5 ps-4'>
                <img src={Vector} alt="Logo" style={{ width: "50px", height: "50px" }} />
                JustHome
              </div>
            </a>

            {/* Bootstrap Navbar Toggle Button */}
            <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse ul-bg" id="navbarContent">
              <ul className="navbar-nav mx-auto color-white ul-menu px-md-5 ps-5">
                <li className="nav-item">
                  <a className="nav-link fs-6" href="#home">
                    Home <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#listings">
                    Listings <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#members">
                    Members <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pages">
                    Pages <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              
              {/* Contact & Profile Buttons */}
              <div className="d-flex align-items-center px-md-5  ps-5">
                <a href="#contact" className="text-white mx-2" style={{ textDecoration: "none" }}>
                  <img src={callIcon} alt="callIcon" /> +68 68588666
                </a>
                <a href="#home" className="text-white mx-2">
                  <img src={avatar} alt="avatar" />
                </a>
                <button className="btn text-white border px-3 rounded-5 mx-2">Add Property</button>
              </div>
            </div>
          {/* </div> */}
        </nav>

        {/* Content Section */}
        <div className='container w-sm-150 top-sm'>
          <div className='d-flex flex-column'>
            <button className=' bg-transparent text-white border align-self-start   p-1  rounded guide-button'>LET US GUIDE YOUR HOME</button>
            <h1 className='fs-md-1  py-3'>Find Your <span style={{ color: "#E7C873" }}>Dream</span> Home.</h1>
            <h6 className='fw-100'>From as low as $10 per day with limited time offer discounts</h6>
            <div className='d-flex my-2 mt-md-5 gap-5'>
              <h6 className='border-bottom border-white'>Sale</h6>
              <h6>Rent</h6>
            </div>

            {/* Filter & Search Section */}
            <div className="d-flex  flex-sm-row flex-column bg-white w-150 w-md-150 w-xs-100 gap-xs-1 p-xs-0 gap-sm-1 p-sm-0 gap-md-1 p-md-3">
              {/* Keyword Input */}
              <div className="d-flex flex-column flex-grow-1 me-auto border-0" style={{ minWidth: "90px" }}>
                <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Keyword</h6>
                <input placeholder="Enter Keyword" className="border-0" style={{ color: "black", fontSize: "0.75rem", width: "50%",outline:"none" }} />
              </div>

              {/* Type Dropdown */}
              <div className="d-flex flex-column flex-grow-1 me-2" style={{ maxWidth: "100px" }}>
                <h6 className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>Type</h6>
                <h5 className="d-flex gap-2 align-items-center" style={{ color: "black", fontSize: "0.75rem" }}>
                  All Type <FontAwesomeIcon icon={faCaretDown} />
                </h5>
              </div>

              {/* Filter Button */}
              <div className="d-flex align-items-center" style={{ minWidth: "80px" }}>
                <button className="border px-2 ps-md-3 py-3" style={{ fontSize: "0.75rem", width: "100%" }}>
                  <img src={filtericon} alt="filtericon" style={{ width: "16px", marginRight: "5px" }} />Filter
                </button>
              </div>

              {/* Search Button */}
              <div className="d-flex align-items-center " style={{ minWidth: "80px" }}>
                <button style={{ background: "#E7C873", border: "none", fontSize: "0.85rem", width: "100%" }} className="px-3 px-md-3 py-3">
                  Search
                </button>
              </div>
            </div>
            <div className='d-flex  flex-md-row flex-column align-items-md-center align-items-start text-align-start mt-sm-5 mt-0 gap-4'>
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
