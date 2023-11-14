import {  Container } from "react-bootstrap"
import styled from "styled-components"
import Heading from "../../global/heading"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from "aos";

const Section = styled.section`
`
const Wrap = styled.div`
    background-image: url(https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fceomessage.jpeg?alt=media&token=ae4142b7-4d3a-4048-b249-b14bf782d986);
    overflow: hidden;
    & .layer{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.65);
    }
`;

export default function CEO() {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <Section className="py-5">
            <Container>
                <Wrap className="rounded">
                    <div className="layer px-3 py-5 p-md-5">
                        <Heading labelTxt={"CEO Message"} titTxt1={`대표이사 인사말`} titTxt2={""} txtAlign={"left"} theme={"white"} className={"mb-5"}/>
                        <div className="textbody text-white fs-5 pt-5">
                            전자 브레이크, 클러치의 이름조차 생소하게 들리던 시절부터 오늘날의 남광전기가 있기까지 끊임없이 아껴주신 고객 여러분께 홈페이지를 통하여 감사의 인사를
                            드립니다.
                            <br /><br />
                            그동안 많은 시련과 어려움 속에서도 신제품 개발과 보다 나은 품질에 모든 노력을 경주하여 오늘날 자타가 인정하는 국내 최고의 브레이크 업체로 성장하였습니다.
                            점점 치열해지는 국내외 여건 속에서도 세계로 뻗어가는 첨단 한국의 선발주자로서 오늘날 국내시장은 물론이고 외국의 유수의 전자브레이크 시장뿐 아니라 새롭게 시작한
                            풍력 브레이크 시장에서 세계 최고의 기업으로 거듭나겠습니다.
                            <br /><br />
                            감사합니다.
                            <br /><br />
                            <b>남광전기 대표 이현호</b>
                        </div>
                    </div>
                </Wrap>
            </Container>
        </Section>
    )
}