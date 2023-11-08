import React from "react";
import "../../../css/Common/Aside/aside.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
export default function Aside() {

    return (
        <>
            <aside className="aside_box">
                <div className="aside_fly_menu">
                    <Link to="#">
                        <img src="https://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/11/02/72505/84x120.png" alt="이미지1" />
                    </Link>
                </div>
                <div className="aside_fly_event">
                    <Link to="#" className="aside_fly_event_link">이벤트</Link>
                </div>
                <div className="aside_swiper--box">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/c_200_200_39c82e312a2748d1825807aae149f912.jpg" className="aside_img" alt="이미지1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/c_200_200_39c82e312a2748d1825807aae149f912.jpg" className="aside_img" alt="이미지1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/c_200_200_39c82e312a2748d1825807aae149f912.jpg" className="aside_img" alt="이미지1" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className="aside_coupon_text">
                    <Link to="#" className="aside_coupon_link"></Link>쿠폰/혜택
                </p>

            </aside>
        </>

    )

};