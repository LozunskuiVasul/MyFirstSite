import React from "react";

import { slide as Menu } from "react-burger-menu";
import logo from '../../../img/logo_TetaLab.jpg';


export default props => {
  return (
    <>
    
    <Menu {...props}>
      
      <div className='logoTetaLab' href="/">
                        <img
                            src={logo}
                            height="36"
                            width="140.5"
                            alt="logo-TetaLab" 
                        />
      </div>
      <ul className='header_list'>
                            <li><a className='header-link' href="/home">Home</a></li>
                            <li><a className='header-link' href="/domains #2">Domains</a></li>
                            <li><a className='header-link' href="/services #3">Servises</a></li>
                            <li><a className='header-link' href="/about #4">About</a></li>
                            <li><a className='header-link' href="/portpholio">Portfolio</a></li>
                            <li><a className='header-link' href="/careers">Careers</a></li>
                            <li><a className='header-link' href="/blog">Blog</a></li>
                            <li><a href="/contactus"><button className='buttonnavbar'>Contact us</button></a></li>
                        </ul>
         
    </Menu>
     
   </>
  );
};
