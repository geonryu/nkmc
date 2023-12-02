import { Container } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";

const Partener = styled.div`
`;

const PartenerList = styled.div`
    filter : saturate(0) brightness(3);
`;

export default function Parteners() {
    return (
        <Partener className="py-5 bg-gray-100 bg-dark">
            <Container>
                <Heading labelTxt={"Our Partners"} titTxt1={""} titTxt2={""} txtAlign={"center"}/>
                <PartenerList className="d-flex mt-3 flex-wrap justify-content-center align-items-center">
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fpartners-lgelectronics.png?alt=media&token=2e2f1a71-6515-4970-a7ad-3e4864372214" alt="" /></div>
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fparteners-unison.png?alt=media&token=316f6d64-8419-45c5-aa7e-1cea88f9a1d1" alt="" /></div>
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fparteners-kospo.png?alt=media&token=e101f5f9-a20e-4639-b0fa-e89e1c3e29d3" alt="" /></div>
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fpartners-hyundai.png?alt=media&token=13518fb6-ded6-4627-98a6-1718cbf2d041" alt="" /></div>
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fpartners-lscable.png?alt=media&token=868552e6-99d8-4ccb-be80-9844c41de6c6" alt="" /></div>
                    <div className="col col-4 col-lg-2 px-2 px-sm-3 px-md-4 py-2 d-flex align-items-center"><img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fpartners-samsung.png?alt=media&token=5371c19c-56aa-495a-a969-6542808e4738" alt="" /></div>
                </PartenerList>
            </Container>
        </Partener>
    )
}