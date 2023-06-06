import React from "react";
import { Link } from "react-router-dom";
import ESG from "../assets/ESG.png";
import Products from "../assets/Product.png";
import Fund from "../assets/Fund.png";

import office from "../assets/office-building.png";
import protection from "../assets/protection.png";
import premiumq from "../assets/premium-quality.png";
import premium from "../assets/premium-quality (1).png";



const SideBar = () => {
  return (

    <React.Fragment>

      <div className="container-fluid">
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              
                <span className="navimg">
                  <img src={office} alt="img" />
                </span>
                <div className="hassantext">
                  <Link to="/about" className="">
                  <span>about us</span>
                  </Link>
                </div>

                
                
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
                <span className="navimg">
                  <img src={protection} alt="img" />
                </span>
                <div className="hassantext">
                  <Link to="/product" className="">
                  <span>Product</span>
                  </Link>
                </div>

            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
                <span className="navimg">
                  <img src={premiumq} alt="img" />
                </span>
                <div className="hassantext">
                  <Link to="/governance" className="">
                  <span>governance</span>
                  </Link>
                </div>
             
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg">
              <span className="navimg">
                <img src={premium} alt="img" />
              </span>
              <div className="hassantext">
                  <Link to="/#" className="">
                  <span>financial</span>
                  </Link>
                </div>
            </span>
          </div>
        </div>
      </div>

    </React.Fragment>

  );
};

export default SideBar;
