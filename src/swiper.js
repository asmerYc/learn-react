import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Swipers() {
    

    const handleSlideChange = (newSwiper) => {
        if (newSwiper) {
          const activeIndex = newSwiper.activeIndex;
          const slides = newSwiper.slides;
    
          slides.forEach((slide, index) => {
            if (index >= activeIndex && index < activeIndex + 3) {
              slide.style.opacity = '1';
            } else {
              slide.style.opacity = '0.5';
            }
          });
        }
      };
      

  return (
    <>
      <Swiper
        onSwiper={(newSwiper) => {
            handleSlideChange(newSwiper)
          }}
        onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
