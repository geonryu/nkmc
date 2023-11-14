import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Footer = styled.footer`
    border-top: 2px solid #8fc63f;
`;
const FooterWrap = styled.div`
    z-index: 20;
`;
const FLogo = styled.h2`
`;
const Address = styled.address`
    text-align: center;
    @media (min-width: 768px){
        text-align: left;
    }
`;
const FMenu = styled.ul`
    text-align: center;
    @media (min-width: 768px){
        text-align: left;
    }
`;
const Copyright = styled.p`
    text-align: center;
    @media (min-width: 768px){
        text-align: right;
    }
`;

export default function GlobalFooter() {

    return (
        <Footer className="bg-white py-5">
            <Container className="h-100 position-relative">
                <FooterWrap className="bg-white">
                    <Row>
                        <Col xs={4} md={3} lg={2} className="h-100 mx-auto mx-md-0">
                            <FLogo className="h-100 py-2 d-flex align-items-center"><Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flogo-mono.svg?alt=media&token=c83fdf9d-969e-4306-b855-06d8f8e997e9" alt="" /></Link></FLogo>
                        </Col>
                        <Col xs={12} md={9} lg={"auto"} className="mt-2 ms-lg-auto">
                            <Address>Address :　19, Eulsukdo-daero 569beon-gil, Saha-gu, Busan, <br className="d-none d-sm-block d-md-none"/>Republic of Korea</Address>
                            <FMenu className="p-0 d-flex justify-content-center justify-content-md-start">
                                <li className="fw-bold me-3 me-md-5">Tel. +82(0)51-201-3600</li>
                                <li className="fw-bold ">Fax +82(0)51-201-3604</li>
                            </FMenu>
                        </Col>
                    </Row>
                    <Copyright className="pt-3 border-top text-gray-500 fs-6">Copyright C 2023 Nam Kwang Electric Corp. All Rights Reserved</Copyright>
                </FooterWrap>
            </Container>
        </Footer>
    )
}