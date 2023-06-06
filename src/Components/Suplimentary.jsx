import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Suplimentary = () => {
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
          <div className="section features aboutus suplimentary zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>Stay Ahead of the Unexpected with Our Additional Coverages</h2>
                </div>
                {data.Supplimentry.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.title}</h3>
                          <div className="heightchild">
                            <ul>
                              {item.point1 ? <li>{item.point1}</li> : <></>}
                              {item.point2 ? <li>{item.point2}</li> : <></>}
                              {item.point3 ? <li>{item.point3}</li> : <></>}
                              {item.point4 ? <li>{item.point4}</li> : <></>}
                              {item.point5 ? <li>{item.point5}</li> : <></>}
                              {item.point6 ? <li>{item.point6}</li> : <></>}
                              {item.point7 ? <li>{item.point7}</li> : <></>}
                            </ul>
                          </div>
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
export default Suplimentary;
