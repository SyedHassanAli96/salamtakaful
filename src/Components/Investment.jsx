import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Investment = () => {
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
          <div className="section features aboutus investment zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>Your Risk, Your Choice: Invest with Our Customizable Funds</h2>
                </div>
                {data.Investment.map((item, index) => (
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Fade>

                  </Fragment>
                ))}

                {data.Investment.map((item, index) => (
                  <Fragment>
                    <Fade right>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <table>
                            <thead>
                              <tr>
                                <th>Factors</th>
                                <th>Conservative</th>
                                <th>Balanced</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{item.Factors}</td>
                                <td>{item.conservative}</td>
                                <td>{item.balance}</td>
                              </tr>
                              <tr>
                                <td>{item.Factors1}</td>
                                <td>{item.conservative1}</td>
                                <td>{item.balance1}</td>
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
export default Investment;
