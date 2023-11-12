import styled from "styled-components";
import MainVisual from "../home/mainVisual";
import Intro from "../home/intro";
import Product from "../home/product";
import Contact from "../home/contact";
import Parteners from "../home/parteners";

const Wrapper = styled.div`
`;

export default function Home() {
    return(
        <Wrapper>
            <MainVisual></MainVisual>
            <Intro></Intro>
            <Product></Product>
            <Contact></Contact>
            <Parteners></Parteners>
        </Wrapper>
    )
}