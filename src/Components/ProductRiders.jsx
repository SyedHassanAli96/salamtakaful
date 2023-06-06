import React from "react";
import { Fade } from "react-reveal";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const ProductRiders = () => {
  return (
    <Fade bottom>
      <div className="section features">
        {data.Riders.map((item, index) => (
          <>
            <h3>{item.subtitle}</h3>
            <p>{item.description}</p>
            <ReadMoreReact
              text={item.description}
              min={50}
              ideal={90}
              max={120}
              readMoreText="read more"
            />
          </>
        ))}
      </div>
    </Fade>
  );
};

export default ProductRiders;
