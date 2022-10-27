import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {

    const details = useLoaderData();


    return (
        <div className='checkout-page'>
            <Container className='checkout-container'>
                <h1 className='text-success'>Congratulations!! You have  purchased the course.</h1>
                <br />
                <h5>Course Name: {details.title}</h5>
                <br />
                <p>Details of your curses: {details.details}</p>

                <h4 className='text-warning'>We will contact with you soon..</h4>
            </Container>
        </div>
    );
};

export default Checkout;