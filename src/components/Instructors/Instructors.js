import React, { useEffect, useState } from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';

const Instructors = (props) => {
    const {img,instructor,country} = props.instructor; 
    return (
        <div className="mt-2">
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>                        
                        <Card.Title className="">{instructor}</Card.Title>                   
                        <Card.Text>                
                            {
                                country
                            }
                        </Card.Text>
                        <Button variant="secondary" className="m-1">Linkedin Profile</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
        
    );
};

export default Instructors;