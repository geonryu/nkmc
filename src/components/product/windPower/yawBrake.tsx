import styled from "styled-components"
import Heading from "../../global/heading";
import { Container } from "react-bootstrap";

const Section = styled.section`overflow: hidden`;
const Thumb1 = styled.div``;
const Thumb2 = styled.div`
    transform: translate(20%, 40%);
    @media (min-width: 768px) {
        transform: translate(60%, 40%);
    }
    @media (min-width: 992px) {
        transform: translate(20%, 40%);
    }
`;
const Txt = styled.div`
    &::before{
        content: '';
        display: block;
        width: 50px;
        height: 6px;
        margin-bottom: 5px;
        background-color: #8FC63F;
    }
    
    & .tit{
        font-weight: 900;
        font-size: 2rem;
        line-height: 1.1;
    }


    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(0, -50%);
        & .tit{font-size: 2rem;}
    }
    @media (min-width: 992px) {
        & .tit{font-size: 2.5rem;}
    }
    @media (min-width: 1200px) {
        & .tit{font-size: 4rem;}
    }
`;

export default function YawBrake() {
    return (
        <Section className="py-5 bg-gray-100">
            <Heading labelTxt={"Yaw Brake"} titTxt1={`Best Yaw & Rotor Brake`} titTxt2={"Leader In Korea"} txtAlign={"center"}/>
            <Container>
                <div className="position-relative d-flex justify-content-between align-items-center py-5">
                    <Thumb1 className="col col-5 col-md-4"><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fyawbrake.png?alt=media&token=f3773534-e0d4-41f7-8946-c268967475cb" alt="" /></Thumb1>
                    <Thumb2 className="col col-5 d-none d-md-block"><img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fyawbrake-side.png?alt=media&token=92fcaa75-19cd-415c-914c-eb9f658a3947" alt="" /></Thumb2>
                    <Txt className="col-6">
                        <div className="fw-bold tit text-gray-700">
                            YAW<br className="d-none d-md-block"/>BRAKE
                        </div>
                        <div className="txt fs-4 mt-3">
                            Crafted with 50 years<br className="d-none d-md-block"/>of accumulated expertise,<br className="d-none d-md-block"/>a testament to reliable<br className="d-none d-md-block"/>innovation.
                        </div>
                    </Txt>
                </div>
            </Container>
        </Section>
    )
}