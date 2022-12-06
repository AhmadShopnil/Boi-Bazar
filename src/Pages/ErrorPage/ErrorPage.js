import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
            <h2 className='text-center text-4xl font-bold mt-24'>OPPS!!, 404! PAGE NOT FOUND,  <Link className='text-blue-400' to='/'>Go Back Home</Link></h2>
        </div>
    );
};

export default ErrorPage;