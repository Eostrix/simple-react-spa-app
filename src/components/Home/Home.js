import React from 'react';
import { Row } from 'react-bootstrap';
import './Home.css';
import PopularCourses from '../PopularCourses/PopularCourses';
import homeBanner from '../../images/home-banner.jpg';

const Home = () => {
    return (
        <div className="container mt-5">
            {/* Welcome */}
            <div className="d-flex border rounded-3 mb-5">
                <img className="home-banner" src={homeBanner} alt="Home Banner"/>
                <div  className="bg-light home-welcome">
                    <h2 className="p-2">
                        Heaven of Premium Courses
                    </h2>
                    <p className="p-2">
                        Don't stay behind. Enroll now to start learning and come to the light. World needs more educated people!
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus volutpat tincidunt. Ut tempus vestibulum nulla in scelerisque. Integer in nibh id elit vehicula placerat. Nullam porttitor, velit non ultrices mattis, leo ante ullamcorper turpis, vel pharetra ex ante eget dolor. In placerat sem in tellus faucibus luctus. Sed in mi metus. Donec vel faucibus eros. Sed ut cursus dolor, ut auctor enim. Nullam sagittis hendrerit neque vitae condimentum. Ut vel odio eu magna dignissim pulvinar.
                    </p>
                </div>
            </div>
            {/* Popular Courses */}
            <div className="">
                <div className="popular-courses border rounded-3 p-2">
                    <h2>Popular in this week</h2>
                </div>
                <div className="">
                    <PopularCourses></PopularCourses>
                </div>                
            </div>

            {/*Subscription  */}
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <div className="w-50">
                    <h2>
                        Subscribe Now
                    </h2>
                    <h6>Chances to win<span className="text-danger"> 50% OFF</span> on your first purchase!</h6>
                </div>
                <div class="mx-2 input-group  w-75">
                    <input type="email" class="form-control" placeholder="example@vdemy.com" aria-label="Guest email" aria-describedby="button-addon2"/>
                    <button class="btn bg-warning btn-outline-secondary px-5" type="button" id="button-addon2">Go</button>
                </div>
            </div>            
        </div>
    );
};

export default Home;