import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = styled.section`
    
`;
const Content = styled.div`
    
`;
const Wrap = styled.div`
    // background-image: url(https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fwindpowe3d.png?alt=media&token=9baad633-b25a-45d8-987d-f83aca64fd82);
    // background-size: contain;
    // background-position: center right -42%;
    @media (min-width: 420px) {
        // background-position: center right -15%;
    }
    @media (min-width: 576px) {
        // background-position: center right 0%;
    }
    @media (min-width: 768px) {
        
    }
    @media (min-width: 992px) {
        
    }
    @media (min-width: 1200px) {
        
    }
`;
const Txt = styled.div`
    & span{position: relative}
    & span::before{content: '';display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-color: #8FC63F ; }
    & b{position: relative; z-index: 1;}
`;

export default function Intro() {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <Section>
            <Container> 
                <Wrap className="py-5">
                    <div data-aos={"fade-up"} data-aos-duration={200}>
                        <Heading labelTxt={"Our History"} titTxt1={`A Global Leader For`} titTxt2={" Yaw & Rotor Brake"} txtAlign={"center"}/>
                    </div>
                    <Content>
                        <Col xs={12} md={7} className="text-center mx-auto">
                            <Txt data-aos={"fade-up"} data-aos-duration={200}>
                                <div className="en mb-2 fs-5 z-1">
                                    We will strive to become an <span><b className="fw-bold">eco-friendly</b></span> energy company based on the abundant experience and know-how of clutch and brake technology over <span><b className="fw-bold">50 years ago.</b></span>
                                </div>
                                {/* <div className="ko text-gray-600 fs-6">
                                    남광전기는 50년 이상된 clutch, brake 기술의 풍부한 경험과 노하우를 바탕으로 친환경에너지 전문기업으로 나가기 위해 노력하겠습니다.
                                </div> */}
                            </Txt>
                            <div data-aos={"fade-up"} data-aos-duration={200}><DefaultButton content={"Our History"} type={"to"} theme={"light"} to={"/company/about"} /></div>
                        </Col>
                    </Content>
                </Wrap>
            </Container>
        </Section>
    )
}