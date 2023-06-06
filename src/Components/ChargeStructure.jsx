import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Charge = () => {
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
          <div className="section features aboutus charge zoominheaderabt" >
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>Invest with Confidence with Our Transparent Charge Structure</h2>
                </div>
                {data.Charge.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.title}</h3>
                          <div className="heightchild">
                            <ul>
                              {item.point1 ? <li>{item.point1}</li> : <></>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}

                {data.Charge.map((item, index) => (
                  <Fragment>
                    <Fade right>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <table>
                            <thead>
                              <tr>
                                <th>Fund Name</th>
                                <th>Charges</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{item.fund1}</td>
                                <td>{item.charges1}</td>
                              </tr>
                              <tr>
                                <td>{item.fund2}</td>
                                <td>{item.charges2}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}

                {data.Charge.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <div className="heightchild">
                            <ul>
                              {item.point2 ? <li>{item.point2}</li> : <></>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}

                {data.Charge.map((item, index) => (
                  <Fragment>
                    <Fade right>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <table>
                            <thead>
                              <tr>
                                <th>Membership Year</th>
                                <th>TMC Charge</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{item.membership1}</td>
                                <td>{item.tmc1}</td>
                              </tr>
                              <tr>
                                <td>{item.membership2}</td>
                                <td>{item.tmc2}</td>
                              </tr>
                              <tr>
                                <td>{item.membership3}</td>
                                <td>{item.tmc3}</td>
                              </tr>
                              <tr>
                                <td>{item.membership4}</td>
                                <td>{item.tmc4}</td>
                              </tr>
                              <tr>
                                <td>{item.membership5}</td>
                                <td>{item.tmc5}</td>
                              </tr>
                              <tr>
                                <td>{item.membership6}</td>
                                <td>{item.tmc6}</td>
                              </tr>
                              <tr>
                                <td>{item.membership7}</td>
                                <td>{item.tmc7}</td>
                              </tr>
                            </tbody>
                          </table>
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
export default Charge;
