import React from 'react';

const Steps = () => {
    return (
        <div className='flex justify-center my-4'>
            <div>
                <h2 className='text-center text-3xl font-semibold mb-4'>Easy Steps To Add/Buy Books</h2>
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose Account Type</li>
                    <li className="step">Add Products</li>
                    <li className="step">Receive Product</li>
                </ul>
            </div>
        </div>
    );
};

export default Steps;