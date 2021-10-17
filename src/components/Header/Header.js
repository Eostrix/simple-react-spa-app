import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        backgroundColor:"#353535",
        borderRadius:"10px"
    }
    return (
        <div className="header-container m-0">
            <div className="pt-3 d-flex justify-content-center align-items-center">
                <img className="header-logo" src={headerLogo} alt="Logo"/>
                <div className="text-end">
                    <h1>Vdemy - Online Courses</h1>
                    <small>Your best online education partner...</small>

                </div>                
            </div>
            <Nav className="nav-bar px-5">
                <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
                <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
                <NavLink to="/portfolio" activeStyle={activeStyle}>Portfolio</NavLink>
            </Nav>
        </div>
    );
};

export default Header;