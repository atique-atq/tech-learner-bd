import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (

        < Row className='p-0 m-0'>
            <Col lg="3" className='left-side-container text-center p-md-2 p-sm-0'>
                {
                    courses.map(category => <Button key={category._id}
                        variant="light"
                        className='category-button d-block'>
                        <Link to={`/course/${category.course_id}`} className="text-decoration-none">
                            {category.title}
                        </Link>
                    </Button>
                    )
                }
            </Col>
            <Col lg="9">
                <div className='row px-3'>
                    {
                        courses.map(course => <Course
                            key={course.course_id}
                            courseDetails={course}
                        ></Course>)
                    }
                </div>
            </Col>
        </Row >
    );
};

export default Courses;