import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";

const Section = styled.section`
    position: relative;
    &::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        bottom: 0; 
        background-color: #EEF7E2;
    }
    & > *{
        position: relative;
    }
`;
const Contact = styled.div`
    height : 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const handleCopy = () => {
    window.navigator.clipboard.writeText("nkclutch@hanmail.net");
}

export default function VariousContact() {
    return (
        <Section className={"py-5"}>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Contact className="rounded-4 border bg-white p-3">
                            <Heading labelTxt={"전화문의"} titTxt1={``} titTxt2={""} txtAlign={"left"}/>
                            <div className="my-auto">
                                <div className="fw-bold">고객응대 운영시간</div>
                                <div className="fs-6">평일 09:00 ~ 18:00</div>
                            </div>
                            <div><a href="tel:051-201-3600" className="d-flex align-items-center fw-bold text-gray-600">051-201-3600<span className="material-symbols-outlined fs-6">call_made</span></a></div>
                        </Contact>
                    </Col>
                    <Col xs={12} md={4}>
                        <Contact className="rounded-4 border bg-white p-3">
                            <Heading labelTxt={"Email 문의"} titTxt1={``} titTxt2={""} txtAlign={"left"}/>
                            <div>
                                <span className="d-block fs-6 text-gray-500">Click to copy clipboard.</span>
                                <button onClick={handleCopy} type="button" className="fw-bold">nkclutch@hanmail.net</button>    
                            </div>
                        </Contact>
                    </Col>
                    <Col xs={12} md={4}>
                        <Contact className="rounded-4 border bg-white p-3">
                            <Heading labelTxt={"제품/연구/제휴 문의"} titTxt1={``} titTxt2={""} txtAlign={"left"}/>
                            <div><a href="#" className="d-flex align-items-center justify-content-end fw-bold text-gray-600">문의 바로가기<span className="material-symbols-outlined">call_made</span></a></div>
                        </Contact>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}