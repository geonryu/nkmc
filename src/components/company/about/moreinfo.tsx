import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import Heading from "../../global/heading"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import DefaultButton from "../../global/defaultButton";

const Section = styled.section`
`
const Quick = styled.div`
    height: 220px;
    display: flex;
    flex-direction: column;

    &.quick1{
        background-position: right 5% top 50%;
        background-size: 25% auto;
        background-image: url(https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmore1.png?alt=media&token=513c1ef4-a4d1-4a1e-8577-e9dac1ff45c3);
    }
    &.quick2{
        background-position: right 5% top 50%;
        background-size: 25% auto;
        background-image: url(https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmore2.png?alt=media&token=7d332d95-fc41-4b95-8f82-916c44495083);
    }
    &.quick3{
        background-position: right 5% top 50%;
        background-size: 25% auto;
        background-image: url(https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmore3.png?alt=media&token=2d1d1e69-6285-4d74-8291-5ce7ade8fb01);
    }
    & > div:last-child{margin-top: auto !important;}

    @media (min-width: 768px) {
        height: 266px;
        &.quick1{
            background-position: right -15% top 11%;
            background-size: 45% auto;
        }
        &.quick2{
            background-position: right -15% top 124%;
            background-size: 50% auto;
        }
        &.quick3{
            background-position: right -15% top 11%;
            background-size: 45% auto;
        }
    }
`;

export default function MoreInformation() {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"More Information"} titTxt1={``} titTxt2={""} txtAlign={"center"} theme={""} className={"mb-5"}/>
                <Row>
                    <Col xs={12} md={4} className="box mb-3 mb-md-0">
                        <Quick className="quick1 p-3 p-md-3 p-lg-4 p-xl-5 bg-gray-100 rounded">
                            <Heading labelTxt={"History"} titTxt1={`남광전기가`} titTxt2={" 걸어온 길"} txtAlign={"left"} theme={""} className={"mb-5"}/>
                            <div className="fs-6 d-flex justify-content-end justify-content-md-start">
                                <DefaultButton content={"Learn More"} type={"to"} theme={"light"} to={"/company/companyHistory"} />
                            </div>
                        </Quick>
                    </Col>
                    <Col xs={12} md={4} className="box mb-3 mb-md-0">
                        <Quick className="quick2 p-3 p-md-3 p-lg-4 p-xl-5 bg-gray-100 rounded">
                            <Heading labelTxt={"Location"} titTxt1={`오시는 길`} titTxt2={""} txtAlign={"left"} theme={""} className={"mb-5"}/>
                            <div className="fs-6 d-flex justify-content-end justify-content-md-start">
                                <DefaultButton content={"Learn More"} type={"to"} theme={"light"} to={"/company/location"} />
                            </div>
                        </Quick>
                    </Col>
                    <Col xs={12} md={4} className="box mb-md-0">
                        <Quick className="quick3 p-3 p-md-3 p-lg-4 p-xl-5 bg-gray-100 rounded">
                            <Heading labelTxt={"Contact Us"} titTxt1={`더 궁금한 점이`} titTxt2={" 있으신가요?"} txtAlign={"left"} theme={""} className={"mb-5"}/>
                            <div className="fs-6 d-flex justify-content-end justify-content-md-start">
                                <DefaultButton content={"Get In Touch"} type={"to"} theme={"light"} to={"/contact/contactus"} />
                            </div>
                        </Quick>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}