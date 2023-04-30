import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photos from '../photos/Photos';

const Frist = () => {
    const photos = useLoaderData()
    return (
        <div className='grid md:grid-cols-3 gap-5 mx-12 my-10'>
            {
                photos.map(photo =><Photos key ={photos.id} photo ={photo}></Photos>)
            }
        </div>
    );
};

export default Frist;