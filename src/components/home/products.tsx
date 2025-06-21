import { Accordion, AccordionButton, AccordionItem, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { useState } from "react";
import ThumbMagneticClutchBrake from "./productsThumbs/magneticClutchBrake";
import ThumbElectroMagneticBrake from "./productsThumbs/electroMagneticBrake";
import ThumbElectroMagneticClutch from "./productsThumbs/electroMagneticClutch";
import ThumbDiscBrake from "./productsThumbs/discBrake";
import ThumbWindPower from "./productsThumbs/windPower";

const Section = styled.section`
    position: relative;
    z-index: 1;

    & .accordion{background-color: transparent !important;}
    & .accordion-item{background-color: transparent !important;}
    & .accordion-header{background-color: transparent !important;}
    & .accordion-button{background-color: transparent !important; box-shadow: none !important;}
    & .accordion-body{background-color: transparent !important;}

    & .acc-btn::after{content: none;}
    & .acc-btn span{transform: rotate(180deg); transition: transform: 0.2s;}
    & .acc-btn.collapsed span{transform: rotate(0);}
`;

const Thumbs = styled.div``;

export default function Products() {
    const [idx, setIdx] = useState("0");

    const handleAccordion = (e:React.MouseEvent<HTMLDivElement>) => {
        const idx = e.currentTarget.getAttribute("data-idx") || "0";
        setIdx(idx);
    }

    return(
        <Section className="py-5 bg-dark">
            <Container className="py-5">
                <Row className="align-items-end">
                    <Accordion className="col-12 col-md-7" defaultActiveKey="0">
                        <div className="justify-content-md-between mb-5">
                            <Heading labelTxt={"Product"} titTxt1={`We are the company specialized in`} titTxt2={" electric cluth and brake"} txtAlign={"left"}/>
                            <DefaultButton content={"Explorer"} type={"to"} theme={"light"} to={"/product/clutchBrake"} />
                        </div>
                        <AccordionItem onClick={handleAccordion} data-idx="0" eventKey="0" className="border-0 rounded-0 border-bottom border-top">
                            <AccordionButton className="text-white py-2 px-0 fw-bold acc-btn">
                                <div className="w-100">MAGNETIC CLUTCH & BRAKE</div>
                                <span className="material-symbols-outlined">expand_more</span>
                            </AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="d-md-none"><ThumbElectroMagneticBrake /></div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem onClick={handleAccordion} data-idx="1" eventKey="1" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0 fw-bold acc-btn">
                                <div className="w-100">ELECTRO MAGNETIC BRAKE</div>
                                <span className="material-symbols-outlined">expand_more</span>
                            </AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="d-md-none"><ThumbElectroMagneticBrake /></div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem onClick={handleAccordion} data-idx="2" eventKey="2" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0 fw-bold acc-btn">
                                <div className="w-100">ELECTRO MAGNETIC CLUTCH</div>
                                <span className="material-symbols-outlined">expand_more</span>
                            </AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="d-md-none"><ThumbElectroMagneticClutch /></div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem onClick={handleAccordion} data-idx="3" eventKey="3" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0 fw-bold acc-btn">
                                <div className="w-100">DISC BRAKE</div>
                                <span className="material-symbols-outlined">expand_more</span>
                            </AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="d-md-none"><ThumbDiscBrake /></div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem onClick={handleAccordion} data-idx="4" eventKey="4" className="border-0 rounded-0 border-bottom">
                            <AccordionButton className="text-white py-2 px-0 fw-bold acc-btn">
                                <div className="w-100">WIND POWER</div>
                                <span className="material-symbols-outlined">expand_more</span>
                            </AccordionButton>
                            <AccordionBody className="p-0 py-3">
                                <div className="text-white mb-3">동해물과 백둣나이 마르고 닳도록 하는님이 보우하사 우리나라 만세</div>
                                <div className="d-md-none"><ThumbWindPower /></div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    <Thumbs className="d-none d-md-block col-5">
                        { idx === '0' ? <ThumbMagneticClutchBrake /> : null }
                        { idx === '1' ? <ThumbElectroMagneticBrake /> : null }
                        { idx === '2' ? <ThumbElectroMagneticClutch /> : null }
                        { idx === '3' ? <ThumbDiscBrake /> : null }
                        { idx === '4' ? <ThumbWindPower /> : null }
                    </Thumbs>
                </Row>
            </Container>
        </Section>
    )
}