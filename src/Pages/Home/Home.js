import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../assets/images/2.jpg'
import banner1 from '../../assets/images/4.jpg'
import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='carousel-container'>
            <Carousel className='fw-bolder'>
                <Carousel.Item >
                    <img
                        className="d-block image-option"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <small className='text-white m-5 p-5 fw-lighter'>Learn anything from anywhere. Digital Learning is a fun by Tech Learning BD. All the schools ans colleges can run this platform for all students.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image-option"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <small className='text-secondary m-5 p-5 fw-lighter'>Learn from the genius. Learning is a fun here. All the schools ans colleges can run this platform for all students. Just pay a visit to our courses</small>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;