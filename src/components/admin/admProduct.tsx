import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styled from "styled-components"
import Pop from "./pop";

const Section = styled.section``;

export default function AdminProduct() {
    const [activePop, setActivePop] = useState(false);
    const [popType, setPopType] = useState("null");
    const [printPop] = useState<any[]>([]) || null;
    const [category, setCategory] = useState("null");


    const ClickToWrite = (e :React.MouseEvent<HTMLButtonElement>) => {
        setActivePop(true);
        setPopType("create");

        const cate = e.currentTarget.name;
        setCategory(cate);
    }
    
    return(
        <Section className="py-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="fw-bold mb-3">제품 관리</h3>
                    <Button type="button" className="bg-point border-0 fw-bold me-2 ms-auto" name="clutch" onClick={ClickToWrite}>클러치</Button>
                    <Button type="button" className="bg-point border-0 fw-bold me-2" name="brake" onClick={ClickToWrite}>브레이크</Button>
                    <Button type="button" className="bg-point border-0 fw-bold me-2" name="brakeAndClutch" onClick={ClickToWrite}>브레이크클러치</Button>
                    <Button type="button" className="bg-point border-0 fw-bold me-2" name="discBrake" onClick={ClickToWrite}>디스크브레이크</Button>
                </div>

            </Container>
            {activePop === true ? <Pop type={popType} setActivePop={setActivePop} category={category} printData={printPop}></Pop> : null}
        </Section>
    )
}