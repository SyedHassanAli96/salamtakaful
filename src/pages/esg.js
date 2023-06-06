import React from "react";
import Footer from "../Common/Footer";
import Header from "../Components/AboutHeader";
import SideBar from "../Components/SidebarEsg";
import Fade from "react-reveal/Fade";
import MobileMenu from "../Common/MobileMenu";
import { useState } from "react";
import Readmore from "../Common/Readmore";

const Esg = () => {
    const [show, setshow] = useState(false);

    return (
        <React.Fragment>
            {show ? (
                <MobileMenu show={show} setshow={setshow} />
            ) : (
                <>
                    <Fade right duration={1000}>
                        <div className="AboutSection">
                            <Header show={show} setshow={setshow} />
                            <div className="d-flex justify-content-between">
                                <SideBar />
                            </div>

                        </div>
                    </Fade>
                </>
            )}
            <Readmore/>
            <Footer />

        </React.Fragment>
    );
};
export default Esg;
