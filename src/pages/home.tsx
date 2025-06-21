import styled from "styled-components";
import Contact from "../components/home/contact";
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
            {/* <Parteners></Parteners> */}
        </Wrapper>
    )
}