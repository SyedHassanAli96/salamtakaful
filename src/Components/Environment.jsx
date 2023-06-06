import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const Environment = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.Environment.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ReadMoreReact
                className="mobileClass"
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
export default Environment;
