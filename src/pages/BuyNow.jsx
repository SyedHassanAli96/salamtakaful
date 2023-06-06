import React, { Fragment, useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Header from "../Components/AboutHeader";
import Homebg from "../assets/buynowbg.png";
import phone from "../assets/Phone.png";
import chat from "../assets/Chat Room (1).png";
import { Link } from "react-router-dom";


const BuyNow = () => {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  return (


<>
      <div className="">
        <Header />
      </div>
<Fragment>
<Fade left>
  <div className="container">
    <div className="row">
      <div className="col-sm-12 homepagesec buynowpage" style={{ backgroundImage: `url(${Homebg})` }}>

      <div className=" Buynowform">
        {!show ? (
          <>
            {" "}
            <Fade left>
              <div className="">
                <h4> Customer information</h4>
              </div>
              <div className="innerbuyNow next">
                <div className="form">
                  <input placeholder="First Name" />

                  <input placeholder="Last Name" />

                  <input placeholder="Gender" />

                  <input placeholder="Date of Birth" />
                  <div className="footerbottom">

                  {/* <div className="nextcall">
                    <span className="whitebg">
                      <Link to="#">
                        <span className="navimg">
                          <img src={phone} alt="img" />
                        </span>
                      </Link>
                    </span>
                  </div> */}
                    <div className="formSubmit ">
                      {/* <button onClick={() => navigate("/")}>Back </button> */}
                      <button onClick={() => setshow(true)}>Next</button>
                    </div>

                      {/* <div className="nextcall">
                        <span className="whitebg">
                          <Link to="#">
                            <span className="navimg">
                              <img src={chat} alt="img" />
                            </span>
                          </Link>
                        </span>
                      </div> */}
                  </div>
                </div>
              </div>
            </Fade>
          </>
        ) : (
          <Fade right>
            <div className="buyNowHeader">
              <h4> Plan Information </h4>
            </div>

            <div className="innerbuyNow">
              <div className="form">
                <input placeholder="Contribution" />

                <input placeholder="Contribution Frequency" />

                <input placeholder="Cover Multiple" />

                <input placeholder="Contribution Term" />
                <input placeholder="Benefit Term" />
                <input placeholder="Face Value" />
                <div className="footerbottom submitform">
                  <div className="formSubmit">
                    <button onClick={() => setshow(false)}> back</button>
                    <button onClick={() => setshow(true)}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>

      </div>
    </div>
  </div>
</Fade>
</Fragment>
     
  

      </>


  );
};

export default BuyNow;
