import styled from "styled-components"

const PillButton = styled.button`
    border: 1px solid #8fc63f;
    transition: all 0.2s;
    color: #8fc63f;
    &:hover{
        color: #fff;
        background-color: #8fc63f;
    }
`;

export default function DefaultButton(props) {
    return (
        <PillButton className="rounded-pill py-2 px-5 mt-3 fw-bold">{props.content}</PillButton>
    )
}