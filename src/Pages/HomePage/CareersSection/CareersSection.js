import React from "react";
import Carousel from "react-elastic-carousel";
import ButtonCareersSection from './components/Button_Carrers_Section';
import { CareersMass } from "../../ItemPages/CareersItems/components/ItemtoAddCareer";


import "./styles_careerssection.css";
import ItemCareer from "./components/ItemCareer";

const CareersSection = () => {

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 0 },
  { width: 768, itemsToShow: 3 },
  { width: 1440, itemsToShow: 3 }
];

  return (
    <div id="6" className="careerssection">                 
        <div className="carousel-wrapper">
                <div className="flex-header-careers">
                    <div className="title-careers">Careers</div>
                    <ButtonCareersSection />
                </div>
                <div className="text-careers">
                    We are constantly looking for talented and ambitious people
                </div>
                <Carousel className="carouselcareers" breakPoints={breakPoints} >
                    {CareersMass.map((newcareers) => (
                        <ItemCareer
                            Id ={newcareers.Id}
                            titlevalue = {newcareers.Titlevalue}
                            imgvalue = {newcareers.Imgvalue} 
                        ></ItemCareer> 
                    ))}
                </Carousel>
         </div>
    </div>
  );
}
export default CareersSection;
