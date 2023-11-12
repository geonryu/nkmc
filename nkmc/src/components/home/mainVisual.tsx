import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, FreeMode, Pagination, Thumbs } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { useState } from "react";
import { Container } from "react-bootstrap";

const Section = styled.section``;
const VisualSlider = styled.div`
    & .swiper-slide img{transition: all 4s;}
    & .swiper-slide.swiper-slide-active img{transform: scale(1.05);}
`;
const TextSlider = styled.div`
    position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 10;
    & .swiper{height: 100%;}
    & .swiper-wrapper{height: 100%;}
    & .swiper-slide{display: flex; align-items: center; height: 100%;background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))}
    
`;
const Slide = styled.div`
    background-position: center center;
    background-size: cover;
`;
const VisualTit = styled.h2`width: 100%;`;
const VisualTxt = styled.div``;

export default function MainVisual() {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <Section className="py-5">
            <div className="position-relative">
                <VisualSlider>
                    <Swiper
                        pagination={true}
                        loop={true}
                        effect={'fade'}
                        // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[Pagination, Autoplay, EffectFade]}
                        className="mySwiper2"
                        speed={1500}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <Slide>
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual-m1.jpg?alt=media&token=4e3a5f5c-0eb0-409b-9cf6-fe94914f57cb" alt="" className="d-block d-lg-none w-100" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual1.jpg?alt=media&token=04898aaa-e65f-4589-a47a-7d09bc1e2704" alt="" className="d-none d-lg-block w-100" />
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide>
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual-m2.jpg?alt=media&token=edf82d49-9d5f-466e-9eb2-3e50dcc9e436" alt="" className="d-block d-lg-none w-100" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual2.jpg?alt=media&token=f64090c5-3b7e-4e5c-b1b1-859668131914" alt="" className="d-none d-lg-block w-100" />
                            </Slide>
                        </SwiperSlide>
                    </Swiper>
                </VisualSlider>
                <TextSlider className="d-flex justify-content-center align-items-center text-center">
                    <VisualTit className="fw-bold col col-md-8 col-lg-6 fs-1 text-white text-shadow">
                        {/* <span className="fs-5 mb-1 fw-bold text-point d-block">NAMKWANG</span> */}
                        NamKwang Electric Co.<br className="d-block d-md-none" /> Creats The Future
                    </VisualTit>
                    {/* <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        effect={'fade'}
                        slidesPerView={1}
                        freeMode={true}
                        modules={[Thumbs, EffectFade]}
                        className="mySwiper"
                        fadeEffect={{crossFade: true}}
                        speed={1000}
                    >
                        <SwiperSlide className="fs-3 fw-bold text-white">
                            <Container className="h-100 d-flex flex-column justify-content-center">
                                <VisualTit className="fw-bold col col-md-8 col-lg-6 fs-1">
                                    <span className="fs-5 mb-1 fw-bold text-point d-block">NAMKWANG</span>
                                    The company specializing in electric clutch and brake
                                </VisualTit>
                                <VisualTxt className="fs-5 fw-normal col col-lg-8">
                                    NamKwang Electric Co. will strive to become an eco-friendly energy company based on the abundant experience and know-how of clutch and brake technology over 50 years ago.
                                </VisualTxt>
                            </Container>
                        </SwiperSlide>
                        <SwiperSlide className="fs-3 fw-bold text-white">
                            <Container className="h-100 d-flex flex-column justify-content-center">
                                <VisualTit className="fw-bold col-md-8 col-lg-6 fs-1">
                                    <span className="fs-5 mb-1 fw-bold text-point d-block">남광전기</span>
                                    The company specializing in electric clutch and brake
                                </VisualTit>
                                <VisualTxt className="fs-5 fw-normal col-lg-8">
                                    남광전기는 50년 이상된 clutch, brake 기술의 풍부한 경험과 노하우를 바탕으로 친환경에너지 전문기업으로 나가기 위해 노력하겠습니다.
                                </VisualTxt>
                            </Container>
                        </SwiperSlide>
                    </Swiper> */}
                </TextSlider>
            </div>
        </Section>
    )
}