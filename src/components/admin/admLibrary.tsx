import { Button, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import Pop from "./pop";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Section = styled.section``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;

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

export interface BoardData {
    tit : string;
    content : string;
    attached1 : string;
    attached2 : string;
    attached3 : string;
    attached4 : string;
    attached1Name : string;
    attached2Name : string;
    attached3Name : string;
    attached4Name : string;
}

export default function AdminLibrary() {
    const [activePop, setActivePop] = useState(false);
    const [popType, setPopType] = useState("null")
    const [boardList, setBoardList] = useState<BoardContent[]>([]);
    const [printPop, setPrintPop] = useState<BoardData[]>([]) || null;

    const ClickToWrite = () => {
        setActivePop(true);
        setPopType("create")
    }
    const ClickToRead = (data: any) => {
        setActivePop(true);
        setPopType("read");
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
        }
        setPrintPop(datas);
    }
    
    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchBoardDatas = async() => {
            const boardQuery = query(
                collection(db, "library"),
                orderBy("createdAt", "desc"),//날짜최신순
                // limit(5)
            );
    
            unsubscribe = await onSnapshot(boardQuery, (snapshot) => {
                const boardData = snapshot.docs.map((doc) => {
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
    return(
        <Section className="py-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="fw-bold mb-3">자료실</h3>
                    <Button className="bg-point border-0 fw-bold" onClick={ClickToWrite}>글쓰기</Button>
                </div>
                <Table className="table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성일</th>
                            <th scope="col">상태</th>
                        </tr>
                    </thead>
                    <Tbody>
                        {boardList.map((item, i) => {
                            const crtAt = new Date(item.createdAt);
                            return (
                                <Tr onClick={() => ClickToRead(item)} key={item.id} data-ref={item.id}>
                                    <Th scope="row" className="col-1">{i+1}</Th>
                                    <Td className="col-7 text-truncate">{item.tit}</Td>
                                    <Td className="col-2">{`${crtAt.getFullYear()}. ${crtAt.getMonth()+1}. ${crtAt.getDate()}`}</Td>
                                    <Td className="col-2"><Button className="bg-gray-300 border text-black">삭제</Button></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Container>
            {activePop === true ? <Pop type={popType} setActivePop={setActivePop} category={"library"} printData={printPop}></Pop> : null}
        </Section>
    )
}