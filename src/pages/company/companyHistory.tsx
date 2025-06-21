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
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg.jpg?alt=media&token=1034bd7d-0aec-40ba-b9a5-96f97c4de2af"}
                imgSrcM={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg-m.jpg?alt=media&token=3cf59cb1-70d5-4695-96f7-f2522c1c53b5"}
                altText={"회사소개"}
            ></LocalNavVisual>
            <MileStone></MileStone>
            <Certification></Certification>
            <Performance></Performance>
        </Wrapper>
    )
}