import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div >
            < Row >
                <Col md="3" className='left-side-container text-center p-md-2 p-sm-5 ms-0'>
                    {
                        courses.map(category => <Button
                            key={category.id}
                            variant="light"
                            className='category-button d-block'>
                            {category.title}</Button>
                        )
                    }
                </Col>
                <Col md="9">2 of 2</Col>
            </Row >
        </div >
    );
};

export default Courses;