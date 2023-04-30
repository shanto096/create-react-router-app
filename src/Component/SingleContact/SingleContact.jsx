import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleContact = () => {
    const singleContact = useLoaderData()
    const navigation = useNavigate()
    const handleToGOBack = () =>{
        navigation(-1)

  }
    return (
        <div>
            <h1 className='text-center my-4 text-4xl font-bold text-purple-700 underline'>single contact</h1>
            <div className='bg-purple-400 p-5 text-center rounded-lg mx-10'>
            <h1><h1>Name: {singleContact.name}</h1>
            <p>Email: {singleContact.email}</p>
            <p className='bg-white p-3 rounded '>message: {singleContact.body}</p></h1>
            <button onClick={handleToGOBack} className='bg-amber-100 p-2 text-xl font-bold rounded-md mt-4 '>Go To Back</button>
            </div>
        </div>
    );
};

export default SingleContact;