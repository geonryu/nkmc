import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";
import DefaultButton from "../../global/defaultButton";

const Section = styled.section`overflow: hidden`;

export default function YawBrakeIntro() {
    return (
        <Section className="py-5">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={12} md={5} className="mx-auto mx-md-0"><img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2F20231018_130658.jpg?alt=media&token=c864c9fb-ead1-4a4c-976c-cc9a1e59fda1" alt="" /></Col>
                    <Col xs={12} md={7} className="pt-5 pt-md-0">
                        <Heading labelTxt={"Instalation"} titTxt1={`Best Yaw & Rotor Brake`} titTxt2={"Leader In Korea"} txtAlign={"left"}/>
                        <div className="py-3">
                            Our custom-made Yaw Brake meets leading wind turbine manufacturers’ requirements and incorporate the latest technologies and industry findings to seek the most cost-effective solution.
                        </div>
                        <div className="py-3">
                            <Row>
                                <Col className="fw-bold border-bottom border-right bg-gray-100 py-2 text-center">Company</Col>
                                <Col className="fw-bold border-bottom border-right bg-gray-100 py-2 text-center">Location</Col>
                                <Col className="fw-bold border-bottom border-right bg-gray-100 py-2 text-center">Type</Col>
                                <Col className="fw-bold border-bottom border-right bg-gray-100 py-2 text-center">Product</Col>
                                <Col className="fw-bold border-bottom bg-gray-100 py-2 text-center">Quantity</Col>
                            </Row>
                            <Row className="border-right border-bottom border-left">
                                <Col className="border-right py-2 text-center">하장3풍력개발</Col>
                                <Col className="border-right py-2 text-center">강원도 삼척시 하장면</Col>
                                <Col className="border-right py-2 text-center">2MW</Col>
                                <Col className="border-right py-2 text-center">Yaw Brake</Col>
                                <Col className="py-2 text-center">6</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="text-center pt-3">
                <DefaultButton content={"Download Brochure"} type={"to"} theme={"light"} to={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2FIntroduction_of_NKEC.pdf?alt=media&token=52fbf732-c973-4482-9586-07efc09bf416"} />
                </div>
            </Container>
        </Section>
    )
}