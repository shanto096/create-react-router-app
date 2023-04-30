import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContactAll from '../ContactAll/ContactAll';

const Contact = () => {
    const contacts = useLoaderData();
    return (
        <div>
            <h1 className='text-center my-4 text-4xl font-bold text-purple-700 underline'>All Contact</h1>
            <div className='grid md:grid-cols-3 gap-5 mx-12 mb-5'>
                {
                  contacts.map(contact =><ContactAll key = {contact.id} contact = {contact}></ContactAll>) 
                }
            </div>
        </div>
    );
};

export default Contact;