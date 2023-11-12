import { useState } from "react";
import styled from "styled-components"

const Title = styled.div``;
const Label = styled.div``;
const Txt = styled.div``;

export default function Heading(props) {
    const [textAlign, setTextAlign] = useState("left");
    if(textAlign !== props.txtAlign) {
        setTextAlign(props.txtAlign);
    }

    return(
        <Title className={`text-${textAlign}`}>
            <Label className="fs-6 mb-1 fw-bold text-point">{props.labelTxt}</Label>
            <Txt className="fs-4 fw-bold">{props.titTxt1}{props.titTxt2 !== "" ? <br className="d-block d-md-none"/> : ""}{props.titTxt2}</Txt>
        </Title>
    )
}