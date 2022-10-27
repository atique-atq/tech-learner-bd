import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Button from 'react-bootstrap/Button';
import { FaCloudDownloadAlt, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    let courseDetails = useLoaderData();
    let { title, details, img_url, course_id, author, author_img_url, ratings } = courseDetails;
    const ref = React.createRef();

    return (
        <div>
            <Card className='card-area' ref={ref}>
                <div className='d-flex flex-md-row flex-column justify-content-around mt-2'>
                    <h3 className='text-success fw-bolder me-5'>{title}</h3>
                    <Link>

                        <Pdf targetRef={ref} filename="courseDetails.pdf">
                            {({ toPdf }) => <Button onClick={toPdf} className='rounded-0' variant="outline-primary">
                                <FaCloudDownloadAlt></FaCloudDownloadAlt>  DownLoad PDF
                            </Button>}
                        </Pdf>
                    </Link>
                </div>
                <Card.Img variant="top" src={img_url} className="w-75 card-img" />
                <Card.Body>
                    <h4>Details of {title} Course:</h4>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-around align-items-center'>
                        <p>Rating: <span className='text-warning'> {ratings} <FaStar></FaStar> </span> </p>
                        <p>Author : <strong> {author}</strong></p>
                        <img src={author_img_url} className="w-25 rounded-circle" alt="author" />
                    </div>
                    <Link to={`/checkout/${course_id}`}>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseDetails;