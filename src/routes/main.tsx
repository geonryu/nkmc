import styled from "styled-components";
import GlobalHeader from "../components/global/header";
import { Outlet } from "react-router-dom";
import GlobalFooter from "../components/global/footer";

const Wrapper = styled.div`
    max-width: 1920px; margin: 0 auto;
`;
const Main = styled.main`
    padding-top: 65px;
`;


export default function Mainpage() {
    return (
        <Wrapper className="bg-dark-2">
            <GlobalHeader theme="dark"></GlobalHeader>
            <Main>
                <Outlet />
            </Main>
            <GlobalFooter theme="dark"></GlobalFooter>
        </Wrapper>
    )
}