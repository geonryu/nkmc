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
                        <Heading labelTxt={"About Us"} titTxt1={`We are the company specialized in`} titTxt2={" electric cluth and brake"} txtAlign={"left"}/>
                        <div className="mb-2">
                            Check out Namkwang's wind power products
                        </div>
                        <div className="d-none d-md-block">
                            <DefaultButton content={"Explorer"} type={"to"} theme={"light"} to={"/company/about"} />
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
                                        <div><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1m.jpg?alt=media&token=507be5b0-b5b8-4291-a9e8-fa16f6c66e14" alt="" className="d-block w-100" /></div>
                                        <div>
                                            <div className="fw-bold text-center mt-3">Clutch Brake</div>
                                        </div>
                                    </Slide>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slide data-aos={"fade-up"} data-aos-duration={200} data-aos-delay={100}>
                                        <div><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual2m.jpg?alt=media&token=ce446a52-b0d6-461b-a241-a18a3de1a6ea" alt="" className="d-block w-100" /></div>
                                        <div>
                                            <div className="fw-bold text-center mt-3">Wind Turbine Products</div>
                                        </div>
                                    </Slide>
                                </SwiperSlide>
                            </Swiper>
                        </Products>
                    </Col>
                    <div className="text-center d-block d-md-none">
                        <DefaultButton content={"Explorer"} type={"to"} theme={"light"} to={"/company/about"} />
                    </div>
                </Row>
            </Container>
        </Section>
    )
}