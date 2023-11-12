import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export default function MainVisual() {


    return (

        <>
            <section className="main_visual_wrap">
                <div className="main_visual_box">
                    <p className="main_banner_title">
                        노동으로서의 돌봄<br></br> 그리고 그 끝에 놓인 죽음
                    </p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/pmtn/2022/event/cce5f81703fd4a09962c36e2278b4be9.jpg" alt="비쥬얼슬라이드이미지1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/pmtn/2022/event/52b66089bd574343bbc2d675e2f3bb85.png" alt="비쥬얼슬라이드이미지2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/1624_450_4_6c8516d1dceb4a4b8f6336c1d0d8d15e.jpg" alt="비쥬얼슬라이드이미지3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/pmtn/2022/event/f7f2d2fe522a4b9297a39a4114620f4b.jpg" alt="비쥬얼슬라이드이미지4" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/i_1624_450_0facc6b1fcd14b89b6ceb9fcdbf1ef44.jpg" alt="비쥬얼슬라이드이미지5" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/i_1624_450_b48b04f62ab24fed85a2471497b1a93d.jpg" alt="비쥬얼슬라이드이미지6" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/pmtn/2022/event/9e8d56934f9e4fb0a3f230e94a74d43f.jpg" alt="비쥬얼슬라이드이미지7" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://contents.kyobobook.co.kr/display/INK_01_%EC%9B%B0%EC%BB%B4_01_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_1624x450_b916cc4fc3a74396825f31b31388a940.png" alt="비쥬얼슬라이드이미지8" />
                        </SwiperSlide>
                    </Swiper>
                    <ul className="swiper_text_ul">
                        <li className="swiper_text_li" >
                            <button >핫 이슈</button>
                        </li>
                        <li className="swiper_text_li">
                            <button >요즘 이 책</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>새로나온 책</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>기획전</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>eBook</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>sam</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>핫트랙스</button>
                        </li>
                        <li className="swiper_text_li">
                            <button>톡소다</button>
                        </li>
                    </ul>
                    <div className="banner_floating_box">
                        <fieldset className="banner_floating_info_box">
                            <img src="https://contents.kyobobook.co.kr/display/272_200_2cebc23b7b994a02aea232c407726bd8.jpg" alt="이연작가" />
                            <div className="banner_floating_text_box">
                                <p className="writer_mitting">
                                    작가와의 만남
                                </p>
                                <p className="writer_title">
                                    이연의, 창작가로 살아가기 위한 질문들
                                </p>
                                <p className="writer_info">
                                    by 교보문고
                                </p>
                            </div>
                        </fieldset>

                    </div>
                </div>
            </section>
        </>

    );

};