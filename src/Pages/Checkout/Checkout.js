import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {

    const details = useLoaderData();


    return (
        <div className='checkout-page'>
            <div className='checkout-container'>
                <h3 className='text-success'>Congratulations!! </h3>
                <br />
                <h5>Course Name: {details.title}</h5>
                <br />
                <p>Details of your curses: {details.details}</p>
                <h4 className='text-warning'>We will contact with you soon..</h4>
            </div>
        </div>
    );
};

export default Checkout;