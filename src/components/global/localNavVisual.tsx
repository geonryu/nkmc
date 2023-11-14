import styled from "styled-components"


const Visual = styled.div`
    background-position: center center;
    background-size: cover;
`;

export default function LocalNavVisual(props: any) {
    return (
        <Visual><img src={props.imgSrc} alt={props.altText} /></Visual>
    )
}