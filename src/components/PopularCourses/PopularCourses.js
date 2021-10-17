import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const PopularCourses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
            fetch('./courses.json')
                .then(res => res.json())
                .then(data => setCourses(data));
    },[]);
    const popularCourses = courses.filter(course =>
            course.isPopular===1
        )
    // console.log(popularCourses);
    return (
        <Row xs={1} md={2} lg={4}>
            {
                popularCourses.map(pCourse => 
                    <Course course={pCourse}></Course>
                ) 
            }
        </Row>
    );
};

export default PopularCourses;