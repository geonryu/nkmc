import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Navigation from "./nav";

const Div = styled.div`
    &.btn-menu-opn{
        overflow: hidden; width: 35px; height: 35px;
    }
`;
const Header = styled.header`
    position: fixed; top: 0; left: 0; width: 100%; z-index: 99999; transition: all 0.4s; height: 66px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    & > .container {height: 65px;}
`;
const HeaderWrap = styled.div`
    z-index: 20;
`;
const Logo = styled.h1`
`;
const BtnNavOpen = styled.button`
    width: 100%;height: 100%;border: 0;padding: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;transition: all 0.3s; font-size: 0;
    &.active{transform: rotate(180deg);}
    &.active span:first-child{margin: 0;}
    &.active span::before{margin: 0; width: 22px; height: 3.6px;}
    &.active span::after{margin: 0; width: 22px; height: 3.6px;}
    &.active span:nth-child(1)::before{transform: translate(11px, 1.8px) rotate(-45deg);}
    &.active span:nth-child(1)::after{transform: translate(-11px, 1.8px) rotate(-45deg);}
    &.active span:nth-child(2)::before{transform: translate(11px, -1.8px) rotate(45deg);}
    &.active span:nth-child(2)::after{transform: translate(-11px, -1.8px) rotate(45deg);}
`;
const InBtnSpan = styled.span`
    display: flex; transition: all 0.3s;
    &:first-child{
        margin-bottom: 5px;
    }
    &::before{content: ''; display: block; width: 5px; height: 5px; background-color: #fff; transition: all 0.3s; margin-right: 5px;}
    &::after{content: ''; display: block; width: 5px; height: 5px; background-color: #fff; transition: all 0.3s;}
`;

export default function GlobalHeader() {
    const [navBtn, setNavBtn] = useState("");
    const [headerStatus, setHeaderStatus] = useState(false);

    const onClickNavBtn = () => {
        navBtn === "" ? setNavBtn("active") : setNavBtn("");
        setHeaderStatus(!headerStatus);
        console.log(headerStatus);
    }
    const onMouseLeave = () => {
        setHeaderStatus(false);
    }
    return (
        <Header onMouseLeave={onMouseLeave} className={`${headerStatus ? "extend" : ""} border-bottom d-flex align-itmes-lg-start`}>
            <Container className="position-relative">
                <HeaderWrap className="bg-lg-none h-100 d-flex justify-content-between align-items-center position-relative">
                    <Col xs={5} md={3} lg={2} className="h-100">
                        {/* <Logo className="h-100 py-2 d-flex align-items-center"><Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flogo.svg?alt=media&token=808a9900-9114-4db6-bb08-70a6a265501d" alt="남광전기" /></Link></Logo> */}
                        <Logo className="h-100 py-2 d-flex align-items-center"><Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flogo-w.svg?alt=media&token=5332c4ee-44ad-4d6d-9d6c-9b915fae8d3a" alt="남광전기" /></Link></Logo>
                    </Col>
                    <Div className="btn-menu-opn">
                        <BtnNavOpen onClick={onClickNavBtn} className={headerStatus ? "active" : ""}>
                            <InBtnSpan>메뉴</InBtnSpan>
                            <InBtnSpan>열기</InBtnSpan>
                        </BtnNavOpen>
                    </Div>
                </HeaderWrap>
                <Navigation navStatus={headerStatus} headerStatus={setHeaderStatus}/>
            </Container>
        </Header>
    )
}