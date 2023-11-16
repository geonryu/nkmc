import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const Section = styled.section`
    & .linkkakao:hover a,
    & .linknaver:hover a{background-color: #8fc63f !important; color: #fff}
`;
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
                <Col xs={12} className="mb-3 position-relative">
                    <MapView id="map" className="root_daum_roughmap root_daum_roughmap_landing w-100 rounded-4 shadow-sm" style={{width: "300px", height: "420px"}}></MapView>
                    <div className="position-absolute bottom-0 left-0 w-100 py-3 bg-white fw-bold text-center fs-6 text-gray-800 z-1 rounded-4 border">부산 사하구 을숙도대로569번길 19</div>
                </Col>
                
                <Row>
                    <Col xs={12} sm={6}><div className="linkkakao"><a className={"d-block py-3 bg-gray-100 text-center fw-bold rounded"} href={"https://kko.to/358OuiMAF3"}>카카오지도 바로가기</a></div></Col>
                    <Col xs={12} sm={6}><div className="linknaver"><a className={"d-block py-3 bg-gray-100 text-center fw-bold rounded"} href={"https://naver.me/FaweYuvh"}>네이버지도 바로가기</a></div></Col>
                </Row>
            </Container>
        </Section>
    )
}