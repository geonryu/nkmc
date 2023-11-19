import { Container } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../global/heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

const Section = styled.section`
    
`;
export default function ElectroMagneticClutch() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"Clutch"} titTxt1={`Electro Magnetic`} titTxt2={" Clutches"} txtAlign={"center"}/>
                <Swiper
                        loop={true}
                        slidesPerView={2}
                        modules={[Navigation]}
                        className="brake"
                        speed={600}
                        slideToClickedSlide={true}
                        spaceBetween={30}
                        navigation={
                            {
                                nextEl: ".nextBtn",
                                prevEl: ".prevBtn",
                            }
                        }
                        breakpoints={{
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                            992: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide className="bg-primary">zzzzz1</SwiperSlide>
                        <SwiperSlide className="bg-primary">zzzzz2</SwiperSlide>
                        <SwiperSlide className="bg-primary">zzzzz3</SwiperSlide>
                        <SwiperSlide className="bg-primary">zzzzz4</SwiperSlide>
                        <SwiperSlide className="bg-primary">zzzzz5</SwiperSlide>
                        <SwiperSlide className="bg-primary">zzzzz6</SwiperSlide>
                    </Swiper>
            </Container>
        </Section>
    )
}