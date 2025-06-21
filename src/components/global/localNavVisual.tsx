import styled from "styled-components"


const Visual = styled.div``;

export default function LocalNavVisual(props: any) {
    return (
        <Visual>
            <img src={props.imgSrcM} alt={props.altText} className="d-block d-md-none" />
            <img src={props.imgSrc} alt={props.altText} className="d-none d-md-block" />
        </Visual>
    )
}