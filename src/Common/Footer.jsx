import React from "react";
import { Link } from "react-router-dom";
import BuyNow from "../assets/Buy.png";
import phone from "../assets/Phone.png";
import chat from "../assets/Chat Room (1).png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="row footercentr">
        <div className="col call_btn footerbottom">
          <div>
            <span className="whitebg">
              <Link to="#">
                <span className="navimg">
                  <img src={phone} alt="img" />
                </span>
              </Link>
            </span>
          </div>

          <Link to="/buynow">
            <button>
              {/* <img src={BuyNow} alt="call" /> */}
              Buy Now
            </button>
          </Link>
          <div>
            <span className="whitebg">
              <Link to="#">
                <span className="navimg">
                  <img src={chat} alt="img" />
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
