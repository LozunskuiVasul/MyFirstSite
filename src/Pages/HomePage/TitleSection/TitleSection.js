import React from "react";
import SocialIcons from "../../../components/SocialIcons";
import strepimg from '../../../img/Vector 8.png';
import ourdownload from '../../../FilesTo Download/OurPortpholio.pdf';

import './styles_TitleSection.css';

const TitleSection = () => {
    return (
        <>
            <div className="container-title">
                <div className="content-section">
                    <div className="content-title">
                        <h2 className="subtitle-titlesection">Do you want to optimize your business?</h2>
                        <h1 className="title-titlesection">You need <p>new software tools</p></h1>
                        <a href={ourdownload} target="_blank" rel="noopener noreferrer" download='OurPortpholio.pdf'>
                        <button className="button-title">Download our portfolio</button>
                        </a>
                    </div>
                    <div className="flex-title-social">
                        <div>
                        <SocialIcons/>
                        </div>
                        <div>
                            <img className="button-slider-homepage" src={strepimg} alt=""/>
                        </div>
                        <div className="lenguages">
                            <div className="flex-lenguages">
                                <p>En</p>
                                <p>Ru</p>
                                <p>Ua</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TitleSection;