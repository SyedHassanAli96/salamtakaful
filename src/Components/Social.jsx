import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const Social = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.Social.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ReadMoreReact
                text={item.description}
                min={200}
                ideal={320}
                max={400}
                readMoreText="read more"
              />
            </>
          ))}
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Social;
