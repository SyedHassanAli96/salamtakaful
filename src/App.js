import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';
import BuyNow from './pages/BuyNow';
import Product from './pages/product';
import Esg from './pages/esg';
import "../src/responsive.css"
import "../src/animation.css"
import Governance from './pages/Governance';
import Usp from './pages/Usp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Components/Loader';


function App() {

  const [userIsMobile, setUserIsMobile] = useState(true);
  useEffect(() => {
    window.innerWidth < 520 ? setUserIsMobile(true) : setUserIsMobile(false);

  }, [userIsMobile]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },4000)
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>

      {
        userIsMobile ?
        <Fragment>
          {loading ? <Loader/> :
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/buynow' element={<BuyNow />} />
              <Route path='/product' element={<Product />} />
              <Route path='/esg' element={<Esg />} />
              <Route path='/governance' element={<Governance />} />
              <Route path='/usp' element={<Usp />} />
            </Routes>
          </BrowserRouter>
          </>
          }
          </Fragment>

          : <>dESKTOP</>
      }

    </React.Fragment>
  );
}

export default App;
