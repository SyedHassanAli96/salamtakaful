import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Additional = () => {
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
          <div className="section features aboutus additoinal zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>More Features, More Fun: Discover the Additional Features!</h2>
                </div>
                {data.Additionafeature.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.title}</h3>
                          <ul>
                            {item.point1 ? <li>{item.point1}</li> : <></>}
                            {item.point2 ? <li>{item.point2}</li> : <></>}
                            {item.point3 ? <li>{item.point3}</li> : <></>}
                          </ul>
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
export default Additional;
