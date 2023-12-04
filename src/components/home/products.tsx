import { Container } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";

const Section = styled.section`
    position: relative;
    z-index: 1;
`;
const Items = styled.div``;
const Item = styled.div``;

export default function Products() {
    return(
        <Section className="py-5 bg-dark">
            <Container className="py-5">
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-md-between mb-5">
                    <div className="col col-12 col-md-6"><Heading labelTxt={"Product"} titTxt1={`We are the company specialized in`} titTxt2={" electric cluth and brake"} txtAlign={"left"}/></div>
                    <div>
                        <DefaultButton content={"Explorer"} type={"to"} theme={"light"} to={"/company/about"} />
                    </div>
                </div>
                <Items>
                    <Item className="p-3 p-md-5 rounded-4 border mb-3"></Item>
                    <Item className="p-3 p-md-5 rounded-4 border mb-3"></Item>
                    <Item className="p-3 p-md-5 rounded-4 border mb-3"></Item>
                    <Item className="p-3 p-md-5 rounded-4 border mb-3"></Item>
                </Items>
            </Container>
        </Section>
    )
}