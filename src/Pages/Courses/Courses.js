import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h1>This is courses page {courses.length}</h1>

        </div>
    );
};

export default Courses;