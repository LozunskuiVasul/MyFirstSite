import React from "react";
import {Routes, Route} from 'react-router-dom';

import BlogPage from '../../../BlogPage/BlogPage';

function ItemBlog(props) {
   
    return (
        <>
                <a href='/blog'>
                    <div className="blog-item">
                        <img className="img-blog" src={props.imgvalue} alt=""/>
                        <div className="title-blog-item">{props.titlevalue}</div>
                        <div className="text-blog">{props.subtitlevalue}</div>
                    </div>
                </a>
            
            <Routes>
                <Route path='/blog' element={<BlogPage/>} />
            </Routes>
        </>
    );

}
export default ItemBlog;