import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <p>Error 404: Page Not Found</p>
            <Link to="/"><button> Back to Home </button></Link>
        </div>
    );
}

export default PageNotFound;
