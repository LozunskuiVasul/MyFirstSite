import React from "react";
import Carousel from "react-elastic-carousel";
import ButtonBlogSection from './components/Button_BlogSection';
import { BlogMass } from "../../ItemPages/BlogsItems/components/ItemtoAddBlog";
import ItemBlog from "./components/ItemBlogs";

import "./styles_BlogSection.css";


const BlogSection = () => {

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 0 },
  { width: 768, itemsToShow: 3 },
  { width: 1440, itemsToShow: 3 }
];

  return (
    <div id="7" className="blogsection">                 
        <div className="carousel-wrapper">
                <div className="flex-header-blog">
                    <div className="title-blog">Blog</div>
                    <ButtonBlogSection />
                </div>
                <div className="text-text-blog">
                    Lorem ipsum dolor sit amet, consectetur 
                </div>
                <Carousel className="carouselblog" breakPoints={breakPoints} >
                    {BlogMass.map((newblog) => (
                        <ItemBlog
                            Id ={newblog.Id}
                            titlevalue = {newblog.Titlevalue}
                            subtitlevalue = {newblog.Subtitlevalue}
                            imgvalue = {newblog.Imgvalue} 
                        ></ItemBlog> 
                    ))}
                </Carousel>
         </div>
    </div>
  );

}
export default BlogSection;
