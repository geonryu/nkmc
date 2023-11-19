import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Heading from "../global/heading";

const Section = styled.section``;

export interface state {
    tit : string;
    content : string;
    attached1 : string;
    attached2 : string;
    attached3 : string;
    attached4 : string;
    attached1Name : string;
    attached2Name : string;
    attached3Name : string;
    attached4Name : string;
    createdAt : number;
}

export default function BoardContent() {
    const { state, pathname } = useLocation();
    const crtAt = new Date(state.createdAt);
    return(
        <Section className="py-5">
            <Container>
                <div className="border-bottom pb-5">
                    <Heading labelTxt={`${pathname.includes("notice") ? "Notice" : "Download"}`} titTxt1={`${pathname.includes("notice") ? "공지사항" : "자료실"}`} titTxt2={""} txtAlign={"center"}/>
                    <div className="fs-3 fw-bold text-center mt-3">{state.tit}</div>
                    <div className="fw-bold text-center mb-3 mt-2 text-gray-600">{`${crtAt.getFullYear()}.${crtAt.getMonth()+1}.${crtAt.getDate()}`}</div>
                </div>
                <div className="py-5 px-3">
                    <div className="mb-3 pb-3 border-bottom">
                        {state.attached1 ? <img className="mx-auto mb-5 col-10" src={state.attached1} alt={state.attached1Name} /> : null}
                        {state.content}
                    </div>
                    <div className="py-3">
                        {state.attached2 ? "첨부파일 : " + <a className="text-primary text-decoration-undeline" href={state.attached2} download target="_blank">{state.attached2Name}</a> : null}
                        {state.attached3 ? "첨부파일 : " + <a className="text-primary text-decoration-undeline" href={state.attached3} download target="_blank">{state.attached3Name}</a> : null}
                        {state.attached4 ? "첨부파일 : " + <a className="text-primary text-decoration-undeline" href={state.attached4} download target="_blank">{state.attached4Name}</a> : null}
                    </div>
                </div>
            </Container>
        </Section>
    )
}