import React from 'react';
import bestSeller from "../../../assets/Images/bestSeler.jpg"
import { Link } from 'react-router-dom';
const BestSeller = () => {
    return (
        <div className="grid grid-cols-1 my-4 p-10 md:grid-cols-2 gap-8 md:my-8 md:p-20 bg-gray-100">
            <div>
                <img className='rounded-3xl w-full h-full' src={bestSeller} alt="" />

            </div>
            <div className='grid items-center '>
                {/* <h2 className='font-bold text-2xl'>Best Selling Author</h2> */}
                <p className='text-2xl font-serif '><span className='text-xs '>Shopnil</span> Best Selling Author, <br /> is an experienced and knowledgeable book seller with exceptional communication skills. Shopnil is up-to-date with the latest releases and literary trends, ensuring that his books are well-organized and in good condition.</p>
                <Link to="/bestSellerDetails" className='underline underline-offset-4 text-blue-300'>Learn More</Link>
            </div>
        </div>
    );
};

export default BestSeller;