import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import ReadMoreReact from "read-more-react";
import Homebg from "../assets/homebg.jpg";

import SwipeableViews from "react-swipeable-views";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

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


export default function Homepage({ setshow }) {
  return (
    <Fragment>
      <Fade left>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 homepagesec zoom-in-zoom-out ">
              <div className="myheading main1 zoominheader ">
              <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 100,
                    stretch: 100,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  {data.Homepage.map((item, index) => (
                    <SwiperSlide >
                      <div  style={{ backgroundImage: `url(${item.imagebg})` }} className="mainslider zoomeffect " id={`${item.imageeffect}`} >
                        {/* <SwipeableViews
                          enableMouseEvents
                          axis="y"
                          containerStyle={styles.slideContainer}
                        > */}
                        {/* <Fade left> */}
                        <div style={Object.assign( {}, styles.slide, styles.slide1 )} key={index} className="hometext">
                            <div className={`${item.effect}`}>
                               <h2>{item.title}</h2>
                            </div>
                        </div>
                        {/* </Fade> */}
                        {/* <div style={Object.assign(  {}, styles.slide, styles.slide1 )} className="hometext" >
                          <Fade left>
                            <div className="designtitle">
                              <ReadMoreReact text={item.description}  min={350}ideal={400} max={550} readMoreText="read more"/>
                            </div>
                          </Fade>
                        </div> */}
                        {/* </SwipeableViews> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}
