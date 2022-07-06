import React from 'react';
import Navbar from './Navbar';
import SocialIcons from '../SocialIcons';
import smallLogo from '../../img/logo-footer.png';


import './styles.css';

const Footer = () => {
    return (
            <>
            <div className='footersection'>
                <div className='container'>
                    <div className='flexfooter'>
                        <div>
                            <img className='small__image' src={smallLogo} alt='Logo_footer' />
                        </div>
                        <div>
                            <SocialIcons />
                        </div>
                        <div>
                             <Navbar/>
                        </div>
                    </div>
                    <div className='container-items'>
                        <article className='footer__items'>
                            <h3>© 2018–2020 TetaLab. All rights reserved</h3>
                            <h3>Terms of Use</h3>
                            <h3>Privacy  Cookies Policy</h3>
                        </article>
                    </div>

                </div>
            </div>
            </>

    );
}
export default Footer;