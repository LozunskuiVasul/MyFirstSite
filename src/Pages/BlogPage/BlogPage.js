import React from "react";

import Footer from "../../components/Footer/index";
import { BlogMass } from '../ItemPages/BlogsItems/components/ItemtoAddBlog';
import ItemBlogComponent from "./components/ItemBlogComponent";

import "./styles_BlogPage.css";

const BlogPage = () => {
    return (
        <div>
            
                <div className="blogg-container">
                    <div className="title-blogg">Blog</div>
                    <div className="text-text-blog">
                        Lorem ipsum dolor sit amet, consectetur 
                    </div>
                    <div className="flex-blogg-item">
                        {BlogMass.map((newblog) => (
                            <ItemBlogComponent
                                key ={newblog.Id}
                                Id ={newblog.Id}
                                titlevalue = {newblog.Titlevalue}
                                subtitlevalue = {newblog.Subtitlevalue}
                                imgvalue = {newblog.Imgvalue} 
                            ></ItemBlogComponent> 
                        ))}
                    </div>
                </div>
                <Footer />
        </div>
    );
}
export default BlogPage;