import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

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

export default function MainVisual() {

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
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual2m.jpg?alt=media&token=ce446a52-b0d6-461b-a241-a18a3de1a6ea" alt="" className="d-block d-lg-none w-100" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual2.jpg?alt=media&token=5dc27ad0-b261-483c-b01e-8f0e7453243f" alt="" className="d-none d-lg-block w-100" />
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide>
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1m.jpg?alt=media&token=507be5b0-b5b8-4291-a9e8-fa16f6c66e14" alt="" className="d-block d-lg-none w-100" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1.jpg?alt=media&token=13f379ec-4589-45af-aa64-e61b12f964be" alt="" className="d-none d-lg-block w-100" />
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide>
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual3m.jpg?alt=media&token=779ed2e3-fb54-4b45-8019-a23498d1ee1f" alt="" className="d-block d-lg-none w-100" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual3.jpg?alt=media&token=d732c356-c92f-40eb-8b36-b5ae19e0c527" alt="" className="d-none d-lg-block w-100" />
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