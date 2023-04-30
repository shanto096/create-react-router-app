import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    return (
        <div className='bg-purple-400 p-5 rounded-md text-center text-white'>
            <h1 className='text-lg'>Name: {friend.name}</h1>
            <h3>email: {friend.email}</h3>
             <h4>address: {friend.address.zipcode}</h4>
             <button className='bg-red-500 text-white text-xl p-2 rounded-lg mt-4'><Link to = {`/friends/${friend.id}`}>see more Data</Link></button>
        </div>
    );
};

export default Friend;