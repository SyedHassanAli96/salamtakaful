import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Managment = () => {
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
          <div className="section features aboutus managment zoominheaderabt">

            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>Meet the Minds at the Helm: Introducing Our Management Committee</h2>
                </div>

                {data.Managment.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.title}</h3>
                          <ReadMoreReact text={item.mangdesc} min={150} ideal={280} max={350} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>


                  </Fragment>
                ))}
              </SwipeableViews>
            </div>
          </div>

          <p className="learn"></p>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Managment;
