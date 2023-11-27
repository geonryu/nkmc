import { Container } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../global/heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

const Section = styled.section`
    
`;
export default function DiscBrake() {
    const [boardList, setBoardList] = useState<any[]>([]);

    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchBoardDatas = async() => {
            const boardQuery = query(
                collection(db, "discBrake"),
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
        <Section className="py-5 bg-gray-100">
            <Container>
                <Heading labelTxt={"Brake"} titTxt1={`Disc Brakes`} titTxt2={""} txtAlign={"center"}/>
                <Swiper
                        loop={true}
                        slidesPerView={2}
                        modules={[Navigation]}
                        className="brake"
                        speed={600}
                        spaceBetween={30}
                        navigation={
                            {
                                nextEl: ".nextBtn",
                                prevEl: ".prevBtn",
                            }
                        }
                        breakpoints={{
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                            992: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                        }}
                    >
                        {
                            boardList.map((item) => {
                                return(
                                    <SwiperSlide className="" key={item.tit}>
                                        <Link to={item.attached2} target="_blank">
                                            <img src={item.attached1} alt="" />
                                            <div className="text-center fw-bold mt-2">{item.tit}</div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
            </Container>
        </Section>
    )
}