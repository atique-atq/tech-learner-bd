import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../assets/images/2.jpg'
import banner1 from '../../assets/images/4.jpg'
import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel className='fw-bolder'>
                <Carousel.Item >
                    <img
                        className="d-block w-100 image-brightness"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <small className='text-white ps-5 pe-5'>Learn anything from anywhere. Digital Learning is a fun by Tech Learning BD. All the schools ans colleges can run this platform for all students.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <small className='text-secondary ps-5 pe-5'>Learn from the genius. Learning is a fun here. All the schools ans colleges can run this platform for all students. Just pay a visit to our courses</small>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;