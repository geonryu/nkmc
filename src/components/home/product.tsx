import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const Section = styled.section`
    
`;
const Products = styled.div`
`;
const Slide = styled.div`
`;

export default function Product() {

    return(
        <Section className="py-5 bg-gray-100">
            <Container> 
                <Row>
                    <Col xs={12} md={6} lg={4} className="d-flex flex-column justify-content-center">
                        <Heading labelTxt={"About Us"} titTxt1={`We are a company specialized`} titTxt2={" in electric clutch and brake"} txtAlign={"left"}/>
                        <div className="mb-2">
                            Check out Namkwang's wind power products
                        </div>
                        <div className="d-none d-md-block">
                            <DefaultButton content={"Explorer"} className/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Products className="py-3">
                            <Swiper
                                pagination={true}
                                loop={true}
                                spaceBetween={24}
                                slidesPerView={2}
                                // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[Pagination, Autoplay, EffectFade]}
                                className="mySwiper"
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <Slide data-aos={"fade-up"} data-aos-duration={200}>
                                        <div><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual-m1.jpg?alt=media&token=4e3a5f5c-0eb0-409b-9cf6-fe94914f57cb" alt="" className="d-block w-100" /></div>
                                        <div>
                                            <div className="fw-bold text-center mt-3">Clutch Brake</div>
                                        </div>
                                    </Slide>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slide data-aos={"fade-up"} data-aos-duration={200} data-aos-delay={100}>
                                        <div><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmain-visual-m2.jpg?alt=media&token=edf82d49-9d5f-466e-9eb2-3e50dcc9e436" alt="" className="d-block w-100" /></div>
                                        <div>
                                            <div className="fw-bold text-center mt-3">Wind Turbine Products</div>
                                        </div>
                                    </Slide>
                                </SwiperSlide>
                            </Swiper>
                        </Products>
                    </Col>
                    <div className="text-center d-block d-md-none">
                        <DefaultButton content={"Explorer"} className/>
                    </div>
                </Row>
            </Container>
        </Section>
    )
}