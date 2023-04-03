import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> Boi Bazar</h1>
                    <p className="mb-5">This is the biggest online resale book market in bangladesh. People can create seller or buyer account very easily. A seller can post his product free.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;