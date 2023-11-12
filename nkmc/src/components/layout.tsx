import styled from "styled-components"
import GlobalHeader from "./global/header";
import { Outlet } from "react-router-dom";
import GlobalFooter from "./global/footer";
import { useState } from "react";

const Wrapper = styled.div`
    max-width: 1920px; margin: 0 auto;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function Layout() {
    
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Main>
                <Outlet />
            </Main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}