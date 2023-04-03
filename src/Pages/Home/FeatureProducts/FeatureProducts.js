import React from 'react';
import FeaturedSlide from './FeaturedSlide';

const FeatureProducts = () => {
    return (
        <div>
            <h2 className='text-xl font-sans'>Featured Books ---</h2>
            <div className='h-72 p-6 mt-4 bg-slate-100'>
                <FeaturedSlide></FeaturedSlide>
            </div>
        </div>
    );
};

export default FeatureProducts;