import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../../Pages/HomePage/HomePage";

import './styles-footer.css';

const Navbar = () => {

    return (
        <>
                        <ul className='header_listf'>
                            <li><a className='header-linkf' href="/-">Home</a></li>
                            <li><a className='header-linkf' href="/Domains- #2">Domains</a></li>
                            <li><a className='header-linkf' href="/services- #3">Servises</a></li>
                            <li><a className='header-linkf' href="/about-  #4">About</a></li>
                            <li><a className='header-linkf' href="/portpholio- #5">Portfolio</a></li>
                            <li><a className='header-linkf' href="/careers- #6">Careers</a></li>
                            <li><a className='header-linkf' href="/blog- #7">Blog</a></li>
                            <li><a className='header-linkf' href="/contactus- #8">Contact us</a></li>
                        </ul>  
                        <Routes>
                        <Route path="/domains-" element={<HomePage/>}  />
                        <Route path="/services-" element={<HomePage/>}  />
                        <Route path="/about-  #4" element={<HomePage/>}  />
                        <Route path="/portpholio-" element={<HomePage/>}  />
                        <Route path="/careers-" element={<HomePage/>}  />
                        <Route path="/blog-" element={<HomePage/>}  />
                        <Route path="/contactus-" element={<HomePage/>}  /> 
                        </Routes> 
        </>
    );
}
export default Navbar;