import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const Governance = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.Governance.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ReadMoreReact
                text={item.description}
                min={100}
                ideal={120}
                max={200}
                readMoreText="read more"
              />
            </>
          ))}
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Governance;
