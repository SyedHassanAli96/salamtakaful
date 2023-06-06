import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import social from "../assets/social.png";
import socialb from "../assets/socialb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import environmentb from "../assets/Sustainabilityb.png";
import Environment from "./Environment";
import Social from "../Components/Social";
import Govenance from "../pages/Governance";

const SideBarEsg = () => {
  const [Tabvalue, setTabvalue] = useState("environment");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/" className="linkstyle">
                <span className="navimg newabout">
                  <span className="text1">Home</span>
                  <img src={HomeIcon} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <span
                className={
                  Tabvalue === "environment" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("environment")}
              >
                {Tabvalue === "environment" ? (
                  <img src={environment} alt="img" />
                ) : (
                  <img src={environmentb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "social" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("social")}
              >
                {Tabvalue === "social" ? (
                  <img src={social} alt="img" />
                ) : (
                  <img src={socialb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <Link to="/governance" className="linkstyle">
                <span className={Tabvalue === "social" ? "aboutactive" : "bgColor"}>
                  {Tabvalue === "social" ? (
                    <img src={social} alt="img" />
                  ) : (
                    <img src={socialb} alt="img" />
                  )}
                </span>
              </Link>
            </span>
          </div>

        </div>
      </div>

      <Tab value={Tabvalue} />
    </React.Fragment>
  );
};

function Tab({ value }) {
  if (value === "environment") {
    return <Environment />;
  } else if (value === "social") {
    return <Social />;
  } else if (value === "governance") {
    return <Govenance />;
  } else {
    return <Environment />;
  }
}
export default SideBarEsg;
