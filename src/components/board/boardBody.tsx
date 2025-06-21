import { Container } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Section = styled.section``;
const Table = styled.div``;
const Thead = styled.div``;
const Tbody = styled.div``;
const Tr = styled.div``;
const Th = styled.div``;
const Td = styled.div``;

export interface BoardContent {
    id: string;
    tit: string;
    content: string;
    createdAt: number;
    attached1: any;
    attached2: any;
    attached3: any;
    attached4: any;
}
export default function BoardBody(props: any) {
    const [boardList, setBoardList] = useState<BoardContent[]>([]);
    const navigate = useNavigate();

    const onClick = (data: any) => {
        // setActivePop(true);
        // setPopType("read");
        const datas: any = {
            tit : data.tit,
            content : data.content,
            attached1 : data.attached1,
            attached1Name : data.attached1Name,
            attached2 : data.attached2,
            attached2Name : data.attached2Name,
            attached3 : data.attached3,
            attached3Name : data.attached3Name,
            attached4 : data.attached4,
            attached4Name : data.attached4Name,
            createdAt : data.createdAt
        }
        navigate(`/board/${props.catecory === "notice" ? "notice" : "download"}/boardContent`, {state : datas});
    }

    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchBoardDatas = async() => {
            const boardQuery = query(
                collection(db, props.category),
                orderBy("createdAt", "desc"),//날짜최신순
                // limit(5)
            );
    
            unsubscribe = await onSnapshot(boardQuery, (snapshot:any) => {
                const boardData = snapshot.docs.map((doc:any) => {
                    const { id, createdAt, tit, content, attached1, attached1Name, attached2, attached2Name, attached3, attached3Name, attached4, attached4Name } = doc.data()
                    return {
                        id, createdAt, tit, content, attached1, attached1Name, attached2, attached2Name, attached3, attached3Name, attached4, attached4Name
                        // id: doc.id,
                    }
                });
                setBoardList(boardData);
            });
        }
        fetchBoardDatas();
        return () => {
            unsubscribe && unsubscribe();
        }
    }, []);

    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={`${props.category === "notice" ? "Notice" : "Download"}`} titTxt1={`${props.category === "notice" ? "공지사항" : "자료실"}`} titTxt2={""} txtAlign={"center"}/>
                <Table className="col-12 border-top border-bottom">
                    <Thead className="border-bottom border-2 border-black">
                        <Th className="p-2 d-flex">
                            <Td className="me-3 col-3 col-md-2">
                                <div className="px-2">Date</div>
                            </Td>
                            <Td className="col-9 col-md-10">
                                <div className="px-2">Content</div >
                            </Td>
                        </Th>
                    </Thead>
                    <Tbody className="">
                        {boardList.map((item) => {
                            const crtAt = new Date(item.createdAt);
                            return (
                                <Tr onClick={() => onClick(item)} className="border-bottom py-2" key={item.id} data-ref={item.id}>
                                    <button className="d-flex w-100 align-items-center">
                                        <Td className="me-3 col-3 col-md-2 p-2">
                                            <div className="date rounded-4 p-1 d-flex flex-wrap justify-content-center text-center bg-gray-100 text-gray-600">
                                                <div className="date fs-2 fw-bold w-100 text-black">{crtAt.getDate()}</div>
                                                <div className="year fw-bold">{crtAt.getFullYear()}</div>.
                                                <div className="month fw-bold">{crtAt.getMonth()+1}</div>
                                            </div>
                                        </Td>
                                        <Td className="d-flex justify-content-center flex-column w-100 text-start">
                                            <div className="fw-bold fs-4">{item.tit}</div>
                                            <div className="mt-2">{item.content}</div>
                                        </Td>
                                    </button>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Container>
        </Section>
    )
}