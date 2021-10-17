import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    const [courses,setCourses] = useState([]);
    useEffect(()=>{
            fetch('./courses.json')
                .then(res => res.json())
                .then(data => setCourses(data));
    },[]);
    return (
        <div className="container mt-5">
            <div>
                <h3 className="segment-title p-3 rounded-3">Heaven of Courses, Choose yours now...</h3>
            </div>
            <div>
                <Row xs={1} md={3} lg={4}>
                {
                    courses.map(course => <Course course={course}></Course>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Courses;