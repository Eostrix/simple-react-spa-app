import React from 'react';
import { Button, Card,Col,Row } from 'react-bootstrap';
import img from '../../images/course-default-logo.jpg';

const Course = (props) => {
    // console.log(props.course);
    const {name,description,instructor,price} = props.course; 
    return (
        <div className="my-2">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>                        
                        <Card.Title className="">{name}</Card.Title>
                        <h6>
                            <small>by </small>
                            {instructor}
                        </h6>                    
                        <Card.Text>                
                            {
                                description
                            }
                        </Card.Text>
                        <h5><span className="text-danger"><del>  ${price}</del></span></h5>
                        <h5>${price-1}</h5>
                        <Button variant="success" className="m-1">Enroll Now</Button>
                        <Button variant="warning" className="m-">Free Trial</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
        
    );
};

export default Course;