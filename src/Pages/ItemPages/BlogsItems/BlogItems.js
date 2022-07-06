import React from "react";
import { useParams } from 'react-router-dom';

import Footer from '../../../components/Footer/index';
import CardBlogitem from "./components/CardBlogitem";
import { BlogMass } from "./components/ItemtoAddBlog";

const BlogItems = (props) => {
    const {id} = useParams();
    for (let i=0; i<BlogMass.length; i++){
        if (id === BlogMass[i].Id){
    return (
        <>

            <CardBlogitem 
                key = {BlogMass[i].Id}
                id = {BlogMass[i].Id}
                subtitle = {BlogMass[i].Subtitlevalue}
                titleblog = {BlogMass[i].Titlevalue}
            />
            <Footer />
        </>
    );
        }}

}
export default BlogItems;