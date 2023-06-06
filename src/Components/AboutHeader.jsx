import React from "react";
import Logo from "../assets/PdYUvU.png";
import header1 from "../assets/header1.png";
import headetr2 from "../assets/header2.png";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = ({ show, setshow }) => {
  return (
    <React.Fragment>
      <div className="topheader topheaderbox">
        <div className="topheader1">
          <div className="logoContainer ">
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
              {/* <img src={FaBar} alt="logo" /> */}
              {/* <RxHamburgerMenu onClick={() => setshow(true)} /> */}
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
      </div>
      <div className="topheadershadow"></div>
    </React.Fragment>
  );
};
export default Header;
