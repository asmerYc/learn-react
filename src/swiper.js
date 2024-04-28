import React, { useRef, useState } from 'react';
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
    
    //   const handleSlideChange = (newSwiper) => {
   
    //     newSwiper.slides.forEach(slide => {
    //       slide.classList.remove('left-boundary');
    //     });
      
 
    //     if (newSwiper.isBeginning) {
    //       newSwiper.slides[newSwiper.realIndex + 3]?.classList.add('left-boundary');
    //     }
      

    //     if (newSwiper.isEnd) {
    //       newSwiper.slides[newSwiper.realIndex - 1 ]?.classList.add('left-boundary');
           
    //     }
      

    //     if (!newSwiper.isBeginning && !newSwiper.isEnd) {
    //       newSwiper.slides[newSwiper.realIndex + 3]?.classList.add('left-boundary');
    //       newSwiper.slides[newSwiper.realIndex - 1 ]?.classList.add('left-boundary');
    //     }
    //     console.log(newSwiper.slides[newSwiper.realIndex - 1 ]?.classList, '+++++');
    //   };

    const handleSlideChange = (newSwiper) => {
        // 清除之前设置的样式
        // 这里可以不清除之前设置的样式，因为下面会根据情况添加新的样式
      
        // 监听 transitionEnd 事件，在切换完成后添加样式

        if (newSwiper.isBeginning) {
            newSwiper.slides[newSwiper.realIndex + 3]?.classList.add('left-boundary');
          }
        
        newSwiper.on('transitionEnd', () => {
          const activeIndex = newSwiper.realIndex;
          const slides = newSwiper.slides;
      
          // 清除所有幻灯片的样式
          slides.forEach(slide => {
            slide.classList.remove('left-boundary');
          });
      
          // 如果左边没有 slider，则添加右边的蒙版效果
          if (newSwiper.isBeginning) {
            const rightSlide = slides[activeIndex + 3];
            if (rightSlide) {
              rightSlide.classList.add('left-boundary');
            }
          }
      
          // 如果右边没有 slider，则添加左边的蒙版效果
          if (newSwiper.isEnd) {
            const leftSlide = slides[activeIndex - 1];
            if (leftSlide) {
              leftSlide.classList.add('left-boundary');
            }
          }
      
          // 如果左右都有 slider，则分别设置左右两边即将展示的 slide 样式
          if (!newSwiper.isBeginning && !newSwiper.isEnd) {
            const leftSlide = slides[activeIndex - 1];
            const rightSlide = slides[activeIndex + 3];
            if (leftSlide) {
              leftSlide.classList.add('left-boundary');
            }
            if (rightSlide) {
              rightSlide.classList.add('left-boundary');
            }
          }
        });
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
      </Swiper>
    </>
  );
}
