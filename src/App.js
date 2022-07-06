import React from 'react';
import {BrowserRouter} from "react-router-dom";
import SiteRouter from "./components/SiteRouter";


function App() {
  return (
    <div>
      <BrowserRouter>
        <SiteRouter/>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
