import { Button, Container } from "react-bootstrap";
import styled from "styled-components"
import Pop from "./pop";

const Section = styled.section``;

export default function AdminProduct() {
    return(
        <Section className="py-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="fw-bold mb-3">제품 관리</h3>
                    <Button className="bg-point border-0 fw-bold">제품 추가</Button>
                </div>
            </Container>
            
            <Pop></Pop>
        </Section>
    )
}