import styled from "styled-components";
import Intro from "../../components/company/about/intro";
import LNB from "../../components/global/localNav";
import LocalNavVisual from "../../components/global/localNavVisual";
import CEO from "../../components/company/about/ceoMessage";
import MoreInformation from "../../components/company/about/moreinfo";


const Wrapper = styled.div`
`;

export default function Company() {
    return(
        <Wrapper>
            <LNB
                depth={[
                    {
                        tit: "Company",
                        to: "/company/about",
                    },
                    {
                        tit: "About Us",
                        to: "/company/about"
                    }
                ]}
                context1={"요브레이크 & 로터브레이크"}
                context2={"시장을 이끄는 글로벌 리더"}
                ></LNB>
            <LocalNavVisual 
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg.jpg?alt=media&token=1034bd7d-0aec-40ba-b9a5-96f97c4de2af"}
                imgSrcM={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Flocal-bg-m.jpg?alt=media&token=3cf59cb1-70d5-4695-96f7-f2522c1c53b5"}
                altText={"회사소개"}
            ></LocalNavVisual>
            <Intro></Intro>
            <CEO></CEO>
            <MoreInformation></MoreInformation>
        </Wrapper>
    )
}