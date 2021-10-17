import React from 'react';
import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={notFoundImg} alt="404 Not Found"></img>
        </div>
    );
};

export default NotFound;