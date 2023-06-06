import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import environmentb from "../assets/Sustainabilityb.png";
import policy from "../assets/icons/individual.png";
import policyb from "../assets/icons/individualb.png";
import investment from "../assets/icons/desk management.png";
import investmentb from "../assets/icons/desk-managementb.png";
import charge from "../assets/icons/performance report.png";
import chargeb from "../assets/icons/performance-reportb.png";

import moreb from "../assets/icons/investor complaint.png";
import more from "../assets/icons/investor-complaintb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";

import Board from "./Board";

import supliment from "../assets/icons/news & update.png";
import suplimentb from "../assets/icons/news-&-updateb.png";
import Productoverview from "./Productoverview";
import ProductUsp from "./Supercharge";
import Additional from "./Additionalfeatures";
import Suplimentary from "./Suplimentary";
import Investment from "./Investment";
import Charge from "./ChargeStructure";
import sidebar1 from "../assets/productsd1.png";
import sidebar2 from "../assets/productsd2.png";

const ProductSidebar = () => {
  const [Tabvalue, setTabvalue] = useState("overview");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item"></div>
          <div className="item">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("overview")}>
                <img src={sidebar1} alt="img" />
              </span>
            </span>
          </div>

          {/* <div className="item">
            <span className="whitebg">
              <Link to="/usp" className="linkstyle">
                <span className="navimg">
                  <img src={sidebar2} alt="img" />
                </span>
              </Link>
            </span>
          </div> */}

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("additional")}>
                <img src={sidebar1} alt="img" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("suplimentary")}>
                <img src={sidebar2} alt="img" />
              </span>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("investment")}>
                <img src={sidebar1} alt="img" />
              </span>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("charge")}>
                <img src={sidebar2} alt="img" />
              </span>
            </span>
          </div>
        </div>
      </div>

      <Tab value={Tabvalue} />
    </React.Fragment>
  );
};

function Tab({ value }) {
  if (value === "overview") {
    return <Productoverview />;
  } else if (value === "overview") {
    return <Productoverview />;
  } else if (value === "overview") {
    return <Productoverview />;
  } else if (value === "overview") {
    return <Productoverview />;
  } else if (value === "overview") {
    return <Productoverview />;
  } else if (value === "overview") {
    return <Productoverview />;
  } else {
    return <Productoverview />;
  }
}
// function Tab({ value }) {
//   if (value === "overview") {
//     return <Productoverview />;
//   } else if (value === "usp") {
//     return <ProductUsp />;
//   } else if (value === "additional") {
//     return <Additional />;
//   } else if (value === "suplimentary") {
//     return <Suplimentary />;
//   } else if (value === "investment") {
//     return <Investment />;
//   } else if (value === "charge") {
//     return <Charge />;
//   } else {
//     return <Board />;
//   }
// }
export default ProductSidebar;
