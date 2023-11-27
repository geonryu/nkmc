import styled from "styled-components";
import MileStone from "../../components/company/history/milestone";
import Performance from "../../components/company/history/performance";
import LNB from "../../components/global/localNav";
import LocalNavVisual from "../../components/global/localNavVisual";
import Certification from "../../components/company/history/certification";

const Wrapper = styled.div`
`;

export default function CompanyHistory() {
    return(
        <Wrapper>
            <LNB
                depth={[
                    {
                        tit: "Company",
                        to: "/company/about",
                    },
                    {
                        tit: "Our History",
                        to: "/company/companyHistory"
                    }
                ]}
                context1={"남광전기가"}
                context2={"걸어온 길"}
                ></LNB>
            <LocalNavVisual 
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1.jpg?alt=media&token=13f379ec-4589-45af-aa64-e61b12f964be"}
                altText={"회사연혁"}
            ></LocalNavVisual>
            <MileStone></MileStone>
            <Certification></Certification>
            <Performance></Performance>
        </Wrapper>
    )
}