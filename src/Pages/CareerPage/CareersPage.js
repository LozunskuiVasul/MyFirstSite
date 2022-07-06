import React from 'react';
import {CareersMass } from '../ItemPages/CareersItems/components/ItemtoAddCareer';
import ItemCareersComponent from './components/ItemCareersComponent';
import Footer from '../../components/Footer';

import './CareersPage.css';

const CareersPage = (props) => {

        return (
            <>        
                <div className="wrapper-careerspage">
                    <div className="title-careerspage">Careers</div>
                    <div className="text-careerspage">
                        We are constantly looking for talented and ambitious people
                    </div>
                    <div className='flex-careerspage'>
                        {CareersMass.map((newcareers) => (
                            <ItemCareersComponent
                                key ={newcareers.Id}
                                Id ={newcareers.Id}
                                titlevalue = {newcareers.Titlevalue}
                                imgvalue = {newcareers.Imgvalue} 
                            ></ItemCareersComponent> 
                        ))}
                    </div>
                </div>
                <Footer/> 
            </>
        );
}
export default CareersPage;