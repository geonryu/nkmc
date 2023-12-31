import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

const GlobalNavigation = styled.nav`
    position: fixed; width: 100%; height: 100%; top: 0; left: -100%; padding-top: 60px; transition: left 0.2s; z-index: 10;
    &.extend{left: 0;}
`;
const GNB = styled.ul`
    padding: 0;
    & > li > .sub div a .subko{font-size: 14px; position: relative; overflow: hidden;}
    & > li > .sub div a .subko::before{content: '';display: block; width: 4px; height: 4px; background-color: #8fc63f; border-radius: 50%; transition: all 0.3s; position: absolute; top: 50%; left: 0; transform: translate(-4px, -50%);}
    & > li > .sub div a .subko span{transition: transform 0.2s; display: block;}
`;
const Navi = styled.li`
    &.active svg {
        transform: rotate(0);
    }
`;
const Ref = styled.div``;
const SubNavi = styled.div`
    display: none;
    overflow: hidden;
    transition: all 0.2s
    transition-delay: 0.02s;
`;
const Arrow = styled.svg`
    height: 25px; transform: rotate(180deg);
`;

export default function Navigation(props: any) {
    
    const siteMap = [
        {
            title : {en: "COMPANY", ko: "회사소개", key: "nav1",}, 
            sub : [
                {subtitle: "About Us", to: "/company/about", key: "nav1-1", ko: "회사소개",},
                {subtitle: "History", to: "/company/companyHistory", key: "nav1-2", ko: "회사연혁",},
                {subtitle: "Location", to: "/company/location", key: "nav1-3", ko: "오시는 길",},
            ]
        },
        {
            title : {en: "PRODUCT", ko: "제품", key: "nav2",}, 
            sub : [
                {subtitle: "Clutch & Brake", to: "/product/clutchBrake", key: "nav2-1", ko: "클러치&브레이크",},
                {subtitle: "Wind Power", to: "/product/windPower", key: "nav2-2", ko: "풍력발전",},
            ]
        },
        {
            title : {en: "BOARD", ko: "게시판", key: "nav3",}, 
            sub : [
                {subtitle: "Notice", to: "/board/notice", key: "nav3-1", ko: "공지사항",},
                {subtitle: "Download", to: "/board/download", key: "nav3-2", ko: "게시판",},
            ]
        },
        {
            title : {en: "CONTACT", ko: "문의하기", key: "nav4",}, 
            sub : [
                {subtitle: "Contact", to: "/contact/contactus", key: "nav4-1", ko: "문의하기",},
                // {subtitle: "Online Shop", to: "/contact/onlineShop", key: "nav4-2", ko: "온라인샵",},
            ]
        },
    ];

    const [isClick, setIsClick] = useState(false);
    const [extendSub, setExtendSub] = useState("notExtend");

    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const idx = e.currentTarget.getAttribute("data-idx");
        setExtendSub(String(idx));
    }
    const onMouseEnter = () => {
        props.headerStatus(true);
        setExtendSub("extend");
    } 
    const onClickSub = () => {
        props.headerStatus(false);
        setIsClick(false);
        setExtendSub("notExtend");
    }

    useEffect(() => {
        if(props.navStatus) {
            setIsClick(true);
            setExtendSub("extend");
        } else{
            setIsClick(false);
            setExtendSub("notExtend");
        }
    }, [props.navStatus]);

    return (
        <GlobalNavigation className={`${props.theme === "dark" ? "bg-dark-2" : "bg-white"} ${isClick ? "extend" : ""}`} onMouseEnter={onMouseEnter}>
            <Container className="pt-3 pt-lg-0">
                <GNB className="gnb border-top p-0">
                    {siteMap.map((list, i) => {
                        return (
                            <Navi key={list.title.key} onClick={onClick} data-idx={i} className={`border-bottom mx-xl-3 ${Number(extendSub) === i ? "active" : ""}`}>
                                <Ref onClick={onMouseEnter}>
                                    <button className="d-block w-100 text-start py-2">
                                        <div className="ko fs-6 fw-bold text-point d-lg-none">{list.title.ko}</div>
                                        <div className={`en ${props.theme === "dark" ? "text-white" : "text-gray-800"} fw-bold fs-4 d-flex align-items-center justify-content-between`}>
                                            {list.title.en}
                                            <div className="arr">
                                                <Arrow xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#8FC63F" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </Arrow>
                                            </div>
                                        </div>
                                    </button>
                                </Ref>
                                {/* style={{height: extendSub === "extend" ? "126px" : 0}} */}
                                <SubNavi onClick={onClickSub}  className={`sub ${Number(extendSub) === i ? "d-block" : "d-none"}`} >
                                    {list.sub.map((item) => {
                                        return (
                                            <div key={item.key} className="sub-item">
                                                <Link to={item.to} className="d-block fs-3 fw-bold px-3 px-xl-0 py-2">
                                                    <div className="subko text-point"><span>{item.ko}</span></div>
                                                    <div className={props.theme === "dark" ? "text-white" : "text-gray-800"}>{item.subtitle}</div>
                                                </Link>
                                            </div>
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