import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import Heading from "../../global/heading"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = styled.section`
`

export default function Intro() {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <Section className="py-5">
            <Container className="pt-5">
                <Row className="mb-5 align-items-center flex-column-reverse flex-md-row">
                    <Col sm={12} md={6} className="mt-3" data-aos={"fade-right"} data-aos-duration={200}>
                        <Heading labelTxt={"Our Vision"} titTxt1={`Pioneering the Future of Energy`} titTxt2={" with Over 50 Years of Expertise."} txtAlign={"left"}/>
                        <div>
                            50년 이상의 역사와 기술력을 바탕으로, 풍력 발전기 브레이크와 클러치 분야의 글로벌 선두주자로 도약하여 지속 가능한 에너지 미래를 이끌겠습니다.
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="rounded" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1.jpg?alt=media&token=13f379ec-4589-45af-aa64-e61b12f964be" />
                    </Col>
                </Row>
                <Row className="align-items-center flex-column-reverse flex-md-row-reverse">
                    <Col sm={12} md={6} className="mt-3" data-aos={"fade-left"} data-aos-duration={200}>
                        <Heading labelTxt={"Our Mission"} titTxt1={`Leading Clean Energy Solutions`} titTxt2={""} txtAlign={"left"}/>
                        혁신적인 기술로 풍력 발전기 성능 향상과 환경 보호를 실현하여 지구 환경을 보호하고 깨끗한 에너지 솔루션을 제공하겠습니다.
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="rounded" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmission.jpg?alt=media&token=2c7a6420-b257-48e2-89db-4121f2dd32d4" />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}