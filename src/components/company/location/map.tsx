import styled from "styled-components"
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../global/heading";
import { useEffect } from "react";

const Section = styled.section``;
const MapView = styled.div`
    width: 100%;
    height: 420px;
`;

export default function MapKakao() {
    useEffect(()=> {
        new daum.roughmap.Lander({
            "timestamp" : "1699974077422",
            "key" : "2gthh",
        }).render();
    }, [])

    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"Location"} titTxt1={`오시는 길`} titTxt2={""} txtAlign={"center"}/>
                <Col xs={12}>
                    <MapView id="daumRoughmapContainer1699974077422" className="root_daum_roughmap root_daum_roughmap_landing"></MapView>
                </Col>
                
                <Row>
                    <Col xs={12} sm={6}><a className={"d-block py-3 bg-gray-200 text-center fw-bold rounded"} href={"https://kko.to/358OuiMAF3"}>카카오지도 바로가기</a></Col>
                    <Col xs={12} sm={6}><a className={"d-block py-3 bg-gray-200 text-center fw-bold rounded"} href={"https://naver.me/FaweYuvh"}>네이버지도 바로가기</a></Col>
                </Row>
            </Container>
        </Section>
    )
}