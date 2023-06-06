import React from "react";
import Footer from "../Common/Footer";
import Header from "../Components/AboutHeader";
import SideBar from "../Components/ProductSidebar";
import Fade from "react-reveal/Fade";
import MobileMenu from "../Common/MobileMenu";
import { useState } from "react";
import Readmore from "../Common/Readmore";



const Product = () => {
    const [show, setshow] = useState(false);

    return (
        <React.Fragment>
            {show ? (
                <MobileMenu show={show} setshow={setshow} />
            ) : (
                <>
                    <Fade right duration={1000}>
                        <div className="container-fluid AboutSection">
                            <Header show={show} setshow={setshow} />
                            <div className="d-flex justify-content-between">
                                <SideBar />
                            </div>

                        </div>
                    </Fade>
                </>
            )}
            <Footer />
        </React.Fragment>
    );
};
export default Product;
