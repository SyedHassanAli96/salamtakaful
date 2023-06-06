import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import policy from "../assets/Policy .png";
import policyb from "../assets/Policyb.png";
import social from "../assets/social.png";
import socialb from "../assets/socialb.png";
import advisor from "../assets/Sustainability.png";
import advisorb from "../assets/Sustainabilityb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import environmentb from "../assets/Sustainabilityb.png";

import share from "../assets/about3.png";
import shareb from "../assets/img3b.png";
import Supercharge from "./Supercharge";
import Bonus from "./Bonus";
import Flexible from "./Flexible";
import Unlimited from "./Unlimited";
import Zero from "./Zero";
import Wakala from "./Wakala";
import Inclusive from "./Inclusive";

const Uspsidebar = () => {
  const [Tabvalue, setTabvalue] = useState("super");
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
              <span className="navimg" onClick={() => myfun("super")}>
                <img src={environment} alt="img" />
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("bonus")}>
                <img src={social} alt="img" />
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("flexible")}>
                <img src={policyb} alt="img" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("unlimited")}>
                <img src={advisor} alt="img" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("zero")}>
                <img src={shareb} alt="img" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("wakala")}>
                <img src={policy} alt="img" />
              </span>
            </span>
          </div>

          <div className="item ">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("inclusive")}>
                <img src={socialb} alt="img" />
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
  if (value === "super") {
    return <Supercharge />;
  } else if (value === "bonus") {
    return <Bonus />;
  } else if (value === "flexible") {
    return <Flexible />;
  } else if (value === "unlimited") {
    return <Unlimited />;
  } else if (value === "zero") {
    return <Zero />;
  } else if (value === "wakala") {
    return <Wakala />;
  } else if (value === "inclusive") {
    return <Inclusive />;
  } else {
    return <Supercharge />;
  }
}
export default Uspsidebar;
