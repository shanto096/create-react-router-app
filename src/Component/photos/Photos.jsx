import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Photos = ({photo}) => {

    
    return (
        <div className='bg-purple-400 p-5 rounded-md text-center'>
            <img src={photo.flags.png} alt="" />
        </div>
    );
};

export default Photos;