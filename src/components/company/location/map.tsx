import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const Section = styled.section``;
const MapView = styled.div`
    width: 100%;
    height: 420px;
`;

const {kakao} = window;
declare global {
    interface Window {
      kakao: any;
    }
}
console.log(kakao)
export default function MapKakao() {
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(35.0872593026274, 128.966785535675),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        let markerPosition = options.center;
        let marker = new kakao.maps.Marker({
            "position" : markerPosition
        });
        
        marker.setMap(map);
      }, []);
    
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"Location"} titTxt1={`오시는 길`} titTxt2={""} txtAlign={"center"}/>
                <Col xs={12} className="mb-3">
                    <MapView id="map" className="root_daum_roughmap root_daum_roughmap_landing w-100 rounded" style={{width: "300px", height: "420px"}}></MapView>
                </Col>
                
                <Row>
                    <Col xs={12} sm={6}><a className={"d-block py-3 bg-gray-200 text-center fw-bold rounded"} href={"https://kko.to/358OuiMAF3"}>카카오지도 바로가기</a></Col>
                    <Col xs={12} sm={6}><a className={"d-block py-3 bg-gray-200 text-center fw-bold rounded"} href={"https://naver.me/FaweYuvh"}>네이버지도 바로가기</a></Col>
                </Row>
            </Container>
        </Section>
    )
}