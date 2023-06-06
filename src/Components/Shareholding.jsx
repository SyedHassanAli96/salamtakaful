import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Shareholding = () => {
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
          <div className="section features aboutus shareholding zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>The People Behind the Shares: Key Players in Our Company's Shareholding Pattern</h2>
                </div>

                <Fragment>
                  <Fade left>
                    <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                      <div className="designtitle">
                        <table>
                          <thead>
                            <tr>
                              <th>Shareholders </th>
                              <th>% of Shareholding</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.Share.map((item, index) => (
                              <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.percent}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Fade>

                </Fragment>
              </SwipeableViews>
            </div>

            <p className="learn"></p>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Shareholding;
