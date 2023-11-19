import styled from "styled-components"
import AdminNav from "./adminNav";
import { Outlet } from "react-router-dom";

const Wrap = styled.section``;

export default function Admin() {
    return(
        <Wrap>
            <AdminNav></AdminNav>
            <Outlet />
        </Wrap>
    )
}