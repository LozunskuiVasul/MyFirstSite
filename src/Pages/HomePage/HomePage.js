import React from 'react';
import Footer from '../../components/Footer';
import TitleSection from './TitleSection/TitleSection';
import PortpholioSection from './PortpholioSection/PortpholioSection';
import ContactForm from './ContactUsSection/ContactusSection';
import Domains from './DomainsSection/Domains';
import ServicesSection from './ServicesSection/ServicesSection';
import AboutSection from './AboutSection/AboutSection';
import CareersSection from './CareersSection/CareersSection';
import BlogSection from './BlogSection/BlogSection';

import './styles_HomePage.css';


const HomePage = () => {
return (
    <>

  <div className='home'>
            <div className='flex-home-page'>
                
                <div className='titlesection'>
                    <TitleSection />
                </div>
                <Domains />
                <ServicesSection />
                <div>
                <AboutSection />
                </div>
                <div>
                    <PortpholioSection />
                    
                </div>
                <CareersSection />
                <BlogSection />
                <div>
                    <ContactForm />
                </div>
                <Footer />
            
            </div>
        </div> 
    </>
);
}
export default HomePage;