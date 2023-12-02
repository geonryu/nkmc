import { Container } from "react-bootstrap";
import styled from "styled-components"

const Section = styled.section`
    position: relative;
    &::after{content: ''; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 200%; background: radial-gradient(ellipse at center left, #a2f02e22, transparent, transparent); background-size: cover background-repeat: no-repeat;  background-position: top left;}
    &::before{content: ''; display: block; position: absolute; top: 0; right: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at top right, #6900FF44, transparent, transparent); background-size: cover background-repeat: no-repeat;  background-position: top left;}
`;

export default function Introduction () {
    return(
        <Section className="py-5">
            <Container className="py-5">
                <div className="py-5 text-center text-white fs-1 fw-bold">The company specializing<br/>in electric clutch and brake</div>
            </Container>
        </Section>
    )
}