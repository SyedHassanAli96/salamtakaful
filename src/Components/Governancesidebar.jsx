import React, { useState } from "react";
import board from "../assets/icons/directorb.png";
import auditior from "../assets/icons/auditor.png";
import auditiorb from "../assets/icons/auditorb.png";
import management from "../assets/icons/management-committeeb.png";
import managementb from "../assets/icons/management committee.png";
import advisor from "../assets/icons/advisorb.png";
import advisorb from "../assets/icons/advisor.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import boardb from "../assets/icons/director.png";
import Board from "./Board";
import Managment from "./Managment";
import Auditor from "./Auditor";
import Advisor from "./Advisor";
import Shareholding from "./Shareholding";
import share from "../assets/icons/financial report.png";
import shareb from "../assets/icons/financial-reportb.png";

const Governancesidebar = () => {
  const [Tabvalue, setTabvalue] = useState("board");
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
              <span className="navimg" onClick={() => myfun("board")}>
                <img src={board} alt="img" width="100" />
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span className="navimg" onClick={() => myfun("managment")}>
                <img src={management} alt="img" width="100" />
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("auditor")}>
                <img src={auditiorb} alt="img" width="100" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("advisor")}>
                <img src={advisor} alt="img" width="100" />
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg" onClick={() => myfun("share")}>
                <img src={shareb} alt="img" width="100" />
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
  if (value === "board") {
    return <Board />;
  } else if (value === "board") {
    return <Board />;
  } else if (value === "board") {
    return <Board />;
  } else if (value === "board") {
    return <Board />;
  } else if (value === "board") {
    return <Board />;
  } else {
    return <Board />;
  }
}
// function Tab({ value }) {
//   if (value === "board") {
//     return <Board />;
//   } else if (value === "managment") {
//     return <Managment />;
//   } else if (value === "auditor") {
//     return <Auditor />;
//   } else if (value === "advisor") {
//     return <Advisor />;
//   } else if (value === "share") {
//     return <Shareholding />;
//   } else {
//     return <Board />;
//   }
// }
export default Governancesidebar;
