import { Accordion, AccordionButton, AccordionHeader, AccordionItem, Card, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const Section = styled.section`
    position: relative;
    z-index: 1;

    & .accordion{background-color: transparent !important;}
    & .accordion-item{background-color: transparent !important;}
    & .accordion-header{background-color: transparent !important;}
    & .accordion-button{background-color: transparent !important; box-shadow: none !important;}
    & .accordion-body{background-color: transparent !important;}
`;
// const Items = styled.div``;
// const Item = styled.div``;
const Thumbs = styled.div``;
const Thumb = styled.div``;

export default function Products() {
    return(
        <Section className="py-5 bg-dark">
            <Container className="py-5">
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-md-between mb-5">
                    <div className="col col-12 col-md-6"><Heading labelTxt={"Product"} titTxt1={`We are the company specialized in`} titTxt2={" electric cluth and brake"} txtAlign={"left"}/></div>
                    <div>
                        <DefaultButton content={"Explorer"} type={"to"} theme={"light"} to={"/company/about"} />
                    </div>
                </div>
                <Row>
                    <Accordion className="col-12 col-md-6" defaultActiveKey="0">
                        <AccordionItem eventKey="0" className="border-0 rounded-0 border-bottom border-top">
                            <AccordionButton className="text-white py-2 px-0">동해물과 백두산이</AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="text-white thumb bg-primary">asdasd</div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="1" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0">동해물과 백두산이</AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="text-white thumb bg-point">asdasd</div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0">동해물과 백두산이</AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="text-white thumb bg-gray-400">asdasd</div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="3" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0">동해물과 백두산이</AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="text-white thumb bg-light1">asdasd</div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    <Thumbs className="d-none d-md-block col-6">
                        <Thumb>
                            <div className="thumb bg-primary">12123</div>
                        </Thumb>
                        <Thumb>
                            <div className="thumb bg-point">1212</div>
                        </Thumb>
                        <Thumb>
                            <div className="thumb bg-gray-400">1212</div>
                        </Thumb>
                        <Thumb>
                            <div className="thumb bg-light1"></div>
                        </Thumb>
                    </Thumbs>
                </Row>
            </Container>
        </Section>
    )
}