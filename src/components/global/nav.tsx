import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

const GlobalNavigation = styled.nav`
    position: fixed; width: 100%; height: 100%; top: 0; left: -100%; padding-top: 60px; transition: left 0.2s; z-index: 10;
    background-color: #ffffff;
    &.extend{left: 0;}

    @media (min-width: 1200px) {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 0; z-index: 99999; width: unset;

        & .container{
            height: 100%;
        }
    }
`;
const GNB = styled.ul`
    padding: 0;
    @media (min-width: 1200px) {
        height: 100%; border: 0 !important;

        & > li{height: 100%; border-bottom: 2px solid rgba(0,0,0,0); border-bottom: 2px solid #fff !important;}
        & > li > div{height: 100%; min-width: max-content;}
        & > li > div button{height: 100%;}
        & > li > div .en{font-size: 1.25rem !important; width: 100%;}
        & > li:hover{border-bottom: 2px solid #8FC63F !important;}
        & > li > .sub{display: none;}
        & > li > .sub div{border: 0; height: 42px; display: flex; align-items: center; width: 100%;}
        & > li > .sub div a{font-size: 1rem !important; width: 100%;}
        & > li > .sub div a:hover{color: #8FC63F !important;}
    }
`;
const Navi = styled.li`
    &.active svg {
        transform: rotate(0);
    }
`;
const Ref = styled.div``;
const SubNavi = styled.div`
    display: none;
`;
const Arrow = styled.svg`
    height: 25px; transform: rotate(180deg);
`;

export default function Navigation(props) {
    
    const siteMap = [
        {
            title : {en: "COMPANY", ko: "회사소개", key: "nav1",}, 
            sub : [
                {subtitle: "About Us", to: "/", key: "nav1-1",},
                {subtitle: "History", to: "/", key: "nav1-2",},
                {subtitle: "Location", to: "/", key: "nav1-3",},
            ]
        },
        {
            title : {en: "PRODUCT", ko: "제품", key: "nav2",}, 
            sub : [
                {subtitle: "Clutch & Brake", to: "/", key: "nav2-1",},
                {subtitle: "Wind Power", to: "/", key: "nav2-2",},
            ]
        },
        {
            title : {en: "News & Notice", ko: "공지사항", key: "nav3",}, 
            sub : [
                {subtitle: "News", to: "/", key: "nav3-1",},
                {subtitle: "Notice", to: "/", key: "nav3-2",},
            ]
        },
        {
            title : {en: "Contact Us", ko: "문의하기", key: "nav4",}, 
            sub : [
                {subtitle: "Contact", to: "/", key: "nav4-1",},
                {subtitle: "Online Shop", to: "/", key: "nav4-2",},
            ]
        },
    ];

    const [isClick, setIsClick] = useState(false);
    const [extendSub, setExtendSub] = useState("notExtend");

    const onClick = (e) => {
        const idx = e.currentTarget.getAttribute("data-idx");
        setExtendSub(idx);
    }
    const onMouseEnter = (e) => {
        props.headerStatus(true);
        setExtendSub("extend");
    } 

    useEffect(() => {
        props.navStatus !== "" ? setIsClick(true) : setIsClick(false);
        props.navStatus === "" ? setIsClick(false) : setExtendSub(null);
    }, [props.navStatus])
    return (
        <GlobalNavigation className={isClick ? "extend" : ""} onMouseEnter={onMouseEnter}>
            <Container className="pt-3 pt-lg-0">
                <GNB className="gnb border-top p-0 d-xl-flex justify-content-between">
                    {siteMap.map((list, i) => {
                        return (
                            <Navi key={list.title.key} onClick={onClick} data-idx={i} className={`border-bottom mx-xl-3 ${Number(extendSub) === i ? "active" : ""}`}>
                                <Ref>
                                    <button className="d-block w-100 text-start py-2 d-xl-flex justify-content-center align-items-center">
                                        <div className="ko fs-6 fw-bold text-point d-lg-none">{list.title.ko}</div>
                                        <div className="en fw-bold fs-4 d-flex align-items-center justify-content-between">
                                            {list.title.en}
                                            <div className="arr d-lg-none">
                                                <Arrow xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#8FC63F" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </Arrow>
                                            </div>
                                        </div>
                                    </button>
                                </Ref>
                                <SubNavi className={`sub ${Number(extendSub) === i || extendSub === "extend" ? "d-block" : "d-none"}`} style={{height: extendSub === "extend" ? "126px" : 0}}>
                                    {list.sub.map((item, j) => {
                                        return (
                                            <div key={item.key} className="sub-item"><Link to={item.to} className="d-block fs-3 fw-bold text-gray-800 px-3 px-xl-0 py-2">{item.subtitle}</Link></div>
                                        )//second return
                                    })}
                                </SubNavi>
                            </Navi>
                        )//first return
                    })}
                </GNB>
            </Container>
        </GlobalNavigation>
    )
}