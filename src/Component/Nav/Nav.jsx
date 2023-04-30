import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-purple-500 p-4 text-2xl font-bold text-center text-white'>
            <Link className='m-4 hover:text-red-500 focus:text-red-500' to="/">Home</Link>
            <Link className='m-4 hover:text-red-500 focus:text-red-500' to="/about">About</Link>
            <Link className='m-4 hover:text-red-500 focus:text-red-500' to="/friends">Friends</Link>
            <Link className='m-4 hover:text-red-500 focus:text-red-500' to="/contact">Contact</Link>
            <Link className='m-4 hover:text-red-500 focus:text-red-500' to="/blog">Blog</Link>
        </div>
    );
};

export default Nav;