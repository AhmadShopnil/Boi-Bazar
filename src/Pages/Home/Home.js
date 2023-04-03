import React from 'react';
import CategoryMenu from '../Shared/CategoryMenu';
import AdvertiseProduct from './AdvertisedProduct/AdvertiseProduct';
import Banner from './Banner/Banner';
import Steps from './Steps/Steps';
import BestSeller from './BestSeller/BestSeller';
import FeatureProducts from './FeatureProducts/FeatureProducts';

const Home = () => {
    return (
        <div className='min-h-screen mt-4 mx-6'>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <FeatureProducts></FeatureProducts>
            <h2 className='text-center text-3xl font-bold mt-10'>All Categories</h2>

            <CategoryMenu></CategoryMenu>
            <Steps></Steps>
            <AdvertiseProduct></AdvertiseProduct>


        </div>
    );
};

export default Home;