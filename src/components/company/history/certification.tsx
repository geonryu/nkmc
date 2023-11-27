import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Heading from "../../global/heading";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

const Section = styled.section``;
const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 9999;
    align-items: center;
    justify-content: center;

    & img{
        max-width: 80%;
        max-height: 80vh;
        width: auto;
        margin: 0 auto;
    }
`;

export default function Certification() {
    const [pop, setPop] = useState("");

    const handlePop = (e : React.MouseEvent<HTMLDivElement>) => {
        const i = e.currentTarget.getAttribute("data-idx") || "";
        setPop(i);
    }
    const closePop = () => {
        setPop("");
    }
    const protectPop = (e : React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    return (
        <Section className="py-5 bg-gray-100">
            <Container>
                <Heading labelTxt={"Certification"} titTxt1={`인증현황`} titTxt2={""} txtAlign={"center"}/>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={2.5}
                    loop={true}
                    centeredSlides={true}
                    className="certSlider col-12"
                    speed={600}
                    slideToClickedSlide={true}
                    breakpoints={{
                        992: {
                            slidesPerView: 3,
                            loop : false,
                            centeredSlides: false
                        },
                    }}
                >
                    <SwiperSlide>
                        <div onClick={handlePop} className="thumb" data-idx="0">
                            <img className="rounded shadow-sm" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-dnv.jpg?alt=media&token=a87a45b5-17e7-47c3-ba49-83b589fbf1f3" alt="" />
                        </div>
                        <div className="text-center mt-3 fw-bold fs-6">DNV Conformity Statement</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div onClick={handlePop} className="thumb" data-idx="1">
                            <img className="rounded shadow-sm" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-iso.jpg?alt=media&token=c6342e9c-aad6-45f7-82fa-42ea8ed07b3d" alt="" />
                        </div>
                        <div className="text-center mt-3 fw-bold fs-6">ISO-9001</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div onClick={handlePop} className="thumb" data-idx="2">
                            <img className="rounded shadow-sm" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-qs.jpg?alt=media&token=86a942e0-3e9a-408c-a3a3-0d5a6259f9bd" alt="" />
                        </div>
                        <div className="text-center mt-3 fw-bold fs-6">QS-9000</div>
                    </SwiperSlide>
                </Swiper>
                <div className="text-center fw-bold fs-6 mt-5 text-point">Click to view larger</div>
            </Container>
            <Popup onClick={closePop} className={`${pop === "0" || pop === "1" || pop === "2" ? "d-flex" : "d-none"}`}>
                <Container onClick={protectPop} className="d-flex justify-content align-items-center">
                    {pop === "0" ? <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-dnv.jpg?alt=media&token=a87a45b5-17e7-47c3-ba49-83b589fbf1f3"/> : ""}
                    {pop === "1" ? <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-iso.jpg?alt=media&token=c6342e9c-aad6-45f7-82fa-42ea8ed07b3d"/> : ""}
                    {pop === "2" ? <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fcert-qs.jpg?alt=media&token=86a942e0-3e9a-408c-a3a3-0d5a6259f9bd"/> : ""}
                </Container>
            </Popup>
        </Section>
    )
}