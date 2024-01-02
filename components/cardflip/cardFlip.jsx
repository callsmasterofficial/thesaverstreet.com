import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards,Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';



export default function Card() {
   
   return(
      <div className='swiper-box'>
   <Swiper
   effect={"cards"}
   grabCursor={true}
   modules={[EffectCards,Navigation, Pagination]}
   className="mySwiper"
   loop={true}
   clickable= {true}
   slideToClickedSlide={true}
   navigation= {{prevEl: '.swiper-button-prev',}}
 >

   <SwiperSlide className='swiperSlide'>
      <img src="" alt=""  style={{ height: "100%"}}/>
   </SwiperSlide>
   <SwiperSlide className='swiperSlide'>
      <img src="./images/swipper.jpg" style={{ height: "100"}} alt="" />
   </SwiperSlide>
    
 <div className="swiper-button-prev"></div>
 </Swiper>
 </div>
  )  
  }

