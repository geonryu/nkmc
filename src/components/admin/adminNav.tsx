import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"
const AdminNavi = styled.div``;
const Navi = styled.div``;

export default function AdminNav() {
    return(
        <AdminNavi className="bg-deep py-3">
            <Container className="d-flex">
                <Navi className="me-5 text-white fs-5 fw-bold"><Link to="/admin/adminProduct">제품</Link></Navi>
                <Navi className="me-5 text-white fs-5 fw-bold"><Link to="/admin/adminNotice">공지사항</Link></Navi>
                <Navi className="me-5 text-white fs-5 fw-bold"><Link to="/admin/adminLibrary">자료실</Link></Navi>
            </Container>
        </AdminNavi>
    )
}