import styled from "styled-components";
import MainVisual from "../components/home/mainVisual";
import Intro from "../components/home/intro";
import Product from "../components/home/product";
import Contact from "../components/home/contact";
import Parteners from "../components/home/parteners";
import Introduction from "../components/home/introduction";
import Products from "../components/home/products";

const Wrapper = styled.div`
`;

export default function Home() {
    return(
        <Wrapper className='text-white'>
            {/* <MainVisual></MainVisual> */}
            <Introduction></Introduction>
            {/* <Intro></Intro> */}
            {/* <Product></Product> */}
            <Products></Products>
            <Contact></Contact>
            <Parteners></Parteners>
        </Wrapper>
    )
}