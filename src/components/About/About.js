import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructors from '../Instructors/Instructors';
import './About.css'

const About = () => {
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{
            fetch('./instructor.json')
                .then(res => res.json())
                .then(data => setInstructors(data));
    },[]);
    return (
        <div className="container">
            <div className="mt-5">
                <h2 className="about-header p-3 rounded-3">Who are we</h2>
                <p>
                    Vdemy - renowned international platform of Online Courses.
                    From Art to Engineering, Archaeology to Computer Science, Medical Science to Philosophy - we have vast collection in major fields of current world. 
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque praesentium dignissimos. Pariatur aut hic, reiciendis accusamus vero laudantium animi autem, eaque nisi, blanditiis unde! Vero aliquid nobis cumque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque praesentium dignissimos. Pariatur aut hic, reiciendis accusamus vero laudantium animi autem, eaque nisi, blanditiis unde! Vero aliquid nobis cumque temporibus
                </p>
            </div>
            <div className="mt-5">
                <h2 className="about-header p-3 rounded-3">Our Mission</h2>
                <p>
                    Our main goal is to make knowledge available to everywhere & everyone around the globe, around the world if possible.  
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque praesentium dignissimos. Pariatur aut hic, reiciendis accusamus vero laudantium animi autem, eaque nisi, blanditiis unde! Vero aliquid nobis cumque temporibusLorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque praesentium dignissimos. Pariatur aut hic, reiciendis accusamus vero laudantium animi autem, eaque nisi, blanditiis unde! Vero aliquid nobis cumque temporibus
                </p>
            </div>
            <div className="mt-5 mb-5">
                <div className="about-header rounded-3 p-3">
                    <h3>Meet our Instructors</h3>
                </div>
                <Row xs={1} md={3} lg={4}>{
                        instructors.map(instructor =>  
                            <Instructors key={instructor.id} instructor={instructor}></Instructors>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default About;