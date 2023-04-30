import React from 'react';
import { Link, useLoaderData, useNavigate, } from 'react-router-dom';

const FriendDtl = () => {
    const friendD = useLoaderData()
    const navigation = useNavigate();
    const handleToGOBack = () =>{
          navigation(-1)

    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-purple-700 underline my-5'>All DTL my Friend</h1>
            <div className='flex justify-center'>
            <div className='bg-purple-400 p-5 text-center rounded-lg'>   
            <div className='grid grid-cols-2 text-white '>
            <h3 className='my-1 text-lg'>Name: {friendD.name}</h3>
            <p className='my-1 text-lg'>username: {friendD.username}</p>
            <p className='my-1 text-lg'>email:{friendD.email}</p>
            <p className='my-1 text-lg'>phone:{friendD.phone}</p>
            <p className='my-1 text-lg'>website:{friendD.website}</p>
            <p className='my-1 text-lg'>company:{friendD.company.name}</p>
            <p className='my-1 text-lg'>catchPhrase:{friendD.company.catchPhrase}</p>
            <p className='my-1 text-lg'>bs:{friendD.company.bs}</p>
            <p className='my-1 text-lg'>street:{friendD.address.street}</p>
            <p className='my-1 text-lg'>suite:{friendD.address.suite}</p>
            <p className='my-1 text-lg'>city:{friendD.address.city}</p>
            <p className='my-1 text-lg'>zipcode:{friendD.address.zipcode}</p>
            </div>
            <button onClick={handleToGOBack} className='bg-white p-2 text-xl font-bold rounded-md mt-4 '>Go To Back</button>
            </div>   
            </div>
            
            
        </div>
    );
};

export default FriendDtl;