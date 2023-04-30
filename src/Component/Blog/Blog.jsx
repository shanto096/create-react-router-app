import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBlog from '../AllBlog/AllBlog';

const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <h1 className='text-center my-4 text-4xl font-bold text-purple-700 underline'>Blog info</h1>
            <div className='grid md:grid-cols-3 gap-5 mx-12 mb-5'>
            {
               blogs.map(blog =><AllBlog key = {blogs.id} blog = {blog}></AllBlog>)
            }
            </div>
        </div>
    );
};

export default Blog;