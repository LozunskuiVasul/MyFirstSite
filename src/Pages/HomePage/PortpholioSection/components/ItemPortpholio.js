import React from "react";
import {Routes, Route} from 'react-router-dom';

import PortpholioPage from "../../../PortpholioPage/PortpholioPage";

function ItemPortpholio(props) {
   
    return (
        <div className="flex-portpholio">
                <a href='/portpholio'>
                    <div className="careers-item">
                        <img src={props.imgvalue} alt=""/>
                        <div className="title-item-portpholio">{props.titlevalue}</div>
                    </div>
                </a>
            
            <Routes>
                <Route path='/portpholio' element={<PortpholioPage/>} />
            </Routes>
        </div>
    );

}
export default ItemPortpholio;