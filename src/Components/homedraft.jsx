import React, { Fragment, useEffect } from 'react'
import Fade from "react-reveal/Fade";
import data from "../Data";
import ReadMoreReact from "read-more-react";
import SwipeableViews from 'react-swipeable-views';


export default function Homepage() {


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

    <Fragment>
      <Fade left>

        <div className='container'>
          <div className='row'>
            {data.Homep.map((item, index) => (
              <div className='col-sm-12 homepagesec'>
                <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>

                  <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                    <h2 >{item.title}</h2>
                    <p className="learn"></p>
                  </div>


                  <div className='opac1' style={Object.assign({}, styles.slide, styles.slide2)} >
                    <ReadMoreReact text={item.desc} min={220} ideal={250} max={320} readMoreText="read more" />
                  </div>



                </SwipeableViews>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </Fragment>

  )
}
