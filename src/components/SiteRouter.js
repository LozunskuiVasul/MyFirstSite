import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/index";


import HomePage from "../Pages/HomePage/HomePage";
import ContuctUsPage from "../Pages/ContactUsPage/ContactUsPage";
import PortpholioRouter from "../Pages/PortpholioPage/components/PortpholioRouter";
import BlogPage from "../Pages/BlogPage/BlogPage";
import CareersPage from "../Pages/CareerPage/CareersPage";
import PortpholioItemmy from "../Pages/ItemPages/PortpholioItems/PortpholioItems";
import CareersItems from '../Pages/ItemPages/CareersItems/CareersItems';
import BlogItems from '../Pages/ItemPages/BlogsItems/BlogItems';



const SiteRouter = () =>{

        return (
            <>
            <Header/>
            <Routes>
            <Route path="*" element={<HomePage/>}  />
            <Route path="/home" element={<HomePage/>}  />
            {/* <Route path="/domains #2" element={<HomePage/>}  /> */}
            {/* <Route path="/services #3" element={<ContuctUsPage/>}  /> */}
            {/* <Route path="/about  #4" element={<HomePage/>}  /> */}
            <Route path="/portpholio/*" element={<PortpholioRouter/>}  />
            <Route path="/careers/*" element={<CareersPage/>}  />
            <Route path="/blog" element={<BlogPage/>}  />
            <Route path="/contactus" element={<ContuctUsPage/>}  />
            <Route path={'/portpholio/:id'} element={<PortpholioItemmy />}/>
            <Route path={'/careers/:id/*'} element={<CareersItems />}/>
            <Route path={'/blog/:id'} element={<BlogItems />}/>
            </Routes>
            </>
        );
}
export default SiteRouter;