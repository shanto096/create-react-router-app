import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllBlog = ({blog}) => {
      const navigator = useNavigate()

    const handleToSeeMore = ()=>{
          navigator(`/blog/${blog.id}`)
    }
    return (
        <div className='bg-purple-400 p-5 rounded-md text-center text-white'>
            <h1>id: {blog.id}</h1>
            <p>Title: {blog.title}</p>
            <button className='bg-red-500  text-white text-xl p-2 rounded-lg mt-4' onClick={handleToSeeMore}>see more</button>

        </div>
    );
};

export default AllBlog;