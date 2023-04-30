import React from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';

const SingleBlog = () => {
    const singleBlog = useLoaderData() ;

    const navigation = useNavigate()
    const handleToGOBack = () =>{
        navigation(-1)

  }
    return (
        <div>
            <h1 className='text-center my-4 text-4xl font-bold text-purple-700 underline'>Single Blog info</h1>
            <div className='bg-purple-400 p-5 text-center rounded-lg mx-20'>
            <h2>id: {singleBlog.id}</h2>
            <p>Title: {singleBlog.title}</p>
            <button onClick={handleToGOBack} className='bg-amber-100 p-2 text-xl font-bold rounded-md mt-4 '>Go To Back</button>
            </div>
            
        </div>
    );
};

export default SingleBlog;