import React from 'react';
// import React, { useContext } from "react";
import "./MenuBar.css";
// import logo from "../..//images/logo/baller-logo-3.png";
import { Link } from "react-router-dom";
// import { userContext } from "./../../App";
const MenuBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand text-danger" >e-Cademy Learning</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex align-items-evenly justify-content-evenly" id="navbarNav">
      <ul className="navbar-nav ">
      <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                 <li>About</li>
                </Link>               
                 <Link to="/courses" className="items">
                  <li>Courses</li>
               </Link>
               
              </ul>


        
    </div>
  </div>
</nav>


//         <div className="MenuBar-container ">
//       {/* <div className="container"> */}
//         <div className="row">
//           {/* <div className="col-md-2"> */}
//             {/* <div className="logo-img"> */}
//             <nav className="navbar navbar-light bg-light">
  
//     <span className="navbar-brand mb-0 h1">eCademy </span>

// </nav>

//             {/* </div>
//           </div> */}
//           {/* <div className="col-md-10"> */}
//             <div className="menu-container ">
//               <ul className="d-flex align-items-evenly justify-content-evenly">
//                 <Link to="/home" className="items">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/about" className="items">
//                   <li>About</li>
//                 </Link>
//                 <Link to="/courses" className="items">
//                   <li>Courses</li>
//                 </Link>
               
//               </ul>
//             </div>
//           </div>
//           </div>

   

  );
};

  

export default MenuBar;