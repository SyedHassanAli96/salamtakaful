import React, { useState } from "react";
import about2b from "../assets/images1.png";
import about2 from "../assets/about2.png";
import img3 from "../assets/icons/advisor.png";
import img3b from "../assets/icons/advisorb.png";
import img4 from "../assets/about4.png";
import img4b from "../assets/img4b.png";
import img5b from "../assets/socialb.png";
import img5 from "../assets/social.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import AboutSection from "./AboutSection";
import AboutArrange from "./AboutArrange";
import AboutEsg from "./AboutEsg";
import AboutEsgs from "./AboutEsgs";
import Sidebar1 from "../assets/sidebar1.png";
import Sidebar2 from "../assets/sidebar2.png";
import Sidebar3 from "../assets/sidebar3.png";
import Sidebar4 from "../assets/sidebar4.png";

const SideBar = () => {
  const [Tabvalue, setTabvalue] = useState("about");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("about")}>
                <img src={Sidebar1} alt="img" />
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("arrange")}>
                <img src={Sidebar2} alt="img" />
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("esg")}>
                <img src={Sidebar3} alt="img" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("esgs")}>
                <img src={Sidebar4} alt="img" />
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
  if (value === "about") {
    return <AboutSection />;
  } else if (value === "about") {
    return <AboutSection />;
  } else if (value === "about") {
    return <AboutSection />;
  } else if (value === "about") {
    return <AboutSection />;
  } else {
    return <AboutSection />;
  }
}

// function Tab({ value }) {
//   if (value === "about") {
//     return <AboutSection />;
//   } else if (value === "arrange") {
//     return <AboutArrange />;
//   } else if (value === "esg") {
//     return <AboutEsg />;
//   } else if (value === "esgs") {
//     return <AboutEsgs />;
//   } else {
//     return <AboutSection />;
//   }
// }
export default SideBar;
