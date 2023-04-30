import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactAll = ({contact}) => {

    const navigator =  useNavigate();

    const handleToSeeMore = () =>{
        navigator(`/contact/${contact.id}`)
    }
    return (
        <div className='bg-purple-400 p-5 rounded-md text-center text-white '>
            <h1 className='text-lg'>Name: {contact.name}</h1>
            <p>Email: {contact.email}</p>
            <p className='bg-white p-2 rounded text-green-400'>message: {contact.body}</p>
            <button className='bg-red-500  text-white text-xl p-2 rounded-lg mt-4' onClick={handleToSeeMore}>see more</button>
            
        </div>
    );
};

export default ContactAll;