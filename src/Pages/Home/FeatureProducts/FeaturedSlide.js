import React, { useRef, useState } from "react";
import book1 from "../../../assets/Images/f-1 (1).jpg"
import book2 from "../../../assets/Images/f-2.jpg"
import book3 from "../../../assets/Images/f-3.jpg"
import book4 from "../../../assets/Images/f-4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slide.css";

// import required modules
import { Pagination } from "swiper";

const FeaturedSlide = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    364: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    568: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={book1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book1} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default FeaturedSlide;