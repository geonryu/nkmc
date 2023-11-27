import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../global/heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, EffectFade, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useState } from "react";

const Section = styled.section`
    position: relative;

    &::before{
        content :'';
        display: block;
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #cde4da;
    }
    & .container{
        position: relative;
    }
    & .txtSlider{
        position: static;        
    }
    & .btns div{
        border: 1px solid #8fc63f;
    }
    @media (min-width: 768px) {
        // & .txtSlider{
        //     position: absolute;
        //     bottom: 0;
        //     left: 0;
        // }

        & .text-inner-slider *{
            height: auto;
        }
    }
`

const TextBox = styled.div``;
const Prev = styled.div``;
const Next = styled.div``;

export default function Performance() {
    const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);

    return(
        <Section className="py-5">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="mb-3 d-flex flex-column justify-conent-between mt-lg-5">
                        <Heading labelTxt={"Performance"} titTxt1={`남광전자 대표실적`} titTxt2={""} txtAlign={"left"}/>
                        <div>We are refining high-level capabilities and achievements.</div>
                        <Swiper
                            className="d-none d-md-block mt-auto pt-3 text-inner-slider mx-0"
                            onSwiper={setThumbsSwiper2}
                            loop={true}
                            effect={'fade'}
                            fadeEffect={{crossFade: true}}
                            slidesPerView={1}
                            centeredSlides={true}
                            modules={[Thumbs, EffectFade, Pagination, Navigation]}
                            pagination={{
                                type: 'fraction',
                                el: '.pagination'
                            }}
                            navigation={
                                {
                                    nextEl: ".nextBtn2",
                                    prevEl: ".prevBtn2",
                                }
                            }
                        >
                            <SwiperSlide>
                                <TextBox>
                                    <div className="text-center text-md-start fw-bold mt-3">
                                        <div>
                                            NKEC Performance as of
                                            <br />2023.11 Domestic 1
                                        </div>
                                    </div>
                                    <div className="btns mt-2 d-flex align-items-center justify-content-center justify-content-md-start">
                                        {/* <div className="d-inline-block border-point text-point px-2 fs-6 fw-bold rounded-pill">123123</div> */}
                                    </div>
                                </TextBox>
                            </SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-3">
                                <Prev className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle text-gray-600 fw-bold prevBtn2"><span className="material-symbols-outlined">arrow_back</span></button></Prev>
                                <div className="pagination" style={{"width": "auto"}}></div>
                                <Next className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle text-gray-600 fw-bold nextBtn2"><span className="material-symbols-outlined">arrow_forward</span></button></Next>
                            </div>
                        </Swiper>
                    </Col>
                    <Col xs={12} md={6}>
                        <Swiper
                            loop={true}
                            spaceBetween={12}
                            fadeEffect={{crossFade: true}}
                            slidesPerView={1}
                            centeredSlides={true}
                            modules={[Thumbs]}
                            className="visualSlider col-12"
                            speed={600}
                            thumbs={{swiper: thumbsSwiper2 && !thumbsSwiper2.destroyed ? thumbsSwiper2 : null}}
                        >
                            <SwiperSlide>
                                <TextBox>
                                    <div>
                                        <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fperformance-1.jpg?alt=media&token=6ad6054d-04a3-4720-9233-5d88e8905c7a" alt="" />
                                    </div>
                                </TextBox>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            className="d-block d-md-none"
                            onSwiper={setThumbsSwiper2}
                            loop={true}
                            effect={'fade'}
                            fadeEffect={{crossFade: true}}
                            slidesPerView={1}
                            centeredSlides={true}
                            modules={[Thumbs, EffectFade, Pagination, Navigation]}
                            pagination={{
                                type: 'fraction',
                                el: '.pagination'
                            }}
                            navigation={
                                {
                                    nextEl: ".nextBtn2",
                                    prevEl: ".prevBtn2",
                                }
                            }
                        >
                            <SwiperSlide>
                                <TextBox>
                                    <div className="text-center text-md-start fw-bold mt-3">
                                        <div>
                                            NKEC Performance as of
                                            <br />2023.11 Domestic 1
                                        </div>
                                    </div>
                                    <div className="btns mt-2 d-flex align-items-center justify-content-center justify-content-md-start">
                                        {/* <div className="d-inline-block border-point text-point px-2 fs-6 fw-bold rounded-pill">123123</div> */}
                                    </div>
                                </TextBox>
                            </SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-3">
                                <Prev className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle text-gray-600 fw-bold prevBtn2"><span className="material-symbols-outlined">arrow_back</span></button></Prev>
                                <div className="pagination" style={{"width": "auto"}}></div>
                                <Next className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle text-gray-600 fw-bold nextBtn2"><span className="material-symbols-outlined">arrow_forward</span></button></Next>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}