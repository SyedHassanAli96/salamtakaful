import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';
import Aboutbg from "../assets/aboutbg.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";
import Readmore from "../Common/Readmore";

const AboutSection = () => {
  // const styles = {
  //   slideContainer: {
  //     height: 600,
  //   },
  //   slide1: {
  //     minHeight: 600,
  //   },
  //   slide2: {
  //     minHeight: 600,
  //   },
  // };


  return (
    <React.Fragment>

        <div>
          <div className="section features aboutus zoominheaderabt " data-aos="fade-left" data-aos-duration="2000">
          <Swiper
        direction={"vertical"}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}

        className="mySwiper zoom-in-zoom-out"
      >
            {data.About.map((item, index) => (
              <SwiperSlide>
                <div className="col-sm-12 aboutswipe zoomeffect mainslider"  style={{ backgroundImage: `url(${item.img})` }} id={`${item.imageeffect}`} key={index}>
                 { item.title ? <h3 className={`${item.effect}`}>{item.title}</h3> : <></> }
                 { item.description ?<div className={`${item.effect}`} > <p>{item.description} </p></div>: <></> }
                </div>
                <Readmore/>
              </SwiperSlide>

            ))}
 </Swiper>
            <p className="learn"></p>
          </div>
        </div>

    </React.Fragment>
  );
};
export default AboutSection;



