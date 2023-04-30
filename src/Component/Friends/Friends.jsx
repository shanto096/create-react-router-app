import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1 className='text-center my-4 text-4xl font-bold text-purple-700 underline'>My all Friend:{friends.length}</h1>
            <div className='grid md:grid-cols-3 gap-5 mx-12 mb-5'>
            {
                friends.map(friend => <Friend key = {friend.id} friend ={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;