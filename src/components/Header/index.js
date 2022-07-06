import React from "react";
import {isMobile} from 'react-device-detect';


import SideBar from "./Sidebar/Sidebar";


import logo from '../../img/logo_TetaLab.jpg';

import './styles.css';



const Header = () => {

  
  const renderMenu =() =>{

  
  

    if (isMobile) { 
    return ( 
      <>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className='logoTetaLab isMobile' href="/">
                        <img
                            src={logo}
                            height="36"
                            width="140.5"
                            alt="logo-TetaLab" 
                        />
      </div>
        
      </>

    )
    } else{ 
      return (
        <div className='wrapper'>
        <header className='header'>
            <div className='container'>
                <div className='headerbody'>
                    <div className='logoTetaLab' href="/">
                        <img
                            src={logo}
                            height="36"
                            width="140.5"
                            alt="logo-TetaLab" 
                        />
                    </div>
                    <div className='header_menu'>
                        <ul className='header_list'>
                           <li>
                            <a className='header-link' href="/home" >Home</a>
                          </li>
                            <li><a className='header-link' href="/domains #2">Domains</a></li>
                            <li><a className='header-link' href="/services #3">Services</a></li>
                            <li><a className='header-link' href="/about #4">About</a></li>
                            <li><a className='header-link' href="/portpholio">Portpholio</a></li>
                            <li><a className='header-link' href="/careers">Careers</a></li>
                            <li><a className='header-link' href="/blog">Blog</a></li>
                            <li>
                                <a href="/contactus">
                                  <button className='buttonnavbar'>Contact us</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
  
      
    </div>
      )
      
    }
    
  }
    return (
        <>
         {renderMenu()}
         
        </>

    );
}
   
export default Header;