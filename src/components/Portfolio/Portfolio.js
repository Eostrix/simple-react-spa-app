import React from 'react';
import { Button } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className="container">
            <h1 className="mt-5">Explore our Works & Testimonials</h1>
            <div className="my-5">
                <hr className="bg-secondary"/>
                <div className="d-flex my-2 p-4 border rounded-3">                       
                    <div className="w-75">
                        <h3>Best Online Eduction Award 2021</h3>
                        <p>
                            Vdemy wins the Best Online Education Award - 2021 in a row.
                            Another great achievement.
                        </p>
                    </div>
                    <div className="25">
                        <Button variant="warning" className="m-2">Read More</Button>
                        <Button variant="primary" >Share Now</Button>
                    </div>               
                </div>            
                <div className="d-flex my-2 p-4 border rounded-3">                       
                    <div className="w-75">
                        <h3>Best Online Eduction Award 2020</h3>
                        <p>
                            Vdemy wins the Best Online Education Award - 2020 in a row.
                            Another great achievement.
                        </p>
                    </div>
                    <div className="25">
                        <Button variant="warning" className="m-2">Read More</Button>
                        <Button variant="primary" >Share Now</Button>
                    </div>               
                </div>            
                <div className="d-flex my-2 p-4 border rounded-3">                       
                    <div className="w-75">
                        <h3>Best Online Eduction Award 2019</h3>
                        <p>
                            Vdemy wins the Best Online Education Award - 2019 in a row.
                            Another great achievement.
                        </p>
                    </div>
                    <div className="25">
                        <Button variant="warning" className="m-2">Read More</Button>
                        <Button variant="primary" >Share Now</Button>
                    </div>               
                </div>            
                <div className="d-flex my-2 p-4 border rounded-3">                       
                    <div className="w-75">
                        <h3>Best Online Eduction Award 2018</h3>
                        <p>
                            Vdemy wins the Best Online Education Award - 2018 in a row.
                            Another great achievement.
                        </p>
                    </div>
                    <div className="25">
                        <Button variant="warning" className="m-2">Read More</Button>
                        <Button variant="primary" >Share Now</Button>
                    </div>               
                </div>            
                <div className="d-flex my-2 p-4 border rounded-3">                       
                    <div className="w-75">
                        <h3>Best Online Eduction Award 2017</h3>
                        <p>
                            Vdemy wins the Best Online Education Award - 2017 in a row.
                            Another great achievement.
                        </p>
                    </div>
                    <div className="25">
                        <Button variant="warning" className="m-2">Read More</Button>
                        <Button variant="primary" >Share Now</Button>
                    </div>               
                </div>            
            </div>
        </div>
    );
};

export default Portfolio;