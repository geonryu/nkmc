import styled from "styled-components";
import MainVisual from "../components/home/mainVisual";
import Intro from "../components/home/intro";
import Product from "../components/home/product";
import Contact from "../components/home/contact";
import Parteners from "../components/home/parteners";

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