import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    let courseDetails = useLoaderData();

    return (
        <div className='courseDetails'>
            <h1>This is our courseDetails page {courseDetails.title}</h1>

        </div>
    );
};

export default CourseDetails;