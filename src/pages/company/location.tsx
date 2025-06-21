import styled from "styled-components";
import LNB from "../../components/global/localNav";
import LocalNavVisual from "../../components/global/localNavVisual";
import MapKakao from "../../components/company/location/map";
import VariousContact from "../../components/company/location/variousContact";

const Wrapper = styled.div`
`;

export default function Location() {
    return(
        <Wrapper>
            <LNB
                depth={[
                    {
                        tit: "Company",
                        to: "/company/about",
                    },
                    {
                        tit: "Location",
                        to: "/company/location"
                    }
                ]}
                context1={"오시는 길"}
                context2={""}
                ></LNB>
            <LocalNavVisual 
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg.jpg?alt=media&token=1034bd7d-0aec-40ba-b9a5-96f97c4de2af"}
                imgSrcM={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg-m.jpg?alt=media&token=3cf59cb1-70d5-4695-96f7-f2522c1c53b5"}
                altText={"회사소개"}
            ></LocalNavVisual>
            <MapKakao></MapKakao>
            <VariousContact></VariousContact>
        </Wrapper>
    )
}