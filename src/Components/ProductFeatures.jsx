import React from "react";
import { Fade } from "react-reveal";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const ProductFeatures = () => {
  return (
    <Fade bottom>
      <div className="section features">
        {data.Product.map((item, index) => (
          <>
            <h3>{item.title}</h3>
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

export default ProductFeatures;
