import styled from "styled-components";
import LNB from "../../components/global/localNav";
import LocalNavVisual from "../../components/global/localNavVisual";
import MapKakao from "../../components/company/location/map";


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
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1.jpg?alt=media&token=13f379ec-4589-45af-aa64-e61b12f964be"}
                altText={"회사소개"}
            ></LocalNavVisual>
            <MapKakao></MapKakao>
        </Wrapper>
    )
}