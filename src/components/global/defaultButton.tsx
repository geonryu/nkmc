import { Link } from "react-router-dom";
import styled from "styled-components"

const PillButton = styled.div`
    display: inline-block;
    
    &.light{
        border: 1px solid #8fc63f;
        transition: all 0.2s;
        color: #8fc63f;
    }
    &.dark{
        background-color: #fff;
        color: #8fc63f;

    }
    &:hover{
        color: #fff;
        background-color: #8fc63f;
    }
`;

export default function DefaultButton(props: any) {
    return (
        <PillButton className={`mt-3 rounded-pill py-2 px-5 mt-3 fw-bold ${props.theme}`}>
            { 
            props.type === "to"
            ? 
            <Link to={props.to} >{props.content}</Link>
            :
            <button type="button">{props.content}</button>
            }
        </PillButton>
    )
}