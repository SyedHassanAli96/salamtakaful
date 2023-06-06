import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Unlimited = () => {
  const styles = {
    slideContainer: {
      height: 600,
    },
    slide1: {
      minHeight: 600,
    },
    slide2: {
      minHeight: 600,
    },
  };
  return (
    <React.Fragment>
      <Fade bottom>
        <div>
          <div className="section features aboutus unlimited zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
              
              {/* dual map for scrolable animation */}

                {data.Usp4.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h2>{item.title}</h2>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}
              
              {data.Usp4.map((item, index) => (
                  <Fragment>
                    <Fade right>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <ReadMoreReact text={item.overview} min={150} ideal={280} max={350} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>


                  </Fragment>
                ))}
              
              </SwipeableViews>
            </div>

            <p className="learn"></p>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Unlimited;
