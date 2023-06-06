import React from "react";
import Logo from "../assets/PdYUvU.png";
import FaBar from "../assets//Group 6.png";
import header1 from "../assets/header1.png";
import headetr2 from "../assets/header2.png";
import { Link } from "react-router-dom";

const Header = ({ show, setshow }) => {
  return (
    <React.Fragment>
      <div className="topheader topheaderbox">
        <div className="topheader1">
          <div className="logoContainer .zoom-in-zoom-out">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="headcontent">
            <span className="headercontent">
              <button>Lodge A claim</button>
              <img src={header1} alt="" />
              <img src={headetr2} alt="logo" />
            </span>
            <span>
              <img onClick={() => setshow(true)} src={FaBar} alt="logo" />
            </span>
          </div>
        </div>
      </div>
      <div className="topheadershadow"></div>
    </React.Fragment>
  );
};
export default Header;
