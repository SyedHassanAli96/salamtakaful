import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const AboutEsg = () => {

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
          <div className="section features shariah zoominheaderabt">



            {data.Shariah.map((item, index) => (
              <Fragment>
                <div className="col-sm-12 homepagesec" key={index}>
                  <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>

                    <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)} data-aos="fade-left" data-aos-duration="3000">
                      <div className="designtitle">
                        <h2>{item.title}</h2>
                      </div>
                    </div>

                    <Fade right>
                      <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.mufti}</h3>
                          <ReadMoreReact text={item.advice} min={250} ideal={380} max={450} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>

                  </SwipeableViews>
                </div>


              </Fragment>
            ))}

            <p className="learn"></p>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default AboutEsg;
