import styled from "styled-components";
import LNB from "../../components/global/localNav";
import LocalNavVisual from "../../components/global/localNavVisual";
import BoardBody from "../../components/board/boardBody";


const Wrapper = styled.div`
`;

export default function Download() {
    return(
        <Wrapper>
            <LNB
                depth={[
                    {
                        tit: "Board",
                        to: "/board/notice",
                    },
                    {
                        tit: "Download",
                        to: "/board/download"
                    }
                ]}
                context1={"요브레이크 & 로터브레이크"}
                context2={"시장을 이끄는 글로벌 리더"}
                ></LNB>
            <LocalNavVisual 
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/assets%2Fimages%2Fmainvisual1.jpg?alt=media&token=13f379ec-4589-45af-aa64-e61b12f964be"}
                altText={"회사소개"}
            ></LocalNavVisual>
            <BoardBody category={"library"}></BoardBody>
        </Wrapper>
    )
}